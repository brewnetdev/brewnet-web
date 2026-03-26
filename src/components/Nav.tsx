"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/i18n/useLocale";
import { LOCALE_COOKIE } from "@/i18n/types";


export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [starCount, setStarCount] = useState<number | null>(null);
  const wasScrolled = useRef(false);
  const { locale } = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== wasScrolled.current) {
        wasScrolled.current = isScrolled;
        navRef.current?.classList.toggle("scrolled", isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/repos/claude-code-expert/brewnet")
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.stargazers_count === "number") {
          setStarCount(data.stargazers_count);
        }
      })
      .catch(() => {});
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMobileOpen(false);
    }
  };

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "Usage" },
    { href: "#services", label: "Services" },
    { href: "#install-guide", label: "Install" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="nav" id="nav" ref={navRef}>
      <div className="container nav-inner">
        <a
          href="/"
          className="nav-logo"
          onClick={(e) => handleAnchorClick(e, "#")}
        >
          <svg className="nav-logo-icon" width="50" height="50" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M8 26H32V34C32 36.8 29.8 39 27 39H13C10.2 39 8 36.8 8 34V26Z" strokeWidth="3.2" fill="none" />
            <path d="M32 28.5C35.5 28.5 37 30.5 37 32.5C37 34.5 35.5 36.5 32 36.5" strokeWidth="3.2" fill="none" />
            <circle cx="20" cy="30" r="1.8" fill="currentColor" stroke="none" />
            <path d="M16.5 20a5 5 0 0 1 7 0" strokeWidth="3" fill="none" />
            <path d="M13.5 15.5a10 10 0 0 1 13 0" strokeWidth="3" fill="none" />
            <path d="M10.5 11a15 15 0 0 1 19 0" strokeWidth="3" fill="none" />
          </svg>
          <span className="nav-logo-text">
            Brewnet
            <span className="nav-logo-tagline">Your server on tap. Just brew it.</span>
          </span>
        </a>
        <ul className={`nav-links${mobileOpen ? " open" : ""}`} id="navLinks">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button
            className="locale-toggle"
            onClick={() => {
              const target = locale === "en" ? "ko" : "en";
              const newPath = pathname.replace(/^\/(en|ko)/, `/${target}`);
              document.cookie = `${LOCALE_COOKIE}=${target};path=/;max-age=31536000`;
              router.push(newPath);
            }}
            aria-label={locale === "en" ? "Switch to Korean" : "영어로 전환"}
          >
            <span className={locale === "en" ? "active" : ""}>EN</span>
            <span className="locale-divider">|</span>
            <span className={locale === "ko" ? "active" : ""}>KO</span>
          </button>
          <a
            href="https://github.com/claude-code-expert/brewnet"
            className="github-star-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Star
            {starCount !== null && <span className="star-count">{starCount}</span>}
          </a>
          <a
            href="#system-requirements"
            className="btn btn-sm btn-outline"
            onClick={(e) => handleAnchorClick(e, "#system-requirements")}
          >
            Get Started
          </a>
          <button
            className="nav-toggle"
            id="navToggle"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
