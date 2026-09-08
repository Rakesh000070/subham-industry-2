import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { MapEmbed } from '@/components/contact/MapEmbed';
import { EnquiryForm } from '@/components/contact/EnquiryForm';
import { getQueryParam } from '@/utils/queryParams';
import { ChevronRight, Home, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const machineSlug = getQueryParam('machine');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-neutral-50 py-4 border-b border-neutral-100">
        <Container>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-400">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1.5">
              <Home className="h-3 w-3" />
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-charcoal">Contact Us</span>
          </div>
        </Container>
      </div>

      <section className="py-20">
        <Container>
          <SectionHeading
            title="Contact Our Engineering Team"
            subtitle="Get in touch with our experts for machine quotations, technical support, or project consultations."
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column: Form (2/3 width on desktop) */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[2.5rem] p-1 border border-neutral-100 shadow-sm">
                <EnquiryForm 
                  preSelectedMachine={machineSlug || undefined} 
                  showSidebar={false}
                  className="shadow-none border-none rounded-none"
                />
              </div>
            </div>

            {/* Right Column: Contact Info & Support (1/3 width on desktop) */}
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-black text-charcoal mb-8 uppercase tracking-tight">Direct Contact</h3>
                <ContactInfo />
              </div>

              {/* Map Embed - Right Column or Full Width */}
              <div className="space-y-6">
                <h3 className="text-xl font-black text-charcoal uppercase tracking-tight">Factory Location</h3>
                <MapEmbed className="h-[350px]" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 bg-charcoal text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4" />
        <Container>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Pan-India Support <span className="text-primary">Network</span></h2>
              <p className="text-xl text-white/40 leading-relaxed mb-10">
                With service centers across major industrial hubs, Subham Industries ensures your production never stops. Our engineers are available for on-site commissioning and emergency troubleshooting.
              </p>
              <div className="flex flex-wrap gap-4">
                {['24/7 Helpline', 'Spare Parts Ready', 'Certified Training', 'On-site Service'].map((item, i) => (
                  <span key={i} className="px-5 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-white/60">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/5 p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
              <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">Emergency Assistance</h4>
              <p className="text-white/60 mb-8 leading-relaxed">
                If you are experiencing a critical machine breakdown, please use our priority helpline for immediate response from our engineering bay.
              </p>
              <div className="flex items-center gap-6">
                <div className="bg-primary p-4 rounded-2xl">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Priority Line</p>
                  <p className="text-2xl font-black text-white">+91 [VERIFY PHONE]</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
