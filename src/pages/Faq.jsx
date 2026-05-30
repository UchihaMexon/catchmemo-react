import useFaqAnimations from "../hooks/useFaqAnimations";
import FaqSchema from "../components/FaqSchema";

const Faq = () => {
  useFaqAnimations();

  return (
    <>
      <FaqSchema />
      <main className="main-content faq-page">
        <section className="faq-hero-section">
          <div className="faq-hero-content">
            <h1 className="faq-hero-title">Frequently Asked Questions</h1>
            <p className="faq-hero-desc">
              Everything you need to know about QR Code photo sharing,
              galleries, and Live Walls with Catchmemo.
            </p>
          </div>
        </section>
        <section className="faq-accordion-section">
          <div className="faq-page-container">
            <div className="faq-accordion-grid">
              <div className="faq-accordion-card">
                <div className="accordion-header">
                  <h3 className="accordion-question">
                    How do guests share their photos?
                  </h3>
                  <span className="accordion-icon">+</span>
                </div>
                <div className="accordion-body">
                  <p className="accordion-text">
                    It's incredibly simple! Guests scan your event's private QR
                    code with their phone's camera and upload their photos
                    instantly. No app downloads, no registrations, and no
                    hassle.
                  </p>
                </div>
              </div>
              <div className="faq-accordion-card">
                <div className="accordion-header">
                  <h3 className="accordion-question">
                    What kind of events is Catchmemo for?
                  </h3>
                  <span className="accordion-icon">+</span>
                </div>
                <div className="accordion-body">
                  <p className="accordion-text">
                    Catchmemo is perfect for any gathering where memories are
                    made! It is widely used for weddings, birthdays, baby
                    showers, graduation parties, corporate events, and family
                    celebrations.
                  </p>
                </div>
              </div>
              <div className="faq-accordion-card">
                <div className="accordion-header">
                  <h3 className="accordion-question">
                    Do guests need to create an account?
                  </h3>
                  <span className="accordion-icon">+</span>
                </div>
                <div className="accordion-body">
                  <p className="accordion-text">
                    No, never! We believe photo sharing should be 100%
                    friction-free. Guests can upload photos and view the shared
                    album immediately without signing up, entering an email, or
                    downloading anything.
                  </p>
                </div>
              </div>
              <div className="faq-accordion-card">
                <div className="accordion-header">
                  <h3 className="accordion-question">
                    How does the Live Photo Wall work?
                  </h3>
                  <span className="accordion-icon">+</span>
                </div>
                <div className="accordion-body">
                  <p className="accordion-text">
                    When you create an event, you get a unique Live Photo Wall
                    link. Simply open this link on any device connected to a TV,
                    projector, or big screen. As guests upload photos, they
                    slide onto the screen automatically in real-time!
                  </p>
                </div>
              </div>
              <div className="faq-accordion-card">
                <div className="accordion-header">
                  <h3 className="accordion-question">
                    Are the photos secure and private?
                  </h3>
                  <span className="accordion-icon">+</span>
                </div>
                <div className="accordion-body">
                  <p className="accordion-text">
                    Absolutely. Your event gallery is private and secured. Only
                    people with your unique QR code or event link can view and
                    upload photos. You also have full administrator control to
                    moderate and delete any photo instantly.
                  </p>
                </div>
              </div>
              <div className="faq-accordion-card">
                <div className="accordion-header">
                  <h3 className="accordion-question">
                    Is Catchmemo free to use?
                  </h3>
                  <span className="accordion-icon">+</span>
                </div>
                <div className="accordion-body">
                  <p className="accordion-text">
                    Yes! Catchmemo offers a 100% Free plan that includes a
                    unique QR code, private web gallery, live photo wall, and up
                    to 50 photo &amp; video uploads. For larger celebrations,
                    you can upgrade to the Pro plan ($39 one-time) for 500
                    uploads, or the Premium plan ($99 one-time) for unlimited
                    uploads and extended storage duration.
                  </p>
                </div>
              </div>
              <div className="faq-accordion-card">
                <div className="accordion-header">
                  <h3 className="accordion-question">
                    How do I share the QR code with guests?
                  </h3>
                  <span className="accordion-icon">+</span>
                </div>
                <div className="accordion-body">
                  <p className="accordion-text">
                    Once your event is created, you can download your custom QR
                    code in high resolution. We provide a library of free print
                    templates (in popular sizes like 4x6" and A6) that you can
                    customize with Canva or download directly as PDFs. Print
                    them at home or at a local print shop and frame them to put
                    on reception tables or welcome signs.
                  </p>
                </div>
              </div>
              <div className="faq-accordion-card">
                <div className="accordion-header">
                  <h3 className="accordion-question">
                    How long is event media stored after the event?
                  </h3>
                  <span className="accordion-icon">+</span>
                </div>
                <div className="accordion-body">
                  <p className="accordion-text">
                    The storage duration depends on your selected plan. The Free
                    plan keeps your photos safe for 15 days, which is perfect
                    for downloading them immediately. The Pro plan extends
                    storage to 120 days, and the Premium plan stores your
                    memories securely for 1 full year, giving you plenty of time
                    to revisit and download your private gallery.
                  </p>
                </div>
              </div>
              <div className="faq-accordion-card">
                <div className="accordion-header">
                  <h3 className="accordion-question">
                    Can guests upload videos as well as photos?
                  </h3>
                  <span className="accordion-icon">+</span>
                </div>
                <div className="accordion-body">
                  <p className="accordion-text">
                    Yes, Catchmemo fully supports video uploads! Guests can
                    record and upload short video clips directly from their
                    phones, allowing you to capture laughs, toasts, and dance
                    moves in motion alongside still photos.
                  </p>
                </div>
              </div>
              <div className="faq-accordion-card">
                <div className="accordion-header">
                  <h3 className="accordion-question">
                    Can I moderate the photos before they appear on the Live
                    Photo Wall?
                  </h3>
                  <span className="accordion-icon">+</span>
                </div>
                <div className="accordion-body">
                  <p className="accordion-text">
                    Yes, absolutely. The host dashboard includes optional
                    moderation settings. You can toggle moderation 'on' to
                    review and approve guest uploads before they are displayed
                    on the Live Photo Wall, ensuring only appropriate content is
                    shown to your guests.
                  </p>
                </div>
              </div>
              <div className="faq-accordion-card">
                <div className="accordion-header">
                  <h3 className="accordion-question">
                    Can I customize my event page and QR card?
                  </h3>
                  <span className="accordion-icon">+</span>
                </div>
                <div className="accordion-body">
                  <p className="accordion-text">
                    Yes, Catchmemo allows you to personalize your event page.
                    You can customize the welcome message, choose a cover photo,
                    set the background theme, and adjust colors to match your
                    event's style. You can also customize the text and style on
                    your printable QR card templates.
                  </p>
                </div>
              </div>
              <div className="faq-accordion-card">
                <div className="accordion-header">
                  <h3 className="accordion-question">
                    How do I download all the photos after the event?
                  </h3>
                  <span className="accordion-icon">+</span>
                </div>
                <div className="accordion-body">
                  <p className="accordion-text">
                    As the event administrator, you can log in to your dashboard
                    at any time and download all guest uploads in their
                    original, high-resolution quality with a single click. We
                    pack everything into a convenient ZIP archive for you to
                    keep forever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-cta-section">
          <div className="faq-cta-container">
            <h2 className="faq-cta-title">Ready to Capture Your Event?</h2>
            <p className="faq-cta-desc">
              Create your event in under a minute, get your unique QR code, and
              start collecting memories today.
            </p>
            <div className="faq-cta-btns">
              <a href="https://app.catchmemo.com" className="liquid-button">
                <span>Create Free Event</span>
                <div className="wave" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Faq;
