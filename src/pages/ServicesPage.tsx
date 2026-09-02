import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { 
  Hammer, 
  CheckSquare, 
  GraduationCap, 
  Settings, 
  SearchCode, 
  LifeBuoy,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Clock
} from 'lucide-react';
import { services } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const iconMap = {
  Hammer,
  CheckSquare,
  GraduationCap,
  Settings,
  SearchCode,
  LifeBuoy,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Breadcrumb />
      
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <Container>
          <SectionHeading
            title="Industrial Services & Support"
            subtitle="We provide a comprehensive ecosystem of technical services to ensure your production remains uninterrupted and efficient."
            underline={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-charcoal">Guaranteed Support</p>
                <p className="text-sm text-neutral-500">Service SLA commitment</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-charcoal">Expert Technicians</p>
                <p className="text-sm text-neutral-500">Certified field engineers</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-charcoal">Rapid Response</p>
                <p className="text-sm text-neutral-500">Minimizing machine downtime</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Settings;
              return (
                <div key={service.id} className="group p-10 rounded-3xl bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row gap-8">
                  <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon className="h-10 w-10 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-charcoal mb-4 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-neutral-500 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {['Professional approach', 'Industry-standard protocols', 'Comprehensive documentation'].map((item, i) => (
                        <li key={i} className="flex items-center text-sm font-bold text-charcoal/60">
                          <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="group/btn" asChild>
                      <Link to="/contact">
                        Inquire About {service.name}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* AMC Banner */}
      <section className="py-24 bg-charcoal text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-1/2" />
        <Container>
          <div className="max-w-3xl relative z-10">
            <h2 className="text-4xl font-black mb-6 leading-tight">Maximize Uptime with our <span className="text-primary">AMC Plans</span></h2>
            <p className="text-xl text-white/40 mb-10">
              Annual Maintenance Contracts (AMC) provide you with peace of mind, regular health checks, and priority support for all your Subham Industries machinery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-10" asChild>
                <Link to="/contact">Request AMC Details</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-10" asChild>
                <a href="tel:+910000000000">Talk to Support</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
