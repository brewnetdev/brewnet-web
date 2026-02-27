import CopyButton from "./CopyButton";
import { wizardSteps } from "@/data/wizard-steps";

export default function InstallationManual() {
  const postSetupCommands = [
    { command: "brewnet status", description: "Check service status" },
    { command: "brewnet up", description: "Start all services" },
    { command: "brewnet down", description: "Stop all services (data preserved)" },
    { command: "brewnet logs [service]", description: "View service logs" },
    { command: "brewnet add <service>", description: "Add a service" },
    { command: "brewnet backup", description: "Create backup" },
  ];

  const uninstallCommands = [
    { command: "brewnet uninstall --dry-run", description: "Preview what will be removed (no changes)" },
    { command: "brewnet uninstall", description: "Full interactive removal" },
    { command: "brewnet uninstall --keep-data", description: "Preserve DB/file volumes" },
    { command: "brewnet uninstall --keep-config", description: "Preserve project directory, stop containers only" },
    { command: "brewnet uninstall --force", description: "Skip confirmation prompt" },
  ];

  return (
    <section className="how-it-works" id="install-guide">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Installation</span>
          <h2 className="section-title">
            Get up and running
            <br />
            <span className="gradient-text">in minutes</span>
          </h2>
          <p className="section-desc">
            Complete installation guide from prerequisites to your first running
            server.
          </p>
        </div>

        {/* System Requirements */}
        <div id="system-requirements" className="commands-section" style={{ marginBottom: 32 }}>
          <h3 className="commands-title">System Requirements</h3>
          <div className="catalog-table">
            <table>
              <thead>
                <tr>
                  <th>Requirement</th>
                  <th>Minimum</th>
                  <th>Recommended</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>OS</td>
                  <td>macOS 12+ / Ubuntu 20.04+</td>
                  <td>Latest stable</td>
                </tr>
                <tr>
                  <td>Node.js</td>
                  <td>20+</td>
                  <td>22 LTS</td>
                </tr>
                <tr>
                  <td>Docker</td>
                  <td>27+</td>
                  <td>Latest (auto-installed if missing)</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>2 GB</td>
                  <td>4 GB+</td>
                </tr>
                <tr>
                  <td>Disk</td>
                  <td>20 GB</td>
                  <td>50 GB+ (for media usage)</td>
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
            Docker is not required before installation &mdash; brewnet init
            auto-detects and installs it.
          </p>
        </div>

        {/* Installation Methods */}
        <div className="steps-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", marginBottom: 32 }}>
          <div className="step-card">
            <div className="step-number" style={{ fontSize: 24 }}>
              01
            </div>
            <div className="step-content">
              <h3>curl (Recommended)</h3>
              <p>One-line install script that handles everything.</p>
              <div className="code-block">
                <code style={{ fontSize: 12 }}>
                  curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash
                </code>
                <CopyButton code="curl -fsSL https://raw.githubusercontent.com/claude-code-expert/brewnet/main/install.sh | bash" />
              </div>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number" style={{ fontSize: 24 }}>
              02
            </div>
            <div className="step-content">
              <h3>npm</h3>
              <p>Install globally via npm package manager.</p>
              <div className="code-block">
                <code>npm install -g brewnet</code>
                <CopyButton code="npm install -g brewnet" />
              </div>
              <div className="code-block" style={{ marginTop: 8 }}>
                <code>brewnet --version</code>
                <CopyButton code="brewnet --version" />
              </div>
            </div>
          </div>
        </div>

        {/* Wizard Overview */}
        <div className="commands-section" style={{ marginBottom: 32 }}>
          <h3 className="commands-title">8-Step Wizard Overview</h3>
          <div className="wizard-steps">
            {wizardSteps.map((ws) => (
              <div className="wizard-step" key={ws.step}>
                <div className="wizard-step-num">S{ws.step}</div>
                <div>
                  <div className="wizard-step-title">{ws.title}</div>
                  <div className="wizard-step-desc">{ws.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Post-Setup Commands */}
        <div className="commands-section" style={{ marginBottom: 32 }}>
          <h3 className="commands-title">Post-Setup Commands</h3>
          <div className="commands-grid">
            {postSetupCommands.map((cmd) => (
              <div className="command-item" key={cmd.command}>
                <code>{cmd.command}</code>
                <span>{cmd.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Uninstall */}
        <div className="commands-section">
          <h3 className="commands-title">Uninstall</h3>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-muted)",
              fontSize: 14,
              marginBottom: 16,
            }}
          >
            Remove all Brewnet services, Docker volumes, and project files. Use
            flags to control what gets removed.
          </p>
          <div className="commands-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {uninstallCommands.map((cmd) => (
              <div className="command-item" key={cmd.command}>
                <code>{cmd.command}</code>
                <span>{cmd.description}</span>
              </div>
            ))}
          </div>
          <p
            style={{
              color: "var(--red)",
              fontSize: 12,
              marginTop: 12,
              fontStyle: "italic",
            }}
          >
            Note: Cloudflare Tunnel DNS records are not automatically deleted.
            Remove them manually at dash.cloudflare.com.
          </p>
        </div>
      </div>
    </section>
  );
}
