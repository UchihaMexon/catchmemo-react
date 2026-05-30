import { useEffect } from "react";

const Analytics = () => {
  useEffect(() => {
    const initAnalytics = () => {
      // Don't initialize if already initialized
      if (window.dataLayer) return;

      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      // eslint-disable-next-line
      gtag("js", new Date());
      // eslint-disable-next-line
      gtag("config", "G-XXXXXXXXXX", {
        anonymize_ip: true,
      });
      
      console.log("Analytics initialized");
    };

    const consent = localStorage.getItem("cookieConsent");
    
    // Initialize immediately if consent was already given
    if (consent === "accepted") {
      initAnalytics();
    }

    // Listen for the custom event when user clicks Accept
    const handleConsent = () => {
      initAnalytics();
    };

    window.addEventListener("cookieConsentAccepted", handleConsent);

    return () => {
      window.removeEventListener("cookieConsentAccepted", handleConsent);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;
