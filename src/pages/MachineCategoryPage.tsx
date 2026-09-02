import { useParams, Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { MachineCard } from '@/components/machines/MachineCard';
import { machines } from '@/data/machines';
import { categories } from '@/data/categories';
import { useMemo } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Box } from 'lucide-react';

export default function MachineCategoryPage() {
  const { category: categorySlug } = useParams<{ category: string }>();

  const category = useMemo(() => {
    return categories.find(c => c.slug === categorySlug);
  }, [categorySlug]);

  const filteredMachines = useMemo(() => {
    if (!categorySlug) return [];
    // Handle slug mapping to category name in data
    return machines.filter(m => 
      m.category.toLowerCase().replace(/ /g, '-') === categorySlug
    );
  }, [categorySlug]);

  if (!category && filteredMachines.length === 0) {
    return (
      <div className="flex flex-col min-h-[60vh] items-center justify-center text-center p-8">
        <Box className="h-16 w-16 text-neutral-200 mb-6" />
        <h2 className="text-2xl font-bold text-charcoal mb-4">Category Not Found</h2>
        <p className="text-neutral-500 mb-8">We couldn't find the machinery category you're looking for.</p>
        <Button asChild>
          <Link to="/machines">View All Machinery</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Breadcrumb />
      
      <section className="py-16 bg-neutral-50 border-b border-neutral-100">
        <Container>
          <Link to="/machines" className="inline-flex items-center text-sm font-bold text-neutral-400 hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Machines
          </Link>
          
          <SectionHeading
            title={category?.name || categorySlug?.replace(/-/g, ' ').toUpperCase() || 'Machinery'}
            subtitle={category?.description || `Explore our high-performance industrial solutions in the ${categorySlug} sector.`}
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          {filteredMachines.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredMachines.map((machine) => (
                <MachineCard key={machine.id} machine={machine} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-neutral-50 rounded-3xl border border-dashed border-neutral-200">
              <p className="text-neutral-500 font-medium">No machines currently listed in this category.</p>
              <Button variant="ghost" asChild className="mt-4 text-primary">
                <Link to="/contact">Enquire about custom solutions</Link>
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Cross-sell / Other Categories */}
      <section className="py-20 bg-charcoal text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-black mb-2">Explore Other Solutions</h2>
              <p className="text-white/40">We offer a wide range of industrial tools for diverse manufacturing needs.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.filter(c => c.slug !== categorySlug).slice(0, 3).map(c => (
                <Button key={c.slug} variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                  <Link to={`/machines/${c.slug}`}>{c.name}</Link>
                </Button>
              ))}
              <Button asChild>
                <Link to="/machines">View All</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
