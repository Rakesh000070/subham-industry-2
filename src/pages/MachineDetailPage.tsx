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
  ArrowRight
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/common/Breadcrumb';
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
    } else {
      // Small delay to prevent flashing if needed, but here we can just check
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
      <Breadcrumb />

      {/* Product Hero Section */}
      <section className="py-12 lg:py-20">
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

              {/* Key Specs Grid */}
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

      {/* Technical Details Tabs/Sections */}
      <section className="py-20 border-t border-neutral-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Features */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3 text-primary">
                <Settings className="h-6 w-6" />
                <h2 className="text-2xl font-black uppercase tracking-tight text-charcoal">Key Features</h2>
              </div>
              <ul className="space-y-4">
                {machine.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                    <span className="text-neutral-600 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3 text-primary">
                <Maximize2 className="h-6 w-6" />
                <h2 className="text-2xl font-black uppercase tracking-tight text-charcoal">Applications</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {machine.applications.map((app, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-neutral-50 text-neutral-600 rounded-full text-sm font-bold border border-neutral-200"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="space-y-8 bg-charcoal p-8 rounded-3xl text-white">
              <h2 className="text-2xl font-black uppercase tracking-tight">Support Services</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary p-3 rounded-xl">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Technical Help</p>
                    <p className="font-bold">24/7 Expert Assist</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary p-3 rounded-xl">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Email Inquiry</p>
                    <p className="font-bold">support@subham.com</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10" asChild>
                <Link to="/services">Learn About Support</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Full Specifications Table */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-charcoal mb-12 text-center">Technical Specifications</h2>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-100">
              <table className="w-full text-left">
                <tbody>
                  {machine.specifications.map((spec, idx) => (
                    <tr key={idx} className={cn("border-b border-neutral-50", idx % 2 === 0 ? "bg-white" : "bg-neutral-50/50")}>
                      <td className="px-8 py-5 text-sm font-bold text-neutral-400 uppercase tracking-wider w-1/3">
                        {spec.label}
                      </td>
                      <td className="px-8 py-5 text-base font-bold text-charcoal">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
