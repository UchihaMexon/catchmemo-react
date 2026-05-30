import React from "react";
import { Link } from "react-router-dom";
import useBlogAnimations from "../hooks/useBlogAnimations";

const Blog = () => {
  useBlogAnimations();

  return (
    <>
      <main className="main-content blog-page">
        <section className="blog-hero-section">
          <div className="blog-hero-content">
            <h1 className="blog-hero-title">
              Catchmemo Blog — Tips, Guides &amp; Stories
            </h1>
            <p className="blog-hero-desc">
              Discover the best ways to collect guest photos, engage your crowd,
              and preserve every memory from your big day.
            </p>
          </div>
        </section>
        <section className="blog-featured-section">
          <div className="blog-container">
            <div className="blog-featured-card" data-article={1}>
              <div
                className="featured-img-col"
                style={{
                  backgroundImage: 'url("./blog_wedding_confetti.jpg")',
                }}
              />
              <div className="featured-text-col">
                <span className="blog-tag featured-tag">Featured Guide</span>
                <h2 className="featured-card-title">
                  How to Setup QR Code Photo Sharing at Your Wedding
                </h2>
                <p className="featured-card-excerpt">
                  Planning your big day? Discover step-by-step how to integrate
                  QR codes into your table settings, signage, and invitations.
                  Maximize photo uploads and collect raw, candid memories from
                  all your guests seamlessly.
                </p>
                <div className="blog-card-meta">
                  <span className="meta-date">May 24, 2026</span>
                  <span className="meta-dot">•</span>
                  <span className="meta-read">5 min read</span>
                </div>
                <button className="read-article-btn">Read Article</button>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-grid-section">
          <div className="blog-container">
            <div className="blog-grid">
              <div className="blog-grid-card" data-article={2}>
                <div
                  className="card-img"
                  style={{
                    backgroundImage:
                      'url("./axville-8vheRi6dbaw-unsplash.jpg")',
                  }}
                />
                <div className="card-body">
                  <span className="blog-tag">Event Tips</span>
                  <h3 className="card-title">
                    Top 5 Ways to Engage Guests at Your Party (Live Slideshows
                    &amp; More)
                  </h3>
                  <p className="card-excerpt">
                    Want to throw a party that people talk about for months?
                    Learn how a Live Photo Wall and interactive slide feeds
                    motivate guests to upload their fun dance floor moments in
                    real-time.
                  </p>
                  <div className="blog-card-meta">
                    <span className="meta-date">May 22, 2026</span>
                    <span className="meta-dot">•</span>
                    <span className="meta-read">4 min read</span>
                  </div>
                  <button className="read-article-btn">Read Article</button>
                </div>
              </div>
              <div className="blog-grid-card" data-article={3}>
                <div
                  className="card-img"
                  style={{
                    backgroundImage:
                      'url("./pexels-rebornfilmes-33542457.jpg")',
                  }}
                />
                <div className="card-body">
                  <span className="blog-tag">Guides</span>
                  <h3 className="card-title">
                    App-Free vs. App-Based Photo Sharing: Why Guests Prefer QR
                    Codes
                  </h3>
                  <p className="card-excerpt">
                    Forcing guests to download a bulky app or register accounts
                    kills engagement. We break down the numbers comparing
                    app-based sharing with instant browser QR code uploads.
                  </p>
                  <div className="blog-card-meta">
                    <span className="meta-date">May 19, 2026</span>
                    <span className="meta-dot">•</span>
                    <span className="meta-read">3 min read</span>
                  </div>
                  <button className="read-article-btn">Read Article</button>
                </div>
              </div>
              <div className="blog-grid-card" data-article={4}>
                <div
                  className="card-img"
                  style={{
                    backgroundImage: 'url("./blog_wedding_dancing.jpg")',
                  }}
                />
                <div className="card-body">
                  <span className="blog-tag">Stories</span>
                  <h3 className="card-title">
                    Capturing the Unseen: Why Candid Guest Photos Beat Posed
                    Shots
                  </h3>
                  <p className="card-excerpt">
                    Your official photographer has a schedule, but your guests
                    capture the real magic. Learn how candids of guests
                    laughing, dancing, and crying complete your wedding
                    memories.
                  </p>
                  <div className="blog-card-meta">
                    <span className="meta-date">May 15, 2026</span>
                    <span className="meta-dot">•</span>
                    <span className="meta-read">4 min read</span>
                  </div>
                  <button className="read-article-btn">Read Article</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="hidden-articles-source" style={{ display: "none" }}>
          <div id="article-1-full">
            <p className="lead-paragraph">
              Your wedding day is one of the most planned, beautiful, and
              fast-moving events of your life. While hiring a professional
              photographer is essential, they can only be in one place at a
              time. The best way to capture all the silent laughs, dance floor
              selfies, and table interactions is to collect photos taken by your
              friends and family. That's where QR Code photo sharing shines.
            </p>
            <h3>1. Place QR Codes Where Guests Can Easily See Them</h3>
            <p>
              The key to high participation is visibility. We recommend printing
              custom table cards with your Catchmemo QR code. Place them at the
              reception tables, next to the bar, and on a welcoming board at the
              entrance. A call to action like "Help Us Capture the Night! Scan
              to Share Your Photos" works wonders.
            </p>
            <h3>2. Make It a Part of Your Invitations</h3>
            <p>
              Don't wait until the wedding day to share your link. Mention the
              Catchmemo upload page on your save-the-dates or digital
              invitations. This helps guests know where to share early-bird
              selfies, rehearsal dinner candids, and morning-of preparations.
            </p>
            <h3>3. Project a Live Photo Wall</h3>
            <p>
              One of the most fun features is the Live Photo Wall. Connect a
              laptop to a projector or venue TV screen and display your live
              feed. As guests upload their candid shots, they appear instantly.
              This turns photo sharing into a fun social game and encourages
              other guests to scan the code and join in.
            </p>
            <h3>4. No App Downloads Mean 95%+ Upload Rates</h3>
            <p>
              The biggest hurdle in guest uploading is friction. Guests do not
              want to download a heavy app on their cellular network or register
              accounts. Since Catchmemo is 100% browser-based, a simple scan of
              the camera instantly opens the camera roll, ensuring nearly
              everyone participates.
            </p>
          </div>
          <div id="article-2-full">
            <p className="lead-paragraph">
              Planning a birthday bash, anniversary, or graduation party? You
              want your guests to have a blast and be fully engaged. Instead of
              passive entertainment, let them participate in capturing the
              event's atmosphere. Here are 5 quick tips to boost crowd
              engagement.
            </p>
            <h3>1. Launch a Real-Time Live Slideshow</h3>
            <p>
              When guests see their photos slide onto a big TV screen
              immediately, they get excited. It provides instant gratification.
              They'll try to capture the funniest dance poses, group shots, and
              toasts just to see them pop up on the wall.
            </p>
            <h3>2. Design a Photo Scavenger Hunt</h3>
            <p>
              Create a small list of "photo targets" on the tables. For example:
              "Take a photo with the birthday host", "Find the most energetic
              dancer", "Snap a picture of a funny drink toast". Guests can
              upload their responses to your private gallery, making it an
              interactive game.
            </p>
            <h3>3. Host a Late-Night Candid Contest</h3>
            <p>
              Announce a reward during the cake cutting for the "Best Candid
              Photo of the Night". The winner gets a small prize. Everyone will
              be snapping photos trying to catch that perfect, hilarious, or
              touching moment.
            </p>
            <h3>4. Add an Interactive Guestbook Note</h3>
            <p>
              With Catchmemo, guests don't just share photos—they can write
              handwritten-style digital cards. Have guests leave a warm wish or
              a funny joke alongside their uploads to create a digital guestbook
              that you can keep forever.
            </p>
            <h3>5. Keep It Private and Secure</h3>
            <p>
              Guests are much more comfortable sharing fun, silly moments when
              they know it's a private, password-protected gallery, rather than
              broadcasting it on social media. Keeping the event private ensures
              guests share their real, authentic selves.
            </p>
          </div>
          <div id="article-3-full">
            <p className="lead-paragraph">
              When selecting a photo-sharing tool for your wedding or party, you
              face a major decision: should you use an app-based solution or a
              web-based QR code platform? While apps offer a variety of tools,
              they introduce a massive barrier that often leaves hosts with
              empty galleries.
            </p>
            <h3>The Friction of App Downloads</h3>
            <p>
              Asking a guest at a wedding reception to download a new app is a
              recipe for low engagement. First, venue Wi-Fi can be spotty, and
              downloading a 50MB app over cellular data is slow. Second, guests
              don't want to sign up, verify their emails, or deal with password
              creation just to share a couple of selfies. Most guests will
              simply decide it's too much work.
            </p>
            <h3>The QR Code Web Advantage</h3>
            <p>
              Web-based photo sharing with Catchmemo requires zero downloads. A
              guest opens their native camera app, scans the QR code on the
              table, and they are instantly redirected to your private upload
              page. They tap "Upload", select their photos, and they are done in
              under 15 seconds. No registration, no app stores, no friction.
            </p>
            <h3>Engagement Statistics Speak for Themselves</h3>
            <ul>
              <li>
                <strong>App-Based Solutions:</strong> Average upload rate is
                only 15% - 25% of guests. Usually, only a few close friends
                download the app.
              </li>
              <li>
                <strong>Web-Based QR Sharing (Catchmemo):</strong> Average
                upload rate reaches 80% - 95%. Even older relatives easily
                navigate a simple web form.
              </li>
            </ul>
            <p>
              If your goal is to collect as many candid photos and videos as
              possible, choose the web-based, app-free path. It respects your
              guests' phone space and makes sharing instant and fun.
            </p>
          </div>
          <div id="article-4-full">
            <p className="lead-paragraph">
              Professional event photography is a must for any wedding or
              large-scale anniversary. Photographers are trained to capture
              high-definition portraits, key ceremony steps, and group
              configurations. However, their presence is obvious, which means
              they often miss the raw, unposed truth of the celebration.
            </p>
            <h3>The Value of Candid Perspectives</h3>
            <p>
              A professional photographer represents authority; when they walk
              up, people stand taller, tuck in their stomachs, and freeze into a
              polite smile. But your guests are part of the crowd. They are
              sitting at the tables, drinking at the bar, and laughing on the
              dance floor. The photos they capture are unprompted, spontaneous,
              and filled with real raw emotion.
            </p>
            <h3>The Pockets of Magic You Would Otherwise Miss</h3>
            <p>
              With a QR code gallery, you will collect: - Rehearsal and
              morning-prep selfies that the photographer missed. -
              Behind-the-scenes group laughter at table 5. - Hilarious, blurry
              dance-off moments at 1 AM after the official photographer went
              home. - Heartfelt reactions from children playing in the corners.
            </p>
            <h3>A Cohesive Storyteller</h3>
            <p>
              Combining the polished, high-definition portraits of your hired
              professional with the hundreds of organic, raw guest snapshots
              gives you a complete, multi-perspective story of your event. You
              won't miss a single smile, toast, or tear.
            </p>
          </div>
        </div>
        <div className="article-reader-modal" id="readerModal">
          <div className="modal-backdrop" />
          <div className="modal-container">
            <div className="modal-header-actions">
              <button className="modal-close-btn" aria-label="Close Article">
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
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </button>
            </div>
            <div className="modal-content-wrap" data-lenis-prevent="true">
              <span className="modal-article-tag" id="modalTag">
                Guides
              </span>
              <h2 className="modal-article-title" id="modalTitle">
                Article Title
              </h2>
              <div className="modal-article-meta">
                <span id="modalDate">May 24, 2026</span>
                <span>•</span>
                <span id="modalRead">5 min read</span>
              </div>
              <div className="modal-article-body" id="modalBody"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
