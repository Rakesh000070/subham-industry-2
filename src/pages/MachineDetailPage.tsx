import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Settings, 
  Zap, 
  Maximize2, 
  ShieldCheck,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  Cpu,
  Wrench,
  Activity,
  Layers,
  ChevronRight
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { machines } from '@/data/machines';
import { useEffect, useState } from 'react';
import { Product } from '@/types';
import { cn } from '@/utils/cn';

export default function MachineDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [machine, setMachine] = useState<Product | null>(null);

  useEffect(() => {
    const found = machines.find(m => m.slug === slug);
    if (found) {
      setMachine(found);
    }
  }, [slug]);

  if (!machine) {
    return (
      <div className="flex flex-col min-h-[60vh] items-center justify-center text-center p-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">Machine Not Found</h2>
        <p className="text-neutral-500 mb-8">The machine you are looking for does not exist or has been moved.</p>
        <Button asChild>
          <Link to="/machines">Return to Catalogue</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      

      {/* Product Hero Section */}
      <section className="py-12 lg:py-20 border-b border-neutral-100">
        <Container>
          <div className="mb-8">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="mb-4 -ml-2 text-neutral-500 hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to List
            </Button>
            
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <Badge variant="success">{machine.category}</Badge>
              {machine.model && (
                <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-widest bg-neutral-50">
                  MODEL: {machine.model}
                </Badge>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-charcoal leading-tight">
              {machine.name}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
            {/* Visuals */}
            <div className="space-y-6">
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-neutral-100 shadow-xl ring-1 ring-neutral-200">
                {machine.images?.[0] ? (
                  <img 
                    src={machine.images[0]} 
                    alt={machine.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <ImagePlaceholder aspectRatio="video" text={machine.model || 'SI'} />
                )}
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden bg-neutral-50 ring-1 ring-neutral-200 opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
                    <ImagePlaceholder aspectRatio="square" text={`View ${i}`} className="text-[10px]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info & CTA */}
            <div className="flex flex-col">
              <div className="prose prose-neutral max-w-none mb-10">
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {machine.description}
                </p>
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 gap-6 mb-10 p-8 rounded-3xl bg-neutral-50 border border-neutral-100">
                {machine.specifications.slice(0, 4).map((spec) => (
                  <div key={spec.label} className="space-y-1">
                    <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">{spec.label}</p>
                    <p className="text-xl font-black text-charcoal">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1 py-8 text-lg font-bold" asChild>
                  <Link to="/contact">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="py-8 text-lg font-bold" asChild>
                  <a href="tel:+910000000000">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Sales
                  </a>
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center sm:justify-start gap-6 text-sm text-neutral-400 font-medium">
                <div className="flex items-center">
                  <ShieldCheck className="h-4 w-4 mr-2 text-primary" />
                  Warranty Included
                </div>
                <div className="flex items-center">
                  <Zap className="h-4 w-4 mr-2 text-primary" />
                  Expert Installation
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="flex items-center space-x-3 text-primary mb-10">
            <Settings className="h-8 w-8" />
            <h2 className="text-3xl font-black uppercase tracking-tight text-charcoal">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {machine.features.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all group">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <p className="text-lg font-bold text-charcoal leading-snug">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Components & Major Systems Section */}
      {machine.components && machine.components.length > 0 && (
        <section className="py-20 bg-neutral-50 border-y border-neutral-100">
          <Container>
            <div className="flex items-center space-x-3 text-primary mb-10">
              <Cpu className="h-8 w-8" />
              <h2 className="text-3xl font-black uppercase tracking-tight text-charcoal">Major Components</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {machine.components.map((component, idx) => (
                <div key={idx} className="flex items-center p-6 bg-white rounded-2xl shadow-sm border border-neutral-100">
                  <div className="bg-charcoal p-4 rounded-xl mr-6">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">{component.name}</h4>
                    <p className="text-xl font-black text-charcoal">{component.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Technical Specifications Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="flex items-center space-x-3 text-primary mb-10">
            <Activity className="h-8 w-8" />
            <h2 className="text-3xl font-black uppercase tracking-tight text-charcoal">Technical Specifications</h2>
          </div>
          <div className="bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-charcoal text-white">
                  <th className="px-8 py-5 text-sm font-black uppercase tracking-widest">Parameter</th>
                  <th className="px-8 py-5 text-sm font-black uppercase tracking-widest">Value / Specification</th>
                </tr>
              </thead>
              <tbody>
                {machine.specifications.map((spec, idx) => (
                  <tr key={idx} className={cn(
                    "border-b border-neutral-100 transition-colors hover:bg-white",
                    idx % 2 === 0 ? "bg-neutral-50/50" : "bg-white"
                  )}>
                    <td className="px-8 py-5 text-sm font-bold text-neutral-400 uppercase tracking-wider w-1/3 border-r border-neutral-100">
                      {spec.label}
                    </td>
                    <td className="px-8 py-5 text-lg font-black text-charcoal">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-100">
        <Container>
          <div className="flex items-center space-x-3 text-primary mb-10">
            <Maximize2 className="h-8 w-8" />
            <h2 className="text-3xl font-black uppercase tracking-tight text-charcoal">Industrial Applications</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {machine.applications.map((app, idx) => (
              <div key={idx} className="group p-8 bg-white rounded-3xl shadow-sm border border-neutral-100 hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 bg-neutral-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
                  <ChevronRight className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-black text-charcoal uppercase tracking-tight">{app}</h4>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Accessories Section */}
      {machine.accessories && machine.accessories.length > 0 && (
        <section className="py-20 bg-white">
          <Container>
            <div className="flex items-center space-x-3 text-primary mb-10">
              <Wrench className="h-8 w-8" />
              <h2 className="text-3xl font-black uppercase tracking-tight text-charcoal">Standard Accessories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {machine.accessories.map((accessory, idx) => (
                <div key={idx} className="flex items-start space-x-5 p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                  <div className="bg-primary p-3 rounded-xl shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-charcoal mb-2">{accessory.name}</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed">{accessory.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Support CTA Sidebar (Mobile Integrated) */}
      <section className="py-20 bg-charcoal text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-4xl font-black mb-6 leading-tight">Ready to Upgrade Your Production?</h2>
              <p className="text-xl text-white/40 mb-10">
                Contact our technical experts for a personalized walkthrough or to discuss custom configurations for the {machine.name}.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="bg-primary p-3 rounded-xl">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Technical Help</p>
                    <p className="font-bold">24/7 Expert Assist</p>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="bg-primary p-3 rounded-xl">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Email Inquiry</p>
                    <p className="font-bold">support@subham.com</p>
                  </div>
                </div>
              </div>
            </div>
            <Button size="lg" className="px-12 py-8 text-xl font-bold" asChild>
              <Link to="/contact">Request Detailed Proposal</Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

