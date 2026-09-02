import { Link } from 'react-router-dom';
import { ArrowRight, Box } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { categories } from '@/data/categories';
import { cn } from '@/utils/cn';

export function CategoriesSection() {
  // Sort to make sure featured ones come first
  const sortedCategories = [...categories].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          title="Our Machinery"
          subtitle="Discover our comprehensive range of high-performance industrial machines engineered for precision and durability."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCategories.map((category) => (
            <Card 
              key={category.id} 
              className={cn(
                "group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2",
                category.featured ? "md:col-span-2 lg:col-span-1 border-primary/20 ring-1 ring-primary/5" : "border-neutral-100"
              )}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <ImagePlaceholder 
                  aspectRatio="video" 
                  text={category.name.split(' ')[0]} 
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {category.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    Flagship Category
                  </div>
                )}
              </div>

              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-neutral-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Box className="h-6 w-6" />
                  </div>
                </div>
                
                <h3 className={cn(
                  "font-bold text-charcoal mb-3 transition-colors group-hover:text-primary",
                  category.featured ? "text-2xl" : "text-xl"
                )}>
                  {category.name}
                </h3>
                
                <p className="text-neutral-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {category.description}
                </p>

                <Button 
                  variant={category.featured ? "primary" : "outline"} 
                  className="w-full justify-between group/btn" 
                  asChild
                >
                  <Link to={`/machines/${category.slug}`}>
                    View Machines
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
