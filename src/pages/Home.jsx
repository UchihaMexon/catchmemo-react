import { Link } from "react-router-dom";
import useHomeAnimations from "../hooks/useHomeAnimations";

const Home = () => {
  useHomeAnimations();

  return (
    <>
      <div>
        <div className="curtain-container">
          <div className="curtain curtain-left" />
          <div className="curtain curtain-right" />
          <div className="curtain-text">CATCHMEMO</div>
        </div>
        <main className="main-content">
          <section className="hero-section">
            <div className="video-container">
              <img
                src="/hero_background.webp"
                id="hero-bg-img"
                alt="Catchmemo Memory Collage"
                className="hero-bg-image"
                fetchPriority="high"
                decoding="async"
                width={1024}
                height={682}
              />
              <div className="video-curtain video-curtain-left" />
              <div className="video-curtain video-curtain-right" />
              <div className="hero-content">
                <h1 className="reveal-text">
                  <span className="line">
                    <span>Collect Every</span>
                  </span>
                  <span className="line">
                    <span>Photo &amp; Video</span>
                  </span>
                </h1>
                <div
                  className="reveal-wrapper"
                  style={{ marginBottom: "0.8rem" }}
                >
                  <p className="hero-tagline">Because it only happens once!</p>
                </div>
                <div
                  className="reveal-wrapper"
                  style={{
                    maxWidth: 650,
                    margin: "0 auto",
                    marginBottom: "1.5rem",
                  }}
                >
                  <p className="subtitle" style={{ lineHeight: "1.5" }}>
                    Guest Scan QR Code &amp; Upload in Seconds: Private Gallery
                    with Optional Live Photo Wall
                  </p>
                </div>
                <div className="reveal-wrapper mt-2">
                  <a href="https://app.catchmemo.com" className="liquid-button">
                    <span>Create Free Event</span>
                    <div className="wave" />
                  </a>
                </div>
              </div>
              <div className="scroll-indicator">
                <div className="mouse">
                  <div className="wheel" />
                </div>
                <span className="scroll-text">Scroll to explore</span>
              </div>
            </div>
          </section>
          
              
<div className="depth-gallery-container">
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
            <div className="depth-gallery-sticky">
<section className="flowchart-section depth-item light-theme">
                <div className="flow-heading-wrapper desktop-heading-fix" style={{ position: "absolute", top: "clamp(80px, 15vh, 120px)", left: "50%", transform: "translateX(-50%)", width: "100%", margin: "0", zIndex: "10", overflow: "hidden" }}>
                  <h2 className="gradient-text flow-heading" style={{ textAlign: "center", lineHeight: "1.1" }}>Easy to use</h2>
                </div>
                
                
                
                <div className="flowchart-container linear-layout">
                    {/* Step 1 */}
                    <div className="flow-step">
                      <div className="flow-graphic-wrapper"><div className="flow-card qr-card flow-node-1">
                        <div className="qr-frame">
                          <div className="qr-corner tl" />
                          <div className="qr-corner tr" />
                          <div className="qr-corner bl" />
                          <div className="qr-corner br" />
                          <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://catchmemo.com" alt="QR" className="qr-img" />
                        </div>
                        
                      </div></div>
                      <div className="flow-text">
                        <h3>1. Scan QR Code</h3>
                        <p>No app to download. Guests simply point their camera.</p>
                      </div>
                    </div>

                    {/* Arrow 1 */}
                    <div className="flow-arrow-wrapper">
                      <svg className="flow-arrow flow-arrow-right" viewBox="0 0 120 20">
                        <path className="arrow-path" d="M 5 12 Q 55 2 110 12 M 95 5 Q 105 8 110 12 Q 100 17 95 20" stroke="var(--accent-secondary)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Step 2 */}
                    <div className="flow-step">
                      <div className="flow-graphic-wrapper"><div className="flow-card upload-card flow-node-2">
                        <div className="upload-item">
                          <div className="up-thumb" style={{ backgroundImage: "url('/beach_wedding_love.webp')" }} />
                          <div className="up-info">
                            <span className="up-name">IMG_3789.JPG</span>
                            <div className="up-bar"><div className="up-progress p1" /></div>
                          </div>
                        </div>
                        <div className="upload-item">
                          <div className="up-thumb" style={{ backgroundImage: "url('/party_pricing.webp')" }} />
                          <div className="up-info">
                            <span className="up-name">IMG_3767.JPG</span>
                            <div className="up-bar"><div className="up-progress p2" /></div>
                          </div>
                        </div>
                        <div className="upload-item">
                          <div className="up-thumb" style={{ backgroundImage: "url('/hero_col4.webp')" }} />
                          <div className="up-info">
                            <span className="up-name">IMG_3758.JPG</span>
                            <div className="up-bar"><div className="up-progress p3" /></div>
                          </div>
                        </div>
                      </div></div>
                      <div className="flow-text">
                        <h3>2. Snap & Upload</h3>
                        <p>Guests take photos and upload directly from their browser.</p>
                      </div>
                    </div>

                    {/* Arrow 2 */}
                    <div className="flow-arrow-wrapper">
                      <svg className="flow-arrow flow-arrow-right" viewBox="0 0 120 20">
                        <path className="arrow-path" d="M 5 12 Q 55 2 110 12 M 95 5 Q 105 8 110 12 Q 100 17 95 20" stroke="var(--accent-primary)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Step 3 */}
                    <div className="flow-step">
                      
                      <div className="flow-graphic-wrapper"><div className="sim-phone flow-node-3 flowchart-sim-phone" style={{ transform: "scale(0.85)", transformOrigin: "top center" }}>
                        <div className="sim-phone-notch" />
                        <div className="sim-phone-screen">
                          <div className="sim-phone-header">
                            <span className="sim-phone-logo">Catchmemo</span>
                          </div>
                          <div className="sim-phone-body" style={{ padding: "0 10px 10px 10px", justifyContent: "flex-start" }}>
                            <p className="sim-phone-status" style={{ fontSize: "0.8rem", marginBottom: "15px", color: "#fff" }}>
                              Sarah's 30th
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', width: '100%' }}>
                              <div style={{ backgroundImage: "url('/party_pricing.webp')", height: '55px', borderRadius: '6px', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                              <div style={{ backgroundImage: "url('/hero_col4.webp')", height: '55px', borderRadius: '6px', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                              <div style={{ backgroundImage: "url('/how_it_works.webp')", height: '55px', borderRadius: '6px', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                              <div style={{ backgroundImage: "url('/beach_wedding_love.webp')", height: '55px', borderRadius: '6px', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                            </div>
                          </div>
                        </div>
                      </div></div>
                      <div className="flow-text">
                        <h3>3. Shared Album</h3>
                        <p>Everything instantly drops into your private digital gallery.</p>
                      </div>
                    </div>
                </div>

              </section>
              <section className="feature-section depth-item">
                <div className="feature-content left-side">
                  <div className="reveal-wrapper">
                    <h2 className="gradient-text">Live Photo Wall</h2>
                  </div>
                  <div className="reveal-wrapper mt-2">
                    <p>
                      Create an engaging and interactive experience with our
                      Live Photo Wall. As guests upload photos via QR code, they
                      instantly appear on a dynamic photowall. This live feed
                      brings everyone together, capturing every special moment
                      in real-time.
                    </p>
                  </div>
                </div>
                <div className="feature-image-wrapper right-side sim-wrapper">
                  <div className="wall-simulator">
                    <div className="sim-tv">
                      <div className="sim-tv-header">
                        <span className="sim-tv-dot" />
                        <span className="sim-tv-title">LIVE PHOTO WALL</span>
                      </div>
                      <div className="sim-tv-grid" id="tv-grid">
                        <div className="tv-photo-card">
                          <img src="/wedding.webp" alt="Wedding" loading="lazy" />
                        </div>
                        <div className="tv-photo-card">
                          <img src="/birthday.webp" alt="Birthday" loading="lazy" />
                        </div>
                        <div className="tv-photo-card">
                          <img src="/baby_shower.webp" alt="Baby shower" loading="lazy" />
                        </div>
                        <div className="tv-photo-card">
                          <img src="/celebrations.webp" alt="Celebrations" loading="lazy" />
                        </div>
                      </div>
                    </div>
                    <div className="sim-phone">
                      <div className="sim-phone-notch" />
                      <div className="sim-phone-screen">
                        <div
                          className="sim-phone-loading"
                          id="sim-loading-screen"
                        >
                          <div className="sim-phone-spinner" />
                          <div className="sim-phone-loading-text">
                            UPLOADING...
                          </div>
                        </div>
                        <div className="sim-phone-header">
                          <span className="sim-phone-logo">Catchmemo</span>
                        </div>
                        <div className="sim-phone-body">
                          <p className="sim-phone-status">
                            Upload your guest photo!
                          </p>
                          <div className="sim-phone-thumbnails">
                            <button
                              className="thumb-upload-btn"
                              data-img="./how_it_works.webp"
                              aria-label="Upload How It Works"
                            >
                              <img src="/how_it_works.webp" alt="Upload 1" loading="lazy" />
                            </button>
                            <button
                              className="thumb-upload-btn"
                              data-img="./live_wall.webp"
                              aria-label="Upload Live Wall"
                            >
                              <img src="/live_wall.webp" alt="Upload 2" loading="lazy" />
                            </button>
                            <button
                              className="thumb-upload-btn"
                              data-img="./pricing.webp"
                              aria-label="Upload Pricing"
                            >
                              <img src="/pricing.webp" alt="Upload 3" loading="lazy" />
                            </button>
                          </div>
                          <span className="sim-phone-or">
                            or select from device
                          </span>
                          <label
                            htmlFor="sim-file-input"
                            className="sim-phone-btn"
                          >
                            <span>CHOOSE PHOTO</span>
                          </label>
                          <input
                            type="file"
                            id="sim-file-input"
                            accept="image/*"
                            style={{ display: "none" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="feature-section depth-item pricing-slide"
                id="pricing"
              >
                <div className="feature-content left-side">
                  <div className="reveal-wrapper">
                    <h2 className="gradient-text">Pricing Plans</h2>
                  </div>
                  <div className="reveal-wrapper mt-2">
                    <p>
                      Choose the perfect plan for your event. Get high-quality
                      photo and video storage, private sharing with custom QR
                      codes, and our cinematic Live Photo Wall.
                    </p>
                  </div>
                </div>
                <div className="feature-image-wrapper right-side pricing-wrapper">
                  <div className="card-container">
                    <div className="card-effect">
                      <div className="card-inner">
                        <div className="card__liquid" />
                        <div className="card__shine" />
                        <div className="card__glow" />
                        <div className="card__content">
                          <div className="card__badge">Free</div>
                          <div className="card__text-container">
                            <h3 className="card__title">Free</h3>
                            <ul className="card-features">
                              <li>
                                Up to <strong>50</strong> Photos &amp; Videos
                              </li>
                              <li>Live Digital Photo Wall</li>
                              <li>Guestbook &amp; Live Feed</li>
                              <li>Good Quality Photos</li>
                              <li>Basic Page Customization</li>
                              <li>Unique QR-Code &amp; URL</li>
                              <li>Basic Event Options</li>
                              <li>
                                Upload for <strong>1 Day</strong>
                              </li>
                              <li>
                                Saved for <strong>15 Days</strong>
                              </li>
                              <li>Download Media ZIP</li>
                              <li>Includes Catchmemo branding</li>
                            </ul>
                          </div>
                          <div className="card__footer">
                            <div className="card__price">$0</div>
                            <a
                              href="https://app.catchmemo.com"
                              className="card__button"
                            >
                              Get Started
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-container featured">
                    <div className="card-effect">
                      <div className="card-inner">
                        <div className="card__liquid" />
                        <div className="card__shine" />
                        <div className="card__glow" />
                        <div className="card__content">
                          <div className="card__badge">Most Popular 🔥</div>
                          <div className="card__text-container">
                            <h3 className="card__title">Premium</h3>
                            <ul className="card-features">
                              <li>
                                <strong>Unlimited</strong> Photos &amp; Videos
                              </li>
                              <li>Live Digital Photo Wall</li>
                              <li>Guestbook &amp; Live Feed</li>
                              <li>High Quality Photos</li>
                              <li>Advanced Customization</li>
                              <li>Unique QR-Code &amp; URL</li>
                              <li>Advanced Event Options</li>
                              <li>
                                Upload for <strong>30 Days</strong>
                              </li>
                              <li>
                                Saved for <strong>1 Year</strong>
                              </li>
                              <li>Download Media ZIP</li>
                              <li>Collect Leads Form</li>
                            </ul>
                          </div>
                          <div className="card__footer">
                            <div className="card__price">
                              <span
                                style={{
                                  textDecoration: "line-through",
                                  opacity: "0.4",
                                  fontSize: "0.65em",
                                  marginRight: 6,
                                }}
                              >
                                $199
                              </span>
                              $99
                            </div>
                            <a
                              href="https://app.catchmemo.com"
                              className="card__button"
                            >
                              Create Event
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-container">
                    <div className="card-effect">
                      <div className="card-inner">
                        <div className="card__liquid" />
                        <div className="card__shine" />
                        <div className="card__glow" />
                        <div className="card__content">
                          <div className="card__badge">Upgrade</div>
                          <div className="card__text-container">
                            <h3 className="card__title">Pro</h3>
                            <ul className="card-features">
                              <li>
                                Up to <strong>500</strong> Photos &amp; Videos
                              </li>
                              <li>Live Digital Photo Wall</li>
                              <li>Guestbook &amp; Live Feed</li>
                              <li>High Quality Photos</li>
                              <li>Moderate Customization</li>
                              <li>Unique QR-Code &amp; URL</li>
                              <li>Moderate Event Options</li>
                              <li>
                                Upload for <strong>14 Days</strong>
                              </li>
                              <li>
                                Saved for <strong>120 Days</strong>
                              </li>
                              <li>Download Media ZIP</li>
                            </ul>
                          </div>
                          <div className="card__footer">
                            <div className="card__price">
                              <span
                                style={{
                                  textDecoration: "line-through",
                                  opacity: "0.4",
                                  fontSize: "0.65em",
                                  marginRight: 6,
                                }}
                              >
                                $79
                              </span>
                              $39
                            </div>
                            <a
                              href="https://app.catchmemo.com"
                              className="card__button"
                            >
                              Upgrade
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <section className="polaroid-section" id="celebrations">
            <div className="reveal-line" />
            <div className="polaroid-intro-title-wrap">
              <a href="https://app.catchmemo.com" className="intro-title flip-link">
                GET STARTED NOW
              </a>
            </div>
            <div className="polaroid-static-page">
              <div className="grid">
                <div className="grid__item" data-category="celebration">
                  <Link to="/celebration" className="polaroid-card">
                    <div className="polaroid-inner">
                      <img
                        src="/celebrations.webp"
                        alt="Celebration"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="card-center-btn">
                        <span>Celebration</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="grid__item" data-category="wall-of-love">
                  <Link to="/wall-of-love" className="polaroid-card">
                    <div className="polaroid-inner">
                      <img
                        src="/wedding_testimonial.webp"
                        alt="Wall of love"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="card-center-btn">
                        <span>Wall of love</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="grid__item" data-category="pricing">
                  <Link to="/pricing" className="polaroid-card">
                    <div className="polaroid-inner">
                      <img
                        src="/older_couple_pricing.webp"
                        alt="Pricing"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="card-center-btn">
                        <span>Pricing</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="grid__item" data-category="blog">
                  <Link to="/blog" className="polaroid-card">
                    <div className="polaroid-inner">
                      <img
                        src="/blog_wedding_dancing.webp"
                        alt="Blog"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="card-center-btn">
                        <span>Blog</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Moved inside to fill the 100vh height and remove empty space */}
              <div
                className="press-section"
                style={{
                  marginTop: "auto",
                  width: "calc(100% + 4em)",
                  marginLeft: "-2em",
                  marginRight: "-2em",
                  padding: "0 0 40px 0",
                  background: "transparent",
                }}
              >
                <h3 className="press-title" style={{ marginBottom: "30px" }}>
                  THE SMART WAY TO CELEBRATE
                </h3>
                <div className="press-logos-wrapper">
                  <div className="press-logos">
                    <span className="press-logo">Events Hosted <span className="stat-highlight">1,200+</span></span>
                    <span className="press-logo">Memories Shared <span className="stat-highlight">92,000+</span></span>
                    <span className="press-logo">Happiness Index <span className="stat-highlight">99.4%</span></span>
                    <span className="press-logo">Zero Apps Required</span>
                    <span className="press-logo">Setup in Seconds <span className="stat-highlight">⚡</span></span>
                    
                    {/* Duplicate set for infinite scroll effect */}
                    <span className="press-logo">Events Hosted <span className="stat-highlight">1,200+</span></span>
                    <span className="press-logo">Memories Shared <span className="stat-highlight">92,000+</span></span>
                    <span className="press-logo">Happiness Index <span className="stat-highlight">99.4%</span></span>
                    <span className="press-logo">Zero Apps Required</span>
                    <span className="press-logo">Setup in Seconds <span className="stat-highlight">⚡</span></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="faq-section" id="faq">
            <div className="faq-transition-divider">
              <svg
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,40 C360,95 1080,-15 1440,40 L1440,100 L0,100 Z"
                  fill="#060112"
                />
                <path
                  d="M0,40 C360,95 1080,-15 1440,40"
                  fill="none"
                  stroke="url(#neon-grad)"
                  strokeWidth={3}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="neon-grad"
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
            <div className="faq-container">
              <h2 className="faq-main-title">Frequently Asked Questions</h2>
              <p className="faq-subtitle">
                Everything you need to know about Catchmemo
              </p>
              <div className="faq-grid">
                <div className="faq-item">
                  <div className="faq-question">
                    <span>How do guests share their photos?</span>
                    <span className="faq-toggle-icon">+</span>
                  </div>
                  <div className="faq-answer">
                    <p>
                      It's incredibly simple! Guests scan your event's private
                      QR code with their phone's camera and upload their photos
                      instantly. No app downloads, no registrations, and no
                      hassle.
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    <span>What kind of events is Catchmemo for?</span>
                    <span className="faq-toggle-icon">+</span>
                  </div>
                  <div className="faq-answer">
                    <p>
                      Catchmemo is perfect for any gathering where memories are
                      made! It is widely used for weddings, birthdays, baby
                      showers, graduation parties, corporate events, and family
                      celebrations.
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    <span>Do guests need to create an account?</span>
                    <span className="faq-toggle-icon">+</span>
                  </div>
                  <div className="faq-answer">
                    <p>
                      No, never! We believe photo sharing should be 100%
                      friction-free. Guests can upload photos and view the
                      shared album immediately without signing up, entering an
                      email, or downloading anything.
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    <span>How does the Live Photo Wall work?</span>
                    <span className="faq-toggle-icon">+</span>
                  </div>
                  <div className="faq-answer">
                    <p>
                      When you create an event, you get a unique Live Photo Wall
                      link. Simply open this link on any device connected to a
                      TV, projector, or big screen. As guests upload photos,
                      they slide onto the screen automatically in real-time!
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    <span>Are the photos secure and private?</span>
                    <span className="faq-toggle-icon">+</span>
                  </div>
                  <div className="faq-answer">
                    <p>
                      Absolutely. Your event gallery is private and secured.
                      Only people with your unique QR code or event link can
                      view and upload photos. You also have full administrator
                      control to moderate and delete any photo instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="theme-modal" id="theme-modal">
            <div className="theme-modal-backdrop" id="theme-modal-backdrop" />
            <div className="theme-modal-container">
              <button
                className="theme-modal-close"
                id="theme-modal-close"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
              <div
                className="theme-modal-content-wrap"
                data-lenis-prevent="true"
              >
                <div className="theme-modal-image-side">
                  <img alt="Event photo"
                    className="theme-modal-img"
                    id="theme-modal-img"
                  loading="lazy" />
                  <div className="theme-modal-img-overlay" />
                </div>
                <div className="theme-modal-text-side">
                  <h3 className="theme-modal-title" id="theme-modal-title" />
                  <p
                    className="theme-modal-subtitle"
                    id="theme-modal-subtitle"
                  />
                  <div className="theme-modal-divider" />
                  <p className="theme-modal-desc" id="theme-modal-desc" />
                  <a
                    href="https://app.catchmemo.com"
                    className="theme-modal-cta-btn"
                  >
                    Create Your Event
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
