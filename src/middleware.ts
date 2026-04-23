import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALE_COOKIE, LOCALES, isValidLocale } from "@/i18n/types";
import type { Locale } from "@/i18n/types";

function parseAcceptLanguage(header: string): Locale {
  const entries = header.split(",").map((part) => {
    const [lang, ...params] = part.trim().split(";");
    const qParam = params.find((p) => p.trim().startsWith("q="));
    const q = qParam ? parseFloat(qParam.trim().slice(2)) : 1;
    return { lang: lang.trim().toLowerCase(), q };
  });

  entries.sort((a, b) => b.q - a.q);

  for (const { lang } of entries) {
    const prefix = lang.split("-")[0];
    if (LOCALES.includes(prefix as Locale)) {
      return prefix as Locale;
    }
  }

  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const firstSegment = pathname.split("/")[1];
  if (isValidLocale(firstSegment)) {
    return NextResponse.next();
  }

  let detected: Locale = DEFAULT_LOCALE;

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && isValidLocale(cookieLocale)) {
    detected = cookieLocale;
  } else {
    const acceptLang = request.headers.get("accept-language");
    if (acceptLang) {
      detected = parseAcceptLanguage(acceptLang);
    }
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${detected}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next|favicon.ico|icon.svg|apple-icon.png|sitemap.xml|robots.txt|opengraph-image|twitter-image|.*\\.html).*)",
  ],
};
