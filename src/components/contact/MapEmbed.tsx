import { cn } from '@/utils/cn';

interface MapEmbedProps {
  address?: string;
  className?: string;
}

export function MapEmbed({ address, className }: MapEmbedProps) {
  // Placeholder Google Maps Embed URL for Surat, India area
  // In production, 'address' prop would be encoded into the q parameter
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.417094236!2d72.73989474720973!3d21.15934583151743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <div className={cn("relative w-full h-[400px] rounded-3xl overflow-hidden border border-neutral-100 shadow-sm bg-neutral-50", className)}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={address || "Subham Industries Location"}
        className="grayscale hover:grayscale-0 transition-all duration-700"
      ></iframe>
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-charcoal shadow-sm border border-neutral-100">
        Industrial Hub • Surat, India
      </div>
    </div>
  );
}
