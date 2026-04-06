"use client";

import { useDictionary } from "@/i18n/DictionaryContext";

export default function Stats() {
  const { stats: t } = useDictionary();

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
