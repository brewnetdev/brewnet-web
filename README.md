# Brewnet — Your Home Server, Brewed Fresh

> Your server on tap. Just brew it.

One command to set up your entire server stack. Self-hosted home server management platform with an interactive CLI wizard and 17 Docker-based services.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Open Source](https://img.shields.io/badge/open%20source-100%25-brightgreen.svg)](https://github.com/claude-code-expert/brewnet)

## Features

- **One-Click Server Stack** — Go, Java, PHP, .NET, Python, Node.js runtime setup with zero dependency conflicts
- **Secure by Default** — SSH key-only auth, root login disabled, auto-firewall, encrypted credential propagation
- **Clean Uninstall & Rollback** — `--dry-run` preview, full backup & restore, one-command rollback
- **Cloudflare Tunnel** — No port forwarding, NAT/CGNAT support, automatic HTTPS + DDoS protection
- **Docker Orchestration** — Auto-generates `docker-compose.yml` for 17 services with health checks
- **Slack & Telegram Notifications** — Real-time alerts via webhook or bot token
- **Cross-Platform** — macOS 12+ and Ubuntu 20.04+

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 |
| UI | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Font | Inter + JetBrains Mono |
| Linting | ESLint 9 |


## Brewnet CLI

Brewnet CLI 설치:

```bash
# curl (권장)
curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash

# npm
npm install -g brewnet
```

### Commands

| Command | Description |
|---|---|
| `brewnet init` | 인터랙티브 설정 위자드 |
| `brewnet add <service>` | 서비스 추가 |
| `brewnet remove <service>` | 서비스 제거 |
| `brewnet up / down` | 전체 서비스 시작 / 중지 |
| `brewnet status` | 서비스 상태 확인 |
| `brewnet logs [service]` | 로그 조회 |
| `brewnet deploy <path>` | 애플리케이션 배포 |
| `brewnet domain add` | 커스텀 도메인 추가 |
| `brewnet domain tunnel` | Cloudflare Tunnel 관리 |
| `brewnet backup` | 백업 생성 |
| `brewnet restore <id>` | 백업 복원 |
| `brewnet ssh enable` | SSH 서버 활성화 |
| `brewnet create-app <name>` | 새 앱 스캐폴딩 |
| `brewnet uninstall` | 전체 제거 (`--dry-run`, `--keep-data`, `--force`) |

### Supported Services (17)

| Category | Services |
|---|---|
| Web Server | Traefik, Nginx, Caddy |
| Git Server | Gitea |
| Database | PostgreSQL, MySQL |
| Cache | Redis, Valkey, KeyDB |
| DB Admin | pgAdmin |
| File Server | Nextcloud, MinIO |
| Media | Jellyfin |
| Utility | FileBrowser |
| SSH | OpenSSH |
| Mail | docker-mailserver |
| Tunnel | Cloudflared |

### System Requirements

| Requirement | Minimum | Recommended |
|---|---|---|
| OS | macOS 12+ / Ubuntu 20.04+ | Latest stable |
| Node.js | 20+ | 22 LTS |
| Docker | 27+ | Latest |
| RAM | 2 GB | 4 GB+ |
| Disk | 20 GB | 50 GB+ |

## Community

- [GitHub](https://github.com/claude-code-expert/brewnet)
- [Telegram](https://t.me/brewnetdev)
- Email: brewnet.dev@gmail.com

## License

[MIT](LICENSE) © 2025-2026 Brewnet (codevillain)
