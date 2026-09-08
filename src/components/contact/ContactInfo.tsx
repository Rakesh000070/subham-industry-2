import { Mail, Phone, MapPin, MessageSquare, ShieldCheck, Clock } from 'lucide-react';
import { companyInfo } from '@/data/companyInfo';
import { cn } from '@/utils/cn';

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  items: {
    label: string;
    value: string;
    href?: string;
  }[];
  className?: string;
}

function ContactCard({ icon: Icon, title, items, className }: ContactCardProps) {
  return (
    <div className={cn("bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow", className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-primary/10 p-2.5 rounded-xl">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-sm font-black text-charcoal uppercase tracking-tight">{title}</h3>
      </div>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.15em] leading-none mb-1.5">
              {item.label}
            </p>
            {item.href ? (
              <a 
                href={item.href}
                className="text-sm font-bold text-charcoal hover:text-primary transition-colors block"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-sm font-bold text-charcoal leading-relaxed">
                {item.value}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactInfo() {
  const { 
    worksAddress, 
    registeredAddress, 
    gstin, 
    contactEmail, 
    salesEmail, 
    technicalEmail, 
    salesPhone, 
    technicalPhone, 
    whatsapp 
  } = companyInfo;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sales & Enquiries */}
        <ContactCard 
          icon={Mail}
          title="Sales & Enquiries"
          items={[
            { label: 'General Email', value: contactEmail, href: `mailto:${contactEmail}` },
            { label: 'Sales Email', value: salesEmail, href: `mailto:${salesEmail}` },
            { label: 'Direct Call', value: salesPhone, href: `tel:${salesPhone.replace(/\s/g, '')}` },
          ]}
        />

        {/* Technical Support */}
        <ContactCard 
          icon={ShieldCheck}
          title="Technical Support"
          items={[
            { label: 'Support Email', value: technicalEmail, href: `mailto:${technicalEmail}` },
            { label: 'Technical Helpline', value: technicalPhone, href: `tel:${technicalPhone.replace(/\s/g, '')}` },
            { label: 'WhatsApp Support', value: whatsapp || 'N/A', href: whatsapp ? `https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}` : undefined },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Works Address */}
        <ContactCard 
          icon={MapPin}
          title="Manufacturing Works"
          items={[
            { 
              label: 'Factory Location', 
              value: `${worksAddress.street}, ${worksAddress.city}, ${worksAddress.state} - ${worksAddress.zipCode}, ${worksAddress.country}` 
            },
          ]}
        />

        {/* Registered Office */}
        <ContactCard 
          icon={MapPin}
          title="Registered Office"
          items={[
            { 
              label: 'Office Address', 
              value: `${registeredAddress.street}, ${registeredAddress.city}, ${registeredAddress.state} - ${registeredAddress.zipCode}, ${registeredAddress.country}` 
            },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Administrative Details */}
        <ContactCard 
          icon={ShieldCheck}
          title="Administrative"
          items={[
            { label: 'GSTIN', value: gstin },
          ]}
        />

        {/* Business Hours */}
        <ContactCard 
          icon={Clock}
          title="Business Hours"
          items={[
            { label: 'Monday - Saturday', value: '10:00 AM - 07:00 PM' },
            { label: 'Sunday', value: 'Closed' },
          ]}
        />
      </div>
    </div>
  );
}
