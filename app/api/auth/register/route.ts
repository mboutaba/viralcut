import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/password";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const hashed = await hashPassword(password);

  try {
    await db.run(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      email,
      hashed
    );
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "User exists" }, { status: 400 });
  }
}
