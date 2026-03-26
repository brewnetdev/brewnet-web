import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Brewnet",
  description: "Brewnet privacy policy. How we handle your data.",
};

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "100px 24px 60px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, color: "var(--text-heading)", marginBottom: 32 }}>
        Privacy Policy
      </h1>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-heading)", marginBottom: 12 }}>
          Overview
        </h2>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: 15 }}>
          Brewnet is an open-source, self-hosted home server management tool. We are committed to
          protecting your privacy. This policy explains what data we collect through this website
          (brewnet.dev) and how we use it.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-heading)", marginBottom: 12 }}>
          Data We Collect
        </h2>
        <ul style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: 15, paddingLeft: 20 }}>
          <li>
            <strong style={{ color: "var(--text-heading)" }}>Contact form:</strong> Email, phone
            (optional), subject, and message — used only to respond to your inquiry.
          </li>
          <li>
            <strong style={{ color: "var(--text-heading)" }}>Newsletter:</strong> Email address —
            used only to send product updates. You can unsubscribe at any time.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-heading)", marginBottom: 12 }}>
          Self-Hosted Software
        </h2>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: 15 }}>
          The Brewnet CLI runs entirely on your own hardware. No data is sent to our servers when
          you use the self-hosted software. All server configurations, Docker services, and personal
          data stay on your machine.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-heading)", marginBottom: 12 }}>
          Third-Party Services
        </h2>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: 15 }}>
          This website does not use cookies or third-party analytics. We fetch your GitHub star
          count from the GitHub API — no personal data is sent.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-heading)", marginBottom: 12 }}>
          Contact
        </h2>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: 15 }}>
          For privacy-related questions, reach us at{" "}
          <a href="https://github.com/claude-code-expert/brewnet/issues" style={{ color: "var(--primary)" }}>
            GitHub Issues
          </a>{" "}
          or via the contact form on the homepage.
        </p>
      </section>

      <p style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 40, borderTop: "1px solid var(--border)", paddingTop: 20 }}>
        Last updated: March 2026
      </p>
    </main>
  );
}
