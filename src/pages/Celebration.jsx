import useCelebrationAnimations from "../hooks/useCelebrationAnimations";

const Celebration = () => {
  useCelebrationAnimations();

  return (
    <>
      <main
        className="main-content celebration-page"
        data-active-celebration="wedding"
      >
        <section className="hero-grid-section">
          <div className="hero-grid-container">
            <div
              className="hero-grid-col hero-col-main"
              style={{ backgroundImage: 'url("./hero_col1.webp")' }}
            >
              <div className="hero-col-overlay" />
              <div className="hero-col-content">
                <h1 className="hero-main-title">
                  Collect every guest photo in one place
                </h1>
                <p className="hero-main-subtitle">
                  Your guests scan a QR code, upload their photos and everything
                  is saved automatically in one shared album.
                </p>
                <div className="hero-buttons">
                  <a href="https://app.catchmemo.com" className="liquid-button">
                    <span>Create Your Event</span>
                    <div className="wave" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="hero-grid-col hero-col-narrow"
              style={{ backgroundImage: 'url("./hero_col2.webp")' }}
            >
              <div className="hero-col-overlay" />
              <div className="hero-col-content"></div>
            </div>
            <div
              className="hero-grid-col hero-col-narrow"
              style={{ backgroundImage: 'url("./hero_col3.webp")' }}
            >
              <div className="hero-col-overlay" />
              <div className="hero-col-content"></div>
            </div>
            <div
              className="hero-grid-col hero-col-narrow"
              style={{ backgroundImage: 'url("./hero_col4.webp")' }}
            >
              <div className="hero-col-overlay" />
              <div className="hero-col-content"></div>
            </div>
          </div>
        </section>
        <section className="sub-hero-section" id="special-moments">
          <div className="sub-hero-container">
            <div className="sub-hero-left">
              <span className="sub-hero-pretitle">[ PLATFORM OVERVIEW ]</span>
              <h2 className="sub-hero-title">What Is Catchmemo?</h2>
            </div>
            <div className="sub-hero-right">
              <div className="sub-hero-intro-text">
                <p>
                  Catchmemo is a private QR code photo-sharing platform designed
                  to make collecting photos, videos, and guestbook messages from
                  events simple and organized. Instead of chasing images across
                  chat apps, emails or text messages, guests can upload
                  everything directly to a single private gallery using a QR
                  code or private link. This streamlines the process of
                  gathering hundreds or thousands of memories from your event in
                  one place.
                </p>
                <p>
                  A Catchmemo gallery also comes with flexible customizations so
                  you can tailor the photo-sharing experience to suit your
                  event. You can adjust privacy settings, enable or disable
                  guest uploads and control how content is shared. Whether you
                  prefer a single gallery or multiple albums, Catchmemo keeps
                  everything neatly organized, allowing you to easily view and
                  download photos captured from your guests’ perspectives, all
                  without relying on hashtags or ugly file storage solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div style={{ position: "relative", zIndex: 10, height: 0 }}>
          <div className="depth-transition-divider">
            <svg
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,40 C360,95 1080,-15 1440,40 L1440,100 L0,100 Z"
                fill="#ffffff"
              />
              <path
                d="M0,40 C360,95 1080,-15 1440,40"
                fill="none"
                stroke="url(#neon-grad-depth)"
                strokeWidth={3}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="neon-grad-depth"
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
        </div>
        <section className="how-it-works-section" id="how-it-works">
          <div className="hiw-sticky-container">
            <div className="hiw-intro">
              <h2 className="hiw-section-title">How It Works</h2>
              <p className="hiw-section-subtitle">
                Collect memories in three simple steps—frictionless for you,
                effortless for your guests.
              </p>
            </div>
            <div className="hiw-track">
              <div className="hiw-step" id="step-1">
                <div className="step-card">
                  <span className="step-num">01</span>
                  <h3 className="step-title">Create your account</h3>
                  <p className="step-desc">
                    Set up your event page in under a minute. Just name your
                    event and set the date.
                  </p>
                  <div className="step-visual">
                    <div className="visual-phone">
                      <div className="phone-notch" />
                      <div className="phone-screen">
                        <div className="setup-header">Create Event</div>
                        <div className="setup-form">
                          <label>Event Name</label>
                          <div className="form-input">
                            Sarah &amp; Marc's Wedding
                          </div>
                          <label>Event Date</label>
                          <div className="form-input">October 12, 2026</div>
                          <button className="setup-btn" onclick="return false;">
                            Generate QR Code
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hiw-step" id="step-2">
                <div className="step-card">
                  <span className="step-num">02</span>
                  <h3 className="step-title">Design your QR card</h3>
                  <p className="step-desc">
                    Choose a pre-made template or design your custom QR card to
                    match your theme.
                  </p>
                  <div className="step-visual">
                    <div className="visual-qr-card">
                      <div className="card-title">Sarah &amp; Marc</div>
                      <div className="card-subtitle">October 12, 2026</div>
                      <div className="card-qr-box">
                        <div className="card-qr-inner">
                          <div className="qr-dot qr-corner-tl" />
                          <div className="qr-dot qr-corner-tr" />
                          <div className="qr-dot qr-corner-bl" />
                          <div className="qr-line" />
                        </div>
                      </div>
                      <div className="card-instructions">
                        Scan to share your photos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hiw-step" id="step-3">
                <div className="step-card">
                  <span className="step-num">03</span>
                  <h3 className="step-title">Print your cards</h3>
                  <p className="step-desc">
                    Download and print your QR cards. Place them at guest
                    tables, reception desks, or entrance boards.
                  </p>
                  <div className="step-visual">
                    <div className="visual-table-scene">
                      <div className="scene-signboard">
                        <div className="sign-qr-card">
                          <div className="sign-logo">💍</div>
                          <div className="sign-qr" />
                        </div>
                      </div>
                      <div className="scene-vase">
                        <div className="flower" />
                        <div className="stem" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hiw-step" id="step-4">
                <div className="step-card">
                  <span className="step-num">04</span>
                  <h3 className="step-title">Scan and upload</h3>
                  <p className="step-desc">
                    Guests point their cameras, scan the QR code, and instantly
                    upload photos. No app required.
                  </p>
                  <div className="step-visual">
                    <div className="visual-scan-phone">
                      <div className="scan-camera-view">
                        <div className="scan-target">
                          <div className="target-corners" />
                        </div>
                        <div className="scan-toast">
                          <span className="toast-icon">⚡</span>
                          <span className="toast-text">
                            Tap to upload photos
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hiw-step" id="step-5">
                <div className="step-card">
                  <span className="step-num">05</span>
                  <h3 className="step-title">Shared digital album</h3>
                  <p className="step-desc">
                    Every uploaded photo and video aggregates in a beautiful
                    live-updating gallery for everyone to enjoy.
                  </p>
                  <div className="step-visual">
                    <div className="visual-gallery">
                      <div className="gal-header">Memory Lane</div>
                      <div className="gal-grid">
                        <div className="gal-item item-1" />
                        <div className="gal-item item-2" />
                        <div className="gal-item item-3" />
                        <div className="gal-item item-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hiw-step" id="step-6">
                <div className="step-card">
                  <span className="step-num">06</span>
                  <h3 className="step-title">Download ZIP file</h3>
                  <p className="step-desc">
                    Export the entire collection in one click. Receive a
                    high-quality ZIP containing all original photos.
                  </p>
                  <div className="step-visual">
                    <div className="visual-download">
                      <div className="zip-icon">📂</div>
                      <div className="download-progress">
                        <div className="progress-bar-fill" />
                      </div>
                      <div className="download-text">
                        Exporting 142 photos...
                      </div>
                      <button
                        className="download-btn-visual"
                        onclick="return false;"
                      >
                        Download original ZIP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="templates-section" id="table-card-templates">
          <div className="templates-container">
            <div className="templates-text-col">
              <span className="templates-pretitle">
                [ TABLE CARDS &amp; TEMPLATES ]
              </span>
              <h2 className="templates-title">
                Create Beautiful Table Cards in Seconds
              </h2>
              <p className="templates-desc">
                Make it effortless for your guests to share their photos during
                the event. Place personalized table cards with your unique QR
                code on the tables. Customize everything to match your theme, or
                use our ready-made templates.
              </p>
              <ul className="templates-features">
                <li>
                  <div className="feature-icon-wrap">
                    <svg
                      className="feature-check"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <strong>Fully customizable:</strong> Change colors, text,
                    and fonts to match your event styling perfectly.
                  </div>
                </li>
                <li>
                  <div className="feature-icon-wrap">
                    <svg
                      className="feature-check"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <strong>Ready-to-use templates:</strong> Choose from
                    beautifully crafted designs for weddings, birthdays, and
                    parties.
                  </div>
                </li>
                <li>
                  <div className="feature-icon-wrap">
                    <svg
                      className="feature-check"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <strong>Print-ready PDF:</strong> Download your cards
                    instantly as a high-resolution PDF, ready to print at home
                    or locally.
                  </div>
                </li>
                <li>
                  <div className="feature-icon-wrap">
                    <svg
                      className="feature-check"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <strong>Super simple:</strong> No design experience needed —
                    generated automatically with your custom QR code.
                  </div>
                </li>
              </ul>
              <div className="templates-btn-wrap">
                <a href="https://app.catchmemo.com" className="templates-btn">
                  Start Designing
                </a>
              </div>
            </div>
            <div className="templates-grid-col">
              <div
                className="templates-image-wrap"
                style={{ aspectRatio: "4 / 5", maxWidth: 380 }}
              >
                <img 
                  src="/table_card_baby_shower.webp"
                  alt="Baby shower table card"
                  className="templates-display-image"
                loading="lazy" />
              </div>
            </div>
          </div>
        </section>
        <section className="final-touch-section" id="final-touch">
          <div className="final-touch-container">
            <div className="final-touch-image-col">
              <img 
                src="/wedding_testimonial.webp"
                alt="Wedding celebration"
                className="final-touch-image"
                id="final-touch-img"
              loading="lazy" />
            </div>
            <div className="final-touch-text-col">
              <h2 className="final-touch-title" id="final-touch-heading">
                The final touch to your celebration
              </h2>
              <div className="final-touch-text-content">
                <p className="final-touch-desc">
                  You spend so much time planning the perfect celebration — the
                  venue, decorations, music, food and every little detail.
                </p>
                <p className="final-touch-desc highlight-text">
                  CatchMemo helps you preserve the memories from it all.
                </p>
                <p className="final-touch-desc">
                  Instead of asking guests to send photos afterwards, every
                  moment is collected automatically in one beautiful place for
                  you to relive anytime.
                </p>
                <p className="final-touch-desc">
                  For a small part of your celebration budget, you get something
                  priceless to look back on forever.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-slider-section" id="social-proof">
          <svg
            width={0}
            height={0}
            style={{ display: "block", position: "absolute" }}
          >
            <defs>
              <linearGradient
                id="half-star-grad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="50%" stopColor="var(--theme-color, #ff85a2)" />
                <stop offset="50%" stopColor="rgba(6, 1, 18, 0.15)" />
              </linearGradient>
            </defs>
          </svg>
          <h3 className="testimonial-slider-title" id="social-proof-title">
            What Our Hosts Say
          </h3>
          <div className="testimonial-marquee-wrapper">
            <div className="testimonial-marquee-track">
              <div className="testimonial-marquee-group">
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="4.5 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="url(#half-star-grad)"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "Frictionless setup! Took 30 seconds to configure, and our
                    guests loved uploading photos without any app."
                  </p>
                  <span className="testimonial-author">
                    — Sofia &amp; Johan
                  </span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="4.5 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="url(#half-star-grad)"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "So cheap for what you get! Best part of our budget. We got
                    so many candid wedding photos."
                  </p>
                  <span className="testimonial-author">— Marcus K.</span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="5 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "Super easy to use. Even our older relatives managed to scan
                    the QR and upload pictures."
                  </p>
                  <span className="testimonial-author">— Emma L.</span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="4 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="rgba(6, 1, 18, 0.15)"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "Absolutely worth the price. The digital guestbook gallery
                    updated live during the dinner!"
                  </p>
                  <span className="testimonial-author">
                    — David &amp; Linnea
                  </span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="4.5 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="url(#half-star-grad)"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "The ZIP download was fast. We got 400+ high-res photos the
                    morning after."
                  </p>
                  <span className="testimonial-author">— Clara S.</span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="3.5 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="url(#half-star-grad)"
                      />
                    </svg>
                    <svg className="star-icon star-empty" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="rgba(6, 1, 18, 0.15)"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "Used it for a graduation party. Really cheap, simple setup,
                    and a great way to collect memories."
                  </p>
                  <span className="testimonial-author">— Anna P.</span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="5 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "No more chasing guests for photos! Everything is collected
                    in one digital album."
                  </p>
                  <span className="testimonial-author">
                    — Jonas &amp; Maria
                  </span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="4 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon star-empty" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="rgba(6, 1, 18, 0.15)"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "The printable table card templates are beautiful and easy
                    to match with event styling."
                  </p>
                  <span className="testimonial-author">— Sarah T.</span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="4.5 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="url(#half-star-grad)"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "Simple dashboard, great service, and incredibly cheap
                    considering how priceless the gallery is."
                  </p>
                  <span className="testimonial-author">— Viktor B.</span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="4.5 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="url(#half-star-grad)"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "Our guests had so much fun scanning the QR and seeing their
                    pictures on the projector wall!"
                  </p>
                  <span className="testimonial-author">
                    — Henrik &amp; Elin
                  </span>
                </div>
              </div>
              <div className="testimonial-marquee-group" aria-hidden="true">
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="4.5 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="url(#half-star-grad)"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "Frictionless setup! Took 30 seconds to configure, and our
                    guests loved uploading photos without any app."
                  </p>
                  <span className="testimonial-author">
                    — Sofia &amp; Johan
                  </span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="4.5 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="url(#half-star-grad)"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "So cheap for what you get! Best part of our budget. We got
                    so many candid wedding photos."
                  </p>
                  <span className="testimonial-author">— Marcus K.</span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="5 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "Super easy to use. Even our older relatives managed to scan
                    the QR and upload pictures."
                  </p>
                  <span className="testimonial-author">— Emma L.</span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="4 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon star-empty" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="rgba(6, 1, 18, 0.15)"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "Absolutely worth the price. The digital guestbook gallery
                    updated live during the dinner!"
                  </p>
                  <span className="testimonial-author">
                    — David &amp; Linnea
                  </span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="4.5 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="url(#half-star-grad)"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "The ZIP download was fast. We got 400+ high-res photos the
                    morning after."
                  </p>
                  <span className="testimonial-author">— Clara S.</span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="3.5 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="url(#half-star-grad)"
                      />
                    </svg>
                    <svg className="star-icon star-empty" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="rgba(6, 1, 18, 0.15)"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "Used it for a graduation party. Really cheap, simple setup,
                    and a great way to collect memories."
                  </p>
                  <span className="testimonial-author">— Anna P.</span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="5 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "No more chasing guests for photos! Everything is collected
                    in one digital album."
                  </p>
                  <span className="testimonial-author">
                    — Jonas &amp; Maria
                  </span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="4 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon star-empty" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="rgba(6, 1, 18, 0.15)"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "The printable table card templates are beautiful and easy
                    to match with event styling."
                  </p>
                  <span className="testimonial-author">— Sarah T.</span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="4.5 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="url(#half-star-grad)"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "Simple dashboard, great service, and incredibly cheap
                    considering how priceless the gallery is."
                  </p>
                  <span className="testimonial-author">— Viktor B.</span>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label="4.5 stars">
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                        fill="url(#half-star-grad)"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-quote">
                    "Our guests had so much fun scanning the QR and seeing their
                    pictures on the projector wall!"
                  </p>
                  <span className="testimonial-author">
                    — Henrik &amp; Elin
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Celebration;
