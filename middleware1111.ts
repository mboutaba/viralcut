// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import jwt from "jsonwebtoken";

// const JWT_SECRET = process.env.JWT_SECRET!;

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("token")?.value;

//   const protectedPaths = ["/generator"];

//   const isProtected = protectedPaths.some(path =>
//     req.nextUrl.pathname.startsWith(path)
//   );

//   if (!isProtected) return NextResponse.next();

//   if (!token) {
//     console.log("token error");
//     return
//     //return NextResponse.redirect(new URL("/login", req.url));
//   }

//   try {
//     jwt.verify(token, JWT_SECRET);
//     return NextResponse.next();
//   } catch {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }
// }
 
