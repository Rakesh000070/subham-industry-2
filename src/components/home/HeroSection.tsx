import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Settings, Zap, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-charcoal">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8"
          >
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Leading Since 2005</span>
          </motion.div>

          {/* Company Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/60 font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-4"
          >
            SUBHAM INDUSTRIES
          </motion.h2>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6"
          >
            Industrial <span className="text-primary">Machinery</span>, <br className="hidden md:block" />
            CNC & Laser Solutions
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          >
            Empowering the manufacturing sector with high-precision fiber laser cutting, CNC marking, and heavy-duty industrial systems. Engineered for durability and performance.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="group" asChild>
              <Link to="/machines">
                Explore Machines
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
              <Link to="/contact">
                Request a Quote
              </Link>
            </Button>
          </motion.div>

          {/* Quick Stats/Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-8 md:gap-12"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-white/5 p-2 rounded-lg">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Advanced CNC</p>
                <p className="text-neutral-500 text-xs">Precision Control</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white/5 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">High Speed</p>
                <p className="text-neutral-500 text-xs">Laser Efficiency</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
