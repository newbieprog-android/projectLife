import { MacWindow } from "../MacWindow";

interface LegalSectionProps {
  type: "terms" | "privacy" | "refunds";
}

export const LegalSection = ({ type }: LegalSectionProps) => {
  // ✅ Single date constant — manually editable
  const LAST_UPDATED = "October 12, 2025";

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
          text: "For any questions about refunds or to request a refund, please email us at supp.projectlif3@gmail.com with your order details.",
        },
      ],
    },
  };

  const selectedContent = content[type];

  return (
    <div className="px-4 py-8">
      <MacWindow title={selectedContent.title} className="max-w-3xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-6">{selectedContent.title}</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: <span className="font-medium">{LAST_UPDATED}</span>
          </p>

          <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
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
                href="mailto:supp.projectlif3@gmail.com"
                className="text-primary hover:underline"
              >
                supp.projectlif3@gmail.com
              </a>
            </p>
          </div>
        </div>
      </MacWindow>
    </div>
  );
};