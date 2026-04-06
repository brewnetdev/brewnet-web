import type { Locale } from "../types";

export const featuresDict: Record<
  Locale,
  {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    subtitle2: string;
    cards: {
      oneClickServerStack: { title: string; desc: string };
      secureByDefault: { title: string; desc: string };
      cleanUninstall: { title: string; desc: string };
      cloudflareTunnel: { title: string; desc: string };
      dockerOrchestration: { title: string; desc: string };
      slackTelegram: { title: string; desc: string };
      buildDeployConnect: { title: string; desc: string };
      crossPlatform: { title: string; desc: string };
      webDashboard: { title: string; desc: string };
    };
  }
> = {
  en: {
    badge: "Features",
    title: "Everything you need to",
    titleHighlight: "self-host like a pro",
    subtitle:
      "Stop paying for cloud hosting. Deploy with one command.",
    subtitle2: "Domain, build, deploy — all in one step.",
    cards: {
      oneClickServerStack: {
        title: "One-Click Server Stack",
        desc: "Go, Java, Kotlin, Node, Python, Rust, React — pick your runtime and launch a production-ready web server in one command. No manual dependency setup, no version conflicts.",
      },
      secureByDefault: {
        title: "Secure by Default",
        desc: "SSH key-only auth, root login disabled, auto-firewall configuration, and encrypted credential propagation across all services.",
      },
      cleanUninstall: {
        title: "Clean Uninstall & Rollback",
        desc: "Every change is tracked. Preview removals with --dry-run before executing. Full backup & restore, one-command rollback, and zero leftover containers, volumes, or configs after uninstall.",
      },
      cloudflareTunnel: {
        title: "Cloudflare Tunnel Integration",
        desc: "No port forwarding needed. Works behind NAT/CGNAT with automatic HTTPS and DDoS protection. Paste one Cloudflare token and tunnel, ingress rules, and DNS are configured automatically.",
      },
      dockerOrchestration: {
        title: "Docker Orchestration",
        desc: "Auto-generates docker-compose.yml for up to 17 services with full container isolation. Each service runs in its own network sandbox with dependency ordering, health checks, and secure credential propagation.",
      },
      slackTelegram: {
        title: "Slack & Telegram Notifications",
        desc: "Get real-time alerts on service status, deployments, and errors — directly to Slack or Telegram. No database required. Just paste your webhook URL or bot token and start receiving notifications.",
      },
      buildDeployConnect: {
        title: "Build, Deploy & Connect",
        desc: "Server setup is just the start. Run your apps, connect custom domains, automate builds, deploy in one command, and monitor everything — the full DevOps lifecycle without the DevOps team.",
      },
      crossPlatform: {
        title: "Cross-Platform Support",
        desc: "macOS 12+ and Ubuntu 20.04+ officially supported. Brewnet auto-detects your OS, adjusts package managers, and handles platform-specific differences so you don't have to.",
      },
      webDashboard: {
        title: "Web Dashboard & Monitoring",
        desc: "Browser-based setup wizard, real-time service monitoring, web terminal, and a visual interface for managing your entire server stack.",
      },
    },
  },
  ko: {
    badge: "주요 기능",
    title: "셀프 호스팅에 필요한",
    titleHighlight: "모든 것을 한 곳에",
    subtitle:
      "클라우드 호스팅 비용은 이제 그만. 명령어 하나로 배포하세요.",
    subtitle2: "도메인 연결, 빌드, 배포를 한번에 손쉽게 해결하세요.",
    cards: {
      oneClickServerStack: {
        title: "원클릭 서버 스택",
        desc: "Go, Java, Kotlin, Node, Python, Rust, React — 런타임을 선택하고 명령어 하나로 프로덕션 웹 서버를 실행하세요. 수동 의존성 설정도, 버전 충돌도 없습니다.",
      },
      secureByDefault: {
        title: "기본부터 안전하게",
        desc: "SSH 키 전용 인증, root 로그인 비활성화, 자동 방화벽 설정, 모든 서비스에 걸친 암호화된 인증 정보 전파까지 기본 제공됩니다.",
      },
      cleanUninstall: {
        title: "깔끔한 제거 및 롤백",
        desc: "모든 변경 사항이 추적됩니다. 실행 전 --dry-run으로 삭제 항목을 미리 확인하세요. 완전한 백업 및 복원, 명령어 하나로 롤백, 제거 후 남는 컨테이너, 볼륨, 설정 파일이 없습니다.",
      },
      cloudflareTunnel: {
        title: "Cloudflare Tunnel 연동",
        desc: "포트 포워딩이 필요 없습니다. NAT/CGNAT 환경에서도 자동 HTTPS와 DDoS 보호가 적용됩니다. Cloudflare 토큰만 붙여넣으면 터널, 인그레스 규칙, DNS가 자동으로 설정됩니다.",
      },
      dockerOrchestration: {
        title: "Docker 오케스트레이션",
        desc: "최대 17개 서비스에 대해 완전한 컨테이너 격리로 docker-compose.yml을 자동 생성합니다. 각 서비스는 자체 네트워크 샌드박스에서 의존성 순서, 헬스 체크, 안전한 인증 정보 전파와 함께 실행됩니다.",
      },
      slackTelegram: {
        title: "Slack 및 Telegram 알림",
        desc: "서비스 상태, 배포, 오류에 대한 실시간 알림을 Slack이나 Telegram으로 바로 받으세요. 데이터베이스 불필요. Webhook URL이나 봇 토큰만 입력하면 바로 알림을 받을 수 있습니다.",
      },
      buildDeployConnect: {
        title: "빌드, 배포 & 연결",
        desc: "서버 설정은 시작에 불과합니다. 앱 실행, 커스텀 도메인 연결, 빌드 자동화, 명령어 하나로 배포, 전체 모니터링까지 — DevOps 팀 없이 완전한 DevOps 라이프사이클을 경험하세요.",
      },
      crossPlatform: {
        title: "크로스 플랫폼 지원",
        desc: "macOS 12+ 및 Ubuntu 20.04+를 공식 지원합니다. Brewnet이 OS를 자동 감지하고, 패키지 관리자를 조정하며, 플랫폼별 차이를 알아서 처리합니다.",
      },
      webDashboard: {
        title: "웹 대시보드 및 모니터링",
        desc: "브라우저 기반 설치 마법사, 실시간 서비스 모니터링, 웹 터미널, 그리고 전체 서버 스택을 관리하는 시각적 인터페이스를 제공합니다.",
      },
    },
  },
  ja: {
    badge: "主な機能",
    title: "セルフホスティングに必要な",
    titleHighlight: "すべてをひとつに",
    subtitle: "クラウドホスティング費用はもう不要。コマンドひとつでデプロイ。",
    subtitle2: "ドメイン接続、ビルド、デプロイを一度に。",
    cards: {
      oneClickServerStack: {
        title: "ワンクリックサーバースタック",
        desc: "Go, Java, Kotlin, Node, Python, Rust, React — ランタイムを選んでコマンドひとつでプロダクション対応Webサーバーを起動。手動の依存関係設定もバージョン競合もなし。",
      },
      secureByDefault: {
        title: "デフォルトで安全",
        desc: "SSH鍵認証のみ、rootログイン無効化、自動ファイアウォール設定、全サービスにわたる暗号化された認証情報伝播。",
      },
      cleanUninstall: {
        title: "クリーンアンインストール＆ロールバック",
        desc: "すべての変更を追跡。実行前に--dry-runで削除対象をプレビュー。完全なバックアップ＆リストア、ワンコマンドロールバック、アンインストール後にコンテナ・ボリューム・設定の残骸なし。",
      },
      cloudflareTunnel: {
        title: "Cloudflare Tunnel連携",
        desc: "ポートフォワーディング不要。NAT/CGNAT環境でも自動HTTPSとDDoS保護。Cloudflareトークンを貼り付けるだけでトンネル、インバウンドルール、DNSが自動設定。",
      },
      dockerOrchestration: {
        title: "Dockerオーケストレーション",
        desc: "最大17サービスに対して完全なコンテナ分離でdocker-compose.ymlを自動生成。各サービスは独自のネットワークサンドボックスで依存関係の順序付け、ヘルスチェック、安全な認証情報伝播と共に実行。",
      },
      slackTelegram: {
        title: "Slack & Telegram通知",
        desc: "サービスステータス、デプロイ、エラーのリアルタイムアラートをSlackまたはTelegramで直接受信。データベース不要。Webhook URLまたはボットトークンを貼り付けるだけで通知開始。",
      },
      buildDeployConnect: {
        title: "ビルド、デプロイ＆接続",
        desc: "サーバー設定は始まりにすぎません。アプリ実行、カスタムドメイン接続、ビルド自動化、ワンコマンドデプロイ、全体モニタリング — DevOpsチームなしで完全なDevOpsライフサイクル。",
      },
      crossPlatform: {
        title: "クロスプラットフォーム対応",
        desc: "macOS 12+およびUbuntu 20.04+を公式サポート。BrewnetがOSを自動検出し、パッケージマネージャーを調整、プラットフォーム固有の違いを処理。",
      },
      webDashboard: {
        title: "Webダッシュボード＆モニタリング",
        desc: "ブラウザベースのセットアップウィザード、リアルタイムサービスモニタリング、Webターミナル、サーバースタック全体を管理するビジュアルインターフェース。",
      },
    },
  },
  zh: {
    badge: "主要功能",
    title: "自托管所需的",
    titleHighlight: "一切尽在此处",
    subtitle: "不再支付云托管费用。一条命令完成部署。",
    subtitle2: "域名连接、构建、部署一步到位。",
    cards: {
      oneClickServerStack: {
        title: "一键服务器栈",
        desc: "Go, Java, Kotlin, Node, Python, Rust, React — 选择运行时，一条命令启动生产级Web服务器。无需手动依赖设置，无版本冲突。",
      },
      secureByDefault: {
        title: "默认安全",
        desc: "仅SSH密钥认证、禁用root登录、自动防火墙配置、所有服务间加密凭证传播。",
      },
      cleanUninstall: {
        title: "干净卸载 & 回滚",
        desc: "每次更改都被跟踪。执行前用--dry-run预览删除内容。完整备份恢复、一键回滚，卸载后无残留容器、卷或配置。",
      },
      cloudflareTunnel: {
        title: "Cloudflare Tunnel集成",
        desc: "无需端口转发。在NAT/CGNAT环境下也能自动HTTPS和DDoS防护。粘贴一个Cloudflare令牌，隧道、入口规则和DNS自动配置。",
      },
      dockerOrchestration: {
        title: "Docker编排",
        desc: "为最多17个服务自动生成docker-compose.yml，完全容器隔离。每个服务在独立的网络沙箱中运行，具有依赖排序、健康检查和安全凭证传播。",
      },
      slackTelegram: {
        title: "Slack & Telegram通知",
        desc: "直接在Slack或Telegram接收服务状态、部署和错误的实时警报。无需数据库。只需粘贴Webhook URL或机器人令牌即可开始接收通知。",
      },
      buildDeployConnect: {
        title: "构建、部署 & 连接",
        desc: "服务器设置只是开始。运行应用、连接自定义域名、自动化构建、一键部署、全面监控 — 无需DevOps团队的完整DevOps生命周期。",
      },
      crossPlatform: {
        title: "跨平台支持",
        desc: "官方支持macOS 12+和Ubuntu 20.04+。Brewnet自动检测操作系统、调整包管理器、处理平台特定差异。",
      },
      webDashboard: {
        title: "Web仪表盘 & 监控",
        desc: "基于浏览器的设置向导、实时服务监控、Web终端，以及管理整个服务器栈的可视化界面。",
      },
    },
  },
};
