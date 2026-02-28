"use client";

import { useEffect, useRef, useState } from "react";


export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wasScrolled = useRef(false);

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
    // { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="nav" id="nav" ref={navRef}>
      <div className="container nav-inner">
        <a
          href="#"
          className="nav-logo"
          onClick={(e) => handleAnchorClick(e, "#")}
        >
          <svg className="nav-logo-icon" width="50" height="50" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
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
        <div className={`nav-links${mobileOpen ? " open" : ""}`} id="navLinks">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
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
