import type { Locale } from "@/i18n/types";

export const wizardSteps: {
  step: number;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}[] = [
  {
    step: 1,
    title: { en: "System Check", ko: "시스템 점검" },
    description: {
      en: "OS, Docker, ports (80/443), disk, RAM verification",
      ko: "OS, Docker, 포트(80/443), 디스크, RAM 검증",
    },
  },
  {
    step: 2,
    title: { en: "Project Setup", ko: "프로젝트 설정" },
    description: {
      en: "Project name, path, install type (Full / Partial)",
      ko: "프로젝트 이름, 경로, 설치 유형 (전체 / 부분)",
    },
  },
  {
    step: 3,
    title: { en: "Admin & Servers", ko: "관리자 & 서버" },
    description: {
      en: "Admin account, Web/File/DB/Media/SSH selection",
      ko: "관리자 계정, 웹/파일/DB/미디어/SSH 선택",
    },
  },
  {
    step: 4,
    title: { en: "Dev Stack", ko: "개발 스택" },
    description: {
      en: "Backend language, framework, frontend, FileBrowser (optional)",
      ko: "백엔드 언어, 프레임워크, 프론트엔드, FileBrowser (선택)",
    },
  },
  {
    step: 5,
    title: { en: "Domain & Network", ko: "도메인 & 네트워크" },
    description: {
      en: "Local (LAN) or Cloudflare Tunnel, Mail Server (conditional)",
      ko: "로컬(LAN) 또는 Cloudflare Tunnel, 메일 서버 (조건부)",
    },
  },
  {
    step: 6,
    title: { en: "Review & Confirm", ko: "검토 & 확인" },
    description: {
      en: "Full config review, credential propagation targets, resource estimate",
      ko: "전체 구성 검토, 자격 증명 전파 대상, 리소스 추정",
    },
  },
  {
    step: 7,
    title: { en: "Generate & Deploy", ko: "생성 & 배포" },
    description: {
      en: "docker-compose.yml generation, image pull, container start, access verification",
      ko: "docker-compose.yml 생성, 이미지 풀, 컨테이너 시작, 접속 확인",
    },
  },
];
