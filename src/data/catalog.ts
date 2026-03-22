import type { Locale } from "@/i18n/types";

export const catalogItems: {
  category: Record<Locale, string>;
  service: string;
  image: string;
  ports: string;
  ram: string;
}[] = [
  { category: { en: "Web Server", ko: "웹 서버" }, service: "Traefik (default)", image: "traefik:v3.0", ports: "80, 443, 8080", ram: "~45 MB" },
  { category: { en: "Web Server", ko: "웹 서버" }, service: "Nginx", image: "nginx:1.25-alpine", ports: "80, 443", ram: "~20 MB" },
  { category: { en: "Web Server", ko: "웹 서버" }, service: "Caddy", image: "caddy:2-alpine", ports: "80, 443", ram: "~30 MB" },
  { category: { en: "Git Server", ko: "Git 서버" }, service: "Gitea (required)", image: "gitea/gitea:latest", ports: "3000, 3022", ram: "~120 MB" },
  { category: { en: "Database", ko: "데이터베이스" }, service: "PostgreSQL", image: "postgres:17-alpine", ports: "5432", ram: "~120 MB" },
  { category: { en: "Database", ko: "데이터베이스" }, service: "MySQL", image: "mysql:8.4", ports: "3306", ram: "~256 MB" },
  { category: { en: "Cache (Pro)", ko: "캐시 (Pro)" }, service: "Redis (default)", image: "redis:7-alpine", ports: "6379", ram: "~12 MB" },
  { category: { en: "Cache (Pro)", ko: "캐시 (Pro)" }, service: "Valkey", image: "valkey/valkey:7-alpine", ports: "6379", ram: "~12 MB" },
  { category: { en: "DB Admin", ko: "DB 관리" }, service: "pgAdmin", image: "dpage/pgadmin4:latest", ports: "5050", ram: "~128 MB" },
  { category: { en: "File Server", ko: "파일 서버" }, service: "Nextcloud", image: "nextcloud:29-apache", ports: "443", ram: "~256 MB" },
  { category: { en: "Media", ko: "미디어" }, service: "Jellyfin", image: "jellyfin/jellyfin:latest", ports: "8096", ram: "~256 MB" },
  { category: { en: "Utility", ko: "유틸리티" }, service: "FileBrowser", image: "filebrowser/filebrowser:latest", ports: "80", ram: "~32 MB" },
  { category: { en: "SSH (Pro)", ko: "SSH (Pro)" }, service: "OpenSSH", image: "linuxserver/openssh-server:latest", ports: "2222", ram: "~16 MB" },
  { category: { en: "Mail (Pro)", ko: "메일 (Pro)" }, service: "docker-mailserver", image: "ghcr.io/docker-mailserver/docker-mailserver:latest", ports: "25, 587, 993", ram: "~256 MB" },
  { category: { en: "Tunnel", ko: "터널" }, service: "Cloudflared", image: "cloudflare/cloudflared:latest", ports: "outbound only", ram: "~32 MB" },
];
