import type { Locale } from "@/i18n/types";

export const services: {
  iconClass: string;
  iconText: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  pro?: boolean;
}[] = [
  {
    iconClass: "web",
    iconText: "WEB",
    title: { en: "Web Server", ko: "웹 서버" },
    description: { en: "Traefik, Nginx, Caddy", ko: "Traefik, Nginx, Caddy" },
  },
  {
    iconClass: "git",
    iconText: "GIT",
    title: { en: "Git Server", ko: "Git 서버" },
    description: {
      en: "Gitea with SSH access (port 3022)",
      ko: "Gitea SSH 접속 지원 (포트 3022)",
    },
  },
  {
    iconClass: "db",
    iconText: "DB",
    title: { en: "Database", ko: "데이터베이스" },
    description: { en: "PostgreSQL, MySQL, SQLite", ko: "PostgreSQL, MySQL, SQLite" },
  },
  {
    iconClass: "cache",
    iconText: "CACHE",
    title: { en: "Cache", ko: "캐시" },
    description: { en: "Redis, Valkey", ko: "Redis, Valkey" },
    pro: true,
  },
  {
    iconClass: "file",
    iconText: "FILE",
    title: { en: "File Storage", ko: "파일 스토리지" },
    description: { en: "Nextcloud, MinIO (S3)", ko: "Nextcloud, MinIO (S3)" },
  },
  {
    iconClass: "media",
    iconText: "MEDIA",
    title: { en: "Media Server", ko: "미디어 서버" },
    description: { en: "Jellyfin streaming", ko: "Jellyfin 스트리밍" },
  },
  {
    iconClass: "ssh",
    iconText: "SSH",
    title: { en: "SSH Server", ko: "SSH 서버" },
    description: {
      en: "OpenSSH, key-based auth, SFTP",
      ko: "OpenSSH, 키 기반 인증, SFTP",
    },
    pro: true,
  },
  {
    iconClass: "mail",
    iconText: "MAIL",
    title: { en: "Mail Server", ko: "메일 서버" },
    description: {
      en: "docker-mailserver (SMTP/IMAP)",
      ko: "docker-mailserver (SMTP/IMAP)",
    },
    pro: true,
  },
  {
    iconClass: "ssl",
    iconText: "TUNNEL",
    title: { en: "Cloudflare Tunnel", ko: "Cloudflare Tunnel" },
    description: {
      en: "Automatic HTTPS, DDoS protection",
      ko: "자동 HTTPS, DDoS 방어",
    },
  },
  {
    iconClass: "fb",
    iconText: "FB",
    title: { en: "FileBrowser", ko: "FileBrowser" },
    description: {
      en: "Web-based file management UI",
      ko: "웹 기반 파일 관리 UI",
    },
  },
  {
    iconClass: "runtime",
    iconText: "DEV",
    title: { en: "Dev Stack", ko: "개발 스택" },
    description: {
      en: "Go, Java, Kotlin, Node, Python, Rust, React — 16 framework boilerplates",
      ko: "Go, Java, Kotlin, Node, Python, Rust, React — 16개 프레임워크 보일러플레이트",
    },
  },
  {
    iconClass: "web",
    iconText: "SETUP",
    title: { en: "Easy Install & Domain", ko: "간편 설치 & 도메인" },
    description: {
      en: "One-command setup, custom domain & Cloudflare integration",
      ko: "원커맨드 설정, 커스텀 도메인 & Cloudflare 연동",
    },
  },
];
