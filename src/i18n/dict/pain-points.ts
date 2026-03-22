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
    sectionDesc2: "Web server, Git, DB, Media & File server — all included. Cost: $0.",
    sectionDesc3: "Simple setup wizard. Domain connection in 1 minute!",
    pains: [
      {
        title: "Runtime setup is a nightmare",
        desc: "Installing Go, Java, Kotlin, Node, Python, Rust, React \u2014 each runtime has its own version manager, dependencies, and conflicts. Brewnet provisions any server runtime in one click with full isolation, zero dependency hell.",
      },
      {
        title: "Security is an afterthought",
        desc: "SSH hardening, firewall rules, SSL certificates, credential management \u2014 most self-hosters skip these until it\u2019s too late. Brewnet enforces security from Step 1: auto-firewall, key-only SSH, encrypted secrets, and Cloudflare Tunnel with zero exposed ports.",
      },
      {
        title: "No clean way out",
        desc: "Scattered configs, orphaned containers, leftover volumes \u2014 uninstalling self-hosted services leaves a mess. Brewnet tracks every change and offers clean uninstall with --dry-run preview, full backup & restore, and one-command rollback of your entire stack.",
      },
    ],
  },
  ko: {
    sectionBadge: "문제점",
    sectionTitleLine1: "셀프 호스팅이 이렇게",
    sectionTitleLine2: "고통스러울 필요 없습니다",
    sectionDescPrefix: "복잡한 호스팅 설정, 얼만지 모르는 비용.",
    sectionDescHighlight: "이제 Brewnet이 해결합니다.",
    sectionDesc2: "웹서버부터 Git, DB, Media 및 File 서버까지. 비용은 0원!",
    sectionDesc3: "설정 마법사로 간단하게, 도메인 연결은 1분!",
    pains: [
      {
        title: "런타임 설정은 악몽입니다",
        desc: "Go, Java, Kotlin, Node, Python, Rust, React \u2014 각 런타임마다 별도의 버전 관리자, 의존성, 충돌 문제가 있습니다. Brewnet은 완전한 격리 환경에서 클릭 한 번으로 모든 서버 런타임을 프로비저닝하며, 의존성 지옥이 없습니다.",
      },
      {
        title: "보안은 항상 뒷전입니다",
        desc: "SSH 강화, 방화벽 규칙, SSL 인증서, 자격 증명 관리 \u2014 대부분의 셀프 호스터는 문제가 터질 때까지 이를 건너뜁니다. Brewnet은 1단계부터 보안을 적용합니다: 자동 방화벽, 키 전용 SSH, 암호화된 시크릿, 포트 노출 없는 Cloudflare Tunnel.",
      },
      {
        title: "깔끔한 정리 방법이 없습니다",
        desc: "흩어진 설정 파일, 고아 컨테이너, 남겨진 볼륨 \u2014 셀프 호스팅 서비스를 제거하면 잔해만 남습니다. Brewnet은 모든 변경 사항을 추적하고, --dry-run 미리보기를 통한 깨끗한 제거, 완전한 백업 및 복원, 전체 스택의 원클릭 롤백을 제공합니다.",
      },
    ],
  },
};
