import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/Button';
import { 
  Send,
  MessageSquare,
  Globe
} from 'lucide-react';
import { useState } from 'react';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { MapEmbed } from '@/components/contact/MapEmbed';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                title="Get in Touch"
                subtitle="Whether you're looking for a new machine or need technical support, our team is here to help you optimize your production."
                className="mb-8"
              />
              
              <ContactInfo />
            </div>

            {/* Visual/Social element */}
            <div className="hidden lg:block relative h-full">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
              <div className="relative bg-white p-12 rounded-3xl shadow-2xl border border-neutral-100 h-full flex flex-col justify-center">
                <h3 className="text-3xl font-black text-charcoal mb-6 uppercase tracking-tight">Industrial Engineering Consulting</h3>
                <p className="text-neutral-500 mb-8 leading-relaxed text-lg">
                  Our team of industrial engineers is ready to analyze your production needs and recommend the most efficient machinery configurations for your specific use case.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center text-sm font-bold text-charcoal bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
                    <Globe className="h-5 w-5 mr-4 text-primary" />
                    Pan-India Service & Installation Coverage
                  </div>
                  <div className="flex items-center text-sm font-bold text-charcoal bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
                    <MessageSquare className="h-5 w-5 mr-4 text-primary" />
                    24/7 Technical Support Hotline
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-neutral-100">
                  <h4 className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-4">Visit our works</h4>
                  <MapEmbed className="h-[300px]" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-neutral-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 bg-charcoal p-12 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-full h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
                  
                  <div className="relative z-10">
                    <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Send an <span className="text-primary">Inquiry</span></h2>
                    <p className="text-white/40 mb-8 leading-relaxed">
                      Please fill out the form and our technical sales team will get back to you within 24 hours with a comprehensive proposal.
                    </p>
                  </div>
                  
                  <div className="relative z-10 bg-white/5 p-8 rounded-3xl border border-white/10">
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mb-3">Priority Response</p>
                    <p className="text-sm text-white/60 leading-relaxed">For urgent machine breakdowns or spare parts, please use our technical hotline for immediate assistance.</p>
                  </div>
                </div>

                <div className="md:col-span-3 p-12">
                  {submitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                      <div className="bg-success/10 p-6 rounded-full">
                        <Send className="h-10 w-10 text-success" />
                      </div>
                      <h3 className="text-3xl font-black text-charcoal uppercase tracking-tight">Inquiry Sent!</h3>
                      <p className="text-neutral-500 max-w-xs text-lg">
                        Thank you for reaching out. A Subham Industries representative will contact you shortly.
                      </p>
                      <Button variant="outline" onClick={() => setSubmitted(false)} className="rounded-2xl">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Full Name</label>
                          <input 
                            required
                            type="text" 
                            className="w-full px-5 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-charcoal"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Email Address</label>
                          <input 
                            required
                            type="email" 
                            className="w-full px-5 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-charcoal"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Phone Number</label>
                          <input 
                            required
                            type="tel" 
                            className="w-full px-5 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-charcoal"
                            placeholder="+91 00000 00000"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Machine Interest</label>
                          <select className="w-full px-5 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-charcoal appearance-none">
                            <option>Fiber Laser Cutting</option>
                            <option>CNC Marking</option>
                            <option>Plasma Cutting</option>
                            <option>CNC Bending</option>
                            <option>Other / General Inquiry</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Your Message</label>
                        <textarea 
                          required
                          rows={4}
                          className="w-full px-5 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-charcoal"
                          placeholder="Tell us about your production requirements..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full py-8 text-xl font-black rounded-2xl group uppercase tracking-tight shadow-lg shadow-primary/20"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Processing...' : 'Submit Inquiry'}
                        {!isSubmitting && <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Full Width Map Section for Mobile/Tablet */}
      <section className="lg:hidden py-12 bg-neutral-50 border-t border-neutral-100">
        <Container>
          <h3 className="text-2xl font-black text-charcoal mb-8 uppercase tracking-tight text-center">Our Location</h3>
          <MapEmbed />
        </Container>
      </section>
    </div>
  );
}
