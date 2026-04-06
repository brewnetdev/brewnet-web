import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALE_COOKIE, isValidLocale } from "@/i18n/types";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already starts with a valid locale
  const firstSegment = pathname.split("/")[1];
  if (isValidLocale(firstSegment)) {
    return NextResponse.next();
  }

  // Detect preferred locale: cookie → Accept-Language → default
  let detected = DEFAULT_LOCALE;

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && isValidLocale(cookieLocale)) {
    detected = cookieLocale;
  } else {
    const acceptLang = request.headers.get("accept-language") ?? "";
    if (acceptLang.includes("ko")) {
      detected = "ko";
    } else if (acceptLang.includes("ja")) {
      detected = "ja";
    } else if (acceptLang.includes("zh")) {
      detected = "zh";
    }
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${detected}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next|favicon.ico|icon.svg|apple-icon.png|sitemap.xml|robots.txt|opengraph-image|twitter-image).*)",
  ],
};
