

interface LegalSectionProps {
  type: "terms" | "privacy" | "refunds";
}

export const LegalSection = ({ type }: LegalSectionProps) => {
  // ✅ Single date constant — manually editable
  const LAST_UPDATED = type === "privacy" ? "September 28, 2026" : "May 15, 2026";

  const content = {
    terms: {
      title: "Terms of Service",
      sections: [
        {
          heading: "1. Acceptance of Terms",
          text: "By accessing and using Project Life products, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
        },
        {
          heading: "2. Use of Services",
          text: "Our services are provided 'as is' for personal and commercial use. You agree to use our products in compliance with all applicable laws and regulations.",
        },
        {
          heading: "3. Intellectual Property",
          text: "All content, features, and functionality of Project Life products are owned by CVillegas and are protected by copyright, trademark, and other intellectual property laws.",
        },
        {
          heading: "4. Limitation of Liability",
          text: "Project Life and its creator shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.",
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "1. Information We Collect",
          text: "We collect information you provide directly to us, including name, email address, and usage data necessary to provide our services.",
        },
        {
          heading: "2. How We Use Your Information",
          text: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.",
        },
        {
          heading: "3. Data Security",
          text: "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
        },
        {
          heading: "4. Third-Party Services",
          text: "Our services may integrate with third-party payment processors (Paddle, Lemon Squeezy) and other services. Please review their privacy policies as well.",
        },
        {
          heading: "5. Mobile Applications",
          text: "Our mobile applications (including timePurse, POcus, Worthly, and future Project Life apps) store data locally on your device by default. We do not collect, transmit, or store personal financial or productivity data on external servers unless explicitly stated within the specific app.",
        },
        {
          heading: "6. timePurse",
          text: "timePurse stores the purchases, wishlist items, pay details, work schedule, currency, and preferences you enter on your device. If you select a CSV file, the app reads it on your device to import supported purchase rows. It does not require an account, send tracker entries to our servers, or use advertising or analytics. Reset All Data erases locally stored tracker data. Device backups are controlled by your operating system settings.",
        },
        {
          heading: "7. Optional Supporter purchase",
          text: "If available, timePurse offers an optional one-time Supporter badge through Google Play. Google processes the payment and provides purchase status and transaction information to the app so it can grant or restore the badge. We do not receive your payment card details. The app stores badge status locally for offline display. We may receive purchase reports in Play Console. The badge adds no tracker features. For Google's data practices, see the Google Play privacy policy.",
        },
        {
          heading: "8. External Links",
          text: "Some of our apps contain links to external services including but not limited to buymeacoffee.com for voluntary developer support. These external services have their own privacy policies which govern their data practices. We encourage you to review the privacy policies of any third-party services you interact with through our apps.",
        },
        {
          heading: "9. Third-Party Services",
          text: "Depending on the specific app or service: Supabase (Worthly) — database and authentication; Buy Me a Coffee — voluntary tips; Google Play — app distribution.",
        },
      ],
    },
    refunds: {
      title: "Refund Policy",
      sections: [
        {
          heading: "1. Refund Eligibility",
          text: "We offer refunds within 30 days of purchase if you are not satisfied with our products. To request a refund, please contact our support team.",
        },
        {
          heading: "2. Refund Process",
          text: "Refund requests are typically processed within 5–7 business days. Refunds will be issued to the original payment method used for purchase.",
        },
        {
          heading: "3. Non-Refundable Items",
          text: "Certain items may be non-refundable, including but not limited to: heavily discounted products, promotional items, and services already rendered.",
        },
        {
          heading: "4. Contact for Support",
          text: "For any questions about refunds or to request a refund, please email us at projectlifebycv@gmail.com with your order details.",
        },
      ],
    },
  };

  const selectedContent = content[type];

  return (
    <div className="page-container inner-page legal-page">
      <section className="legal-content">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-6">{selectedContent.title}</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: <span className="font-medium">{LAST_UPDATED}</span>
          </p>

          <div className="space-y-6">
            {selectedContent.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-lg font-semibold mb-2">{section.heading}</h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              For questions about these terms, please contact us at{" "}
              <a
                href="mailto:projectlifebycv@gmail.com"
                className="text-primary hover:underline"
              >
                projectlifebycv@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
