"use client";

import { createContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { type Locale, DEFAULT_LOCALE, LOCALE_STORAGE_KEY } from "./types";

interface LocaleContextValue {
  locale: Locale;
  toggleLocale: () => void;
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  toggleLocale: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored === "en" || stored === "ko") {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "ko" : "en"));
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
