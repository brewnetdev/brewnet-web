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
};
