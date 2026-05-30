import useWallOfLoveAnimations from "../hooks/useWallOfLoveAnimations";

const WallOfLove = () => {
  useWallOfLoveAnimations();

  return (
    <>
      <main className="main-content wall-love-page">
        <section className="featured-story-section">
          <div className="featured-story-container">
            <span className="featured-pretitle">[ FEATURED WEDDING ]</span>
            <div className="featured-story-text-col">
              <h2 className="featured-story-title">
                For all the moments Mark &amp; Lexi didn't want to miss!
              </h2>
              <p className="featured-story-desc">
                Don’t just take our word for it! Hear directly from our amazing
                customers who’ve used Catchmemo to capture and relive their
                favorite memories. Their stories highlight the joy and magic
                that come from bringing everyone’s photos together in one
                practical place.
              </p>
              <div className="featured-quote-card">
                <svg
                  className="quote-icon"
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
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <p className="quote-text">
                  "We woke up the morning after our wedding and had over 800
                  candid photos taken by our closest family and friends. We saw
                  smiles, laughs, and quiet moments we would have completely
                  missed otherwise!"
                </p>
                <div className="quote-author">
                  — Lexi &amp; Mark, September 2025
                </div>
              </div>
            </div>
            <div className="featured-story-img-col">
              <img 
                src="/beach_wedding_love.webp"
                alt="Mark and Lexi beach wedding celebration"
                className="featured-story-image"
              loading="lazy" />
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
        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-number" data-target={1200}>
                0
              </div>
              <div className="stat-label">Events Hosted</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target={92000}>
                0
              </div>
              <div className="stat-label">Memories Shared</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target={994}>
                0
              </div>
              <div className="stat-label">Happiness Index</div>
            </div>
          </div>
        </section>
        <section className="masonry-section">
          <svg
            width={0}
            height={0}
            style={{ display: "block", position: "absolute" }}
          >
            <defs>
              <linearGradient
                id="half-star-grad-gold"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="50%" stopColor="#ffb800" />
                <stop offset="50%" stopColor="rgba(6, 1, 18, 0.15)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="masonry-container-header">
            <h2 className="masonry-heading">Shared From Real Celebrations</h2>
            <p className="masonry-subheading">
              A collection of real-world notes, photo uploads, and ratings left
              by event organizers.
            </p>
          </div>
          <div className="masonry-grid">
            <div className="wall-card masonry-item">
              <div className="testimonial-stars-row">
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
              <p className="wall-card-quote">
                "Honestly, the best choice we made for the reception. Having QR
                cards on tables made it so simple that even my 75-year-old
                grandmother uploaded a selfie!"
              </p>
              <div className="wall-card-footer">
                <div className="card-author-name">Hanna &amp; Christoffer</div>
                <div className="card-event-tag">Wedding Reception</div>
              </div>
            </div>
            <div className="wall-card wall-polaroid-card masonry-item">
              <div
                className="polaroid-photo"
                style={{ backgroundImage: 'url("./wedding_party_1.webp")' }}
              />
              <div className="polaroid-scribble">
                "Scan to share, we shared the love! — Maja &amp; Robin 14.09.25"
              </div>
            </div>
            <div className="wall-card masonry-item">
              <div className="testimonial-stars-row">
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
                    fill="url(#half-star-grad-gold)"
                  />
                </svg>
              </div>
              <p className="wall-card-quote">
                "The best part was not having to chase everyone down for photos
                afterwards. Everyone uploaded their shots directly during the
                night, and showing the live slideshow on the screen was a huge
                hit!"
              </p>
              <div className="wall-card-footer">
                <div className="card-author-name">Lars-Erik Bergström</div>
                <div className="card-event-tag">50th Birthday Party</div>
              </div>
            </div>
            <div className="wall-card guestbook-card masonry-item">
              <div className="paper-texture" />
              <p className="handwritten-text">
                "Welcome to the world little baby Love! The photo gallery was so
                adorable, loved seeing all the bump photos shared by everyone on
                the wall."
              </p>
              <p className="handwritten-signature">— Aunt Malin</p>
            </div>
            <div className="wall-card wall-polaroid-card masonry-item">
              <div
                className="polaroid-photo"
                style={{ backgroundImage: 'url("./birthday_party_1.webp")' }}
              />
              <div className="polaroid-scribble">
                "Grandma's 80th birthday! The whole family gathered ♥"
              </div>
            </div>
            <div className="wall-card masonry-item">
              <div className="testimonial-stars-row">
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
              <p className="wall-card-quote">
                "We are so glad we chose Catchmemo. It was incredibly easy for
                our guests to use, and we ended up with over 600 spontaneous
                candid photos that our official photographer could never have
                captured."
              </p>
              <div className="wall-card-footer">
                <div className="card-author-name">Johanna &amp; Pontus</div>
                <div className="card-event-tag">Wedding Party</div>
              </div>
            </div>
            <div className="wall-card masonry-item">
              <div className="testimonial-stars-row">
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
                    fill="url(#half-star-grad-gold)"
                  />
                </svg>
                <svg className="star-icon star-empty" viewBox="0 0 24 24">
                  <path
                    d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"
                    fill="rgba(6, 1, 18, 0.15)"
                  />
                </svg>
              </div>
              <p className="wall-card-quote">
                "Super simple to upload, even for the older relatives. We added
                the QR code to our invitations and on a welcome sign. It's so
                nice having all the well-wishes and pictures saved in one
                place!"
              </p>
              <div className="wall-card-footer">
                <div className="card-author-name">Fanny &amp; Tim</div>
                <div className="card-event-tag">Forest Baby Shower</div>
              </div>
            </div>
            <div className="wall-card guestbook-card masonry-item">
              <div className="paper-texture" />
              <p className="handwritten-text">
                "Thank you for a magical evening! You both look absolutely
                stunning. Wishing you a lifetime of love and beautiful
                memories."
              </p>
              <p className="handwritten-signature">— The Ekdahl Family</p>
            </div>
            <div className="wall-card masonry-item">
              <div className="testimonial-stars-row">
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
              <p className="wall-card-quote">
                "Incredibly smooth! We placed the QR codes on the tables and
                people uploaded everything straight from the dance floor. Way
                better than sharing a Google Drive link that nobody ever opens."
              </p>
              <div className="wall-card-footer">
                <div className="card-author-name">Oskar S.</div>
                <div className="card-event-tag">Graduation Bash</div>
              </div>
            </div>
            <div className="wall-card wall-polaroid-card masonry-item">
              <div
                className="polaroid-photo"
                style={{ backgroundImage: 'url("./baby_shower_1.webp")' }}
              />
              <div className="polaroid-scribble">
                "Waiting for baby sister! 👶🏼✨ — Julia's shower"
              </div>
            </div>
            <div className="wall-card masonry-item">
              <div className="testimonial-stars-row">
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
                    fill="url(#half-star-grad-gold)"
                  />
                </svg>
              </div>
              <p className="wall-card-quote">
                "It became a real talking point during the dinner! Our guests
                had so much fun scanning and uploading. Plus, the photos were
                high resolution and look amazing."
              </p>
              <div className="wall-card-footer">
                <div className="card-author-name">Therese &amp; Kristoffer</div>
                <div className="card-event-tag">Summer Wedding</div>
              </div>
            </div>
            <div className="wall-card guestbook-card masonry-item">
              <div className="paper-texture" />
              <p className="handwritten-text">
                "Happy 40th birthday mate! Thanks for a legendary night, the
                Catchmemo gallery is already filled with evidence..."
              </p>
              <p className="handwritten-signature">— Tobbe &amp; the gang</p>
            </div>
            <div className="wall-card wall-polaroid-card masonry-item">
              <div
                className="polaroid-photo"
                style={{ backgroundImage: 'url("./wedding_party_2.webp")' }}
              />
              <div className="polaroid-scribble">
                "The best day of our lives! 💍🤍 — Mikaela &amp; Alexander"
              </div>
            </div>
            <div className="wall-card masonry-item">
              <div className="testimonial-stars-row">
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
              <p className="wall-card-quote">
                "So simple and highly appreciated by everyone. All guests, young
                and old, understood exactly what to do. A wonderful way to
                gather everyone's perspectives of our silver anniversary."
              </p>
              <div className="wall-card-footer">
                <div className="card-author-name">Cecilia &amp; Mats</div>
                <div className="card-event-tag">Silver Wedding</div>
              </div>
            </div>
            <div className="wall-card guestbook-card masonry-item">
              <div className="paper-texture" />
              <p className="handwritten-text">
                "Happy birthday! So glad we got to celebrate with you tonight.
                Cheers to another great year!"
              </p>
              <p className="handwritten-signature">— Linn &amp; Patrik</p>
            </div>
          </div>
        </section>
        <section className="memory-stream-section">
          <div className="stream-title-wrap">
            <h3 className="stream-title">Live Memory Stream</h3>
            <p className="stream-desc">
              Real-time candid snapshots uploaded by guests during events.
            </p>
          </div>
          <div className="marquee-wrapper">
            <div className="marquee-track">
              <div className="marquee-item">
                <img
                  src="/wedding_party_3.webp"
                  alt="Guest memory upload"
                  loading="lazy"
                  decoding="async"
                />
                <span className="marquee-note">"Love &amp; Laughter"</span>
              </div>
              <div className="marquee-item">
                <img
                  src="/birthday_party_2.webp"
                  alt="Guest memory upload"
                  loading="lazy"
                  decoding="async"
                />
                <span className="marquee-note">"Make a Wish"</span>
              </div>
              <div className="marquee-item">
                <img
                  src="/baby_shower_2.webp"
                  alt="Guest memory upload"
                  loading="lazy"
                  decoding="async"
                />
                <span className="marquee-note">"Little Miracle"</span>
              </div>
              <div className="marquee-item">
                <img
                  src="/birthday_party_3.webp"
                  alt="Guest memory upload"
                  loading="lazy"
                  decoding="async"
                />
                <span className="marquee-note">"Cheers to 30!"</span>
              </div>
              <div className="marquee-item">
                <img
                  src="/baby_shower_3.webp"
                  alt="Guest memory upload"
                  loading="lazy"
                  decoding="async"
                />
                <span className="marquee-note">"Baby Boy"</span>
              </div>
              <div className="marquee-item">
                <img
                  src="/wedding_party_1.webp"
                  alt="Guest memory upload"
                  loading="lazy"
                  decoding="async"
                />
                <span className="marquee-note">"Just Married"</span>
              </div>
              <div className="marquee-item">
                <img
                  src="/wedding_party_3.webp"
                  alt="Guest memory upload"
                  loading="lazy"
                  decoding="async"
                />
                <span className="marquee-note">"Love &amp; Laughter"</span>
              </div>
              <div className="marquee-item">
                <img
                  src="/birthday_party_2.webp"
                  alt="Guest memory upload"
                  loading="lazy"
                  decoding="async"
                />
                <span className="marquee-note">"Make a Wish"</span>
              </div>
              <div className="marquee-item">
                <img
                  src="/baby_shower_2.webp"
                  alt="Guest memory upload"
                  loading="lazy"
                  decoding="async"
                />
                <span className="marquee-note">"Little Miracle"</span>
              </div>
              <div className="marquee-item">
                <img
                  src="/birthday_party_3.webp"
                  alt="Guest memory upload"
                  loading="lazy"
                  decoding="async"
                />
                <span className="marquee-note">"Cheers to 30!"</span>
              </div>
              <div className="marquee-item">
                <img
                  src="/baby_shower_3.webp"
                  alt="Guest memory upload"
                  loading="lazy"
                  decoding="async"
                />
                <span className="marquee-note">"Baby Boy"</span>
              </div>
              <div className="marquee-item">
                <img
                  src="/wedding_party_1.webp"
                  alt="Guest memory upload"
                  loading="lazy"
                  decoding="async"
                />
                <span className="marquee-note">"Just Married"</span>
              </div>
            </div>
          </div>
        </section>
        <section className="wall-cta-section">
          <div className="wall-cta-container">
            <h2 className="wall-cta-title">Create Your Own Wall of Love</h2>
            <p className="wall-cta-desc">
              Capture the memories of your upcoming wedding, party, or
              celebration from everyone's perspective.
            </p>
            <div className="wall-cta-btns">
              <a href="https://app.catchmemo.com" className="liquid-button">
                <span>Get Started Now</span>
                <div className="wave" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WallOfLove;
