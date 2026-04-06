import type { ReactNode } from "react";

export interface FAQItem {
  q: string;
  a: ReactNode;
}

export interface ErrorCode {
  code: string;
  http: string;
  desc: string;
}

export interface FAQDict {
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

export const faqDict: FAQDict = {
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
};
