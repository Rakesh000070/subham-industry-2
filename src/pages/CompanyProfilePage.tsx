import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { 
  Briefcase, 
  Settings, 
  ShieldCheck, 
  Truck, 
  Users, 
  BarChart3,
  CheckCircle2,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function CompanyProfilePage() {
  const capabilities = [
    { title: 'In-house R&D', desc: 'Continuous improvement and new product development.' },
    { title: 'Advanced Assembly', desc: 'Precision assembly lines for complex industrial units.' },
    { title: 'Quality Assurance', desc: 'Stringent testing protocols for every component.' },
    { title: 'Global Logistics', desc: 'Efficient delivery networks across India and abroad.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Breadcrumb />
      
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <SectionHeading
                title="Corporate Profile"
                subtitle="A detailed overview of Subham Industries' organizational structure and industrial footprint."
                className="mb-0"
              />
            </div>
            <Button variant="outline" className="shrink-0">
              <Download className="mr-2 h-4 w-4" />
              Download PDF Profile
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Year Established', value: '2009' },
              { label: 'Headquarters', value: 'Surat, India' },
              { label: 'Employees', value: '150+' },
              { label: 'Active Patents', value: '12' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
                <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-2xl font-black text-charcoal">{stat.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-black text-charcoal mb-6 flex items-center">
                  <Briefcase className="mr-3 h-6 w-6 text-primary" />
                  Organizational Overview
                </h2>
                <div className="prose prose-neutral max-w-none text-neutral-600">
                  <p>
                    Subham Industries operates as a vertically integrated manufacturer, controlling every aspect of the machinery lifecycle from initial design and R&D to final assembly and after-sales support. Our corporate structure is designed to foster innovation while maintaining the highest levels of operational discipline.
                  </p>
                  <p>
                    With a dedicated team of over 150 professionals, including 40+ specialized engineers, we maintain a culture of technical excellence. Our facility in Surat serves as our global hub, housing our design studios, electronic labs, and heavy fabrication bays.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black text-charcoal mb-8 flex items-center">
                  <Settings className="mr-3 h-6 w-6 text-primary" />
                  Manufacturing Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {capabilities.map((cap, i) => (
                    <div key={i} className="flex space-x-4">
                      <div className="bg-neutral-50 h-10 w-10 rounded-lg flex items-center justify-center shrink-0 border border-neutral-100">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">{cap.title}</h4>
                        <p className="text-sm text-neutral-500">{cap.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-charcoal p-8 rounded-3xl text-white shadow-xl">
                <h3 className="text-xl font-bold mb-6">Key Partnerships</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl border border-white/10">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold">Global Component Suppliers</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl border border-white/10">
                    <Truck className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold">Logistics Partners</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl border border-white/10">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold">Technical Consultants</span>
                  </div>
                </div>
                <Button className="w-full mt-8 bg-white text-charcoal hover:bg-neutral-200">
                  Partner With Us
                </Button>
              </div>

              <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
                <BarChart3 className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-4">Market Reach</h3>
                <p className="text-sm text-neutral-500 mb-6">
                  We proudly serve a global client base, with a strong presence across South Asia, the Middle East, and growing footprints in African markets.
                </p>
                <div className="space-y-2">
                  <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[85%]" />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    <span>Domestic Market</span>
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
