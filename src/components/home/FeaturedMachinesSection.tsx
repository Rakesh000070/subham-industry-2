import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { machines } from '@/data/machines';

export function FeaturedMachinesSection() {
  const featuredMachines = machines.filter((m) => m.featured).slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          title="Featured Industrial Solutions"
          subtitle="Explore our flagship high-precision laser cutting and marking systems designed for peak industrial performance."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredMachines.map((machine) => (
            <Card key={machine.id} className="group flex flex-col h-full border-neutral-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden">
                <ImagePlaceholder aspectRatio="video" text={machine.model} />
                <div className="absolute top-4 left-4">
                  <Badge variant="success" className="bg-white/90 backdrop-blur shadow-sm">
                    {machine.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="flex-grow pt-6">
                <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                  {machine.name}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3">
                  {machine.shortDescription}
                </p>
                
                <div className="mt-6 space-y-2">
                  {machine.specifications.slice(0, 2).map((spec) => (
                    <div key={spec.label} className="flex justify-between text-xs border-b border-neutral-50 pb-2">
                      <span className="text-neutral-400 font-medium">{spec.label}</span>
                      <span className="text-charcoal font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-0 pb-6 border-none bg-transparent">
                <Button variant="outline" className="w-full group/btn" asChild>
                  <Link to={`/machines/${machine.category.toLowerCase().replace(/ /g, '-')}/${machine.slug}`}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link to="/machines">View All Machines</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
