import type { Locale } from "../types";

export const heroDict: Record<
  Locale,
  {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    stackGit: string;
    stackWeb: string;
    stackMedia: string;
    stackRuntime: string;
    stackDatabase: string;
    stackCloud: string;
    stackMonitoring: string;
    stackCiCd: string;
    stackMore: string;
    btnGetStarted: string;
    btnGitHub: string;
  }
> = {
  en: {
    badge: "Open Source \u00B7 Self-Hosted \u00B7 Docker-Powered",
    titleLine1: "One command. Your entire server stack, on tap.",
    titleLine2: "Just brew it!",
    desc: "Interactive 7-step CLI wizard and Web Dashboard for setting up and managing personal servers with 17 Docker-based services. Build your own home server, skip the hosting fees, and own your data. From zero to a fully configured server in minutes \u2014 no cloud subscription required.",
    stackGit: "Git Server (Gitea)",
    stackWeb: "Web Server (Nginx / Traefik)",
    stackMedia: "Media Server (Jellyfin)",
    stackRuntime: "Runtime Stack (Go, Java, Kotlin, Node, Python, Rust, React)",
    stackDatabase: "Database (PostgreSQL, SQLite, MySQL)",
    stackCloud: "Cloud Storage (Nextcloud)",
    stackMonitoring: "Monitoring (Grafana, Prometheus) (Pro)",
    stackCiCd: "CI/CD Pipeline",
    stackMore: "+ 9 more services",
    btnGetStarted: "Get Started Free",
    btnGitHub: "GitHub",
  },
  ko: {
    badge: "Open Source \u00B7 Self-Hosted \u00B7 Docker-Powered",
    titleLine1: "커피 한잔 내릴 시간에 홈서버를 구성하세요.",
    titleLine2: "Just brew it!",
    desc: "17개의 Docker 기반 서비스를 설정하고 관리하는 대화형 7단계 CLI 마법사와 웹 대시보드. 나만의 홈 서버를 구축하고, 호스팅 비용을 절약하며, 내 데이터를 직접 소유하세요. 제로에서 완전한 서버 구성까지 단 몇 분 \u2014 클라우드 구독 없이 가능합니다.",
    stackGit: "Git 서버 (Gitea)",
    stackWeb: "웹 서버 (Nginx / Traefik)",
    stackMedia: "미디어 서버 (Jellyfin)",
    stackRuntime: "런타임 스택 (Go, Java, Kotlin, Node, Python, Rust, React)",
    stackDatabase: "데이터베이스 (PostgreSQL, SQLite, MySQL)",
    stackCloud: "클라우드 스토리지 (Nextcloud)",
    stackMonitoring: "모니터링 (Grafana, Prometheus) (Pro)",
    stackCiCd: "CI/CD 파이프라인",
    stackMore: "+ 9개 서비스 더 보기",
    btnGetStarted: "Get Started Free",
    btnGitHub: "GitHub",
  },
};
