"use client";

import CopyButton from "./CopyButton";
import { cliCommands } from "@/data/commands";
import { useLocale } from "@/i18n/useLocale";
import { howItWorksDict } from "@/i18n/dict/how-it-works";

export default function HowItWorks() {
  const { locale } = useLocale();
  const t = howItWorksDict[locale];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t.badge}</span>
          <h2 className="section-title">
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="section-desc">{t.subtitle}</p>
        </div>

        <div className="steps-grid">
          {t.steps.map((step) => (
            <article className="step-card" key={step.number}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className="code-block">
                  <code>{step.code}</code>
                  <CopyButton code={step.code} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="commands-section">
          <h3 className="commands-title">{t.commandsTitle}</h3>
          <ul className="commands-grid" role="list">
            {cliCommands.map((cmd) => (
              <li className="command-item" key={cmd.command}>
                <code>{cmd.command}</code>
                <span>{cmd.description[locale]}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
