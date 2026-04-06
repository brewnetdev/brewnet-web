"use client";

import { type ReactNode } from "react";
import { LocaleProvider } from "@/i18n/LocaleContext";
import { DictionaryProvider } from "@/i18n/DictionaryContext";
import type { Locale } from "@/i18n/types";
import type { Dictionary } from "@/i18n/dictionaries/types";

export default function Providers({
  children,
  locale,
  dictionary,
}: {
  children: ReactNode;
  locale: Locale;
  dictionary: Dictionary;
}) {
  return (
    <LocaleProvider locale={locale}>
      <DictionaryProvider dictionary={dictionary}>
        {children}
      </DictionaryProvider>
    </LocaleProvider>
  );
}
