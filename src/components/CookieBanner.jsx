import { useState } from "react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(() => !localStorage.getItem("cookieConsent"));

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    // Dispatch a custom event so Analytics.jsx can catch it immediately
    window.dispatchEvent(new Event("cookieConsentAccepted"));
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className="cookie-banner-content">
        <div className="cookie-text">
          <h2>We value your privacy 🍪</h2>
          <p>
            We use cookies to enhance your browsing experience and analyze our
            traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn decline" onClick={handleDecline}>
            Decline
          </button>
          <button className="cookie-btn accept" onClick={handleAccept}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
