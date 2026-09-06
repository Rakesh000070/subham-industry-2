import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from '@/data/gallery';
import { motion, AnimatePresence } from 'motion/react';

export default function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'machines' | 'installations' | 'factory' | 'projects'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'machines', label: 'Machines' },
    { id: 'installations', label: 'Installations' },
    { id: 'factory', label: 'Factory' },
    { id: 'projects', label: 'Projects' }
  ];

  const filteredItems = useMemo(() => 
    filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter),
  [filter]);

  const openLightbox = (id: string) => {
    const index = galleryItems.findIndex(item => item.id === id);
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => setSelectedImageIndex(null);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryItems.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const selectedItem = selectedImageIndex !== null ? galleryItems[selectedImageIndex] : null;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <Container>
          <SectionHeading
            title="Industrial Gallery"
            subtitle="A visual showcase of our state-of-the-art machinery, nationwide installations, and global manufacturing standards."
            underline={true}
          />
          
          <div className="flex flex-wrap gap-2 mt-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilter(cat.id as any)}
                className={cn(
                  "rounded-full capitalize px-6 text-xs font-bold tracking-tight h-10",
                  filter === cat.id ? "shadow-md" : "bg-white"
                )}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-12 flex items-center justify-between">
            <p className="text-amber-800 text-sm font-medium">
              <span className="font-black uppercase mr-2">Note:</span> These are placeholder images representing industrial standards. Actual Subham Industries photography will be integrated shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id} 
                  className="group relative aspect-square rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                  onClick={() => openLightbox(item.id)}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
                    <div className="bg-primary p-3 rounded-full mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Maximize2 className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-2"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
            </button>

            <button 
              className="absolute left-4 md:left-8 text-white/40 hover:text-white transition-colors p-4 bg-white/5 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button 
              className="absolute right-4 md:right-8 text-white/40 hover:text-white transition-colors p-4 bg-white/5 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="max-w-6xl w-full h-full flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
              <motion.img 
                key={selectedItem.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                src={selectedItem.imageUrl} 
                alt={selectedItem.title}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
              />
              <div className="mt-8 text-center text-white max-w-2xl">
                <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-white/60">{selectedItem.description}</p>
                <div className="inline-block mt-4 px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                  {selectedItem.category}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/5 skew-x-12 transform -translate-x-1/2" />
        <Container>
          <div className="text-center max-w-2xl mx-auto relative z-10">
            <h2 className="text-4xl font-black mb-8 leading-tight">Expert Consultation <span className="text-primary">Available</span></h2>
            <p className="text-xl text-white/40 mb-12 leading-relaxed">
              Every machine installation and project shown is a testament to our commitment to engineering excellence. Discuss your project with us today.
            </p>
            <Button size="lg" className="px-12 py-8 text-xl font-bold rounded-2xl" asChild>
              <Link to="/contact">Request Technical Proposal</Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
