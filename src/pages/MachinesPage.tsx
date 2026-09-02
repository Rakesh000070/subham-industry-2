import { useState, useMemo } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { MachineCard } from '@/components/machines/MachineCard';
import { machines } from '@/data/machines';
import { categories } from '@/data/categories';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { Search, SlidersHorizontal, PackageX } from 'lucide-react';

export default function MachinesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMachines = useMemo(() => {
    return machines.filter((machine) => {
      const matchesCategory = selectedCategory === 'all' || 
        machine.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === 'laser-cutting' && machine.category === 'Laser Cutting');
      
      const matchesSearch = machine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        machine.model?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        machine.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch && machine.status === 'active';
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Breadcrumb />
      
      <section className="py-12 bg-neutral-50 border-b border-neutral-100">
        <Container>
          <SectionHeading
            title="Our Machinery Catalogue"
            subtitle="Explore our comprehensive range of high-precision CNC, Laser, and Plasma cutting solutions."
            className="mb-8"
          />
          
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('all')}
                className="rounded-full"
              >
                All Machines
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.slug ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className="rounded-full"
                >
                  {cat.name.replace(' Machines', '')}
                </Button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search models or series..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 flex-grow">
        <Container>
          {filteredMachines.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredMachines.map((machine) => (
                <MachineCard key={machine.id} machine={machine} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center flex flex-col items-center">
              <div className="bg-neutral-50 p-6 rounded-full mb-6">
                <PackageX className="h-12 w-12 text-neutral-300" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">No Machines Found</h3>
              <p className="text-neutral-500 max-w-md mx-auto">
                We couldn't find any machines matching your current filters or search query. Try adjusting your selection.
              </p>
              <Button 
                variant="outline" 
                className="mt-8"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                Reset All Filters
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Industrial Support Banner */}
      <section className="py-16 bg-charcoal">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Need a Custom Configuration?</h2>
              <p className="text-neutral-400">Our engineers can customize our machines to fit your specific production requirements.</p>
            </div>
            <Button size="lg" className="px-8" asChild>
              <a href="/contact">Consult an Expert</a>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
