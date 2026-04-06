import type { Locale } from "@/i18n/types";

export const cliCommands: {
  command: string;
  description: Record<Locale, string>;
}[] = [
  { command: "brewnet init", description: { en: "Interactive setup wizard", ko: "대화형 설치 마법사", ja: "対話式セットアップウィザード", zh: "交互式设置向导" } },
  { command: "brewnet add <service>", description: { en: "Add a service", ko: "서비스 추가", ja: "サービスを追加", zh: "添加服务" } },
  { command: "brewnet remove <service>", description: { en: "Remove a service", ko: "서비스 제거", ja: "サービスを削除", zh: "删除服务" } },
  { command: "brewnet up / down", description: { en: "Start / Stop all services", ko: "전체 서비스 시작 / 중지", ja: "全サービス開始 / 停止", zh: "启动 / 停止所有服务" } },
  { command: "brewnet status", description: { en: "Show service status", ko: "서비스 상태 확인", ja: "サービス状態を表示", zh: "显示服务状态" } },
  { command: "brewnet logs [service]", description: { en: "View logs", ko: "로그 확인", ja: "ログを表示", zh: "查看日志" } },
  { command: "brewnet admin", description: { en: "Open web dashboard", ko: "웹 대시보드 열기", ja: "Webダッシュボードを開く", zh: "打开Web仪表盘" } },
  { command: "brewnet domain connect", description: { en: "Connect custom domain", ko: "커스텀 도메인 연결", ja: "カスタムドメインを接続", zh: "连接自定义域名" } },
  { command: "brewnet domain tunnel", description: { en: "Manage Cloudflare Tunnel", ko: "Cloudflare Tunnel 관리", ja: "Cloudflare Tunnelを管理", zh: "管理Cloudflare Tunnel" } },
  { command: "brewnet backup", description: { en: "Create backup", ko: "백업 생성", ja: "バックアップを作成", zh: "创建备份" } },
  { command: "brewnet restore <id>", description: { en: "Restore from backup", ko: "백업에서 복원", ja: "バックアップからリストア", zh: "从备份恢复" } },
  { command: "brewnet create-app <name>", description: { en: "Scaffold a new app", ko: "새 앱 스캐폴드", ja: "新しいアプリをスキャフォールド", zh: "搭建新应用" } },
  { command: "brewnet shutdown", description: { en: "Graceful shutdown all services", ko: "모든 서비스 안전 종료", ja: "全サービスを安全に停止", zh: "安全关闭所有服务" } },
  { command: "brewnet uninstall", description: { en: "Remove all services & data", ko: "모든 서비스 및 데이터 제거", ja: "全サービスとデータを削除", zh: "删除所有服务和数据" } },
];
