import type { Locale } from "../types";

export const finalCtaDict: Record<
  Locale,
  {
    titlePrefix: string;
    titleHighlight: string;
    desc: string;
    btnGetStarted: string;
    btnGitHub: string;
    note: string;
  }
> = {
  en: {
    titlePrefix: "Ready to ",
    titleHighlight: "brew your server?",
    desc: "One command. Full server stack. No credit card, no lock-in.",
    btnGetStarted: "Get Started Free",
    btnGitHub: "View on GitHub",
    note: "Brewnet is Apache 2.0-licensed and supports clean uninstallation. Use it freely, and remove it completely when you no longer need it \u2014 no traces left behind.",
  },
  ko: {
    titlePrefix: "",
    titleHighlight: "서버를 brew 할 준비가 되셨나요?",
    desc: "명령어 하나로 서버 스택 전체를. 신용카드도, 종속도 없습니다.",
    btnGetStarted: "Get Started Free",
    btnGitHub: "View on GitHub",
    note: "Brewnet은 Apache 2.0 라이선스이며 깔끔한 제거를 지원합니다. 자유롭게 사용하고, 더 이상 필요하지 않으면 흔적 없이 완전히 제거할 수 있습니다.",
  },
};
