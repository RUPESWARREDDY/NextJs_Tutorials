import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const theme = request.cookies.get("theme");

  // Clone the URL so we can use it for a redirect
  const url = request.nextUrl.clone();

  if (!theme) {
    // Redirect to the same URL to trigger cookie/header in browser
    const response = NextResponse.redirect(url);
    response.cookies.set("theme", "dark", {
      path: "/", // Ensure it's available site-wide
      httpOnly: false, // Set to true in production
    });
    response.headers.set("x-hello", "world");
    return response;
  }

  const response = NextResponse.next();
  response.headers.set("x-hello", "world");
  return response;
}

// Match paths you want this middleware to run on
export const config = {
  matcher: ["/", "/profile"],
};
