import type { Locale } from "../types";
import type { Dictionary } from "./types";
import type { FAQDict } from "./faq/en";

const dictionaries: Record<Locale, () => Promise<{ dictionary: Dictionary }>> = {
  en: () => import("./en"),
  ko: () => import("./ko"),
  ja: () => import("./ja"),
  zh: () => import("./zh"),
};

const faqDictionaries: Record<Locale, () => Promise<{ faqDict: FAQDict }>> = {
  en: () => import("./faq/en"),
  ko: () => import("./faq/ko"),
  ja: () => import("./faq/ja"),
  zh: () => import("./faq/zh"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return (await dictionaries[locale]()).dictionary;
}

export async function getFaqDictionary(locale: Locale): Promise<FAQDict> {
  return (await faqDictionaries[locale]()).faqDict;
}
