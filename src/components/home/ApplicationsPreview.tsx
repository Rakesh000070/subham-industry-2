import { Link } from 'react-router-dom';
import { ArrowRight, Factory } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/Button';
import { applications } from '@/data/applications';

export function ApplicationsPreview() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            title="Industrial Applications"
            subtitle="Our machinery powers precision manufacturing across a wide spectrum of specialized sectors."
            className="mb-0 md:max-w-2xl"
            underline={true}
          />
          <Button variant="outline" className="mt-6 md:mt-0" asChild>
            <Link to="/applications">View All Applications</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app) => (
            <Link 
              key={app.id} 
              to="/applications"
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-charcoal"
            >
              {/* Background gradient placeholder */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent z-10" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <Factory className="h-8 w-8 text-primary mb-4 transform group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold text-xl mb-2">{app.name}</h4>
                <p className="text-white/60 text-xs line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {app.description}
                </p>
                <div className="flex items-center text-primary text-xs font-bold uppercase tracking-widest">
                  Explore <ArrowRight className="ml-2 h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
