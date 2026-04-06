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
    subtitle: "Install to running server — the CLI wizard handles it all.",
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
    subtitle: "설치부터 서버 가동까지, CLI 마법사가 모든 것을 처리합니다.",
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
  ja: {
    badge: "使い方",
    title: "簡単3ステップで",
    titleHighlight: "すぐに始めましょう",
    subtitle: "インストールからサーバー起動まで、CLIウィザードがすべて処理します。",
    commandsTitle: "CLIコマンド",
    steps: [
      {
        number: "01",
        title: "Brewnetをインストール",
        desc: "curl（推奨）またはnpmでインストール。Node.js 20+とDocker 27+が必要です。macOS 12+およびUbuntu 20.04+に対応。",
        code: "curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash",
      },
      {
        number: "02",
        title: "ウィザードを実行",
        desc: "対話式7ステップウィザードが案内します：システムチェック、プロジェクト設定、管理者アカウント＆サーバー構成、開発スタック＆ランタイム、ドメイン＆ネットワーク、確認、生成＆デプロイ。",
        code: "brewnet init",
      },
      {
        number: "03",
        title: "サービスを管理",
        desc: "簡単なコマンドでサービスの追加、削除、開始、停止、モニタリング。ログ確認、ドメイン管理、アプリデプロイも可能。",
        code: "brewnet status",
      },
    ],
  },
  zh: {
    badge: "使用方法",
    title: "简单3步",
    titleHighlight: "立即开始",
    subtitle: "从安装到服务器运行，CLI向导处理一切。",
    commandsTitle: "CLI命令",
    steps: [
      {
        number: "01",
        title: "安装Brewnet",
        desc: "通过curl（推荐）或npm安装。需要Node.js 20+和Docker 27+。支持macOS 12+和Ubuntu 20.04+。",
        code: "curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash",
      },
      {
        number: "02",
        title: "运行向导",
        desc: "交互式7步向导引导您完成：系统检查、项目设置、管理员账户和服务器组件、开发栈和运行时、域名和网络、审查、生成和部署。",
        code: "brewnet init",
      },
      {
        number: "03",
        title: "管理服务",
        desc: "用简单命令添加、删除、启动、停止和监控服务。查看日志、管理域名、部署应用。",
        code: "brewnet status",
      },
    ],
  },
};
