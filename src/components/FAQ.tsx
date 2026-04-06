"use client";

import { useState } from "react";
import type { FAQDict } from "@/i18n/dictionaries/faq/en";

interface FAQItem {
  q: string;
  a: React.ReactNode;
}

function FAQColumn({ title, items, columnKey }: { title: string; items: FAQItem[]; columnKey: string }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="faq-column">
      <h3 className="faq-column-title">{title}</h3>
      <dl className="faq-list">
        {items.map((item, i) => {
          const isOpen = openIdx === i;
          const id = `${columnKey}-${i}`;
          return (
            <div className={`faq-item${isOpen ? " open" : ""}`} key={i}>
              <dt>
                <button
                  id={`faq-q-${id}`}
                  className="faq-toggle"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${id}`}
                >
                  {item.q}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </dt>
              <dd className="faq-answer" id={`faq-a-${id}`} role="region" aria-labelledby={`faq-q-${id}`}>
                <div className="faq-answer-content">{item.a}</div>
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

export default function FAQ({ dict }: { dict: FAQDict }) {
  const t = dict;

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t.sectionBadge}</span>
          <h2 className="section-title">
            {t.sectionTitleLine1} <span className="gradient-text">{t.sectionTitleLine2}</span>
          </h2>
        </div>
        <div className="faq-columns">
          <FAQColumn title={t.installTitle} items={t.installItems} columnKey="install" />
          <FAQColumn title={t.usageTitle} items={t.usageItems} columnKey="usage" />
        </div>
        <div className="faq-troubleshooting">
          <FAQColumn title={t.troubleshootingTitle} items={t.troubleshootingItems} columnKey="troubleshooting" />
        </div>
      </div>
    </section>
  );
}
