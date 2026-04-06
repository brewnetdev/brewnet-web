export const LOCALES = ["en", "ko", "ja", "zh"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_COOKIE = "NEXT_LOCALE";

export function isValidLocale(v: string): v is Locale {
  return LOCALES.includes(v as Locale);
}
