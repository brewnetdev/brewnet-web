"use client";

import { useDictionary } from "@/i18n/DictionaryContext";

export default function Pricing() {
  const { pricing: t } = useDictionary();

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t.badge}</span>
          <h2 className="section-title">
            {t.titleLine1}
            <br />
            <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="section-desc">{t.desc}</p>
        </div>

        <div className="pricing-grid">
          {/* Free */}
          <article className="pricing-card">
            <div className="pricing-header">
              <h3 className="pricing-name">{t.freeName}</h3>
              <div className="pricing-price">
                <span className="price-amount">{t.freePrice}</span>
                <span className="price-period">{t.freePeriod}</span>
              </div>
              <p className="pricing-desc">{t.freeDesc}</p>
            </div>
            <ul className="pricing-features">
              {t.freeFeatures.map((f) => (
                <li key={f}>
                  <span className="check">{"\u2713"}</span> {f}
                </li>
              ))}
            </ul>
            <button type="button" className="btn btn-outline btn-block">
              {t.freeCta}
            </button>
          </article>

          {/* Pro */}
          <article className="pricing-card featured">
            <div className="pricing-badge">{t.proBadge}</div>
            <div className="pricing-header">
              <h3 className="pricing-name">{t.proName}</h3>
              <div className="pricing-price">
                <span className="price-amount">{t.proPrice}</span>
                <span className="price-period">{t.proPeriod}</span>
              </div>
              <p className="pricing-desc">{t.proDesc}</p>
            </div>
            <ul className="pricing-features">
              {t.proFeatures.map((f) => (
                <li key={f.text}>
                  <span className={`check${f.star ? " star" : ""}`}>
                    {f.star ? "\u2733" : "\u2713"}
                  </span>{" "}
                  {f.text}
                </li>
              ))}
            </ul>
            <button type="button" className="btn btn-primary btn-block">
              {t.proCta}
            </button>
          </article>

          {/* Team */}
          <article className="pricing-card">
            <div className="pricing-header">
              <h3 className="pricing-name">{t.teamName}</h3>
              <div className="pricing-price">
                <span className="price-amount">{t.teamPrice}</span>
                <span className="price-period">{t.teamPeriod}</span>
              </div>
              <p className="pricing-desc">{t.teamDesc}</p>
            </div>
            <ul className="pricing-features">
              {t.teamFeatures.map((f) => (
                <li key={f.text}>
                  <span className={`check${f.star ? " star" : ""}`}>
                    {f.star ? "\u2733" : "\u2713"}
                  </span>{" "}
                  {f.text}
                </li>
              ))}
            </ul>
            <button type="button" className="btn btn-outline btn-block">
              {t.teamCta}
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
