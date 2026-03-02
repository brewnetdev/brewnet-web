"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need to know Docker to use Brewnet?",
    a: "Not at all. Brewnet's interactive wizard handles all Docker configuration automatically — from installing Docker itself to generating docker-compose.yml and starting containers. You just answer simple questions.",
  },
  {
    q: "Which operating systems are supported?",
    a: "macOS 12+ and Ubuntu 20.04+ are officially supported. Brewnet auto-detects your OS and adjusts installation steps accordingly. Other Linux distros may work but are not officially tested.",
  },
  {
    q: "Is my data safe? Can I back up and restore?",
    a: "Yes. All data lives in Docker volumes on your own machine — nothing is sent to external servers. Brewnet includes built-in backup and restore commands, and you can preview any uninstall with --dry-run before making changes.",
  },
  {
    q: "Can I use Brewnet behind NAT or CGNAT?",
    a: "Absolutely. Brewnet has built-in Cloudflare Tunnel support. Just paste your Cloudflare token and it automatically configures the tunnel, ingress rules, and DNS — no port forwarding needed.",
  },
  {
    q: "Is Brewnet free to use?",
    a: "The CLI tool is 100% open source (MIT License) and free. You can self-host as many services as your hardware supports. A Pro tier with a web dashboard for real-time monitoring is planned for the future.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">FAQ</span>
          <h2 className="section-title">
            Frequently asked
            <br />
            <span className="gradient-text">questions</span>
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              className={`faq-item${openIdx === i ? " open" : ""}`}
              key={i}
            >
              <button
                className="faq-toggle"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                {item.q}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
