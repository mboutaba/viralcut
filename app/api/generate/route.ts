import { NextResponse } from "next/server";
import { generateMeditationShort } from "@/lib/generator/generator";
import { getUserFromRequest } from "@/lib/auth";

export async function POST(req: Request) {
  const user = await getUserFromRequest();

  if (!user) {
    console.log("no userrrrrrr");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const videoUrl = await generateMeditationShort(body);

  return NextResponse.json({ videoUrl });
}
