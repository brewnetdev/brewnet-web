import TerminalAnimation from "./TerminalAnimation";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">
          Open Source {"\u00B7"} Self-Hosted {"\u00B7"} Docker-Powered
        </div>
        <h1 className="hero-title">
          One command. Your entire server stack, on tap.
          <br />
          <span className="gradient-text">Just brew it!</span>
        </h1>
        <div className="hero-split">
          <p className="hero-desc">
            Interactive 7-step CLI wizard and Web Dashboard for setting up and
            managing personal servers with 17 Docker-based services. Build your
            own home server, skip the hosting fees, and own your data. From zero
            to a fully configured server in minutes — no cloud subscription required.
          </p>
          <ul className="hero-stack-list">
            <li><span className="stack-dot green" />Git Server (Gitea)</li>
            <li><span className="stack-dot blue" />Web Server (Nginx / Traefik)</li>
            <li><span className="stack-dot purple" />Media Server (Jellyfin)</li>
            <li><span className="stack-dot orange" />Runtime Stack (Go, Java, PHP, .NET, Python)</li>
            <li><span className="stack-dot cyan" />Database (PostgreSQL, Redis)</li>
            <li><span className="stack-dot yellow" />Cloud Storage (Nextcloud)</li>
            <li><span className="stack-dot red" />Monitoring (Grafana, Prometheus)</li>
            <li><span className="stack-dot green" />CI/CD Pipeline</li>
            <li className="stack-more">+ 9 more services</li>
          </ul>
        </div>
        <div className="hero-actions">
          <a href="#system-requirements" className="btn btn-primary btn-lg">
            Get Started Free
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://github.com/claude-code-expert/brewnet"
            className="btn btn-ghost btn-lg"
            target="_blank"
            rel="noopener"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
        <TerminalAnimation />
      </div>
    </section>
  );
}
