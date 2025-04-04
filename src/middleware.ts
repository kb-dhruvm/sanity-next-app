import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["en", "es"];
const DEFAULT_LOCALE = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, API, and _next files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/studio") ||
    pathname.includes(".") // skip all static files like .png, .svg
  ) {
    return NextResponse.next();
  }

  const pathnameSegments = pathname.split("/");
  const firstSegment = pathnameSegments[1];

  // If already has a supported locale, continue
  if (SUPPORTED_LOCALES.includes(firstSegment)) {
    return NextResponse.next();
  }

  // Otherwise redirect to default locale
  const newPathname = `/${DEFAULT_LOCALE}${pathname}`;
  const url = request.nextUrl.clone();
  url.pathname = newPathname;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next|api|studio).*)",  // Match all paths except _next, api, and studio
  ],
};