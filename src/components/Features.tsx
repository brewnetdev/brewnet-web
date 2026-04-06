"use client";

import { useDictionary } from "@/i18n/DictionaryContext";

export default function Features() {
  const { features: t } = useDictionary();

  const features = [
    {
      accent: "#58a6ff",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      ),
      title: t.cards.oneClickServerStack.title,
      desc: t.cards.oneClickServerStack.desc,
    },
    {
      accent: "#3fb950",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: t.cards.secureByDefault.title,
      desc: t.cards.secureByDefault.desc,
    },
    {
      accent: "#bc8cff",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      ),
      title: t.cards.cleanUninstall.title,
      desc: t.cards.cleanUninstall.desc,
    },
    {
      accent: "#f0883e",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
      title: t.cards.cloudflareTunnel.title,
      desc: t.cards.cloudflareTunnel.desc,
    },
    {
      accent: "#d29922",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0022 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: t.cards.dockerOrchestration.title,
      desc: t.cards.dockerOrchestration.desc,
    },
    {
      accent: "#39d353",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 01-3.46 0" />
        </svg>
      ),
      title: t.cards.slackTelegram.title,
      pro: true,
      desc: t.cards.slackTelegram.desc,
    },
    {
      accent: "#58a6ff",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: t.cards.buildDeployConnect.title,
      desc: t.cards.buildDeployConnect.desc,
    },
    {
      accent: "#e3b341",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M2 16.1A5 5 0 0115.9 6L16 6a5 5 0 011 9.9M12 12v9" />
          <polyline points="8 17 12 21 16 17" />
        </svg>
      ),
      title: t.cards.crossPlatform.title,
      desc: t.cards.crossPlatform.desc,
    },
    {
      accent: "#f85149",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M18 20V10" />
          <path d="M12 20V4" />
          <path d="M6 20v-6" />
        </svg>
      ),
      title: t.cards.webDashboard.title,
      pro: true,
      desc: t.cards.webDashboard.desc,
    },
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t.badge}</span>
          <h2 className="section-title">
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="section-desc">{t.subtitle}<br />{t.subtitle2}</p>
        </div>

        <div className="features-grid">
          {features.map((f) => (
            <article className={`feature-card${f.pro ? " feature-card-pro" : ""}`} key={f.title}>
              <div
                className="feature-icon"
                style={{ "--accent": f.accent } as React.CSSProperties}
              >
                {f.icon}
              </div>
              <h3>
                {f.title}
                {f.pro && " (Pro)"}
              </h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
