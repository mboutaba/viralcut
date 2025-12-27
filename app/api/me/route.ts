import { NextResponse } from "next/server";
//import { generateMeditationShort } from "@/lib/generator/generator";
import { getUserFromRequest } from "@/lib/auth";

export async function GET() {
  const user = await getUserFromRequest();

 
  if (!user) {
    
    return NextResponse.json({ success : false, user : null});
  }

  

  return NextResponse.json({success : true, user : user});
}