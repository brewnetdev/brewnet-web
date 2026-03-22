import type { Locale } from "../types";

export const howItWorksDict: Record<
  Locale,
  {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    commandsTitle: string;
    steps: {
      number: string;
      title: string;
      desc: string;
      code: string;
    }[];
  }
> = {
  en: {
    badge: "Usage",
    title: "Get started in",
    titleHighlight: "3 simple steps",
    subtitle:
      "From installation to a fully running server. The CLI wizard handles everything.",
    commandsTitle: "CLI Commands",
    steps: [
      {
        number: "01",
        title: "Install Brewnet",
        desc: "Install via curl (recommended) or npm. Requires Node.js 20+ and Docker 27+. Supports macOS 12+ and Ubuntu 20.04+.",
        code: "curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash",
      },
      {
        number: "02",
        title: "Run the Wizard",
        desc: "The interactive 7-step wizard walks you through: system check, project setup, admin account & server components, dev stack & runtime, domain & network, review, and generation & deployment.",
        code: "brewnet init",
      },
      {
        number: "03",
        title: "Manage Services",
        desc: "Add, remove, start, stop, and monitor services with simple commands. Check logs, manage domains, deploy apps.",
        code: "brewnet status",
      },
    ],
  },
  ko: {
    badge: "사용법",
    title: "간단한 3단계로",
    titleHighlight: "바로 시작하세요",
    subtitle:
      "설치부터 서버 가동까지. CLI 마법사가 모든 것을 처리합니다.",
    commandsTitle: "CLI 명령어",
    steps: [
      {
        number: "01",
        title: "Brewnet 설치",
        desc: "curl(권장) 또는 npm으로 설치합니다. Node.js 20+와 Docker 27+가 필요합니다. macOS 12+ 및 Ubuntu 20.04+를 지원합니다.",
        code: "curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash",
      },
      {
        number: "02",
        title: "마법사 실행",
        desc: "대화형 7단계 마법사가 시스템 점검, 프로젝트 설정, 관리자 계정 및 서버 구성, 개발 스택 및 런타임, 도메인 및 네트워크, 검토, 생성 및 배포를 안내합니다.",
        code: "brewnet init",
      },
      {
        number: "03",
        title: "서비스 관리",
        desc: "간단한 명령어로 서비스를 추가, 제거, 시작, 중지 및 모니터링하세요. 로그 확인, 도메인 관리, 앱 배포까지 가능합니다.",
        code: "brewnet status",
      },
    ],
  },
};
