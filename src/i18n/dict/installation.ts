import type { Locale } from "../types";

export const installationDict: Record<
  Locale,
  {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    sysReqTitle: string;
    sysReqCaption: string;
    thRequirement: string;
    thMinimum: string;
    thRecommended: string;
    rowOs: string;
    rowOsMin: string;
    rowOsRec: string;
    rowNode: string;
    rowNodeMin: string;
    rowNodeRec: string;
    rowDocker: string;
    rowDockerMin: string;
    rowDockerRec: string;
    rowRam: string;
    rowRamMin: string;
    rowRamRec: string;
    rowDisk: string;
    rowDiskMin: string;
    rowDiskRec: string;
    dockerNote: string;
    curlTitle: string;
    curlDesc: string;
    npmTitle: string;
    npmDesc: string;
    wizardTitle: string;
    postSetupTitle: string;
    postSetupCommands: { command: string; description: string }[];
    uninstallTitle: string;
    uninstallDesc: string;
    uninstallCommands: { command: string; description: string }[];
  }
> = {
  en: {
    badge: "Installation",
    titleLine1: "Get up and running",
    titleLine2: "in minutes",
    desc: "From install to production — 3 minutes is all you need.",
    sysReqTitle: "System Requirements",
    sysReqCaption: "Brewnet system requirements",
    thRequirement: "Requirement",
    thMinimum: "Minimum",
    thRecommended: "Recommended",
    rowOs: "OS",
    rowOsMin: "macOS 12+ / Ubuntu 20.04+",
    rowOsRec: "Latest stable",
    rowNode: "Node.js",
    rowNodeMin: "20+",
    rowNodeRec: "22 LTS",
    rowDocker: "Docker",
    rowDockerMin: "27+",
    rowDockerRec: "Latest (auto-installed if missing)",
    rowRam: "RAM",
    rowRamMin: "2 GB",
    rowRamRec: "4 GB+",
    rowDisk: "Disk",
    rowDiskMin: "20 GB",
    rowDiskRec: "50 GB+ (for media usage)",
    dockerNote:
      "Docker is not required before installation \u2014 brewnet init auto-detects and installs it.",
    curlTitle: "curl",
    curlDesc: "One-line install script that handles everything.",
    npmTitle: "npm (Recommended)",
    npmDesc: "Install globally via npm package manager.",
    wizardTitle: "7-Step Install Wizard",
    postSetupTitle: "Post-Setup Commands",
    postSetupCommands: [
      { command: "brewnet status", description: "Check service status" },
      { command: "brewnet up", description: "Start all services" },
      { command: "brewnet down", description: "Stop all services (data preserved)" },
      { command: "brewnet logs [service]", description: "View service logs" },
      { command: "brewnet add <service>", description: "Add a service" },
      { command: "brewnet backup", description: "Create backup" },
    ],
    uninstallTitle: "Uninstall",
    uninstallDesc:
      "Remove all Brewnet services, Docker volumes, and project files. Use flags to control what gets removed.",
    uninstallCommands: [
      { command: "brewnet uninstall --dry-run", description: "Preview what will be removed (no changes)" },
      { command: "brewnet uninstall", description: "Full interactive removal" },
      { command: "brewnet uninstall --keep-data", description: "Preserve DB/file volumes" },
      { command: "brewnet uninstall --keep-config", description: "Preserve project directory, stop containers only" },
      { command: "brewnet uninstall --force", description: "Skip confirmation prompt" },
    ],
  },
  ko: {
    badge: "설치 가이드",
    titleLine1: "몇 분 만에",
    titleLine2: "시작하세요",
    desc: "설치부터 운영까지, 3분이면 충분합니다.",
    sysReqTitle: "시스템 요구사항",
    sysReqCaption: "Brewnet 시스템 요구사항",
    thRequirement: "항목",
    thMinimum: "최소",
    thRecommended: "권장",
    rowOs: "OS",
    rowOsMin: "macOS 12+ / Ubuntu 20.04+",
    rowOsRec: "최신 안정 버전",
    rowNode: "Node.js",
    rowNodeMin: "20+",
    rowNodeRec: "22 LTS",
    rowDocker: "Docker",
    rowDockerMin: "27+",
    rowDockerRec: "최신 버전 (미설치 시 자동 설치)",
    rowRam: "RAM",
    rowRamMin: "2 GB",
    rowRamRec: "4 GB+",
    rowDisk: "디스크",
    rowDiskMin: "20 GB",
    rowDiskRec: "50 GB+ (미디어 사용 시)",
    dockerNote:
      "설치 전에 Docker가 필요하지 않습니다 \u2014 brewnet init이 자동으로 감지하고 설치합니다.",
    curlTitle: "curl",
    curlDesc: "모든 것을 처리하는 한 줄 설치 스크립트입니다.",
    npmTitle: "npm (권장)",
    npmDesc: "npm 패키지 매니저를 통해 전역 설치합니다.",
    wizardTitle: "7단계 설치 마법사",
    postSetupTitle: "설치 후 명령어",
    postSetupCommands: [
      { command: "brewnet status", description: "서비스 상태 확인" },
      { command: "brewnet up", description: "모든 서비스 시작" },
      { command: "brewnet down", description: "모든 서비스 중지 (데이터 보존)" },
      { command: "brewnet logs [service]", description: "서비스 로그 확인" },
      { command: "brewnet add <service>", description: "서비스 추가" },
      { command: "brewnet backup", description: "백업 생성" },
    ],
    uninstallTitle: "삭제",
    uninstallDesc:
      "모든 Brewnet 서비스, Docker 볼륨, 프로젝트 파일을 제거합니다. 플래그로 삭제 범위를 제어할 수 있습니다.",
    uninstallCommands: [
      { command: "brewnet uninstall --dry-run", description: "삭제 대상 미리 보기 (변경 없음)" },
      { command: "brewnet uninstall", description: "전체 대화형 삭제" },
      { command: "brewnet uninstall --keep-data", description: "DB/파일 볼륨 보존" },
      { command: "brewnet uninstall --keep-config", description: "프로젝트 디렉터리 보존, 컨테이너만 중지" },
      { command: "brewnet uninstall --force", description: "확인 프롬프트 건너뛰기" },
    ],
  },
  ja: {
    badge: "インストールガイド",
    titleLine1: "数分で",
    titleLine2: "始めましょう",
    desc: "インストールから本番運用まで、3分で十分です。",
    sysReqTitle: "システム要件",
    sysReqCaption: "Brewnetシステム要件",
    thRequirement: "項目",
    thMinimum: "最小",
    thRecommended: "推奨",
    rowOs: "OS",
    rowOsMin: "macOS 12+ / Ubuntu 20.04+",
    rowOsRec: "最新安定版",
    rowNode: "Node.js",
    rowNodeMin: "20+",
    rowNodeRec: "22 LTS",
    rowDocker: "Docker",
    rowDockerMin: "27+",
    rowDockerRec: "最新版（未インストール時は自動インストール）",
    rowRam: "RAM",
    rowRamMin: "2 GB",
    rowRamRec: "4 GB+",
    rowDisk: "ディスク",
    rowDiskMin: "20 GB",
    rowDiskRec: "50 GB+（メディア使用時）",
    dockerNote:
      "インストール前にDockerは不要です \u2014 brewnet initが自動検出してインストールします。",
    curlTitle: "curl",
    curlDesc: "すべてを処理するワンライナーインストールスクリプト。",
    npmTitle: "npm（推奨）",
    npmDesc: "npmパッケージマネージャーでグローバルインストール。",
    wizardTitle: "7ステップインストールウィザード",
    postSetupTitle: "セットアップ後のコマンド",
    postSetupCommands: [
      { command: "brewnet status", description: "サービス状態を確認" },
      { command: "brewnet up", description: "全サービスを開始" },
      { command: "brewnet down", description: "全サービスを停止（データ保持）" },
      { command: "brewnet logs [service]", description: "サービスログを表示" },
      { command: "brewnet add <service>", description: "サービスを追加" },
      { command: "brewnet backup", description: "バックアップを作成" },
    ],
    uninstallTitle: "アンインストール",
    uninstallDesc:
      "すべてのBrewnetサービス、Dockerボリューム、プロジェクトファイルを削除します。フラグで削除範囲を制御できます。",
    uninstallCommands: [
      { command: "brewnet uninstall --dry-run", description: "削除対象をプレビュー（変更なし）" },
      { command: "brewnet uninstall", description: "対話式の完全削除" },
      { command: "brewnet uninstall --keep-data", description: "DB/ファイルボリュームを保持" },
      { command: "brewnet uninstall --keep-config", description: "プロジェクトディレクトリを保持、コンテナのみ停止" },
      { command: "brewnet uninstall --force", description: "確認プロンプトをスキップ" },
    ],
  },
  zh: {
    badge: "安装指南",
    titleLine1: "几分钟内",
    titleLine2: "即可开始",
    desc: "从安装到生产运行，3分钟足矣。",
    sysReqTitle: "系统要求",
    sysReqCaption: "Brewnet系统要求",
    thRequirement: "项目",
    thMinimum: "最低",
    thRecommended: "推荐",
    rowOs: "OS",
    rowOsMin: "macOS 12+ / Ubuntu 20.04+",
    rowOsRec: "最新稳定版",
    rowNode: "Node.js",
    rowNodeMin: "20+",
    rowNodeRec: "22 LTS",
    rowDocker: "Docker",
    rowDockerMin: "27+",
    rowDockerRec: "最新版（未安装时自动安装）",
    rowRam: "RAM",
    rowRamMin: "2 GB",
    rowRamRec: "4 GB+",
    rowDisk: "磁盘",
    rowDiskMin: "20 GB",
    rowDiskRec: "50 GB+（媒体使用时）",
    dockerNote:
      "安装前不需要Docker \u2014 brewnet init 会自动检测并安装。",
    curlTitle: "curl",
    curlDesc: "一行安装脚本，处理所有事项。",
    npmTitle: "npm（推荐）",
    npmDesc: "通过npm包管理器全局安装。",
    wizardTitle: "7步安装向导",
    postSetupTitle: "安装后命令",
    postSetupCommands: [
      { command: "brewnet status", description: "检查服务状态" },
      { command: "brewnet up", description: "启动所有服务" },
      { command: "brewnet down", description: "停止所有服务（数据保留）" },
      { command: "brewnet logs [service]", description: "查看服务日志" },
      { command: "brewnet add <service>", description: "添加服务" },
      { command: "brewnet backup", description: "创建备份" },
    ],
    uninstallTitle: "卸载",
    uninstallDesc:
      "移除所有Brewnet服务、Docker卷和项目文件。使用标志控制删除范围。",
    uninstallCommands: [
      { command: "brewnet uninstall --dry-run", description: "预览将被删除的内容（不做更改）" },
      { command: "brewnet uninstall", description: "完整交互式删除" },
      { command: "brewnet uninstall --keep-data", description: "保留数据库/文件卷" },
      { command: "brewnet uninstall --keep-config", description: "保留项目目录，仅停止容器" },
      { command: "brewnet uninstall --force", description: "跳过确认提示" },
    ],
  },
};
