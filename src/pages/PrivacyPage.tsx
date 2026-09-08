import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <Container>
          <SectionHeading
            title="Privacy Policy"
            subtitle="Last updated: September 2026"
            underline={true}
          />
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="max-w-4xl prose prose-neutral text-neutral-600 leading-relaxed space-y-8">
            <div>
              <h2 className="text-2xl font-black text-charcoal uppercase tracking-tight mb-4">1. Data Collection</h2>
              <p>
                Subham Industries collects basic information through our enquiry forms, including your name, company, email, and phone number, solely for the purpose of responding to your technical and commercial requests.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-charcoal uppercase tracking-tight mb-4">2. Data Usage</h2>
              <p>
                We use your data strictly to provide you with machine quotations, technical proposals, and service updates. We do not sell or share your personal information with third-party marketing agencies.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-charcoal uppercase tracking-tight mb-4">3. Security</h2>
              <p>
                We implement industrial-standard security measures to protect your information from unauthorized access or disclosure.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
