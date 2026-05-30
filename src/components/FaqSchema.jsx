import { useEffect } from "react";

const FaqSchema = () => {
  useEffect(() => {
    const existingScript = document.getElementById("faq-schema");
    if (existingScript) return;

    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do guests share their photos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It's incredibly simple! Guests scan your event's private QR code with their phone's camera and upload their photos instantly. No app downloads, no registrations, and no hassle."
          }
        },
        {
          "@type": "Question",
          "name": "What kind of events is Catchmemo for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Catchmemo is perfect for any gathering where memories are made! It is widely used for weddings, birthdays, baby showers, graduation parties, corporate events, and family celebrations."
          }
        },
        {
          "@type": "Question",
          "name": "Do guests need to create an account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, never! We believe photo sharing should be 100% friction-free. Guests can upload photos and view the shared album immediately without signing up, entering an email, or downloading anything."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Live Photo Wall work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When you create an event, you get a unique Live Photo Wall link. Simply open this link on any device connected to a TV, projector, or big screen. As guests upload photos, they slide onto the screen automatically in real-time!"
          }
        },
        {
          "@type": "Question",
          "name": "Is Catchmemo free to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Catchmemo offers a 100% Free plan that includes a unique QR code, private web gallery, live photo wall, and up to 50 photo & video uploads. For larger celebrations, you can upgrade to the Pro plan ($39 one-time) for 500 uploads, or the Premium plan ($99 one-time) for unlimited uploads and extended storage duration."
          }
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.text = JSON.stringify(faqData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("faq-schema");
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, []);

  return null;
};

export default FaqSchema;
