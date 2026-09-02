import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { 
  Target, 
  Eye, 
  Users2, 
  Building2, 
  Award, 
  Lightbulb,
  History,
  Factory
} from 'lucide-react';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every machine we build and every service we provide.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously adopting the latest technologies to stay ahead in the industrial sector.'
    },
    {
      icon: Users2,
      title: 'Customer Focus',
      description: 'Our solutions are tailored to meet the specific production needs of our clients.'
    },
    {
      icon: Building2,
      title: 'Integrity',
      description: 'Building long-term relationships through transparency and ethical business practices.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Breadcrumb />
      
      {/* Intro Section */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                title="Engineering the Future of Manufacturing"
                subtitle="Subham Industries is a leader in high-precision CNC and laser cutting solutions, dedicated to empowering the industrial sector."
                underline={true}
              />
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  Established with a vision to revolutionize metal fabrication, Subham Industries has grown into a trusted name for industrial machinery. We specialize in the design and manufacture of fiber laser cutting systems, CNC marking machines, and high-performance plasma systems.
                </p>
                <p>
                  Our journey is defined by a relentless pursuit of engineering excellence. We understand that in modern manufacturing, precision and uptime are paramount. That's why every piece of equipment that leaves our facility is rigorously tested and built to endure 24/7 industrial demands.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImagePlaceholder aspectRatio="square" className="rounded-3xl shadow-2xl" text="SUBHAM HEADQUARTERS" />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-neutral-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <History className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-charcoal">15+</p>
                    <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-charcoal p-12 rounded-3xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 transform group-hover:scale-110 transition-transform">
                <Target className="h-32 w-32" />
              </div>
              <div className="relative z-10">
                <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-black mb-4">Our Mission</h3>
                <p className="text-white/60 leading-relaxed">
                  To provide the manufacturing industry with highly reliable, precise, and affordable CNC and laser solutions that drive production efficiency and global competitiveness.
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 p-12 rounded-3xl text-charcoal relative overflow-hidden group border border-neutral-100">
              <div className="absolute top-0 right-0 p-8 opacity-5 transform group-hover:scale-110 transition-transform">
                <Eye className="h-32 w-32" />
              </div>
              <div className="relative z-10">
                <div className="bg-charcoal w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4">Our Vision</h3>
                <p className="text-neutral-500 leading-relaxed">
                  To be the preferred global partner for industrial automation and cutting technology, recognized for our commitment to innovation, quality, and exceptional customer service.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <Container>
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide our engineering and our relationships."
            alignment="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-primary/20 transition-all duration-300 group">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  <value.icon className="h-7 w-7 text-primary group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-3">{value.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats / Proof */}
      <section className="py-24 bg-charcoal">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-5xl font-black text-white">500+</p>
              <p className="text-xs text-primary font-bold uppercase tracking-widest">Machines Installed</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-black text-white">200+</p>
              <p className="text-xs text-primary font-bold uppercase tracking-widest">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-black text-white">15+</p>
              <p className="text-xs text-primary font-bold uppercase tracking-widest">States Reached</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-black text-white">24/7</p>
              <p className="text-xs text-primary font-bold uppercase tracking-widest">Technical Support</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Infrastructure CTA */}
      <section className="py-24">
        <Container>
          <div className="bg-neutral-50 rounded-3xl p-12 border border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="flex items-center space-x-3 text-primary mb-4">
                <Factory className="h-6 w-6" />
                <span className="font-bold uppercase tracking-widest text-xs">State-of-the-Art Facility</span>
              </div>
              <h2 className="text-3xl font-black text-charcoal mb-4">Our Manufacturing Infrastructure</h2>
              <p className="text-neutral-500 leading-relaxed">
                Based in Surat, Gujarat, our facility is equipped with modern assembly lines and testing bays that ensure every machine meets international quality standards before dispatch.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-80">
              <ImagePlaceholder aspectRatio="video" className="rounded-2xl" text="SURAT FACILITY" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
