export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo-text">Brewnet</span>
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
