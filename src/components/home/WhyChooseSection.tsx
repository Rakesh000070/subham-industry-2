import { Award, ShieldCheck, Zap, Headphones } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card, CardContent } from '@/components/ui/Card';

const reasons = [
  {
    icon: Zap,
    title: 'Advanced Technology',
    description: 'We integrate the latest fiber laser and CNC innovations to ensure your production stays ahead of the curve.'
  },
  {
    icon: ShieldCheck,
    title: 'Precision Engineering',
    description: 'Our machines are built with uncompromising accuracy, meeting the most rigorous industrial standards.'
  },
  {
    icon: Award,
    title: 'Proven Reliability',
    description: 'With over 15 years of industry presence, our machinery is engineered for 24/7 heavy-duty performance.'
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Direct access to technical specialists and genuine spare parts ensures your uptime is always maximized.'
  }
];

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          title="Why Choose Subham Industries"
          subtitle="A commitment to engineering excellence and customer success is at the heart of everything we do."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none shadow-none group">
              <CardContent className="pt-0 px-0">
                <div className="bg-neutral-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <reason.icon className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-3">{reason.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
