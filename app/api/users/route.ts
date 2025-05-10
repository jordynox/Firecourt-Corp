import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hash } from 'bcrypt';
import { sendVerificationEmail } from '@/lib/email'; // Import the email utility

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check for existing user
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Generate a random verification token
    const verificationToken = Math.random().toString(36).substring(2); // Simple random token generator, replace with a more secure method

    // Create the user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        emailVerified: null, // Initially set to false
         // Store the verification token
      },
    });

    // Generate the verification URL
    const verificationUrl = `${process.env.BASE_URL}/api/verify-email?token=${verificationToken}`;

    // Send verification email
    await sendVerificationEmail(email, verificationUrl);

    // Return user data without password
    const { password: _,  ...userWithoutPassword } = user;

    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Error creating user' },
      { status: 500 }
    );
  }
}
