import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <Container>
          <SectionHeading
            title="Terms of Service"
            subtitle="Governing the use of the Subham Industries digital platform."
            underline={true}
          />
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="max-w-4xl prose prose-neutral text-neutral-600 leading-relaxed space-y-8">
            <div>
              <h2 className="text-2xl font-black text-charcoal uppercase tracking-tight mb-4">1. General Usage</h2>
              <p>
                By accessing this website, you agree to comply with all applicable industrial regulations and laws. The content provided is for informational purposes related to Subham Industries' machinery and services.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-charcoal uppercase tracking-tight mb-4">2. Intellectual Property</h2>
              <p>
                All machine designs, technical specifications, and visual assets are the intellectual property of Subham Industries. Unauthorized reproduction is strictly prohibited.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-charcoal uppercase tracking-tight mb-4">3. Quotations</h2>
              <p>
                Technical proposals and price quotations generated through this platform are subject to final verification by our industrial sales team.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
