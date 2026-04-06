"use client";

import { services } from "@/data/services";
import { useLocale } from "@/i18n/useLocale";
import { useDictionary } from "@/i18n/DictionaryContext";

export default function Services() {
  const { locale } = useLocale();
  const { services: t } = useDictionary();

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t.badge}</span>
          <h2 className="section-title">
            {t.titleLine1} <span className="gradient-text">{t.titleLine2}</span>
          </h2>
          <p className="section-desc">{t.desc}</p>
        </div>

        <div className="services-grid">
          {services.map((svc) => (
            <article className="service-item" key={svc.title.en}>
              <div className={`service-icon ${svc.iconClass}`}>
                {svc.iconText}
              </div>
              <div className="service-info">
                <h3>{svc.title[locale]}{svc.pro && " (Pro)"}</h3>
                <p>{svc.description[locale]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
