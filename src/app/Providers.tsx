"use client";

import { type ReactNode } from "react";
import { LocaleProvider } from "@/i18n/LocaleContext";
import type { Locale } from "@/i18n/types";

export default function Providers({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return <LocaleProvider locale={locale}>{children}</LocaleProvider>;
}
