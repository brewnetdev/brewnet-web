export default function Features() {
  const features = [
    {
      accent: "#58a6ff",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      ),
      title: "One-Click Server Stack",
      desc: "Go, Java, PHP, .NET, Python, Node.js — pick your runtime and launch a production-ready web server in one command. No manual dependency setup, no version conflicts.",
    },
    {
      accent: "#3fb950",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Secure by Default",
      desc: "SSH key-only auth, root login disabled, auto-firewall configuration, and encrypted credential propagation across all services.",
    },
    {
      accent: "#bc8cff",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      ),
      title: "Clean Uninstall & Rollback",
      desc: "Every change is tracked. Preview removals with --dry-run before executing. Full backup & restore, one-command rollback, and zero leftover containers, volumes, or configs after uninstall.",
    },
    {
      accent: "#f0883e",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
      title: "Cloudflare Tunnel Integration",
      desc: "No port forwarding needed. Works behind NAT/CGNAT with automatic HTTPS and DDoS protection. Paste one Cloudflare token and tunnel, ingress rules, and DNS are configured automatically.",
    },
    {
      accent: "#d29922",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0022 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: "Docker Orchestration",
      desc: "Auto-generates docker-compose.yml for up to 17 services with full container isolation. Each service runs in its own network sandbox with dependency ordering, health checks, and secure credential propagation.",
    },
    {
      accent: "#39d353",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 01-3.46 0" />
        </svg>
      ),
      title: "Slack & Telegram Notifications",
      desc: "Get real-time alerts on service status, deployments, and errors — directly to Slack or Telegram. No database required. Just paste your webhook URL or bot token and start receiving notifications.",
    },
    {
      accent: "#58a6ff",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "Build, Deploy & Connect",
      desc: "Server setup is just the start. Run your apps, connect custom domains, automate builds, deploy in one command, and monitor everything — the full DevOps lifecycle without the DevOps team.",
    },
    {
      accent: "#e3b341",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 16.1A5 5 0 0115.9 6L16 6a5 5 0 011 9.9M12 12v9" />
          <polyline points="8 17 12 21 16 17" />
        </svg>
      ),
      title: "Cross-Platform Support",
      desc: "macOS 12+ and Ubuntu 20.04+ officially supported. Brewnet auto-detects your OS, adjusts package managers, and handles platform-specific differences so you don't have to.",
    },
    {
      accent: "#f85149",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 20V10" />
          <path d="M12 20V4" />
          <path d="M6 20v-6" />
        </svg>
      ),
      title: "Web Dashboard & Monitoring",
      pro: true,
      desc: "Browser-based setup wizard, real-time service monitoring, web terminal, and a visual interface for managing your entire server stack.",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Features</span>
          <h2 className="section-title">
            Everything you need to
            <br />
            <span className="gradient-text">self-host like a pro</span>
          </h2>
          <p className="section-desc">
            Stop paying for cloud hosting. Deploy your projects with one
            command. No Docker knowledge required.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f) => (
            <div className={`feature-card${f.pro ? " feature-card-pro" : ""}`} key={f.title}>
              <div
                className="feature-icon"
                style={{ "--accent": f.accent } as React.CSSProperties}
              >
                {f.icon}
              </div>
              <h3>
                {f.title}
                {f.pro && <span className="pro-badge">Pro</span>}
              </h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
