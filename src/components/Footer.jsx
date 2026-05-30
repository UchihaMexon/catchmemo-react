import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Fluid, glowing custom SVG transition wave (mirrored/parallel S-curve) */}
      <div className="footer-transition-divider">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C360,95 1080,-15 1440,40 L1440,100 L0,100 Z"
            fill="#03000a"
          />
          <path
            d="M0,40 C360,95 1080,-15 1440,40"
            fill="none"
            stroke="url(#neon-grad-bottom)"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="neon-grad-bottom"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#dc2743" stopOpacity="0.1" />
              <stop offset="25%" stopColor="#dc2743" stopOpacity={1} />
              <stop offset="75%" stopColor="#e6683c" stopOpacity={1} />
              <stop offset="100%" stopColor="#e6683c" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand & Socials */}
          <div className="footer-col brand-col">
            <a href="#" className="footer-logo">
              Catchmemo
            </a>
            <p className="footer-tagline">
              Tactile photo sharing and live event guestbooks. Because it only
              happens once.
            </p>
            <div className="footer-socials">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/catch.memo/"
                target="_blank"
                aria-label="Instagram"
                className="social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@catchmemo?_r=1&_t=ZN-96mqPhTBprS"
                target="_blank"
                aria-label="TikTok"
                className="social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/catchmemo"
                target="_blank"
                aria-label="LinkedIn"
                className="social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width={4} height={12} x={2} y={9} />
                  <circle cx={4} cy={4} r={2} />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 3: Product */}
          <div className="footer-col">
            <h3 className="footer-col-title">Product</h3>
            <ul className="footer-links">
              <li>
                <Link to="/wall-of-love">How it works</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <a href="https://app.catchmemo.com">Create Event</a>
              </li>
            </ul>
          </div>
          {/* Column 4: Contact & Details */}
          <div className="footer-col contact-col">
            <h3 className="footer-col-title">Contact &amp; Support</h3>
            <ul className="footer-links contact-info">
              <li>
                <span className="info-label">Support Email:</span>
                <a href="mailto:support@catchmemo.com" className="info-value">
                  support@catchmemo.com
                </a>
              </li>
              <li>
                <span className="info-label">General:</span>
                <a href="mailto:hello@catchmemo.com" className="info-value">
                  hello@catchmemo.com
                </a>
              </li>
              <li>
                <span className="info-label">Response Time:</span>
                <span className="info-value">Under 48 hours</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Sign-off */}
        <div className="footer-bottom">
          <p className="copyright">© 2026 Catchmemo. All rights reserved.</p>
          <p className="made-with-love">
            Made with ❤️ for unforgettable moments
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
