import type { Locale } from "../types";
import type { ReactNode } from "react";

interface FAQItem {
  q: string;
  a: ReactNode;
}

interface FAQDict {
  sectionBadge: string;
  sectionTitleLine1: string;
  sectionTitleLine2: string;
  installTitle: string;
  usageTitle: string;
  installItems: FAQItem[];
  usageItems: FAQItem[];
}

export const faqDict: Record<Locale, FAQDict> = {
  en: {
    sectionBadge: "FAQ",
    sectionTitleLine1: "Frequently asked",
    sectionTitleLine2: "questions",
    installTitle: "Install & Uninstall",
    usageTitle: "Usage & Operations",
    installItems: [
      {
        q: "How do I install Brewnet?",
        a: (
          <>
            <p>There are two methods:</p>
            <pre className="faq-pre">{`# Method 1: npm (recommended)
npm install -g @brewnet/cli

# Method 2: Build from source
curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash`}</pre>
            <p>After installation, run <code className="faq-inline">brewnet init</code> to start server setup.</p>
          </>
        ),
      },
      {
        q: "What are the system requirements?",
        a: (
          <>
            <ul>
              <li>Node.js 20+</li>
              <li>Docker 24+ (auto-installed during <code className="faq-inline">brewnet init</code> if missing)</li>
              <li>macOS 12+ or Linux (Ubuntu/Debian/CentOS)</li>
              <li>RAM 2GB minimum (4GB+ recommended)</li>
              <li>Disk 20GB+</li>
            </ul>
          </>
        ),
      },
      {
        q: "Does it work on Windows?",
        a: <p>No. Currently only macOS and Linux are supported.</p>,
      },
      {
        q: "How do I update?",
        a: (
          <pre className="faq-pre">{`# If installed via npm
npm update -g @brewnet/cli

# If installed via curl (re-run the same command)
curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash`}</pre>
        ),
      },
      {
        q: "How do I completely uninstall?",
        a: (
          <>
            <pre className="faq-pre">{`brewnet uninstall            # Interactive uninstall
brewnet uninstall --force    # Uninstall without confirmation
brewnet uninstall --keep-data    # Preserve Docker volumes (DB, etc.)
brewnet uninstall --keep-config  # Keep config files, remove containers only`}</pre>
            <p>Removed items: Docker containers, networks, project directories, <code className="faq-inline">~/.brewnet/projects/</code> metadata</p>
          </>
        ),
      },
      {
        q: "How do I remove the CLI itself?",
        a: (
          <pre className="faq-pre">{`# If installed via npm
npm uninstall -g @brewnet/cli

# If installed via curl
sudo rm /usr/local/bin/brewnet
rm -rf ~/.brewnet/source`}</pre>
        ),
      },
      {
        q: "How do I start/stop services?",
        a: (
          <>
            <pre className="faq-pre">{`brewnet up                  # Start all services
brewnet down                # Stop all services
brewnet down --volumes      # Stop + delete data
brewnet status              # Check overall status
brewnet logs [service]      # View service logs`}</pre>
            <p>You can also use <code className="faq-inline">brewnet status --json</code> for JSON-formatted output.</p>
          </>
        ),
      },
    ],
    usageItems: [
      {
        q: "How do I access the admin dashboard?",
        a: (
          <>
            <pre className="faq-pre">{`brewnet admin   # Automatically opens http://localhost:8088`}</pre>
            <p>Use <code className="faq-inline">--port 9090</code> to change the port. Use <code className="faq-inline">--foreground</code> for debug mode.</p>
          </>
        ),
      },
      {
        q: "How do I develop and deploy an app?",
        a: (
          <>
            <pre className="faq-pre">{`brewnet create-app my-app                    # Interactive selection
brewnet create-app my-app --stack go-gin     # Specify stack
brewnet create-app my-app --database postgres # Specify database`}</pre>
            <p>16 stacks supported: Node.js (Express, NestJS, Next.js), Python (FastAPI, Flask, Django), Go (Gin, Echo, Fiber), Rust (Actix-web, Axum), Java (Spring), Kotlin (Spring Boot, Ktor)</p>
          </>
        ),
      },
      {
        q: "How do I connect a custom domain?",
        a: (
          <>
            <pre className="faq-pre">{`brewnet domain connect my-app --domain api.example.com
brewnet domain tunnel status    # Check tunnel status
brewnet domain tunnel restart   # Restart tunnel`}</pre>
            <p>A Cloudflare API Token with Zone:Read, DNS:Edit, and Tunnel:Edit permissions is required.</p>
          </>
        ),
      },
      {
        q: "Do services stop after a reboot?",
        a: (
          <>
            <p>No. All containers are configured with the <code className="faq-inline">restart: unless-stopped</code> policy, so they automatically recover once Docker starts after a reboot.</p>
            <p>However, if you manually stopped services with <code className="faq-inline">brewnet down</code>, they remain stopped after a reboot. On Docker Desktop (macOS), check Settings &rarr; General &rarr; &quot;Start Docker Desktop when you sign in&quot;.</p>
          </>
        ),
      },
      {
        q: "How do I backup and restore?",
        a: (
          <>
            <pre className="faq-pre">{`brewnet backup              # Create a backup
brewnet backup --list       # List backups
brewnet restore <backup-id>          # Restore
brewnet restore <backup-id> --force  # Restore without confirmation`}</pre>
            <p>Backup location: <code className="faq-inline">~/.brewnet/backups/</code> (.tar.gz format)</p>
          </>
        ),
      },
      {
        q: "Troubleshooting",
        a: (
          <>
            <p><strong>Port conflict:</strong> During <code className="faq-inline">brewnet init</code>, a warning is shown if ports 80, 443, etc. are in use. Check with <code className="faq-inline">lsof -i :80</code>. When creating apps, free ports are automatically assigned.</p>
            <p><strong>Docker not installed:</strong> <code className="faq-inline">brewnet init</code> attempts automatic installation. It uses Homebrew on macOS and the official Docker install script on Linux.</p>
            <p><strong>Command errors:</strong> Check the install path with <code className="faq-inline">which brewnet</code>. If both curl and npm installs exist, conflicts may occur — use only one method.</p>
          </>
        ),
      },
      {
        q: "Where is the data stored?",
        a: (
          <p>All config and metadata are stored in <code className="faq-inline">~/.brewnet/</code>. Project directories (docker-compose.yml, app source, etc.) are located at <code className="faq-inline">~/brewnet/&lt;project-name&gt;/</code>.</p>
        ),
      },
    ],
  },
  ko: {
    sectionBadge: "FAQ",
    sectionTitleLine1: "자주 묻는",
    sectionTitleLine2: "질문",
    installTitle: "설치 · 삭제",
    usageTitle: "사용 · 운영",
    installItems: [
      {
        q: "설치 방법이 뭔가요?",
        a: (
          <>
            <p>두 가지 방법이 있습니다:</p>
            <pre className="faq-pre">{`# 방법 1: npm (권장)
npm install -g @brewnet/cli

# 방법 2: 소스 빌드
curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash`}</pre>
            <p>설치 후 <code className="faq-inline">brewnet init</code>으로 서버 세팅을 시작합니다.</p>
          </>
        ),
      },
      {
        q: "설치 요구사항은?",
        a: (
          <>
            <ul>
              <li>Node.js 20+</li>
              <li>Docker 24+ (없으면 <code className="faq-inline">brewnet init</code> 시 자동 설치)</li>
              <li>macOS 12+ 또는 Linux (Ubuntu/Debian/CentOS)</li>
              <li>RAM 2GB 이상 (4GB+ 권장)</li>
              <li>디스크 20GB+</li>
            </ul>
          </>
        ),
      },
      {
        q: "Windows에서 사용 가능한가요?",
        a: <p>아니요. 현재 macOS와 Linux만 지원합니다.</p>,
      },
      {
        q: "업데이트하려면?",
        a: (
          <pre className="faq-pre">{`# npm 설치인 경우
npm update -g @brewnet/cli

# curl 설치인 경우 (같은 명령어 재실행)
curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash`}</pre>
        ),
      },
      {
        q: "완전히 제거하려면?",
        a: (
          <>
            <pre className="faq-pre">{`brewnet uninstall            # 대화형 제거
brewnet uninstall --force    # 확인 없이 제거
brewnet uninstall --keep-data    # Docker 볼륨(DB 등) 보존
brewnet uninstall --keep-config  # 설정 파일 보존, 컨테이너만 제거`}</pre>
            <p>제거 대상: Docker 컨테이너, 네트워크, 프로젝트 디렉토리, <code className="faq-inline">~/.brewnet/projects/</code> 메타데이터</p>
          </>
        ),
      },
      {
        q: "CLI 자체를 삭제하려면?",
        a: (
          <pre className="faq-pre">{`# npm 설치인 경우
npm uninstall -g @brewnet/cli

# curl 설치인 경우
sudo rm /usr/local/bin/brewnet
rm -rf ~/.brewnet/source`}</pre>
        ),
      },
      {
        q: "서비스를 시작/중지하려면?",
        a: (
          <>
            <pre className="faq-pre">{`brewnet up                  # 모든 서비스 시작
brewnet down                # 모든 서비스 중지
brewnet down --volumes      # 중지 + 데이터 삭제
brewnet status              # 전체 상태 확인
brewnet logs [service]      # 서비스 로그 확인`}</pre>
            <p><code className="faq-inline">brewnet status --json</code>으로 JSON 형식 출력도 가능합니다.</p>
          </>
        ),
      },
    ],
    usageItems: [
      {
        q: "관리 대시보드는 어떻게 접속하나요?",
        a: (
          <>
            <pre className="faq-pre">{`brewnet admin   # http://localhost:8088 자동 열림`}</pre>
            <p><code className="faq-inline">--port 9090</code> 옵션으로 포트 변경 가능. <code className="faq-inline">--foreground</code>로 디버깅 모드 실행.</p>
          </>
        ),
      },
      {
        q: "앱을 개발하고 배포하려면?",
        a: (
          <>
            <pre className="faq-pre">{`brewnet create-app my-app                    # 대화형 선택
brewnet create-app my-app --stack go-gin     # 스택 지정
brewnet create-app my-app --database postgres # DB 지정`}</pre>
            <p>16개 스택 지원: Node.js (Express, NestJS, Next.js), Python (FastAPI, Flask, Django), Go (Gin, Echo, Fiber), Rust (Actix-web, Axum), Java (Spring), Kotlin (Spring Boot, Ktor)</p>
          </>
        ),
      },
      {
        q: "커스텀 도메인을 연결하려면?",
        a: (
          <>
            <pre className="faq-pre">{`brewnet domain connect my-app --domain api.example.com
brewnet domain tunnel status    # 터널 상태 확인
brewnet domain tunnel restart   # 터널 재시작`}</pre>
            <p>Cloudflare API Token (Zone:Read, DNS:Edit, Tunnel:Edit 권한)이 필요합니다.</p>
          </>
        ),
      },
      {
        q: "재부팅하면 서비스가 꺼지나요?",
        a: (
          <>
            <p>아니요. 모든 컨테이너는 <code className="faq-inline">restart: unless-stopped</code> 정책으로 설정되어, 재부팅 후 Docker가 시작되면 자동 복구됩니다.</p>
            <p>단, <code className="faq-inline">brewnet down</code>으로 직접 중지한 경우에는 재부팅 후에도 중지 상태를 유지합니다. Docker Desktop(macOS)은 Settings → General → &quot;Start Docker Desktop when you sign in&quot;을 체크하세요.</p>
          </>
        ),
      },
      {
        q: "백업/복원은 어떻게 하나요?",
        a: (
          <>
            <pre className="faq-pre">{`brewnet backup              # 백업 생성
brewnet backup --list       # 백업 목록 확인
brewnet restore <backup-id>          # 복원
brewnet restore <backup-id> --force  # 확인 없이 복원`}</pre>
            <p>백업 위치: <code className="faq-inline">~/.brewnet/backups/</code> (.tar.gz 형식)</p>
          </>
        ),
      },
      {
        q: "트러블슈팅",
        a: (
          <>
            <p><strong>포트 충돌:</strong> <code className="faq-inline">brewnet init</code> 시 포트 80, 443 등이 사용 중이면 경고가 표시됩니다. <code className="faq-inline">lsof -i :80</code>으로 확인하세요. 앱 생성 시에는 자동으로 빈 포트를 할당합니다.</p>
            <p><strong>Docker 미설치:</strong> <code className="faq-inline">brewnet init</code> 실행 시 자동 설치를 시도합니다. macOS는 Homebrew, Linux는 공식 Docker 설치 스크립트를 사용합니다.</p>
            <p><strong>명령어 오류:</strong> <code className="faq-inline">which brewnet</code>으로 설치 경로를 확인하세요. curl과 npm을 모두 설치한 경우 충돌할 수 있으니 하나만 사용하세요.</p>
          </>
        ),
      },
      {
        q: "데이터가 어디에 저장되나요?",
        a: (
          <p>모든 설정과 메타데이터는 <code className="faq-inline">~/.brewnet/</code>에 저장됩니다. 프로젝트 디렉토리(docker-compose.yml, 앱 소스 등)는 <code className="faq-inline">~/brewnet/&lt;project-name&gt;/</code>에 위치합니다.</p>
        ),
      },
    ],
  },
};
