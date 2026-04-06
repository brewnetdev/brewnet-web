"use client";

import { services } from "@/data/services";
import { useLocale } from "@/i18n/useLocale";

const servicesDict = {
  en: {
    badge: "Services",
    titleLine1: "All your server needs,",
    titleLine2: "one platform",
    desc: "17 Docker services ready to deploy.",
  },
  ko: {
    badge: "서비스",
    titleLine1: "서버에 필요한 모든 것,",
    titleLine2: "하나의 플랫폼에서",
    desc: "17개 Docker 서비스를 바로 배포하세요.",
  },
  ja: {
    badge: "サービス",
    titleLine1: "サーバーに必要なすべてを、",
    titleLine2: "ひとつのプラットフォームで",
    desc: "17のDockerサービスをすぐにデプロイ。",
  },
  zh: {
    badge: "服务",
    titleLine1: "服务器所需的一切，",
    titleLine2: "一个平台搞定",
    desc: "17个Docker服务即刻部署。",
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
