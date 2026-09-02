import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { Maximize2 } from 'lucide-react';

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');

  const items = [
    { id: 1, category: 'installation', title: 'Fiber Laser Setup' },
    { id: 2, category: 'project', title: 'Intricate Metal Art' },
    { id: 3, category: 'machine', title: 'Industrial Giant 12kW' },
    { id: 4, category: 'installation', title: 'Factory Floor Surat' },
    { id: 5, category: 'project', title: 'Automotive Chassis' },
    { id: 6, category: 'machine', title: 'CNC Bending Unit' },
    { id: 7, category: 'installation', title: 'Plasma Cutting Line' },
    { id: 8, category: 'project', title: 'Architectural Panels' },
  ];

  const filteredItems = filter === 'all' ? items : items.filter(i => i.category === filter);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Breadcrumb />
      
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <Container>
          <SectionHeading
            title="Project & Installation Gallery"
            subtitle="Explore our portfolio of high-precision installations and complex industrial projects delivered across the nation."
            underline={true}
          />
          
          <div className="flex flex-wrap gap-2 mt-12">
            {['all', 'installation', 'project', 'machine'].map((f) => (
              <Button
                key={f}
                variant={filter === f ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilter(f)}
                className="rounded-full capitalize px-6"
              >
                {f}
              </Button>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative aspect-square rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <ImagePlaceholder 
                  aspectRatio="square" 
                  text={item.title} 
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
                  <div className="bg-primary p-3 rounded-full mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Maximize2 className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery Quote CTA */}
      <section className="py-24 bg-charcoal text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-black mb-6">See a machine that fits your needs?</h2>
            <p className="text-white/40 mb-10 leading-relaxed">
              Every project in our gallery was delivered with precision and professional care. Contact our sales team to discuss how we can achieve similar results for your production.
            </p>
            <Button size="lg" className="px-12" asChild>
              <a href="/contact">Start Your Project</a>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
