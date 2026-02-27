import CopyButton from "./CopyButton";
import { cliCommands } from "@/data/commands";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Install Brewnet",
      desc: "Install via curl (recommended) or npm. Requires Node.js 20+ and Docker 27+. Supports macOS 12+ and Ubuntu 20.04+.",
      code: "curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash",
    },
    {
      number: "02",
      title: "Run the Wizard",
      desc: "The interactive 7-step wizard walks you through: system check, project setup, admin account & server components, dev stack & runtime, domain & network, review, and generation & deployment.",
      code: "brewnet init",
    },
    {
      number: "03",
      title: "Manage Services",
      desc: "Add, remove, start, stop, and monitor services with simple commands. Check logs, manage domains, deploy apps.",
      code: "brewnet status",
    },
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Usage</span>
          <h2 className="section-title">
            Get started in
            <br />
            <span className="gradient-text">3 simple steps</span>
          </h2>
          <p className="section-desc">
            From installation to a fully running server. The CLI wizard handles
            everything.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className="code-block">
                  <code>{step.code}</code>
                  <CopyButton code={step.code} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="commands-section">
          <h3 className="commands-title">CLI Commands</h3>
          <div className="commands-grid">
            {cliCommands.map((cmd) => (
              <div className="command-item" key={cmd.command}>
                <code>{cmd.command}</code>
                <span>{cmd.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
