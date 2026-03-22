import type { Locale } from "../types";

export const statsDict: Record<
  Locale,
  {
    stats: { value: string; label: string }[];
  }
> = {
  en: {
    stats: [
      { value: "17", label: "Docker-Based Isolation Apps & Clean Uninstall" },
      { value: "6+16", label: "Languages & Framework Runtimes" },
      { value: "3", label: "Simple Steps from Install to Domain" },
      { value: "100%", label: "Open Source CLI + Dashboard" },
    ],
  },
  ko: {
    stats: [
      { value: "17", label: "도커 기반 완벽한 격리, 클린 삭제 지원" },
      { value: "6+16", label: "지원 언어 및 프레임워크 런타임" },
      { value: "3", label: "설치부터 도메인 연결까지 3단계" },
      { value: "100%", label: "오픈소스 CLI + Dashboard" },
    ],
  },
};
