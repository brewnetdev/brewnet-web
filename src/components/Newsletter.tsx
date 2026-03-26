"use client";

import { useState, useEffect, FormEvent } from "react";
import { useLocale } from "@/i18n/useLocale";
import { newsletterDict } from "@/i18n/dict/newsletter";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [toast, setToast] = useState(false);
  const { locale } = useLocale();
  const t = newsletterDict[locale];

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
            {t.toastSuccess}
          </div>

          <div className="newsletter-content">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <span className="section-badge">{t.badge}</span>
              <h2 className="section-title newsletter-title">
                {t.titlePrefix}<span className="gradient-text">{t.titleHighlight}</span>
              </h2>
              <p className="section-desc" style={{ fontSize: 15 }}>
                {t.desc}
              </p>
            </div>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="newsletter-input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder={t.placeholder}
                  disabled={state === "submitting"}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={state === "submitting"}
                >
                  {state === "submitting" ? t.btnSubmitting : t.btnSubmit}
                </button>
              </div>
              <p className={`form-error${state === "error" ? " form-error-visible" : ""}`}>
                {t.errorMessage}
              </p>
            </form>

            <p className="newsletter-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              {t.privacyNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
