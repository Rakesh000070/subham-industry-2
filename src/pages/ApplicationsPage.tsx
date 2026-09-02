import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { applications } from '@/data/applications';
import { Factory, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export default function ApplicationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Breadcrumb />
      
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <Container>
          <SectionHeading
            title="Industries We Serve"
            subtitle="Our high-precision machinery powers innovation across a diverse range of manufacturing sectors worldwide."
            underline={true}
          />
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {applications.map((app) => (
              <div key={app.id} className="group relative overflow-hidden rounded-3xl bg-charcoal aspect-[16/10] md:aspect-[16/8]">
                {/* Background placeholder/image effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/40 to-transparent z-10" />
                
                <div className="absolute inset-0 flex flex-col justify-center p-12 z-20 max-w-lg">
                  <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-primary/30">
                    <Factory className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">{app.name}</h3>
                  <p className="text-white/60 leading-relaxed mb-8">
                    {app.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {app.relatedCategories.map((cat, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 text-white/40 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="w-fit border-white/20 text-white hover:bg-white/10 group/btn" asChild>
                    <Link to="/contact">
                      Inquire for {app.name}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-24 bg-neutral-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-charcoal mb-6">Need a Specialized Solution?</h2>
            <p className="text-neutral-500 mb-10 leading-relaxed text-lg">
              If your industry requires custom modifications or a completely unique machine configuration, our engineering team can design a solution tailored to your exact specifications.
            </p>
            <Button size="lg" className="px-12" asChild>
              <Link to="/contact">Consult an Expert</Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
