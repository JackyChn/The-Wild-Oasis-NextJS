// import { NextResponse } from "next/server";

// function middleware(request) {
//   console.log(request);
//   const { nextUrl } = request;

//   return NextResponse.redirect(new URL("/about", nextUrl));
// }
import { auth } from "@/app/_lib/auth";
export const middleware = auth;

export const config = {
  matcher: ["/account", "/cabins"],
};
