"use client";

import { useState, useEffect, useRef, FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [toast, setToast] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(false), 4000);
    return () => clearTimeout(timer);
  }, [toast]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    const fd = new FormData(formRef.current);
    const data = {
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      subject: fd.get("subject") as string,
      message: fd.get("message") as string,
    };

    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        formRef.current.reset();
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
    <div className="contact-form">
      {/* Toast */}
      <div className={`toast${toast ? " toast-visible" : ""}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        Thank you! We&apos;ll get back to you within 24 hours.
      </div>

      <div className="section-header" style={{ marginBottom: 24 }}>
        <span className="section-badge">Get In Touch</span>
        <h3 className="section-title" style={{ fontSize: 24 }}>
          Developer Contact Form
        </h3>
        <p className="section-desc" style={{ fontSize: 14 }}>
          Have a specific inquiry? Send us a message directly. We&apos;ll
          respond via email or Telegram.
        </p>
      </div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form-grid">
          <div>
            <label>Email *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="+82-10-0000-0000"
            />
          </div>
          <div className="form-full">
            <label>Subject *</label>
            <select name="subject" required defaultValue="">
              <option value="" disabled>
                -- Select a topic --
              </option>
              <option value="general">General Inquiry</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="partnership">Partnership</option>
              <option value="enterprise">Enterprise / Team Plan</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-full">
            <label>Message *</label>
            <textarea
              name="message"
              rows={5}
              required
              minLength={10}
              placeholder="Tell us about your project or question..."
            />
          </div>
          <div className="form-full form-submit">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={state === "submitting"}
            >
              {state === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
        <p className={`form-error${state === "error" ? " form-error-visible" : ""}`}>
          Something went wrong. Please try again or email us at
          hello@brewnet.dev.
        </p>
      </form>
      <div style={{ marginTop: 24 }}>
        <a
          href="https://t.me/brewnetdev"
          className="contact-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
          <div>
            <h4>Join our Telegram</h4>
            <p>Chat with the team and community in real-time</p>
          </div>
        </a>
      </div>
    </div>
  );
}
