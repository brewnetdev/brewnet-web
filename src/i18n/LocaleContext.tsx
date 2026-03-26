"use client";

import { createContext, type ReactNode } from "react";
import { type Locale, DEFAULT_LOCALE } from "./types";

interface LocaleContextValue {
  locale: Locale;
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
});

export function LocaleProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <LocaleContext.Provider value={{ locale }}>
      {children}
    </LocaleContext.Provider>
  );
}
