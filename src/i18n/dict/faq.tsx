import type { Locale } from "../types";
import type { ReactNode } from "react";

interface FAQItem {
  q: string;
  a: ReactNode;
}

interface ErrorCode {
  code: string;
  http: string;
  desc: string;
}

interface FAQDict {
  sectionBadge: string;
  sectionTitleLine1: string;
  sectionTitleLine2: string;
  installTitle: string;
  usageTitle: string;
  troubleshootingTitle: string;
  errorCodesTitle: string;
  installItems: FAQItem[];
  usageItems: FAQItem[];
  troubleshootingItems: FAQItem[];
  errorCodes: ErrorCode[];
}

export const faqDict: Record<Locale, FAQDict> = {
  en: {
    sectionBadge: "FAQ",
    sectionTitleLine1: "Frequently asked",
    sectionTitleLine2: "questions",
    installTitle: "Install & Uninstall",
    usageTitle: "Usage & Operations",
    troubleshootingTitle: "Troubleshooting",
    errorCodesTitle: "Error Code Reference",
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
            <p style={{ marginTop: 10 }}>To remove the CLI binary itself:</p>
            <pre className="faq-pre">{`# If installed via npm
npm uninstall -g @brewnet/cli

# If installed via curl
sudo rm /usr/local/bin/brewnet
rm -rf ~/.brewnet/source`}</pre>
          </>
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
        q: "Where is the data stored?",
        a: (
          <p>All config and metadata are stored in <code className="faq-inline">~/.brewnet/</code>. Project directories (docker-compose.yml, app source, etc.) are located at <code className="faq-inline">~/brewnet/&lt;project-name&gt;/</code>.</p>
        ),
      },
    ],
    troubleshootingItems: [
      {
        q: "Docker is not installed when running brewnet init",
        a: (
          <>
            <p>Brewnet automatically attempts to install Docker if it&apos;s not found. If auto-installation fails, install manually:</p>
            <ul>
              <li><strong>macOS</strong>: Install <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener noreferrer">Docker Desktop for Mac</a></li>
              <li><strong>Ubuntu/Debian</strong>:</li>
            </ul>
            <pre className="faq-pre">{`curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER`}</pre>
            <p>Log out and back in after installation to apply docker group membership.</p>
          </>
        ),
      },
      {
        q: "Port is already in use (BN002)",
        a: (
          <>
            <p>Another program is using that port.</p>
            <pre className="faq-pre">{`# Check which process is using the port on macOS/Linux
lsof -i :80
lsof -i :8088

# Either stop that process or configure Brewnet to use a different port`}</pre>
            <p>Common conflicting services: Apache, Nginx, other Docker containers</p>
          </>
        ),
      },
      {
        q: "Cannot access the admin dashboard",
        a: (
          <>
            <p>Check the following in order:</p>
            <p>1. Verify services are running:</p>
            <pre className="faq-pre">brewnet status</pre>
            <p>2. Check if port 8088 is open:</p>
            <pre className="faq-pre">curl http://localhost:8088</pre>
            <p>3. Check Docker container status:</p>
            <pre className="faq-pre">{`docker ps -a | grep brewnet`}</pre>
            <p>4. Restart services:</p>
            <pre className="faq-pre">brewnet down && brewnet up</pre>
          </>
        ),
      },
      {
        q: "Quick Tunnel URL has changed",
        a: (
          <>
            <p>Quick Tunnel URLs are temporary and change when you restart the server. This is normal behavior. If you need a permanent URL, switch to Named Tunnel:</p>
            <pre className="faq-pre">brewnet domain connect</pre>
          </>
        ),
      },
      {
        q: "Domain is not accessible after Named Tunnel connection",
        a: (
          <>
            <p>Check the following:</p>
            <p>1. <strong>DNS propagation</strong>: DNS records can take up to several minutes to propagate.</p>
            <pre className="faq-pre">dig my-app.example.com CNAME</pre>
            <p>2. <strong>Cloudflare domain status</strong>: Verify the domain is Active (if Pending, nameserver propagation is still in progress).</p>
            <p>3. <strong>Tunnel status</strong>:</p>
            <pre className="faq-pre">brewnet domain tunnel status</pre>
            <p>4. <strong>Restart cloudflared container</strong>:</p>
            <pre className="faq-pre">brewnet domain tunnel restart</pre>
          </>
        ),
      },
      {
        q: 'Nextcloud shows "Access through untrusted domain" error',
        a: (
          <p>This occurs when the current access URL is not registered in Nextcloud&apos;s trusted domains. Brewnet automatically adds <code className="faq-inline">*.trycloudflare.com</code> to trusted domains, but additional configuration may be needed when using a custom domain.</p>
        ),
      },
      {
        q: "Jellyfin initial setup screen does not appear",
        a: (
          <>
            <p>The Jellyfin initial setup URL must use the following format:</p>
            <pre className="faq-pre">{`http://<host>:8096/web/#/wizard/start`}</pre>
            <p>Using the <code className="faq-inline">/web/#/home</code> path will not show the setup wizard.</p>
          </>
        ),
      },
      {
        q: "App deployment fails (BN006)",
        a: (
          <>
            <p>Common causes of deployment failure:</p>
            <ul>
              <li><strong>Dockerfile error</strong>: Verify a valid Dockerfile exists in the app directory</li>
              <li><strong>Build dependency issues</strong>: Check Docker build logs for specific errors</li>
            </ul>
            <pre className="faq-pre">{`brewnet logs <app-name>`}</pre>
            <ul>
              <li><strong>Health check failure</strong>: App starts but the <code className="faq-inline">/health</code> endpoint is not responding</li>
              <li><strong>Port mismatch</strong>: The port the app is listening on differs from the configured port</li>
            </ul>
          </>
        ),
      },
      {
        q: "Running out of disk space",
        a: (
          <>
            <p>Docker images and containers can consume significant disk space.</p>
            <pre className="faq-pre">{`# Check Docker disk usage
docker system df

# Clean up unused images (caution: may remove images you need)
docker image prune`}</pre>
            <p className="faq-warning"><code className="faq-inline">docker system prune</code> deletes all unused resources — use with caution. Never delete volumes containing important data.</p>
          </>
        ),
      },
      {
        q: "Gitea shows incorrect clone URL",
        a: (
          <p>Behind Traefik strip-prefix, Gitea may return URLs without the subpath based on <code className="faq-inline">X-Forwarded-Host</code> (e.g., missing <code className="faq-inline">/git</code> path). Within Brewnet, <code className="faq-inline">authedCloneUrl()</code> automatically generates the correct URL — do not use the <code className="faq-inline">clone_url</code> returned directly from the Gitea API.</p>
        ),
      },
    ],
    errorCodes: [
      { code: "BN001", http: "503", desc: "Docker daemon is not running" },
      { code: "BN002", http: "409", desc: "Port is already in use" },
      { code: "BN003", http: "500", desc: "SSL certificate issuance failed" },
      { code: "BN004", http: "401", desc: "Invalid license key" },
      { code: "BN005", http: "429", desc: "Rate limit exceeded" },
      { code: "BN006", http: "500", desc: "Build failed" },
      { code: "BN007", http: "400", desc: "Invalid Git repository" },
      { code: "BN008", http: "404", desc: "Resource not found" },
      { code: "BN009", http: "500", desc: "Database error" },
      { code: "BN010", http: "403", desc: "Pro plan required" },
    ],
  },
  ko: {
    sectionBadge: "FAQ",
    sectionTitleLine1: "자주 묻는",
    sectionTitleLine2: "질문",
    installTitle: "설치 · 삭제",
    usageTitle: "사용 · 운영",
    troubleshootingTitle: "문제 해결",
    errorCodesTitle: "에러 코드 참조",
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
            <p style={{ marginTop: 10 }}>CLI 바이너리 자체를 삭제하려면:</p>
            <pre className="faq-pre">{`# npm 설치인 경우
npm uninstall -g @brewnet/cli

# curl 설치인 경우
sudo rm /usr/local/bin/brewnet
rm -rf ~/.brewnet/source`}</pre>
          </>
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
        q: "데이터가 어디에 저장되나요?",
        a: (
          <p>모든 설정과 메타데이터는 <code className="faq-inline">~/.brewnet/</code>에 저장됩니다. 프로젝트 디렉토리(docker-compose.yml, 앱 소스 등)는 <code className="faq-inline">~/brewnet/&lt;project-name&gt;/</code>에 위치합니다.</p>
        ),
      },
    ],
    troubleshootingItems: [
      {
        q: "brewnet init 실행 시 Docker가 설치되어 있지 않다고 나옵니다",
        a: (
          <>
            <p>Brewnet은 Docker가 없으면 자동으로 설치를 시도합니다. 자동 설치가 실패하는 경우 수동으로 설치하세요.</p>
            <ul>
              <li><strong>macOS</strong>: <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener noreferrer">Docker Desktop for Mac</a> 설치</li>
              <li><strong>Ubuntu/Debian</strong>:</li>
            </ul>
            <pre className="faq-pre">{`curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER`}</pre>
            <p>설치 후 로그아웃/로그인하여 docker 그룹 적용</p>
          </>
        ),
      },
      {
        q: "포트가 이미 사용 중이라고 나옵니다 (BN002)",
        a: (
          <>
            <p>다른 프로그램이 해당 포트를 사용하고 있습니다.</p>
            <pre className="faq-pre">{`# macOS/Linux에서 포트 사용 프로세스 확인
lsof -i :80
lsof -i :8088

# 해당 프로세스를 종료하거나, Brewnet 설정에서 다른 포트 사용`}</pre>
            <p>주로 충돌하는 서비스: Apache, Nginx, 다른 Docker 컨테이너</p>
          </>
        ),
      },
      {
        q: "관리자 대시보드에 접속이 안 됩니다",
        a: (
          <>
            <p>다음을 순서대로 확인하세요.</p>
            <p>1. 서비스가 실행 중인지 확인:</p>
            <pre className="faq-pre">brewnet status</pre>
            <p>2. 포트 8088이 열려 있는지 확인:</p>
            <pre className="faq-pre">curl http://localhost:8088</pre>
            <p>3. Docker 컨테이너 상태 확인:</p>
            <pre className="faq-pre">{`docker ps -a | grep brewnet`}</pre>
            <p>4. 서비스 재시작:</p>
            <pre className="faq-pre">brewnet down && brewnet up</pre>
          </>
        ),
      },
      {
        q: "Quick Tunnel URL이 변경되었습니다",
        a: (
          <>
            <p>Quick Tunnel의 URL은 임시이며, 서버를 재시작하면 변경됩니다. 이는 정상적인 동작입니다. 영구 URL이 필요하다면 Named Tunnel로 전환하세요.</p>
            <pre className="faq-pre">brewnet domain connect</pre>
          </>
        ),
      },
      {
        q: "Named Tunnel 연결 후에도 도메인으로 접근이 안 됩니다",
        a: (
          <>
            <p>다음을 확인하세요.</p>
            <p>1. <strong>DNS 전파 대기</strong>: DNS 레코드가 전파되기까지 최대 수 분이 걸릴 수 있습니다.</p>
            <pre className="faq-pre">dig my-app.example.com CNAME</pre>
            <p>2. <strong>Cloudflare 도메인 상태</strong>: 도메인이 Active 상태인지 확인 (Pending이면 네임서버 전파 대기 중)</p>
            <p>3. <strong>터널 상태 확인</strong>:</p>
            <pre className="faq-pre">brewnet domain tunnel status</pre>
            <p>4. <strong>cloudflared 컨테이너 재시작</strong>:</p>
            <pre className="faq-pre">brewnet domain tunnel restart</pre>
          </>
        ),
      },
      {
        q: 'Nextcloud에 접속하면 "Access through untrusted domain" 오류가 나옵니다',
        a: (
          <p>Nextcloud의 trusted domains 설정에 현재 접속 URL이 등록되어 있지 않은 경우 발생합니다. Brewnet은 자동으로 <code className="faq-inline">*.trycloudflare.com</code>을 trusted domain에 추가하지만, 커스텀 도메인을 사용하는 경우 추가 설정이 필요할 수 있습니다.</p>
        ),
      },
      {
        q: "Jellyfin 초기 설정 화면이 나오지 않습니다",
        a: (
          <>
            <p>Jellyfin의 초기 설정 URL은 반드시 다음 형식을 사용해야 합니다.</p>
            <pre className="faq-pre">{`http://<host>:8096/web/#/wizard/start`}</pre>
            <p><code className="faq-inline">/web/#/home</code> 경로를 사용하면 초기 설정 마법사가 나타나지 않습니다.</p>
          </>
        ),
      },
      {
        q: "앱 배포가 실패합니다 (BN006)",
        a: (
          <>
            <p>배포 실패의 일반적인 원인:</p>
            <ul>
              <li><strong>Dockerfile 오류</strong>: 앱 디렉토리에 유효한 Dockerfile이 있는지 확인</li>
              <li><strong>빌드 의존성 문제</strong>: Docker 빌드 로그에서 구체적인 오류 확인</li>
            </ul>
            <pre className="faq-pre">{`brewnet logs <app-name>`}</pre>
            <ul>
              <li><strong>Health Check 실패</strong>: 앱이 시작은 되지만 <code className="faq-inline">/health</code> 엔드포인트가 응답하지 않는 경우</li>
              <li><strong>포트 불일치</strong>: 앱이 리스닝하는 포트와 설정된 포트가 다른 경우</li>
            </ul>
          </>
        ),
      },
      {
        q: "디스크 공간이 부족합니다",
        a: (
          <>
            <p>Docker 이미지와 컨테이너가 디스크 공간을 많이 차지할 수 있습니다.</p>
            <pre className="faq-pre">{`# Docker 디스크 사용량 확인
docker system df

# 사용하지 않는 이미지 정리 (주의: 필요한 이미지까지 삭제될 수 있음)
docker image prune`}</pre>
            <p className="faq-warning"><code className="faq-inline">docker system prune</code>은 모든 미사용 리소스를 삭제하므로 주의해서 사용하세요. 중요 데이터가 있는 볼륨은 절대 삭제하지 마세요.</p>
          </>
        ),
      },
      {
        q: "Gitea에서 clone URL이 잘못 표시됩니다",
        a: (
          <p>Traefik strip-prefix 뒤의 Gitea는 <code className="faq-inline">X-Forwarded-Host</code> 기반으로 subpath가 없는 URL을 반환할 수 있습니다 (예: <code className="faq-inline">/git</code> 경로 누락). Brewnet 내부에서는 <code className="faq-inline">authedCloneUrl()</code>이 올바른 URL을 자동 생성하므로, Gitea API에서 반환하는 <code className="faq-inline">clone_url</code>을 직접 사용하지 마세요.</p>
        ),
      },
    ],
    errorCodes: [
      { code: "BN001", http: "503", desc: "Docker 데몬이 실행되지 않음" },
      { code: "BN002", http: "409", desc: "포트가 이미 사용 중" },
      { code: "BN003", http: "500", desc: "SSL 인증서 발급 실패" },
      { code: "BN004", http: "401", desc: "유효하지 않은 라이선스 키" },
      { code: "BN005", http: "429", desc: "요청 속도 제한 초과" },
      { code: "BN006", http: "500", desc: "빌드 실패" },
      { code: "BN007", http: "400", desc: "유효하지 않은 Git 레포지토리" },
      { code: "BN008", http: "404", desc: "리소스를 찾을 수 없음" },
      { code: "BN009", http: "500", desc: "데이터베이스 오류" },
      { code: "BN010", http: "403", desc: "Pro 플랜이 필요한 기능" },
    ],
  },
  ja: {
    sectionBadge: "FAQ",
    sectionTitleLine1: "よくある",
    sectionTitleLine2: "質問",
    installTitle: "インストール・削除",
    usageTitle: "使用・運用",
    troubleshootingTitle: "トラブルシューティング",
    errorCodesTitle: "エラーコードリファレンス",
    installItems: [
      {
        q: "Brewnetのインストール方法は？",
        a: (
          <>
            <p>2つの方法があります:</p>
            <pre className="faq-pre">{`# 方法1: npm（推奨）
npm install -g @brewnet/cli

# 方法2: ソースからビルド
curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash`}</pre>
            <p>インストール後、<code className="faq-inline">brewnet init</code>でサーバーセットアップを開始します。</p>
          </>
        ),
      },
      {
        q: "アップデート方法は？",
        a: (
          <pre className="faq-pre">{`# npmでインストールした場合
npm update -g @brewnet/cli

# curlでインストールした場合（同じコマンドを再実行）
curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash`}</pre>
        ),
      },
      {
        q: "完全に削除するには？",
        a: (
          <>
            <pre className="faq-pre">{`brewnet uninstall            # 対話形式でアンインストール
brewnet uninstall --force    # 確認なしでアンインストール
brewnet uninstall --keep-data    # Dockerボリューム（DBなど）を保持
brewnet uninstall --keep-config  # 設定ファイルを保持、コンテナのみ削除`}</pre>
            <p>削除対象: Dockerコンテナ、ネットワーク、プロジェクトディレクトリ、<code className="faq-inline">~/.brewnet/projects/</code>メタデータ</p>
            <p style={{ marginTop: 10 }}>CLIバイナリ自体を削除するには:</p>
            <pre className="faq-pre">{`# npmでインストールした場合
npm uninstall -g @brewnet/cli

# curlでインストールした場合
sudo rm /usr/local/bin/brewnet
rm -rf ~/.brewnet/source`}</pre>
          </>
        ),
      },
      {
        q: "サービスの起動/停止方法は？",
        a: (
          <>
            <pre className="faq-pre">{`brewnet up                  # すべてのサービスを起動
brewnet down                # すべてのサービスを停止
brewnet down --volumes      # 停止 + データ削除
brewnet status              # 全体のステータスを確認
brewnet logs [service]      # サービスログを確認`}</pre>
            <p><code className="faq-inline">brewnet status --json</code>でJSON形式の出力も可能です。</p>
          </>
        ),
      },
    ],
    usageItems: [
      {
        q: "管理ダッシュボードへのアクセス方法は？",
        a: (
          <>
            <pre className="faq-pre">{`brewnet admin   # http://localhost:8088 を自動で開きます`}</pre>
            <p><code className="faq-inline">--port 9090</code>でポートを変更できます。<code className="faq-inline">--foreground</code>でデバッグモードで実行します。</p>
          </>
        ),
      },
      {
        q: "アプリの開発とデプロイ方法は？",
        a: (
          <>
            <pre className="faq-pre">{`brewnet create-app my-app                    # 対話形式で選択
brewnet create-app my-app --stack go-gin     # スタックを指定
brewnet create-app my-app --database postgres # データベースを指定`}</pre>
            <p>16種類のスタックに対応: Node.js (Express, NestJS, Next.js), Python (FastAPI, Flask, Django), Go (Gin, Echo, Fiber), Rust (Actix-web, Axum), Java (Spring), Kotlin (Spring Boot, Ktor)</p>
          </>
        ),
      },
      {
        q: "カスタムドメインの接続方法は？",
        a: (
          <>
            <pre className="faq-pre">{`brewnet domain connect my-app --domain api.example.com
brewnet domain tunnel status    # トンネルの状態を確認
brewnet domain tunnel restart   # トンネルを再起動`}</pre>
            <p>Cloudflare APIトークン（Zone:Read、DNS:Edit、Tunnel:Edit権限）が必要です。</p>
          </>
        ),
      },
      {
        q: "再起動後にサービスは停止しますか？",
        a: (
          <>
            <p>いいえ。すべてのコンテナは<code className="faq-inline">restart: unless-stopped</code>ポリシーで設定されており、再起動後にDockerが起動すると自動的に復旧します。</p>
            <p>ただし、<code className="faq-inline">brewnet down</code>で手動で停止した場合、再起動後も停止状態のままです。Docker Desktop（macOS）では、Settings → General → &quot;Start Docker Desktop when you sign in&quot;をチェックしてください。</p>
          </>
        ),
      },
      {
        q: "バックアップ/リストア方法は？",
        a: (
          <>
            <pre className="faq-pre">{`brewnet backup              # バックアップを作成
brewnet backup --list       # バックアップ一覧を確認
brewnet restore <backup-id>          # リストア
brewnet restore <backup-id> --force  # 確認なしでリストア`}</pre>
            <p>バックアップの保存先: <code className="faq-inline">~/.brewnet/backups/</code>（.tar.gz形式）</p>
          </>
        ),
      },
      {
        q: "データはどこに保存されますか？",
        a: (
          <p>すべての設定とメタデータは<code className="faq-inline">~/.brewnet/</code>に保存されます。プロジェクトディレクトリ（docker-compose.yml、アプリソースなど）は<code className="faq-inline">~/brewnet/&lt;project-name&gt;/</code>にあります。</p>
        ),
      },
    ],
    troubleshootingItems: [
      {
        q: "brewnet init実行時にDockerがインストールされていないと表示されます",
        a: (
          <>
            <p>BrewnetはDockerが見つからない場合、自動的にインストールを試みます。自動インストールに失敗した場合は、手動でインストールしてください。</p>
            <ul>
              <li><strong>macOS</strong>: <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener noreferrer">Docker Desktop for Mac</a>をインストール</li>
              <li><strong>Ubuntu/Debian</strong>:</li>
            </ul>
            <pre className="faq-pre">{`curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER`}</pre>
            <p>インストール後、ログアウト/ログインしてdockerグループを適用してください。</p>
          </>
        ),
      },
      {
        q: "ポートが既に使用中と表示されます（BN002）",
        a: (
          <>
            <p>別のプログラムがそのポートを使用しています。</p>
            <pre className="faq-pre">{`# macOS/Linuxでポートを使用しているプロセスを確認
lsof -i :80
lsof -i :8088

# そのプロセスを停止するか、Brewnetの設定で別のポートを使用`}</pre>
            <p>よく競合するサービス: Apache、Nginx、他のDockerコンテナ</p>
          </>
        ),
      },
      {
        q: "管理ダッシュボードにアクセスできません",
        a: (
          <>
            <p>以下を順番に確認してください。</p>
            <p>1. サービスが実行中か確認:</p>
            <pre className="faq-pre">brewnet status</pre>
            <p>2. ポート8088が開いているか確認:</p>
            <pre className="faq-pre">curl http://localhost:8088</pre>
            <p>3. Dockerコンテナの状態を確認:</p>
            <pre className="faq-pre">{`docker ps -a | grep brewnet`}</pre>
            <p>4. サービスを再起動:</p>
            <pre className="faq-pre">brewnet down && brewnet up</pre>
          </>
        ),
      },
      {
        q: "Quick TunnelのURLが変更されました",
        a: (
          <>
            <p>Quick TunnelのURLは一時的なもので、サーバーを再起動すると変更されます。これは正常な動作です。永続的なURLが必要な場合は、Named Tunnelに切り替えてください。</p>
            <pre className="faq-pre">brewnet domain connect</pre>
          </>
        ),
      },
      {
        q: "Named Tunnel接続後もドメインにアクセスできません",
        a: (
          <>
            <p>以下を確認してください。</p>
            <p>1. <strong>DNS伝播の待機</strong>: DNSレコードが伝播するまで数分かかる場合があります。</p>
            <pre className="faq-pre">dig my-app.example.com CNAME</pre>
            <p>2. <strong>Cloudflareドメインの状態</strong>: ドメインがActive状態であることを確認（Pendingの場合、ネームサーバーの伝播待ち）</p>
            <p>3. <strong>トンネルの状態を確認</strong>:</p>
            <pre className="faq-pre">brewnet domain tunnel status</pre>
            <p>4. <strong>cloudflaredコンテナを再起動</strong>:</p>
            <pre className="faq-pre">brewnet domain tunnel restart</pre>
          </>
        ),
      },
      {
        q: 'Nextcloudで「Access through untrusted domain」エラーが表示されます',
        a: (
          <p>Nextcloudのtrusted domains設定に現在のアクセスURLが登録されていない場合に発生します。Brewnetは自動的に<code className="faq-inline">*.trycloudflare.com</code>をtrusted domainに追加しますが、カスタムドメインを使用する場合は追加の設定が必要になることがあります。</p>
        ),
      },
      {
        q: "Jellyfinの初期設定画面が表示されません",
        a: (
          <>
            <p>Jellyfinの初期設定URLは必ず以下の形式を使用してください。</p>
            <pre className="faq-pre">{`http://<host>:8096/web/#/wizard/start`}</pre>
            <p><code className="faq-inline">/web/#/home</code>パスを使用すると、初期設定ウィザードが表示されません。</p>
          </>
        ),
      },
      {
        q: "アプリのデプロイが失敗します（BN006）",
        a: (
          <>
            <p>デプロイ失敗の一般的な原因:</p>
            <ul>
              <li><strong>Dockerfileエラー</strong>: アプリディレクトリに有効なDockerfileが存在するか確認</li>
              <li><strong>ビルド依存関係の問題</strong>: Dockerビルドログで具体的なエラーを確認</li>
            </ul>
            <pre className="faq-pre">{`brewnet logs <app-name>`}</pre>
            <ul>
              <li><strong>ヘルスチェック失敗</strong>: アプリは起動するが<code className="faq-inline">/health</code>エンドポイントが応答しない場合</li>
              <li><strong>ポート不一致</strong>: アプリがリッスンしているポートと設定されたポートが異なる場合</li>
            </ul>
          </>
        ),
      },
      {
        q: "ディスク容量が不足しています",
        a: (
          <>
            <p>Dockerイメージとコンテナはディスク容量を大量に消費する可能性があります。</p>
            <pre className="faq-pre">{`# Dockerディスク使用量を確認
docker system df

# 未使用のイメージをクリーンアップ（注意: 必要なイメージも削除される可能性があります）
docker image prune`}</pre>
            <p className="faq-warning"><code className="faq-inline">docker system prune</code>は未使用のリソースをすべて削除するため、注意して使用してください。重要なデータを含むボリュームは絶対に削除しないでください。</p>
          </>
        ),
      },
      {
        q: "GiteaでクローンURLが正しく表示されません",
        a: (
          <p>Traefikのstrip-prefix配下のGiteaは、<code className="faq-inline">X-Forwarded-Host</code>に基づいてサブパスのないURLを返す場合があります（例: <code className="faq-inline">/git</code>パスの欠落）。Brewnet内部では<code className="faq-inline">authedCloneUrl()</code>が正しいURLを自動生成するため、Gitea APIから返される<code className="faq-inline">clone_url</code>を直接使用しないでください。</p>
        ),
      },
    ],
    errorCodes: [
      { code: "BN001", http: "503", desc: "Dockerデーモンが実行されていません" },
      { code: "BN002", http: "409", desc: "ポートが既に使用中です" },
      { code: "BN003", http: "500", desc: "SSL証明書の発行に失敗しました" },
      { code: "BN004", http: "401", desc: "無効なライセンスキーです" },
      { code: "BN005", http: "429", desc: "レート制限を超過しました" },
      { code: "BN006", http: "500", desc: "ビルドに失敗しました" },
      { code: "BN007", http: "400", desc: "無効なGitリポジトリです" },
      { code: "BN008", http: "404", desc: "リソースが見つかりません" },
      { code: "BN009", http: "500", desc: "データベースエラー" },
      { code: "BN010", http: "403", desc: "Proプランが必要な機能です" },
    ],
  },
  zh: {
    sectionBadge: "FAQ",
    sectionTitleLine1: "常见",
    sectionTitleLine2: "问题",
    installTitle: "安装 · 卸载",
    usageTitle: "使用 · 运维",
    troubleshootingTitle: "故障排除",
    errorCodesTitle: "错误代码参考",
    installItems: [
      {
        q: "如何安装Brewnet？",
        a: (
          <>
            <p>有两种方法：</p>
            <pre className="faq-pre">{`# 方法1: npm（推荐）
npm install -g @brewnet/cli

# 方法2: 从源码构建
curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash`}</pre>
            <p>安装后，运行<code className="faq-inline">brewnet init</code>开始服务器设置。</p>
          </>
        ),
      },
      {
        q: "如何更新？",
        a: (
          <pre className="faq-pre">{`# 通过npm安装的情况
npm update -g @brewnet/cli

# 通过curl安装的情况（重新执行相同命令）
curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash`}</pre>
        ),
      },
      {
        q: "如何完全卸载？",
        a: (
          <>
            <pre className="faq-pre">{`brewnet uninstall            # 交互式卸载
brewnet uninstall --force    # 无需确认直接卸载
brewnet uninstall --keep-data    # 保留Docker卷（数据库等）
brewnet uninstall --keep-config  # 保留配置文件，仅删除容器`}</pre>
            <p>删除对象：Docker容器、网络、项目目录、<code className="faq-inline">~/.brewnet/projects/</code>元数据</p>
            <p style={{ marginTop: 10 }}>要删除CLI二进制文件本身：</p>
            <pre className="faq-pre">{`# 通过npm安装的情况
npm uninstall -g @brewnet/cli

# 通过curl安装的情况
sudo rm /usr/local/bin/brewnet
rm -rf ~/.brewnet/source`}</pre>
          </>
        ),
      },
      {
        q: "如何启动/停止服务？",
        a: (
          <>
            <pre className="faq-pre">{`brewnet up                  # 启动所有服务
brewnet down                # 停止所有服务
brewnet down --volumes      # 停止 + 删除数据
brewnet status              # 查看整体状态
brewnet logs [service]      # 查看服务日志`}</pre>
            <p>也可以使用<code className="faq-inline">brewnet status --json</code>获取JSON格式的输出。</p>
          </>
        ),
      },
    ],
    usageItems: [
      {
        q: "如何访问管理仪表盘？",
        a: (
          <>
            <pre className="faq-pre">{`brewnet admin   # 自动打开 http://localhost:8088`}</pre>
            <p>使用<code className="faq-inline">--port 9090</code>更改端口。使用<code className="faq-inline">--foreground</code>以调试模式运行。</p>
          </>
        ),
      },
      {
        q: "如何开发和部署应用？",
        a: (
          <>
            <pre className="faq-pre">{`brewnet create-app my-app                    # 交互式选择
brewnet create-app my-app --stack go-gin     # 指定技术栈
brewnet create-app my-app --database postgres # 指定数据库`}</pre>
            <p>支持16种技术栈：Node.js (Express, NestJS, Next.js)、Python (FastAPI, Flask, Django)、Go (Gin, Echo, Fiber)、Rust (Actix-web, Axum)、Java (Spring)、Kotlin (Spring Boot, Ktor)</p>
          </>
        ),
      },
      {
        q: "如何连接自定义域名？",
        a: (
          <>
            <pre className="faq-pre">{`brewnet domain connect my-app --domain api.example.com
brewnet domain tunnel status    # 查看隧道状态
brewnet domain tunnel restart   # 重启隧道`}</pre>
            <p>需要具有Zone:Read、DNS:Edit和Tunnel:Edit权限的Cloudflare API令牌。</p>
          </>
        ),
      },
      {
        q: "重启后服务会停止吗？",
        a: (
          <>
            <p>不会。所有容器均配置了<code className="faq-inline">restart: unless-stopped</code>策略，重启后Docker启动时会自动恢复。</p>
            <p>但是，如果您使用<code className="faq-inline">brewnet down</code>手动停止了服务，重启后仍将保持停止状态。在Docker Desktop（macOS）上，请检查Settings → General → &quot;Start Docker Desktop when you sign in&quot;。</p>
          </>
        ),
      },
      {
        q: "如何备份和恢复？",
        a: (
          <>
            <pre className="faq-pre">{`brewnet backup              # 创建备份
brewnet backup --list       # 查看备份列表
brewnet restore <backup-id>          # 恢复
brewnet restore <backup-id> --force  # 无需确认直接恢复`}</pre>
            <p>备份位置：<code className="faq-inline">~/.brewnet/backups/</code>（.tar.gz格式）</p>
          </>
        ),
      },
      {
        q: "数据存储在哪里？",
        a: (
          <p>所有配置和元数据存储在<code className="faq-inline">~/.brewnet/</code>中。项目目录（docker-compose.yml、应用源码等）位于<code className="faq-inline">~/brewnet/&lt;project-name&gt;/</code>。</p>
        ),
      },
    ],
    troubleshootingItems: [
      {
        q: "运行brewnet init时提示Docker未安装",
        a: (
          <>
            <p>Brewnet在未找到Docker时会自动尝试安装。如果自动安装失败，请手动安装。</p>
            <ul>
              <li><strong>macOS</strong>：安装<a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener noreferrer">Docker Desktop for Mac</a></li>
              <li><strong>Ubuntu/Debian</strong>：</li>
            </ul>
            <pre className="faq-pre">{`curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER`}</pre>
            <p>安装后注销并重新登录以应用docker组权限。</p>
          </>
        ),
      },
      {
        q: "提示端口已被占用（BN002）",
        a: (
          <>
            <p>其他程序正在使用该端口。</p>
            <pre className="faq-pre">{`# 在macOS/Linux上查看占用端口的进程
lsof -i :80
lsof -i :8088

# 停止该进程，或在Brewnet设置中使用其他端口`}</pre>
            <p>常见冲突服务：Apache、Nginx、其他Docker容器</p>
          </>
        ),
      },
      {
        q: "无法访问管理仪表盘",
        a: (
          <>
            <p>请按以下顺序检查。</p>
            <p>1. 确认服务正在运行：</p>
            <pre className="faq-pre">brewnet status</pre>
            <p>2. 检查端口8088是否开放：</p>
            <pre className="faq-pre">curl http://localhost:8088</pre>
            <p>3. 检查Docker容器状态：</p>
            <pre className="faq-pre">{`docker ps -a | grep brewnet`}</pre>
            <p>4. 重启服务：</p>
            <pre className="faq-pre">brewnet down && brewnet up</pre>
          </>
        ),
      },
      {
        q: "Quick Tunnel URL已更改",
        a: (
          <>
            <p>Quick Tunnel的URL是临时的，重启服务器后会发生变化。这是正常行为。如果需要永久URL，请切换到Named Tunnel。</p>
            <pre className="faq-pre">brewnet domain connect</pre>
          </>
        ),
      },
      {
        q: "Named Tunnel连接后仍无法通过域名访问",
        a: (
          <>
            <p>请检查以下内容。</p>
            <p>1. <strong>DNS传播等待</strong>：DNS记录传播可能需要几分钟时间。</p>
            <pre className="faq-pre">dig my-app.example.com CNAME</pre>
            <p>2. <strong>Cloudflare域名状态</strong>：确认域名为Active状态（如果是Pending，则域名服务器传播仍在进行中）。</p>
            <p>3. <strong>隧道状态</strong>：</p>
            <pre className="faq-pre">brewnet domain tunnel status</pre>
            <p>4. <strong>重启cloudflared容器</strong>：</p>
            <pre className="faq-pre">brewnet domain tunnel restart</pre>
          </>
        ),
      },
      {
        q: 'Nextcloud显示"Access through untrusted domain"错误',
        a: (
          <p>当前访问URL未在Nextcloud的trusted domains中注册时会出现此错误。Brewnet会自动将<code className="faq-inline">*.trycloudflare.com</code>添加到trusted domain，但使用自定义域名时可能需要额外配置。</p>
        ),
      },
      {
        q: "Jellyfin初始设置页面未显示",
        a: (
          <>
            <p>Jellyfin的初始设置URL必须使用以下格式。</p>
            <pre className="faq-pre">{`http://<host>:8096/web/#/wizard/start`}</pre>
            <p>使用<code className="faq-inline">/web/#/home</code>路径将不会显示初始设置向导。</p>
          </>
        ),
      },
      {
        q: "应用部署失败（BN006）",
        a: (
          <>
            <p>部署失败的常见原因：</p>
            <ul>
              <li><strong>Dockerfile错误</strong>：确认应用目录中存在有效的Dockerfile</li>
              <li><strong>构建依赖问题</strong>：检查Docker构建日志中的具体错误</li>
            </ul>
            <pre className="faq-pre">{`brewnet logs <app-name>`}</pre>
            <ul>
              <li><strong>健康检查失败</strong>：应用已启动但<code className="faq-inline">/health</code>端点未响应</li>
              <li><strong>端口不匹配</strong>：应用监听的端口与配置的端口不同</li>
            </ul>
          </>
        ),
      },
      {
        q: "磁盘空间不足",
        a: (
          <>
            <p>Docker镜像和容器可能会占用大量磁盘空间。</p>
            <pre className="faq-pre">{`# 查看Docker磁盘使用情况
docker system df

# 清理未使用的镜像（注意：可能会删除您需要的镜像）
docker image prune`}</pre>
            <p className="faq-warning"><code className="faq-inline">docker system prune</code>会删除所有未使用的资源，请谨慎使用。切勿删除包含重要数据的卷。</p>
          </>
        ),
      },
      {
        q: "Gitea中克隆URL显示不正确",
        a: (
          <p>在Traefik strip-prefix后面的Gitea可能会基于<code className="faq-inline">X-Forwarded-Host</code>返回不含子路径的URL（例如：缺少<code className="faq-inline">/git</code>路径）。在Brewnet内部，<code className="faq-inline">authedCloneUrl()</code>会自动生成正确的URL，请不要直接使用Gitea API返回的<code className="faq-inline">clone_url</code>。</p>
        ),
      },
    ],
    errorCodes: [
      { code: "BN001", http: "503", desc: "Docker守护进程未运行" },
      { code: "BN002", http: "409", desc: "端口已被占用" },
      { code: "BN003", http: "500", desc: "SSL证书签发失败" },
      { code: "BN004", http: "401", desc: "无效的许可证密钥" },
      { code: "BN005", http: "429", desc: "超过速率限制" },
      { code: "BN006", http: "500", desc: "构建失败" },
      { code: "BN007", http: "400", desc: "无效的Git仓库" },
      { code: "BN008", http: "404", desc: "资源未找到" },
      { code: "BN009", http: "500", desc: "数据库错误" },
      { code: "BN010", http: "403", desc: "需要Pro计划" },
    ],
  },
};
