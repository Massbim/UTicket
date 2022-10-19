import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default function middleware(request = NextRequest) {
  const cookiesToken = request.cookies.get("token");
  // const cookiesRefreshToken = request.cookies.get("refreshToken");
  // const cookiesRole = request.cookies.get("role");
  const cookiesId = request.cookies.get("user_id");
  // const cookiesLockCredential = request.cookies.get("lockCredential");

  let url = request.url;
  let urlRedirect = request.nextUrl.clone();
  const response = NextResponse.next();

  if (cookiesToken 
    // && cookiesRefreshToken 
    // && cookiesRole 
    && cookiesId 
    // && cookiesLockCredential
    ) {
    console.log("valid");
  } else {
    if (url.includes("/profile") || url.includes("/admin")) {
      urlRedirect.pathname = "/auth/login";
      return NextResponse.redirect(urlRedirect);
    }
  }

  const urlClone = request.nextUrl.clone()   
  if (urlClone.pathname === '/') {
    urlClone.pathname = '/home'
    return NextResponse.redirect(urlClone)   
  } 

  return response;
}
