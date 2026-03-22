import type { Locale } from "@/i18n/types";

export const cliCommands: {
  command: string;
  description: Record<Locale, string>;
}[] = [
  { command: "brewnet init", description: { en: "Interactive setup wizard", ko: "대화형 설치 마법사" } },
  { command: "brewnet add <service>", description: { en: "Add a service", ko: "서비스 추가" } },
  { command: "brewnet remove <service>", description: { en: "Remove a service", ko: "서비스 제거" } },
  { command: "brewnet up / down", description: { en: "Start / Stop all services", ko: "전체 서비스 시작 / 중지" } },
  { command: "brewnet status", description: { en: "Show service status", ko: "서비스 상태 확인" } },
  { command: "brewnet logs [service]", description: { en: "View logs", ko: "로그 확인" } },
  { command: "brewnet deploy <path>", description: { en: "Deploy an application", ko: "애플리케이션 배포" } },
  { command: "brewnet domain add", description: { en: "Add custom domain", ko: "커스텀 도메인 추가" } },
  { command: "brewnet domain tunnel", description: { en: "Manage Cloudflare Tunnel", ko: "Cloudflare Tunnel 관리" } },
  { command: "brewnet backup", description: { en: "Create backup", ko: "백업 생성" } },
  { command: "brewnet restore <id>", description: { en: "Restore from backup", ko: "백업에서 복원" } },
  { command: "brewnet ssh enable", description: { en: "Enable SSH server", ko: "SSH 서버 활성화" } },
  { command: "brewnet create-app <name>", description: { en: "Scaffold a new app", ko: "새 앱 스캐폴드" } },
  { command: "brewnet uninstall", description: { en: "Remove all services & data", ko: "모든 서비스 및 데이터 제거" } },
];
