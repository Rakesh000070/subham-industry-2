import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { applications } from '@/data/applications';
import { categories } from '@/data/categories';
import { Factory, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function ApplicationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <Container>
          <SectionHeading
            title="Applications & Industries"
            subtitle="Our high-precision machinery powers innovation and efficiency across a diverse range of global manufacturing sectors."
            underline={true}
          />
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app) => (
              <div key={app.id} className="flex flex-col bg-white rounded-3xl border border-neutral-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500">
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={app.image} 
                    alt={app.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-8">
                    <div className="bg-primary p-3 rounded-xl mb-3 inline-flex">
                      <Factory className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-black text-charcoal mb-4 uppercase tracking-tight">{app.name}</h3>
                  <p className="text-neutral-500 leading-relaxed mb-8 flex-grow">
                    {app.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-4">Recommended Machinery</h4>
                    <div className="space-y-2">
                      {app.relatedCategories.map((slug) => {
                        const category = categories.find(c => c.slug === slug);
                        return (
                          <Link 
                            key={slug} 
                            to={`/machines/${slug}`}
                            className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 hover:bg-primary/5 hover:text-primary transition-colors group/link"
                          >
                            <span className="text-sm font-bold">{category?.name || slug}</span>
                            <ChevronRight className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <Button className="w-full group/btn mt-auto" asChild>
                    <Link to="/machines">
                      View Industrial Solutions
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
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
        <Container>
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tight">Need a Specialized Solution?</h2>
            <p className="text-xl text-white/40 mb-12 leading-relaxed max-w-2xl mx-auto">
              If your production line requires custom modifications or a completely unique machine configuration, our R&D team can engineer a solution tailored to your exact manufacturing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-12 py-8 text-xl font-bold" asChild>
                <Link to="/contact">Consult an Expert</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 py-8 text-xl font-bold" asChild>
                <Link to="/profile">Learn About R&D</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
