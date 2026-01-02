import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/password";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!email || !password || !name) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }


   const userId = uuidv4();
   
  const hashed = await hashPassword(password);




  try {
    await db.run(
  "INSERT INTO users (id , name, email, password) VALUES (?, ?, ?, ?)",
  [userId, name, email, hashed]).then(() => {

    db.run(
  "INSERT INTO credits (user_id, balance) VALUES (?, 0)",
  [userId]);

  });


  


    return NextResponse.json({ success: true , message: "registed !"});
  } catch {
    return NextResponse.json({ message :"User exists" }, { status: 400 });
  }
}
