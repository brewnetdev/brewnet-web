import type { Locale } from "../types";

export const painPointsDict: Record<
  Locale,
  {
    sectionBadge: string;
    sectionTitleLine1: string;
    sectionTitleLine2: string;
    sectionDescPrefix: string;
    sectionDescHighlight: string;
    sectionDesc2: string;
    sectionDesc3: string;
    pains: { title: string; desc: string }[];
  }
> = {
  en: {
    sectionBadge: "The Problem",
    sectionTitleLine1: "Self-hosting shouldn\u2019t be",
    sectionTitleLine2: "this painful",
    sectionDescPrefix: "Complex hosting setups. Unpredictable costs.",
    sectionDescHighlight: "Brewnet solves it.",
    sectionDesc2: "Web server, Git, DB, Media & File server — all included. Cost: $0. Simple setup wizard, domain in 1 minute! No data collected.",
    sectionDesc3: "",
    pains: [
      {
        title: "Runtime setup is a nightmare",
        desc: "Go, Java, Kotlin, Node, Python, Rust, React \u2014 each runtime has its own version manager, dependencies, and conflicts. Brewnet solves it all in one click with full isolation.",
      },
      {
        title: "Security is an afterthought",
        desc: "SSH hardening, firewall rules, SSL certificates, credential management \u2014 most cloud setups are complex. Brewnet solves all security concerns at once with Cloudflare Tunnel.",
      },
      {
        title: "No clean way out",
        desc: "Most cloud platforms are hard to clean up even after multiple deletion steps. Brewnet removes everything with a single brewnet uninstall. No leftover configs, containers, or volumes.",
      },
    ],
  },
  ko: {
    sectionBadge: "문제점",
    sectionTitleLine1: "셀프 호스팅이 이렇게",
    sectionTitleLine2: "고통스러울 필요 없습니다",
    sectionDescPrefix: "복잡한 호스팅 설정, 얼만지 모르는 비용.",
    sectionDescHighlight: "이제 Brewnet이 해결합니다.",
    sectionDesc2: "웹서버부터 Git, DB, Media 및 File 서버까지. 비용은 0원! 설정 마법사로 간단하게, 도메인 연결은 1분! 수집하는 정보 없음.",
    sectionDesc3: "",
    pains: [
      {
        title: "런타임 설정은 악몽입니다",
        desc: "Go, Java, Kotlin, Node, Python, Rust, React \u2014 각 런타임마다 별도의 버전 관리자, 의존성, 충돌 문제가 있습니다. Brewnet은 완전한 격리 환경에서 클릭 한 번으로 해결합니다.",
      },
      {
        title: "보안은 항상 뒷전입니다",
        desc: "SSH 강화, 방화벽 규칙, SSL 인증서, 자격 증명 관리 \u2014 대부분의 클라우드는 설정이 복잡합니다. Brewnet은 Cloudflare Tunnel 연결로 보안문제를 한번에 해결합니다.",
      },
      {
        title: "깔끔한 정리 방법이 없습니다",
        desc: "대부분의 클라우드는 여러단계의 삭제를 거쳐도 깔끔하게 삭제하기 어려운 구조입니다. Brewnet은 brewnet uninstall 한번으로 깔끔하게 삭제됩니다. 설정 파일, 컨테이너, 볼륨 잔해 없음.",
      },
    ],
  },
  ja: {
    sectionBadge: "課題",
    sectionTitleLine1: "セルフホスティングが",
    sectionTitleLine2: "こんなに大変である必要はありません",
    sectionDescPrefix: "複雑なホスティング設定。予測できないコスト。",
    sectionDescHighlight: "Brewnetが解決します。",
    sectionDesc2: "Webサーバー、Git、DB、メディア＆ファイルサーバー — すべて含まれています。コスト：¥0。簡単セットアップウィザード、1分でドメイン接続！データ収集なし。",
    sectionDesc3: "",
    pains: [
      {
        title: "ランタイム設定は悪夢",
        desc: "Go, Java, Kotlin, Node, Python, Rust, React \u2014 各ランタイムごとに独自のバージョンマネージャー、依存関係、競合があります。Brewnetは完全な分離環境でワンクリックですべて解決します。",
      },
      {
        title: "セキュリティは後回し",
        desc: "SSH強化、ファイアウォールルール、SSL証明書、認証情報管理 \u2014 ほとんどのクラウドセットアップは複雑です。BrewnetはCloudflare Tunnelですべてのセキュリティ問題を一度に解決します。",
      },
      {
        title: "きれいに削除する方法がない",
        desc: "ほとんどのクラウドプラットフォームは、何度削除しても完全にクリーンアップするのが困難です。Brewnetは brewnet uninstall 一発ですべて削除。設定ファイル、コンテナ、ボリュームの残骸なし。",
      },
    ],
  },
  zh: {
    sectionBadge: "痛点",
    sectionTitleLine1: "自托管不应该",
    sectionTitleLine2: "如此痛苦",
    sectionDescPrefix: "复杂的托管设置。不可预测的成本。",
    sectionDescHighlight: "Brewnet来解决。",
    sectionDesc2: "Web服务器、Git、数据库、媒体和文件服务器 — 全部包含。成本：¥0。简单设置向导，1分钟连接域名！不收集任何数据。",
    sectionDesc3: "",
    pains: [
      {
        title: "运行时设置是噩梦",
        desc: "Go, Java, Kotlin, Node, Python, Rust, React \u2014 每个运行时都有自己的版本管理器、依赖项和冲突。Brewnet在完全隔离的环境中一键解决所有问题。",
      },
      {
        title: "安全总是被忽视",
        desc: "SSH加固、防火墙规则、SSL证书、凭证管理 \u2014 大多数云设置都很复杂。Brewnet通过Cloudflare Tunnel一次性解决所有安全问题。",
      },
      {
        title: "没有干净的删除方式",
        desc: "大多数云平台即使经过多步删除也难以彻底清理。Brewnet只需 brewnet uninstall 一条命令即可干净删除。无残留配置文件、容器或卷。",
      },
    ],
  },
};
