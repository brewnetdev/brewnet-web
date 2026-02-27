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
          <span className="nav-logo-icon">{"\u25C6"}</span> Brewnet
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
