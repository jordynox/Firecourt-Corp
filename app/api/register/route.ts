import { prisma } from '@/lib/prisma';
import { sendVerificationEmail } from '@/lib/email';
import { hash } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid'; // for a better token

export async function POST(req: Request) {
  const { email, name, password } = await req.json();

  if (!email || !password || !name) {
    return Response.json({ error: 'Missing fields' }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return Response.json({ error: 'User already exists' }, { status: 400 });
  }

  const hashedPassword = await hash(password, 10);
  const user = await prisma.user.create({
    data: { email, name, password: hashedPassword },
  });

  const token = uuidv4();
  const expires = new Date(Date.now() + 1000 * 60 * 60); // 1 hour

  await prisma.verificationToken.create({
    data: {
      identifier: email,
      token,
      expires,
    },
  });

  const verifyUrl = `${process.env.BASE_URL}/api/verify-email?token=${token}`;

  await sendVerificationEmail(email, verifyUrl);

  return Response.json({ message: 'User created. Check your email!' });
}
