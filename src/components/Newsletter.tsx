"use client";

import { useState, useEffect, FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(false), 4000);
    return () => clearTimeout(timer);
  }, [toast]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setState("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setEmail("");
        setState("idle");
        setToast(true);
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <section className="newsletter" id="newsletter">
      <div className="container">
        <div className="newsletter-card">
          {/* Toast */}
          <div className={`toast${toast ? " toast-visible" : ""}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Subscribed! We&apos;ll keep you posted on the latest updates.
          </div>

          <div className="newsletter-content">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <span className="section-badge">Mailing List</span>
              <h2 className="section-title" style={{ fontSize: "clamp(24px, 4vw, 32px)" }}>
                Stay <span className="gradient-text">Up to Date</span>
              </h2>
              <p className="section-desc" style={{ fontSize: 15 }}>
                Get notified about new features, releases, and Brewnet tips.
                No spam — only the updates that matter.
              </p>
            </div>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="newsletter-input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  disabled={state === "submitting"}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={state === "submitting"}
                >
                  {state === "submitting" ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
              <p className={`form-error${state === "error" ? " form-error-visible" : ""}`}>
                Something went wrong. Please try again.
              </p>
            </form>

            <p className="newsletter-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              Unsubscribe anytime. Your privacy is protected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
