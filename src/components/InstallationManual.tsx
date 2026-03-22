"use client";

import CopyButton from "./CopyButton";
import { wizardSteps } from "@/data/wizard-steps";
import { installationDict } from "@/i18n/dict/installation";
import { useLocale } from "@/i18n/useLocale";

export default function InstallationManual() {
  const { locale } = useLocale();
  const t = installationDict[locale];

  return (
    <section className="how-it-works" id="install-guide">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t.badge}</span>
          <h2 className="section-title">
            {t.titleLine1} <span className="gradient-text">{t.titleLine2}</span>
          </h2>
          <p className="section-desc">{t.desc}</p>
        </div>

        {/* System Requirements */}
        <section id="system-requirements" className="commands-section" style={{ marginBottom: 32 }}>
          <h3 className="commands-title">{t.sysReqTitle}</h3>
          <div className="catalog-table">
            <table>
              <caption className="sr-only">{t.sysReqCaption}</caption>
              <thead>
                <tr>
                  <th>{t.thRequirement}</th>
                  <th>{t.thMinimum}</th>
                  <th>{t.thRecommended}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t.rowOs}</td>
                  <td>{t.rowOsMin}</td>
                  <td>{t.rowOsRec}</td>
                </tr>
                <tr>
                  <td>{t.rowNode}</td>
                  <td>{t.rowNodeMin}</td>
                  <td>{t.rowNodeRec}</td>
                </tr>
                <tr>
                  <td>{t.rowDocker}</td>
                  <td>{t.rowDockerMin}</td>
                  <td>{t.rowDockerRec}</td>
                </tr>
                <tr>
                  <td>{t.rowRam}</td>
                  <td>{t.rowRamMin}</td>
                  <td>{t.rowRamRec}</td>
                </tr>
                <tr>
                  <td>{t.rowDisk}</td>
                  <td>{t.rowDiskMin}</td>
                  <td>{t.rowDiskRec}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 12,
              marginTop: 12,
              fontStyle: "italic",
            }}
          >
            {t.dockerNote}
          </p>
        </section>

        {/* Installation Method */}
        <div className="steps-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", marginBottom: 32 }}>
          <div className="step-card">
            <div className="step-number" style={{ fontSize: 24 }}>01</div>
            <div className="step-content">
              <h3>{t.curlTitle}</h3>
              <p>{t.curlDesc}</p>
              <div className="code-block">
                <code style={{ fontSize: 12 }}>
                  curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash
                </code>
                <CopyButton code="curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash" />
              </div>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number" style={{ fontSize: 24 }}>02</div>
            <div className="step-content">
              <h3>Initialize</h3>
              <p>{locale === "ko" ? "설치 후 초기 설정을 시작합니다." : "Start the initial setup after installation."}</p>
              <div className="code-block">
                <code>brewnet init</code>
                <CopyButton code="brewnet init" />
              </div>
            </div>
          </div>
        </div>

        {/* Wizard Overview */}
        <section className="commands-section" style={{ marginBottom: 32 }}>
          <h3 className="commands-title">{t.wizardTitle}</h3>
          <div className="wizard-steps">
            {wizardSteps.map((ws) => (
              <div className="wizard-step" key={ws.step}>
                <div className="wizard-step-num">{ws.step}</div>
                <div>
                  <div className="wizard-step-title">{ws.title[locale]}</div>
                  <div className="wizard-step-desc">{ws.description[locale]}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
}
