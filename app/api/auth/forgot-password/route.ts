import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendPasswordResetEmail } from "@/lib/email";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Don't reveal if user exists or not for security reasons
    // Always return success to prevent email enumeration
    if (!user) {
      return NextResponse.json(
        { success: true, message: "If an account exists with this email, a password reset link has been sent." },
        { status: 200 }
      );
    }

    // Generate a unique token
    const token = crypto.randomBytes(32).toString("hex");

    // Token expires in 1 hour
    const expires = new Date(Date.now() + 60 * 60 * 1000);

    // Delete any existing password reset tokens for this email
    await prisma.verificationToken.deleteMany({
      where: { identifier: email },
    });

    // Store the token in the database
    await prisma.verificationToken.create({
      data: {
        identifier: email,
        token,
        expires,
      },
    });

    // Send the password reset email
    const resetUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3001'}/reset-password?token=${token}`;
    await sendPasswordResetEmail(email, resetUrl, user.name || "User");

    return NextResponse.json(
      { success: true, message: "If an account exists with this email, a password reset link has been sent." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
