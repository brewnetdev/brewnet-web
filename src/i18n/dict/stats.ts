import type { Locale } from "../types";

export const statsDict: Record<
  Locale,
  {
    stats: { value: string; label: string }[];
  }
> = {
  en: {
    stats: [
      { value: "17", label: "Docker Services" },
      { value: "6+16", label: "Languages & Boilerplates" },
      { value: "7", label: "Wizard Steps" },
      { value: "100%", label: "Open Source CLI" },
    ],
  },
  ko: {
    stats: [
      { value: "17", label: "Docker 서비스" },
      { value: "6+16", label: "언어 & 보일러플레이트" },
      { value: "7", label: "마법사 단계" },
      { value: "100%", label: "오픈소스 CLI" },
    ],
  },
};
