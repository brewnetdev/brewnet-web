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
  ja: {
    titlePrefix: "",
    titleHighlight: "サーバーをbrewする準備はできましたか？",
    desc: "コマンドひとつで、サーバースタック丸ごと。クレジットカード不要、ロックインなし。",
    btnGetStarted: "Get Started Free",
    btnGitHub: "View on GitHub",
    note: "BrewnetはApache 2.0ライセンスで、クリーンアンインストールに対応しています。自由に使い、不要になったら痕跡を残さず完全に削除できます。",
  },
  zh: {
    titlePrefix: "准备好",
    titleHighlight: "brew你的服务器了吗？",
    desc: "一条命令，完整服务器栈。无需信用卡，无锁定。",
    btnGetStarted: "Get Started Free",
    btnGitHub: "View on GitHub",
    note: "Brewnet采用Apache 2.0许可证，支持干净卸载。自由使用，不再需要时可完全移除，不留痕迹。",
  },
};
