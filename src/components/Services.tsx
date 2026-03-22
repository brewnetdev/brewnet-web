"use client";

import { services } from "@/data/services";
import { useLocale } from "@/i18n/useLocale";
import ServerCatalog from "./ServerCatalog";

const servicesDict = {
  en: {
    badge: "Services",
    titleLine1: "All your server needs,",
    titleLine2: "one platform",
    desc: "17 Docker services covering web servers, databases, file storage, media streaming, SSH, mail, and more.",
  },
  ko: {
    badge: "서비스",
    titleLine1: "서버에 필요한 모든 것,",
    titleLine2: "하나의 플랫폼에서",
    desc: "웹 서버, 데이터베이스, 파일 스토리지, 미디어 스트리밍, SSH, 메일 등 17개의 Docker 서비스를 지원합니다.",
  },
} as const;

export default function Services() {
  const { locale } = useLocale();
  const t = servicesDict[locale];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t.badge}</span>
          <h2 className="section-title">
            {t.titleLine1}
            <br />
            <span className="gradient-text">{t.titleLine2}</span>
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

        <ServerCatalog />
      </div>
    </section>
  );
}
