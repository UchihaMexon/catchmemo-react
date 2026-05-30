import React from "react";
import { Link } from "react-router-dom";
import usePricingAnimations from "../hooks/usePricingAnimations";

const Pricing = () => {
  usePricingAnimations();

  return (
    <>
      <main className="main-content pricing-page">
        <section className="pricing-hero-section">
          <div className="pricing-hero-bg" />
          <div className="pricing-hero-overlay" />
          <div className="pricing-hero-content">
            <h1 className="pricing-hero-title">
              Pricing plans - QR Code Photo Sharing
            </h1>
            <p className="pricing-hero-desc">
              Discover the perfect plan for your event. Whether you're hosting a
              small gathering or a large-scale celebration, Catchmemo has you
              covered with flexible options tailored to your needs.
            </p>
          </div>
        </section>
        <section className="pricing-cards-section" id="plans">
          <div className="pricing-cards-container">
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
        <section className="how-qr-section">
          <div className="how-qr-container">
            <div className="how-qr-content">
              <h2 className="how-qr-title">
                How To Get a QR Code for Event Photos
              </h2>
              <p className="how-qr-desc">
                To get a QR code for your event photos, create an event in under
                a minute. Once the event is created, a QR code is automatically
                generated.
              </p>
              <p className="how-qr-desc">
                Download the QR code and print it using a free template. This
                makes it easy for guests to scan the code and share photos from
                your event. After the event, you can easily access and download
                all the photos and videos from the admin dashboard.
              </p>
            </div>
          </div>
        </section>
        <section className="pricing-steps-section">
          <div className="steps-container">
            <h2 className="steps-heading">
              Steps to Get a QR Code for Event Photos
            </h2>
            <div className="steps-timeline">
              <div className="step-item">
                <div className="step-number-wrap">
                  <span className="step-number">1</span>
                </div>
                <div className="step-text-wrap">
                  <p className="step-text">
                    Sign up for free and create your event.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number-wrap">
                  <span className="step-number">2</span>
                </div>
                <div className="step-text-wrap">
                  <p className="step-text">
                    A QR code is automatically generated once the event is
                    created.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number-wrap">
                  <span className="step-number">3</span>
                </div>
                <div className="step-text-wrap">
                  <p className="step-text">
                    Download the QR code, which is linked to your event.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number-wrap">
                  <span className="step-number">4</span>
                </div>
                <div className="step-text-wrap">
                  <p className="step-text">
                    Print a template with your QR code. Guests can scan it to
                    upload their photos and videos into a private shared
                    gallery.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number-wrap">
                  <span className="step-number">5</span>
                </div>
                <div className="step-text-wrap">
                  <p className="step-text">
                    Access and download all your photos and videos from the
                    admin dashboard.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="pricing-hero-btns"
              style={{
                marginTop: "3rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a
                href="#plans"
                className="liquid-button"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                  color: "#ffffff",
                  border: "none",
                  boxShadow: "0 4px 15px rgba(220, 39, 67, 0.4)",
                }}
              >
                <span style={{ color: "#ffffff" }}>View Plans</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Pricing;
