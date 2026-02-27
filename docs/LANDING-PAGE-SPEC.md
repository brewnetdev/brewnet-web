# Brewnet Landing Page — Content Update Spec v2.2

> **목적**: 개발자가 이 문서만 보고 `public/landing/` 랜딩 페이지를 업데이트할 수 있는 콘텐츠 명세서
>
> **대상 파일**: `public/landing/index.html`, `public/landing/script.js`, `public/landing/styles.css`
>
> **원칙**: 기존 HTML 구조와 CSS 디자인 유지. 콘텐츠(텍스트, 링크, 데이터)만 변경하고, 신규 섹션 3개 추가.

---

## Table of Contents

1. [GitHub URL 일괄 변경](#1-github-url-일괄-변경)
2. [Hero 섹션](#2-hero-섹션)
3. [Stats 섹션](#3-stats-섹션)
4. [Features 섹션](#4-features-섹션)
5. [Usage (How It Works) 섹션](#5-usage-how-it-works-섹션)
6. [Services 섹션](#6-services-섹션)
7. [NEW — Server Catalog (서버 프로그램 목록)](#7-new--server-catalog-서버-프로그램-목록)
8. [NEW — Installation Manual](#8-new--installation-manual)
9. [Pricing 섹션](#9-pricing-섹션)
10. [Contact 섹션](#10-contact-섹션)
11. [NEW — Developer Contact Form](#11-new--developer-contact-form)
12. [Footer](#12-footer)
13. [script.js 수정사항](#13-scriptjs-수정사항)
14. [신규 CSS 필요사항](#14-신규-css-필요사항)
15. [구현 체크리스트](#15-구현-체크리스트)

---

## 1. GitHub URL 일괄 변경

모든 `github.com/codevillain/brewnet` → `github.com/claude-code-expert/brewnet`

| 위치 (index.html) | 현재 | 변경 |
|---|---|---|
| line 55 — Hero GitHub 버튼 | `https://github.com/codevillain/brewnet` | `https://github.com/claude-code-expert/brewnet` |
| line 447 — Contact GitHub 카드 | `https://github.com/codevillain/brewnet` | `https://github.com/claude-code-expert/brewnet` |
| line 454 — Contact Discussions 카드 | `https://github.com/codevillain/brewnet/discussions` | `https://github.com/claude-code-expert/brewnet/discussions` |
| line 461 — Contact Issues 카드 | `https://github.com/codevillain/brewnet/issues` | `https://github.com/claude-code-expert/brewnet/issues` |
| line 489 — Footer GitHub 링크 | `https://github.com/codevillain/brewnet` | `https://github.com/claude-code-expert/brewnet` |

**총 5곳** 변경.

---

## 2. Hero 섹션

### 2.1 Hero Badge (line 40)
변경 없음: `Open Source · Self-Hosted · Docker-Powered`

### 2.2 Hero Title (line 41-44)
변경 없음: `Your Home Server, Brewed Fresh`

### 2.3 Hero Description (line 45-49)

| 항목 | 내용 |
|---|---|
| **현재** | `Interactive CLI wizard and Web Dashboard for setting up and managing personal servers with Docker-based services. From zero to a fully configured server in minutes.` |
| **변경** | `Interactive 8-step CLI wizard and Web Dashboard for setting up and managing personal servers with 17 Docker-based services. From zero to a fully configured server in minutes.` |

### 2.4 CTA Buttons
- "Get Started Free" → 변경 없음, href `#pricing`
- "GitHub" → href를 `https://github.com/claude-code-expert/brewnet`으로 변경 (§1 참조)

---

## 3. Stats 섹션

| 위치 | 현재 값 | 현재 라벨 | 변경 값 | 변경 라벨 |
|---|---|---|---|---|
| 1번 카드 | `15+` | Built-in Services | `17` | Docker Services |
| 2번 카드 | `6` | Runtime Support | `7` | Backend Languages |
| 3번 카드 | `8` | Setup Steps | `8` | Wizard Steps (0-7) |
| 4번 카드 | `100%` | Open Source CLI | `100%` | Open Source CLI |

---

## 4. Features 섹션

6개 카드 구조 유지. 텍스트만 업데이트:

### Card 1: Zero Config Setup
| 항목 | 내용 |
|---|---|
| **Title** | Zero Config Setup (변경 없음) |
| **현재** | `Works out of the box with sensible defaults. The interactive 8-step wizard guides you through the entire setup process.` |
| **변경** | `Works out of the box with sensible defaults. The interactive 8-step wizard (Steps 0-7) guides you through system check, server setup, dev stack, domain configuration, and deployment.` |

### Card 2: Secure by Default
변경 없음. 현재 텍스트 정확함.

### Card 3: Transparent & Reversible
| 항목 | 내용 |
|---|---|
| **Title** | Transparent & Reversible (변경 없음) |
| **현재** | `All operations are logged. Inspect or modify generated configs. Every action can be rolled back with backup & restore.` |
| **변경** | `All operations are logged. Inspect or modify generated configs. Every action can be rolled back with backup & restore. Full uninstall with brewnet uninstall --dry-run preview.` |

### Card 4: Cloudflare Tunnel Built-in
| 항목 | 내용 |
|---|---|
| **Title** | Cloudflare Tunnel Built-in (변경 없음) |
| **현재** | `No port forwarding needed. Works behind NAT/CGNAT with automatic HTTPS and DDoS protection included.` |
| **변경** | `No port forwarding needed. Works behind NAT/CGNAT with automatic HTTPS and DDoS protection. Full API automation — paste one token and tunnel, ingress, and DNS are configured automatically.` |

### Card 5: Docker Orchestration
| 항목 | 내용 |
|---|---|
| **Title** | Docker Orchestration (변경 없음) |
| **현재** | `Auto-generates docker-compose.yml, manages container lifecycle, health checks, and resource allocation.` |
| **변경** | `Auto-generates docker-compose.yml for up to 17 services, manages container lifecycle with dependency ordering, health checks, and credential propagation.` |

### Card 6: Web Dashboard (Pro)
변경 없음. 현재 텍스트 정확함.

---

## 5. Usage (How It Works) 섹션

### 5.1 Section Header
변경 없음.

### 5.2 Step Cards

#### Step 01: Install Brewnet
| 항목 | 내용 |
|---|---|
| **Title** | Install Brewnet (변경 없음) |
| **현재 설명** | `Install Brewnet CLI globally via npm. Requires Node.js 20+ and Docker.` |
| **변경 설명** | `Install via curl (recommended) or npm. Requires Node.js 20+ and Docker 27+. Supports macOS 12+ and Ubuntu 20.04+.` |
| **현재 코드** | `npm install -g brewnet` |
| **변경 코드** | `curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh \| bash` |

#### Step 02: Run the Wizard
| 항목 | 내용 |
|---|---|
| **Title** | Run the Wizard (변경 없음) |
| **현재 설명** | `The interactive 8-step wizard walks you through: system check, project setup, admin account, server components, runtime, domain & SSL, review, and deployment.` |
| **변경 설명** | `The interactive 8-step wizard (Steps 0-7) walks you through: system check, project setup, admin account & server components, dev stack & runtime, domain & network, review, generation, and completion.` |
| **코드** | `brewnet init` (변경 없음) |

#### Step 03: Manage Services
변경 없음. 현재 텍스트 정확함.

### 5.3 CLI Commands Grid

현재 12개 → **14개**로 확장. 아래 2개 추가:

| 추가 커맨드 | 설명 |
|---|---|
| `brewnet domain tunnel` | Manage Cloudflare Tunnel |
| `brewnet uninstall` | Remove all services & data |

**전체 14개 목록** (3열 그리드 유지):

| Command | Description |
|---------|-------------|
| `brewnet init` | Interactive setup wizard |
| `brewnet add <service>` | Add a service |
| `brewnet remove <service>` | Remove a service |
| `brewnet up / down` | Start / Stop all services |
| `brewnet status` | Show service status |
| `brewnet logs [service]` | View logs |
| `brewnet deploy <path>` | Deploy an application |
| `brewnet domain add` | Add custom domain |
| `brewnet domain tunnel` | Manage Cloudflare Tunnel |
| `brewnet backup` | Create backup |
| `brewnet restore <id>` | Restore from backup |
| `brewnet ssh enable` | Enable SSH server |
| `brewnet create-app <name>` | Scaffold a new app |
| `brewnet uninstall` | Remove all services & data |

---

## 6. Services 섹션

### 6.1 Section Header

| 항목 | 내용 |
|---|---|
| **현재 설명** | `15+ built-in modules covering web servers, databases, file storage, media streaming, and more.` |
| **변경 설명** | `17 Docker services covering web servers, databases, file storage, media streaming, SSH, mail, and more.` |

### 6.2 Services Grid

현재 9개 → **11개** 카드로 확장. 기존 CSS 클래스 재활용.

| # | icon class | icon text | Title | Description | 변경사항 |
|---|---|---|---|---|---|
| 1 | `web` | WEB | Web Server | Traefik, Nginx, Caddy | 변경 없음 |
| 2 | `git` | GIT | Git Server | Gitea with SSH access (port 3022) | SSH 포트 추가 |
| 3 | `db` | DB | Database | PostgreSQL, MySQL, SQLite | ~~MariaDB~~ 제거, SQLite 추가 |
| 4 | `db` | CACHE | Cache | Redis, Valkey, KeyDB | **신규** (기존 DB에서 분리) |
| 5 | `file` | FILE | File Storage | Nextcloud, MinIO (S3) | ~~SFTP~~ 제거 (SFTP는 SSH 영역) |
| 6 | `media` | MEDIA | Media Server | Jellyfin streaming | 변경 없음 |
| 7 | `ssh` | SSH | SSH Server | OpenSSH, key-based auth, SFTP | SFTP 명시 |
| 8 | `mail` | MAIL | Mail Server | docker-mailserver (SMTP/IMAP) | 변경 없음 |
| 9 | `ssl` | TUNNEL | Cloudflare Tunnel | Automatic HTTPS, DDoS protection | 이름/설명 변경 |
| 10 | `file` | FB | FileBrowser | Web-based file management UI | **신규** |
| 11 | `runtime` | DEV | Dev Stack | Node.js, Python, Go, Java, PHP, .NET, Rust | ~~Ruby~~ 제거, PHP/.NET 추가 |

**주요 변경점**:
- MariaDB → 스펙에서 제거됨
- Ruby → 지원하지 않음, PHP/.NET으로 대체
- SFTP → File Storage에서 제거, SSH Server에 포함
- SSL/Domain → Cloudflare Tunnel로 이름 변경
- Cache 카드 신규 분리
- FileBrowser 카드 신규 추가

---

## 7. NEW — Server Catalog (서버 프로그램 목록)

### 위치
Services 섹션(`#services`) 내부, services-grid 아래에 삽입.
`.commands-section` 패턴 재활용 (기존 CLI Commands 박스와 동일한 구조).

### Header
- **Title**: `Complete Service Catalog`
- **Subtitle**: `All 17 Docker services with images, ports, and resource requirements.`

### 데이터 테이블

| Category | Service | Docker Image | Ports | RAM |
|----------|---------|-------------|-------|-----|
| **Web Server** | Traefik *(default)* | `traefik:v3.0` | 80, 443, 8080 | ~45 MB |
| **Web Server** | Nginx | `nginx:1.25-alpine` | 80, 443 | ~20 MB |
| **Web Server** | Caddy | `caddy:2-alpine` | 80, 443 | ~30 MB |
| **Git Server** | Gitea *(required)* | `gitea/gitea:latest` | 3000, 3022 | ~120 MB |
| **Database** | PostgreSQL | `postgres:17-alpine` | 5432 | ~120 MB |
| **Database** | MySQL | `mysql:8.4` | 3306 | ~256 MB |
| **Cache** | Redis *(default)* | `redis:7-alpine` | 6379 | ~12 MB |
| **Cache** | Valkey | `valkey/valkey:7-alpine` | 6379 | ~12 MB |
| **Cache** | KeyDB | `eqalpha/keydb:latest` | 6379 | ~16 MB |
| **DB Admin** | pgAdmin | `dpage/pgadmin4:latest` | 5050 | ~128 MB |
| **File Server** | Nextcloud | `nextcloud:29-apache` | 443 | ~256 MB |
| **File Server** | MinIO | `minio/minio:latest` | 9000, 9001 | ~256 MB |
| **Media** | Jellyfin | `jellyfin/jellyfin:latest` | 8096 | ~256 MB |
| **Utility** | FileBrowser | `filebrowser/filebrowser:latest` | 80 | ~32 MB |
| **SSH** | OpenSSH | `linuxserver/openssh-server:latest` | 2222 | ~16 MB |
| **Mail** | docker-mailserver | `ghcr.io/docker-mailserver/docker-mailserver:latest` | 25, 587, 993 | ~256 MB |
| **Tunnel** | Cloudflared | `cloudflare/cloudflared:latest` | outbound only | ~32 MB |

> **Note**: SQLite는 내장 DB (Docker 컨테이너 없음). pgAdmin은 PostgreSQL 선택 시에만 표시.

### HTML 구현 가이드

```html
<!-- Services 섹션 내부, services-grid 바로 다음에 삽입 -->
<div class="commands-section" style="margin-top: 48px;">
  <h3 class="commands-title">Complete Service Catalog</h3>
  <p style="text-align:center; color:var(--text-muted); font-size:14px; margin-bottom:20px;">
    All 17 Docker services with images, ports, and resource requirements.
  </p>
  <div class="catalog-table">
    <!-- table 또는 grid 구현 -->
  </div>
</div>
```

---

## 8. NEW — Installation Manual

### 위치
Services 섹션과 Pricing 섹션 사이에 신규 `<section>` 삽입.

### HTML Structure

```
<section class="how-it-works" id="install-guide">  ← 기존 how-it-works 배경 스타일 재활용
```

### Navigation 추가
`nav-links`에 `Install` 링크 추가 (Services와 Pricing 사이):

```html
<a href="#install-guide">Install</a>
```

### 8.1 Section Header
- **Badge**: `Installation`
- **Title**: `Get up and running in minutes`
- **Description**: `Complete installation guide from prerequisites to your first running server.`

### 8.2 System Requirements

`.commands-section` 카드 안에 테이블 형태로:

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| **OS** | macOS 12+ / Ubuntu 20.04+ | Latest stable |
| **Node.js** | 20+ | 22 LTS |
| **Docker** | 27+ | Latest *(auto-installed if missing)* |
| **RAM** | 2 GB | 4 GB+ |
| **Disk** | 20 GB | 50 GB+ *(media 사용 시)* |

> Docker는 설치 전에 필요하지 않습니다 — `brewnet init`이 자동으로 감지하고 설치합니다.

### 8.3 Installation Methods

`.step-card` 패턴으로 2개 코드 블록:

**Method 1 — curl (Recommended)**
```
curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash
```

**Method 2 — npm**
```
npm install -g brewnet
```

**설치 확인**
```
brewnet --version
```

### 8.4 Wizard Overview (8 Steps)

세로 스텝 리스트. `.command-item` 패턴 활용:

| Step | Title | Description |
|------|-------|-------------|
| **Step 0** | System Check | OS, Docker, 포트(80/443), 디스크, RAM 검증 |
| **Step 1** | Project Setup | 프로젝트 이름, 경로, 설치 유형 (Full / Partial) |
| **Step 2** | Admin & Servers | 관리자 계정 생성, Web/File/DB/Media/SSH 선택 |
| **Step 3** | Dev Stack | 백엔드 언어, 프레임워크, 프론트엔드, FileBrowser (생략 가능) |
| **Step 4** | Domain & Network | Local(LAN) 또는 Cloudflare Tunnel, Mail Server (조건부) |
| **Step 5** | Review & Confirm | 전체 설정 검토, 자격 증명 전파 대상 확인, 리소스 예측 |
| **Step 6** | Generate & Deploy | docker-compose.yml 생성, 이미지 pull, 컨테이너 시작, 접근 검증 |
| **Step 7** | Complete | 엔드포인트, 자격 증명 요약, 터널 상태, 상태 페이지 자동 열기 |

### 8.5 Post-Setup Commands

`.commands-grid` 패턴 (3열):

| Command | Description |
|---------|-------------|
| `brewnet status` | 서비스 상태 확인 |
| `brewnet up` | 모든 서비스 시작 |
| `brewnet down` | 모든 서비스 중지 (데이터 보존) |
| `brewnet logs [service]` | 서비스 로그 확인 |
| `brewnet add <service>` | 서비스 추가 |
| `brewnet backup` | 백업 생성 |

### 8.6 Uninstall

`.commands-section` 카드:

- **Title**: `Uninstall`
- **Description**: `Remove all Brewnet services, Docker volumes, and project files. Use flags to control what gets removed.`

| Command | Description |
|---------|-------------|
| `brewnet uninstall --dry-run` | 삭제 대상 미리보기 (변경 없음) |
| `brewnet uninstall` | 전체 대화형 삭제 |
| `brewnet uninstall --keep-data` | DB/파일 볼륨 보존 |
| `brewnet uninstall --keep-config` | 프로젝트 디렉토리 보존, 컨테이너만 중지 |
| `brewnet uninstall --force` | 확인 프롬프트 생략 |

> **주의**: Cloudflare Tunnel DNS 레코드는 자동 삭제되지 않습니다. `dash.cloudflare.com`에서 수동 삭제하세요.

---

## 9. Pricing 섹션

### Free Tier 피처 목록 변경

| # | 현재 | 변경 |
|---|---|---|
| 1 | Full CLI tool | Full CLI tool |
| 2 | Docker management | Docker management (17 services) |
| 3 | 15+ built-in services | 17 Docker services |
| 4 | Cloudflare Tunnel | Cloudflare Tunnel (API automation) |
| 5 | Free domain (DigitalPlat) | Local + Tunnel domain providers |
| 6 | SSH / SFTP server | SSH / SFTP server |
| 7 | Git server (Gitea) | Git server (Gitea) |
| 8 | Backup & restore | Backup & restore |
| 9 | Auto credential propagation | Auto credential propagation |

**추가 항목**:

| # | 신규 피처 |
|---|---|
| 10 | 7 backend languages + frameworks |
| 11 | Mail server (docker-mailserver) |
| 12 | Full uninstall with --dry-run |

### Pro Tier / Team Tier
변경 없음. 현재 콘텐츠 정확함.

---

## 10. Contact 섹션

### GitHub URL 변경
§1 참조. 4개 카드의 GitHub URL 모두 변경.

### Email
변경 없음: `mailto:hello@brewnet.dev`

---

## 11. NEW — Developer Contact Form

### 위치
Contact 섹션 내부, 기존 `contact-grid` 바로 아래에 삽입. 또는 별도 `<section>` 분리 가능.

### Header
- **Badge**: `Get In Touch`
- **Title**: `Developer Contact Form`
- **Description**: `Have a specific inquiry? Send us a message directly. We'll respond via email or Slack.`

### Form Fields

| Field | Type | Required | Placeholder / Label | Validation |
|-------|------|:---:|---|---|
| **Email** | `<input type="email">` | Yes | `your@email.com` | 유효한 이메일 형식 |
| **Phone** | `<input type="tel">` | No | `+82-10-0000-0000` | 자유 형식 |
| **Subject** | `<select>` | Yes | `-- Select a topic --` | 아래 옵션 목록 |
| **Message** | `<textarea rows="5">` | Yes | `Tell us about your project or question...` | 최소 10자 |

### Subject 옵션

```html
<option value="">-- Select a topic --</option>
<option value="general">General Inquiry</option>
<option value="bug">Bug Report</option>
<option value="feature">Feature Request</option>
<option value="partnership">Partnership</option>
<option value="enterprise">Enterprise / Team Plan</option>
<option value="other">Other</option>
```

### Submit Button
- **Label**: `Send Message`
- **Class**: `btn btn-primary btn-block`

### Form Layout (CSS Grid)
```
[Email          ] [Phone (optional)]
[Subject ▼                         ]
[Message                           ]
[                                  ]
[         Send Message             ]
```

- Row 1: 2열 (Email + Phone)
- Row 2-4: 전체 너비

### 제출 처리 (3가지 옵션)

#### Option A — Formspree (추천)
```html
<form action="https://formspree.io/f/{FORM_ID}" method="POST">
```
- 백엔드 불필요
- Formspree 무료 플랜: 월 50건
- 이메일이 설정된 주소로 전달됨

#### Option B — Slack Webhook (JavaScript)
```javascript
async function submitContactForm(data) {
  const webhookUrl = 'https://hooks.slack.com/services/XXX/YYY/ZZZ';
  const payload = {
    text: `New Brewnet Contact`,
    blocks: [{
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*From:* ${data.email}\n*Phone:* ${data.phone || 'N/A'}\n*Subject:* ${data.subject}\n*Message:*\n${data.message}`
      }
    }]
  };
  await fetch(webhookUrl, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}
```

> **보안 주의**: Slack Webhook URL은 클라이언트 JS에 노출됩니다. 프로덕션에서는 프록시 서버를 거치거나 Formspree를 사용하세요.

#### Option C — Formspree + Slack 병행
- Formspree로 폼 처리 + Formspree의 Slack 연동 기능으로 알림도 수신
- 가장 안전하고 편리한 방법

### Success / Error 상태

| 상태 | 처리 |
|---|---|
| **Success** | 폼을 숨기고 메시지 표시: `Thank you! We'll get back to you within 24 hours.` |
| **Error** | 인라인 에러: `Something went wrong. Please try again or email us at hello@brewnet.dev.` |

### Slack 채널 다이렉트 링크 (폼 아래)

폼 하단에 Slack 초대 링크 카드 추가:

```html
<a href="https://join.slack.com/t/brewnet/..." class="contact-item" target="_blank">
  <!-- Slack SVG icon -->
  <div>
    <h4>Join our Slack</h4>
    <p>Chat with the team and community in real-time</p>
  </div>
</a>
```

> Slack 초대 링크 URL은 실제 워크스페이스 설정 후 대체 필요.

---

## 12. Footer

### Copyright
| 항목 | 내용 |
|---|---|
| **현재** | `© 2025 Brewnet (codevillain). All rights reserved.` |
| **변경** | `© 2025-2026 Brewnet (codevillain). All rights reserved.` |

### Footer Links

| Link | 현재 href | 변경 href |
|---|---|---|
| GitHub | `https://github.com/codevillain/brewnet` | `https://github.com/claude-code-expert/brewnet` |
| Docs | `#` | `#install-guide` |
| License (BUSL-1.1) | `#` | `https://github.com/claude-code-expert/brewnet/blob/main/LICENSE` |
| Privacy | `#` | `#` (변경 없음) |

---

## 13. script.js 수정사항

### Terminal Animation — Docker 버전

| 위치 | 현재 | 변경 |
|---|---|---|
| line 36 output | `Docker: v24.0` | `Docker: v27.0` |

나머지 터미널 애니메이션 콘텐츠 (3개 커맨드)는 변경 없음.

### Contact Form Handler (신규)

§11에서 선택한 옵션에 따라 `script.js`에 폼 제출 핸들러 추가:

```javascript
// ─── Contact form submission ───
var contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    // Formspree 사용 시 기본 동작 유지 (e.preventDefault() 불필요)
    // Slack Webhook 사용 시 e.preventDefault() + fetch 호출
  });
}
```

---

## 14. 신규 CSS 필요사항

기존 HTML/CSS 디자인을 유지하되, 신규 섹션에 필요한 **최소한의 CSS 추가**:

### 14.1 Service Icon 추가 클래스

기존 `.service-icon` 클래스와 동일 패턴:

```css
/* Cache — DB 초록색 계열 재활용 */
.service-icon.cache { background: rgba(210,153,34,0.12); color: #d29922; }

/* FileBrowser — File 오렌지 계열 재활용 */
.service-icon.fb { background: rgba(240,136,62,0.12); color: #f0883e; }
```

### 14.2 Service Catalog 테이블

```css
.catalog-table { overflow-x: auto; }
.catalog-table table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.catalog-table th {
  text-align: left;
  color: var(--text-muted);
  font-size: 12px;
  font-weight: 600;
  padding: 8px 12px;
  border-bottom: 1px solid var(--border);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.catalog-table td {
  padding: 8px 12px;
  border-bottom: 1px solid var(--border);
  color: var(--text);
}
.catalog-table code {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--primary);
}
```

### 14.3 Contact Form 필드

```css
.contact-form {
  max-width: 700px;
  margin: 32px auto 0;
}
.contact-form .form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.contact-form .form-full {
  grid-column: 1 / -1;
}
.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 10px 16px;
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--text);
  outline: none;
  transition: border-color 0.2s;
}
.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  border-color: var(--primary);
}
.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: var(--text-muted);
}
.contact-form label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  margin-bottom: 6px;
}
.contact-form .form-submit {
  margin-top: 16px;
}

/* 반응형 */
@media (max-width: 768px) {
  .contact-form .form-grid {
    grid-template-columns: 1fr;
  }
}
```

### 14.4 Wizard Steps 리스트 (Installation Manual)

```css
.wizard-steps {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 24px;
}
.wizard-step {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
}
.wizard-step-num {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--primary);
  flex-shrink: 0;
  width: 28px;
}
.wizard-step-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-heading);
}
.wizard-step-desc {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 2px;
}

@media (max-width: 768px) {
  .wizard-steps {
    grid-template-columns: 1fr;
  }
}
```

---

## 15. 구현 체크리스트

### index.html 변경사항

- [ ] GitHub URL 5곳 일괄 변경 (§1)
- [ ] Hero 설명 텍스트 업데이트 (§2.3)
- [ ] Stats 값/라벨 4개 업데이트 (§3)
- [ ] Features 카드 4개 텍스트 업데이트 (§4 — Card 1,3,4,5)
- [ ] Usage Step 01 설명 + 코드 블록 변경 (§5.2)
- [ ] Usage Step 02 설명 변경 (§5.2)
- [ ] CLI Commands 그리드에 2개 추가 (§5.3)
- [ ] Services 설명 텍스트 업데이트 (§6.1)
- [ ] Services 그리드 11개로 확장 + 내용 수정 (§6.2)
- [ ] **NEW**: Server Catalog 테이블 추가 (§7)
- [ ] **NEW**: Installation Manual 섹션 추가 (§8)
- [ ] **NEW**: Nav에 `Install` 링크 추가 (§8)
- [ ] Pricing Free 피처 목록 업데이트 + 3개 추가 (§9)
- [ ] Contact GitHub URL 4곳 변경 (§10, §1 참조)
- [ ] **NEW**: Developer Contact Form 추가 (§11)
- [ ] Footer Copyright 연도 + 링크 3곳 업데이트 (§12)

### styles.css 추가사항

- [ ] `.service-icon.cache`, `.service-icon.fb` 클래스 (§14.1)
- [ ] `.catalog-table` 테이블 스타일 (§14.2)
- [ ] `.contact-form` 폼 필드 스타일 (§14.3)
- [ ] `.wizard-steps` 위저드 스텝 리스트 (§14.4)
- [ ] 반응형 미디어 쿼리 추가 (§14.3, §14.4)

### script.js 추가사항

- [ ] Docker 버전 `v24.0` → `v27.0` (§13)
- [ ] Contact Form 제출 핸들러 (§13, 옵션에 따라)

### 외부 설정 필요사항

- [ ] Formspree 폼 ID 발급 (§11 Option A 선택 시)
- [ ] Slack Webhook URL 설정 (§11 Option B 선택 시)
- [ ] Slack 워크스페이스 초대 링크 생성 (§11)
