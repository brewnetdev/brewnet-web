export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo-text">
              <svg className="footer-logo-icon" width="16" height="16" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 26H32V34C32 36.8 29.8 39 27 39H13C10.2 39 8 36.8 8 34V26Z" strokeWidth="3.2" fill="none" />
                <path d="M32 28.5C35.5 28.5 37 30.5 37 32.5C37 34.5 35.5 36.5 32 36.5" strokeWidth="3.2" fill="none" />
                <path d="M5 41H35" strokeWidth="3.2" />
                <circle cx="20" cy="30" r="1.8" fill="currentColor" stroke="none" />
                <path d="M16.5 20a5 5 0 0 1 7 0" strokeWidth="3" fill="none" />
                <path d="M13.5 15.5a10 10 0 0 1 13 0" strokeWidth="3" fill="none" />
                <path d="M10.5 11a15 15 0 0 1 19 0" strokeWidth="3" fill="none" />
              </svg>
              Brewnet
            </span>
            <span className="footer-copy">
              {"\u00A9"} 2025-2026 Brewnet (codevillain). All rights reserved.
            </span>
          </div>
          <div className="footer-links">
            <a
              href="https://github.com/claude-code-expert/brewnet"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
            <a
              href="https://github.com/claude-code-expert/brewnet#readme"
              target="_blank"
              rel="noopener"
            >
              Docs
            </a>
            <a
              href="https://github.com/claude-code-expert/brewnet/blob/main/LICENSE"
              target="_blank"
              rel="noopener"
            >
              License (MIT)
            </a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
