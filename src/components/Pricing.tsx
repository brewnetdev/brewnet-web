export default function Pricing() {
  const freeFeatures = [
    "Full CLI tool",
    "Docker management (17 services)",
    "17 Docker services",
    "Cloudflare Tunnel (API automation)",
    "Local + Tunnel domain providers",
    "SSH / SFTP server",
    "Git server (Gitea)",
    "Backup & restore",
    "Auto credential propagation",
    "7 backend languages + frameworks",
    "Mail server (docker-mailserver)",
    "Full uninstall with --dry-run",
  ];

  const proFeatures = [
    { text: "Everything in Free", star: false },
    { text: "Web Dashboard", star: true },
    { text: "Real-time monitoring", star: true },
    { text: "SSL auto-renewal (wildcard)", star: true },
    { text: "Auto deploy (Git webhooks)", star: true },
    { text: "Blue-green deployment", star: true },
    { text: "2FA / API keys", star: true },
    { text: "Rate limiting & geo-blocking", star: true },
    { text: "Access logs & alerts", star: true },
  ];

  const teamFeatures = [
    { text: "Everything in Pro", star: false },
    { text: "Multi-user management", star: true },
    { text: "Role-based access (RBAC)", star: true },
    { text: "Audit logs", star: true },
    { text: "Multi-server support", star: true },
    { text: "Team collaboration", star: true },
    { text: "Priority support", star: true },
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Pricing</span>
          <h2 className="section-title">
            Simple, transparent
            <br />
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="section-desc">
            Start free. Upgrade when you need the dashboard, monitoring, and
            team features.
          </p>
        </div>

        <div className="pricing-grid">
          {/* Free */}
          <div className="pricing-card">
            <div className="pricing-header">
              <h3 className="pricing-name">Free</h3>
              <div className="pricing-price">
                <span className="price-amount">$0</span>
                <span className="price-period">forever</span>
              </div>
              <p className="pricing-desc">
                For personal projects and home labs
              </p>
            </div>
            <ul className="pricing-features">
              {freeFeatures.map((f) => (
                <li key={f}>
                  <span className="check">{"\u2713"}</span> {f}
                </li>
              ))}
            </ul>
            <a href="#" className="btn btn-outline btn-block">
              Get Started
            </a>
          </div>

          {/* Pro */}
          <div className="pricing-card featured">
            <div className="pricing-badge">Most Popular</div>
            <div className="pricing-header">
              <h3 className="pricing-name">Pro</h3>
              <div className="pricing-price">
                <span className="price-amount">$9</span>
                <span className="price-period">/month</span>
              </div>
              <p className="pricing-desc">
                For power users who want the dashboard
              </p>
            </div>
            <ul className="pricing-features">
              {proFeatures.map((f) => (
                <li key={f.text}>
                  <span className={`check${f.star ? " star" : ""}`}>
                    {f.star ? "\u2733" : "\u2713"}
                  </span>{" "}
                  {f.text}
                </li>
              ))}
            </ul>
            <a href="#" className="btn btn-primary btn-block">
              Start Pro Trial
            </a>
          </div>

          {/* Team */}
          <div className="pricing-card">
            <div className="pricing-header">
              <h3 className="pricing-name">Team</h3>
              <div className="pricing-price">
                <span className="price-amount">$29</span>
                <span className="price-period">/month per server</span>
              </div>
              <p className="pricing-desc">
                For teams managing shared servers
              </p>
            </div>
            <ul className="pricing-features">
              {teamFeatures.map((f) => (
                <li key={f.text}>
                  <span className={`check${f.star ? " star" : ""}`}>
                    {f.star ? "\u2733" : "\u2713"}
                  </span>{" "}
                  {f.text}
                </li>
              ))}
            </ul>
            <a href="#" className="btn btn-outline btn-block">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
