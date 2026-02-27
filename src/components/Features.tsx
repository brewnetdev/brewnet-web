export default function Features() {
  const features = [
    {
      accent: "#58a6ff",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Zero Config Setup",
      desc: "Works out of the box with sensible defaults. The interactive 8-step wizard (Steps 0-7) guides you through system check, server setup, dev stack, domain configuration, and deployment.",
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
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        </svg>
      ),
      title: "Transparent & Reversible",
      desc: "All operations are logged. Inspect or modify generated configs. Every action can be rolled back with backup & restore. Full uninstall with brewnet uninstall --dry-run preview.",
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
      title: "Cloudflare Tunnel Built-in",
      desc: "No port forwarding needed. Works behind NAT/CGNAT with automatic HTTPS and DDoS protection. Full API automation \u2014 paste one token and tunnel, ingress, and DNS are configured automatically.",
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
      desc: "Auto-generates docker-compose.yml for up to 17 services, manages container lifecycle with dependency ordering, health checks, and credential propagation.",
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
      title: "Web Dashboard (Pro)",
      desc: "Real-time monitoring, web terminal, code editor, and a visual interface for managing all your services.",
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
            <div className="feature-card" key={f.title}>
              <div
                className="feature-icon"
                style={{ "--accent": f.accent } as React.CSSProperties}
              >
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
