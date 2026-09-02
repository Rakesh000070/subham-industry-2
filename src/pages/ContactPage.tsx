import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Globe
} from 'lucide-react';
import { useState } from 'react';

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
      <Breadcrumb />
      
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                title="Get in Touch"
                subtitle="Whether you're looking for a new machine or need technical support, our team is here to help you."
                className="mb-8"
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-1">Call Us</p>
                    <p className="font-bold text-charcoal">+91 98765 43210</p>
                    <p className="text-sm text-neutral-500">Sales & Support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-1">Email Us</p>
                    <p className="font-bold text-charcoal">info@subham.com</p>
                    <p className="text-sm text-neutral-500">24/7 Response</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-1">Our Office</p>
                    <p className="font-bold text-charcoal">Surat, Gujarat</p>
                    <p className="text-sm text-neutral-500">India - 395001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-1">Business Hours</p>
                    <p className="font-bold text-charcoal">Mon - Sat</p>
                    <p className="text-sm text-neutral-500">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual/Social element */}
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
              <div className="relative bg-white p-12 rounded-3xl shadow-2xl border border-neutral-100">
                <h3 className="text-2xl font-black text-charcoal mb-6">Expert Consultations</h3>
                <p className="text-neutral-500 mb-8 leading-relaxed">
                  Our industrial engineers are ready to analyze your production needs and recommend the most efficient machinery configurations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-sm font-bold text-charcoal">
                    <Globe className="h-4 w-4 mr-3 text-primary" />
                    Pan-India Service Coverage
                  </div>
                  <div className="flex items-center text-sm font-bold text-charcoal">
                    <MessageSquare className="h-4 w-4 mr-3 text-primary" />
                    Live Technical Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 bg-charcoal p-10 text-white flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-black mb-6">Send an Inquiry</h2>
                    <p className="text-white/40 mb-8 leading-relaxed">
                      Please fill out the form and our technical team will get back to you within 24 hours.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mb-2">Priority Response</p>
                    <p className="text-sm text-white/60">For urgent machine breakdowns, please call our 24/7 technical hotline.</p>
                  </div>
                </div>

                <div className="md:col-span-3 p-10">
                  {submitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                      <div className="bg-success/10 p-4 rounded-full">
                        <Send className="h-8 w-8 text-success" />
                      </div>
                      <h3 className="text-2xl font-black text-charcoal">Inquiry Sent!</h3>
                      <p className="text-neutral-500 max-w-xs">
                        Thank you for reaching out. A Subham Industries representative will contact you shortly.
                      </p>
                      <Button variant="outline" onClick={() => setSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Full Name</label>
                          <input 
                            required
                            type="text" 
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Email Address</label>
                          <input 
                            required
                            type="email" 
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Phone Number</label>
                          <input 
                            required
                            type="tel" 
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="+91 00000 00000"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Machine Interest</label>
                          <select className="w-full px-4 py-3 bg-neutral-50 border border-neutral-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                            <option>Fiber Laser Cutting</option>
                            <option>CNC Marking</option>
                            <option>Plasma Cutting</option>
                            <option>CNC Bending</option>
                            <option>Other / General Inquiry</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Your Message</label>
                        <textarea 
                          required
                          rows={4}
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="Tell us about your production requirements..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full py-6 text-lg font-bold group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Processing...' : 'Submit Inquiry'}
                        {!isSubmitting && <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
