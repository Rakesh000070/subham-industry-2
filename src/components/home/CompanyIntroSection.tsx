import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';

export function CompanyIntroSection() {
  const highlights = [
    'Advanced CNC & Laser Cutting Expertise',
    'High-Precision Industrial Engineering',
    'Uncompromising Commitment to Quality',
    'Comprehensive After-Sales Support',
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Element */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <ImagePlaceholder aspectRatio="square" className="rounded-2xl shadow-2xl" text="INDUSTRIAL PRECISION" />
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-xl shadow-xl hidden md:block">
                <p className="text-white font-black text-4xl mb-1">15+</p>
                <p className="text-white/80 text-xs font-bold uppercase tracking-widest">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              title="About Subham Industries"
              subtitle="Setting the standard in high-performance industrial machinery and precision cutting solutions."
              underline={true}
            />
            
            <div className="space-y-6 text-neutral-600 leading-relaxed">
              <p>
                Subham Industries stands at the forefront of industrial innovation, specializing in the design and manufacture of high-precision CNC marking and fiber laser cutting systems. Our mission is to empower the manufacturing sector with technology that enhances efficiency, reduces waste, and delivers unparalleled accuracy.
              </p>
              <p>
                With deep expertise in laser applications and industrial automation, we provide comprehensive solutions tailored to the rigorous demands of modern production environments. Every machine we build is a testament to our commitment to durability and professional engineering standards.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-bold text-charcoal">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Button size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
