import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.json({ error: 'Missing token' }, { status: 400 });
  }

  const storedToken = await prisma.verificationToken.findFirst({
    where: { token },
  });
  

  if (!storedToken || storedToken.expires < new Date()) {
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 });
  }

  // Update the user to mark email as verified
  await prisma.user.update({
    where: { email: storedToken.identifier },
    data: { emailVerified: new Date() },
  });

  // Delete the used token
  await prisma.verificationToken.delete({
    where: { token },
  });

  return NextResponse.json({ message: 'Email verified successfully!' });
}
