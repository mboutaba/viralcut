import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyPassword } from "@/lib/password";
import { signJWT } from "@/lib/jwt";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await db.get(
    "SELECT * FROM users WHERE email = ?",
    email
  );

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const valid = await verifyPassword(password, user.password);
  if (!valid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = signJWT({ id: user.id, email: user.email, name: user.name});

  const res = NextResponse.json({ success: true });

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  return res;
}
