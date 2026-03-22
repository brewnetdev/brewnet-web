"use client";

import { useLocale } from "@/i18n/useLocale";
import { painPointsDict } from "@/i18n/dict/pain-points";

export default function PainPoints() {
  const { locale } = useLocale();
  const t = painPointsDict[locale];

  const icons = [
    (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 9v4M12 17h.01" />
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
    (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
      </svg>
    ),
  ];

  return (
    <section className="pain-points">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t.sectionBadge}</span>
          <h2 className="section-title">{t.sectionDescPrefix}<br /><span className="gradient-text">{t.sectionDescHighlight}</span></h2>
          <p className="section-desc">
            {t.sectionDesc2} {t.sectionDesc3}
          </p>
        </div>
        <div className="pain-grid">
          {t.pains.map((p, i) => (
            <article className="pain-card" key={p.title}>
              <div className="pain-icon">{icons[i]}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
