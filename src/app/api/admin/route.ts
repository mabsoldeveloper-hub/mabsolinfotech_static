import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Hardcoded admin password and email
const ADMIN_EMAIL = "mabsoldeveloper@gmail.com"
const ADMIN_PASSWORD = "Mab@5181"

// Pre-generate hash once
const ADMIN_PASSWORD_HASH = bcrypt.hashSync(ADMIN_PASSWORD, 10);

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    // Check email
    if (email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: "Invalid email" }, { status: 401 });
    }

    // Compare entered password with hashed password
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }

    // JWT secret
    const JWT_SECRET = process.env.NEXTAUTH_SECRET;

    if (!JWT_SECRET) {
      throw new Error("JWT Secret Missing");
    }

    // Generate JWT
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1d" });

    // return NextResponse.json({ message: "Login successful", token });

    const response = NextResponse.json({
      message: "Login successful",
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    return response;

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


