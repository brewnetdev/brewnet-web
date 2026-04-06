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
};
