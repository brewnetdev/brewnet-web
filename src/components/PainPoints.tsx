export default function PainPoints() {
  const pains = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 9v4M12 17h.01" />
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        </svg>
      ),
      title: "Runtime setup is a nightmare",
      desc: "Installing Go, Java, PHP, .NET, Python — each runtime has its own version manager, dependencies, and conflicts. Brewnet provisions any server runtime in one click with full isolation, zero dependency hell.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      ),
      title: "Security is an afterthought",
      desc: "SSH hardening, firewall rules, SSL certificates, credential management — most self-hosters skip these until it's too late. Brewnet enforces security from Step 1: auto-firewall, key-only SSH, encrypted secrets, and Cloudflare Tunnel with zero exposed ports.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
        </svg>
      ),
      title: "No clean way out",
      desc: "Scattered configs, orphaned containers, leftover volumes — uninstalling self-hosted services leaves a mess. Brewnet tracks every change and offers clean uninstall with --dry-run preview, full backup & restore, and one-command rollback of your entire stack.",
    },
  ];

  return (
    <section className="pain-points">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">The Problem</span>
          <h2 className="section-title">
            Self-hosting shouldn&apos;t be
            <br />
            <span className="gradient-text">this painful</span>
          </h2>
          <p className="section-desc">
            Setting up a personal server means juggling dozens of tools, configs,
            and security concerns. Sound familiar?
          </p>
        </div>
        <div className="pain-grid">
          {pains.map((p) => (
            <div className="pain-card" key={p.title}>
              <div className="pain-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
