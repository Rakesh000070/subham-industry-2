import { Link } from 'react-router-dom';
import { 
  Hammer, 
  CheckSquare, 
  GraduationCap, 
  Settings, 
  SearchCode, 
  LifeBuoy, 
  ArrowRight 
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';

const iconMap = {
  Hammer,
  CheckSquare,
  GraduationCap,
  Settings,
  SearchCode,
  LifeBuoy,
};

export function ServicesSection() {
  return (
    <section className="py-24 bg-neutral-50">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Beyond machinery, we provide end-to-end technical support and training to ensure your industrial success."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Settings;
            return (
              <Card 
                key={service.id} 
                className="group border-none shadow-sm bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">
                    {service.name}
                  </h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
