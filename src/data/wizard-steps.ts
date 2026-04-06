import type { Locale } from "@/i18n/types";

export const wizardSteps: {
  step: number;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}[] = [
  {
    step: 1,
    title: { en: "System Check", ko: "시스템 점검", ja: "システムチェック", zh: "系统检查" },
    description: {
      en: "OS, Docker, ports (80/443), disk, RAM verification",
      ko: "OS, Docker, 포트(80/443), 디스크, RAM 검증",
      ja: "OS、Docker、ポート(80/443)、ディスク、RAM検証",
      zh: "OS、Docker、端口(80/443)、磁盘、RAM验证",
    },
  },
  {
    step: 2,
    title: { en: "Project Setup", ko: "프로젝트 설정", ja: "プロジェクト設定", zh: "项目设置" },
    description: {
      en: "Project name, path, install type (Full / Partial)",
      ko: "프로젝트 이름, 경로, 설치 유형 (전체 / 부분)",
      ja: "プロジェクト名、パス、インストールタイプ（全体/部分）",
      zh: "项目名、路径、安装类型（完整/部分）",
    },
  },
  {
    step: 3,
    title: { en: "Admin & Servers", ko: "관리자 & 서버", ja: "管理者＆サーバー", zh: "管理员 & 服务器" },
    description: {
      en: "Admin account, Web/File/DB/Media/SSH selection",
      ko: "관리자 계정, 웹/파일/DB/미디어/SSH 선택",
      ja: "管理者アカウント、Web/ファイル/DB/メディア/SSH選択",
      zh: "管理员账户、Web/文件/DB/媒体/SSH选择",
    },
  },
  {
    step: 4,
    title: { en: "Dev Stack", ko: "개발 스택", ja: "開発スタック", zh: "开发栈" },
    description: {
      en: "Backend language, framework, frontend, FileBrowser (optional)",
      ko: "백엔드 언어, 프레임워크, 프론트엔드, FileBrowser (선택)",
      ja: "バックエンド言語、フレームワーク、フロントエンド、FileBrowser（任意）",
      zh: "后端语言、框架、前端、FileBrowser（可选）",
    },
  },
  {
    step: 5,
    title: { en: "Domain & Network", ko: "도메인 & 네트워크", ja: "ドメイン＆ネットワーク", zh: "域名 & 网络" },
    description: {
      en: "Local (LAN) or Cloudflare Tunnel, Mail Server (conditional)",
      ko: "로컬(LAN) 또는 Cloudflare Tunnel, 메일 서버 (조건부)",
      ja: "ローカル(LAN)またはCloudflare Tunnel、メールサーバー（条件付き）",
      zh: "本地(LAN)或Cloudflare Tunnel、邮件服务器（条件性）",
    },
  },
  {
    step: 6,
    title: { en: "Review & Confirm", ko: "검토 & 확인", ja: "レビュー＆確認", zh: "审查 & 确认" },
    description: {
      en: "Full config review, credential propagation targets, resource estimate",
      ko: "전체 구성 검토, 자격 증명 전파 대상, 리소스 추정",
      ja: "全構成レビュー、認証情報伝播先、リソース見積もり",
      zh: "完整配置审查、凭证传播目标、资源估算",
    },
  },
  {
    step: 7,
    title: { en: "Generate & Deploy", ko: "생성 & 배포", ja: "生成＆デプロイ", zh: "生成 & 部署" },
    description: {
      en: "docker-compose.yml generation, image pull, container start, access verification",
      ko: "docker-compose.yml 생성, 이미지 풀, 컨테이너 시작, 접속 확인",
      ja: "docker-compose.yml生成、イメージプル、コンテナ起動、接続確認",
      zh: "docker-compose.yml生成、镜像拉取、容器启动、访问验证",
    },
  },
];
