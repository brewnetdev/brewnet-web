"use client";

import { useLocale } from "@/i18n/useLocale";
import { statsDict } from "@/i18n/dict/stats";

export default function Stats() {
  const { locale } = useLocale();
  const t = statsDict[locale];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {t.stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
