import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function ContactCTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="bg-charcoal rounded-3xl overflow-hidden relative">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Upgrade Your <span className="text-primary">Production Line?</span>
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl mb-10 leading-relaxed">
              Consult with our industrial experts today. We'll help you select the right CNC or laser solution for your specific manufacturing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-10" asChild>
                <Link to="/contact">Get a Custom Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-10" asChild>
                <Link to="/machines">
                  View Catalog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/40 text-sm font-bold uppercase tracking-widest">
              <span>Fast Delivery</span>
              <span className="hidden sm:inline">•</span>
              <span>Installation Support</span>
              <span className="hidden sm:inline">•</span>
              <span>Genuine Spares</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
