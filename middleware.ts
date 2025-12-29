import { NextResponse } from "next/server";
 import { getUserFromRequest } from "./lib/auth"
import type { NextRequest } from "next/server";
 

 

export async function middleware(req: NextRequest) {

  const user = getUserFromRequest();

  const protectedPaths = [ "/generator", "/api/generate", "/dashboard" , "/api/auth/logout"];

  const isProtected = protectedPaths.some(path =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (!isProtected) return NextResponse.next();

  if (!user) {
    console.log("token error");
    return NextResponse.redirect(new URL("/login", req.url));
  }

   return NextResponse.next();

 
}
 
