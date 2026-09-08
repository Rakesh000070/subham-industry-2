import { useState, useEffect, useMemo } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { categories } from '@/data/categories';
import { getMachineBySlug } from '@/utils/queryParams';
import { cn } from '@/utils/cn';
import { Enquiry } from '@/types';
import { submitEnquiry } from '@/services/api';

interface EnquiryFormProps {
  preSelectedMachine?: string;
  onSubmit?: (data: Enquiry) => void;
  className?: string;
  showSidebar?: boolean;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormErrors {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export function EnquiryForm({ preSelectedMachine, onSubmit, className, showSidebar = true }: EnquiryFormProps) {
  const [formData, setFormData] = useState<Enquiry>({
    name: '',
    company: '',
    phone: '',
    email: '',
    productSlug: preSelectedMachine || '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Check if preSelectedMachine is a machine slug rather than a category slug
  const machineData = useMemo(() => getMachineBySlug(preSelectedMachine || null), [preSelectedMachine]);

  useEffect(() => {
    if (preSelectedMachine) {
      setFormData(prev => ({ ...prev, productSlug: preSelectedMachine }));
    }
  }, [preSelectedMachine]);

  const validate = (data: Enquiry): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) newErrors.name = 'Name is required';
    if (!data.company.trim()) newErrors.company = 'Company name is required';
    
    const phoneRegex = /^[6-9]\d{9}$/;
    const phoneClean = data.phone.replace(/[\s-+]/g, '').slice(-10);
    if (!data.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(phoneClean)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!data.message.trim()) {
      newErrors.message = 'Requirement details are required';
    } else if (data.message.trim().length < 10) {
      newErrors.message = 'Please provide more details about your requirement';
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const fieldErrors = validate({ ...formData, [name]: value });
      setErrors(prev => ({ ...prev, [name]: (fieldErrors as any)[name] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<any>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const fieldErrors = validate(formData);
    setErrors(prev => ({ ...prev, [name]: (fieldErrors as any)[name] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched({
      name: true,
      company: true,
      phone: true,
      email: true,
      message: true,
    });

    if (Object.keys(validationErrors).length === 0) {
      setStatus('submitting');
      
      try {
        const result = await submitEnquiry(formData);

        if (result.success) {
          console.log('Enquiry submitted successfully:', result);
          if (onSubmit) onSubmit(formData);
          setStatus('success');
          // Success message: "Thank you! Our sales team will contact you shortly with detailed information."
          // This is handled in the success view below
        } else {
          throw new Error(result.message || 'Failed to submit enquiry');
        }
      } catch (err) {
        console.error('Enquiry submission error:', err);
        setStatus('error');
      }
    }
  };

  const isFormValid = Object.keys(validate(formData)).length === 0;

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-[2.5rem] border border-neutral-100 shadow-2xl text-center space-y-6"
      >
        <div className="bg-success/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="h-12 w-12 text-success" />
        </div>
        <h3 className="text-3xl font-black text-charcoal uppercase tracking-tight">Technical Inquiry Sent</h3>
        <p className="text-neutral-500 max-w-sm mx-auto leading-relaxed text-lg">
          Thank you! Our sales team will contact you shortly with detailed information regarding {machineData ? machineData.name : 'your inquiry'}.
        </p>
        <div className="pt-8 border-t border-neutral-100 mt-8">
          <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-6">Need immediate assistance?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="rounded-2xl h-12 px-8" asChild>
              <a href="tel:+910000000000">Call Support</a>
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => {
                setStatus('idle');
                setFormData({
                  name: '',
                  company: '',
                  phone: '',
                  email: '',
                  productSlug: preSelectedMachine || '',
                  message: '',
                });
                setTouched({});
              }}
              className="rounded-2xl h-12 px-8"
            >
              Send New Inquiry
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={cn("bg-white rounded-[2.5rem] shadow-2xl border border-neutral-100 overflow-hidden", className)}>
      <div className={cn("grid grid-cols-1", showSidebar ? "md:grid-cols-5" : "grid-cols-1")}>
        {/* Sidebar */}
        {showSidebar && (
          <div className="md:col-span-2 bg-charcoal p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Request a <span className="text-primary">Proposal</span></h2>
              <p className="text-white/40 mb-12 leading-relaxed">
                Fill out the form and our industrial engineers will provide a comprehensive technical and commercial proposal tailored to your production volume.
              </p>
              
              <div className="space-y-6">
                {[
                  'Nationwide Service Support',
                  'Custom Machine Configurations',
                  'Rapid ROI Analysis',
                  'On-site Technical Training'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold text-white/60">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative z-10 bg-white/5 p-8 rounded-3xl border border-white/10 mt-12">
              <p className="text-xs text-primary font-bold uppercase tracking-widest mb-3">Priority Support</p>
              <p className="text-sm text-white/60 leading-relaxed">For urgent machine breakdowns or spare parts, please use our 24/7 technical hotline.</p>
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className={cn("p-12", showSidebar ? "md:col-span-3" : "w-full")}>
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] font-black text-neutral-400 uppercase tracking-widest block">Full Name</label>
                <div className="relative">
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={cn(
                      "w-full px-5 py-4 bg-neutral-50 border rounded-2xl focus:outline-none transition-all font-bold text-charcoal placeholder:text-neutral-300",
                      errors.name && touched.name ? "border-danger focus:ring-4 focus:ring-danger/10" : "border-neutral-100 focus:ring-4 focus:ring-primary/10 focus:border-primary"
                    )}
                    placeholder="E.g. Rajesh Kumar"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && touched.name && (
                    <motion.p 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }}
                      id="name-error" 
                      className="text-[10px] text-danger font-bold mt-1.5 flex items-center gap-1"
                    >
                      <AlertCircle className="h-3 w-3" /> {errors.name}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label htmlFor="company" className="text-[10px] font-black text-neutral-400 uppercase tracking-widest block">Company Name</label>
                <input 
                  id="company"
                  name="company"
                  type="text" 
                  value={formData.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={cn(
                    "w-full px-5 py-4 bg-neutral-50 border rounded-2xl focus:outline-none transition-all font-bold text-charcoal placeholder:text-neutral-300",
                    errors.company && touched.company ? "border-danger focus:ring-4 focus:ring-danger/10" : "border-neutral-100 focus:ring-4 focus:ring-primary/10 focus:border-primary"
                  )}
                  placeholder="Company Pvt Ltd"
                />
                {errors.company && touched.company && (
                  <p className="text-[10px] text-danger font-bold mt-1.5 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.company}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-[10px] font-black text-neutral-400 uppercase tracking-widest block">Phone Number</label>
                <input 
                  id="phone"
                  name="phone"
                  type="tel" 
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={cn(
                    "w-full px-5 py-4 bg-neutral-50 border rounded-2xl focus:outline-none transition-all font-bold text-charcoal placeholder:text-neutral-300",
                    errors.phone && touched.phone ? "border-danger focus:ring-4 focus:ring-danger/10" : "border-neutral-100 focus:ring-4 focus:ring-primary/10 focus:border-primary"
                  )}
                  placeholder="+91 00000 00000"
                />
                {errors.phone && touched.phone && (
                  <p className="text-[10px] text-danger font-bold mt-1.5 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] font-black text-neutral-400 uppercase tracking-widest block">Email Address</label>
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={cn(
                    "w-full px-5 py-4 bg-neutral-50 border rounded-2xl focus:outline-none transition-all font-bold text-charcoal placeholder:text-neutral-300",
                    errors.email && touched.email ? "border-danger focus:ring-4 focus:ring-danger/10" : "border-neutral-100 focus:ring-4 focus:ring-primary/10 focus:border-primary"
                  )}
                  placeholder="name@company.com"
                />
                {errors.email && touched.email && (
                  <p className="text-[10px] text-danger font-bold mt-1.5 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="productSlug" className="text-[10px] font-black text-neutral-400 uppercase tracking-widest block">Interested Machinery</label>
              <div className="relative">
                <select 
                  id="productSlug"
                  name="productSlug"
                  value={formData.productSlug}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-charcoal appearance-none cursor-pointer"
                >
                  <option value="">General Industrial Inquiry</option>
                  {machineData && !categories.some(c => c.slug === preSelectedMachine) && (
                    <option value={machineData.slug}>{machineData.name}</option>
                  )}
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.slug}>{cat.name}</option>
                  ))}
                  <option value="custom">Custom SPM Development</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-[10px] font-black text-neutral-400 uppercase tracking-widest block">Requirement Details</label>
              <textarea 
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-5 py-4 bg-neutral-50 border rounded-2xl focus:outline-none transition-all font-bold text-charcoal placeholder:text-neutral-300",
                  errors.message && touched.message ? "border-danger focus:ring-4 focus:ring-danger/10" : "border-neutral-100 focus:ring-4 focus:ring-primary/10 focus:border-primary"
                )}
                placeholder="Describe your production requirements, material type, thickness..."
              />
              {errors.message && touched.message && (
                <p className="text-[10px] text-danger font-bold mt-1.5 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.message}
                </p>
              )}
            </div>

            <AnimatePresence>
              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-danger/10 p-6 rounded-2xl space-y-3"
                >
                  <div className="flex items-center gap-3 text-danger text-sm font-bold">
                    <AlertCircle className="h-5 w-5" />
                    Failed to send inquiry. Please check your connection and try again.
                  </div>
                  <p className="text-[10px] font-black text-danger/60 uppercase tracking-widest pl-8">
                    Alternatively, contact us at: <a href="tel:+910000000000" className="underline">+91 [VERIFY]</a> or <a href="mailto:sales@subhamindustries.com" className="underline">sales@subhamindustries.com</a>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <Button 
              type="submit" 
              className="w-full py-8 text-xl font-black rounded-2xl group uppercase tracking-tight shadow-xl shadow-primary/20"
              disabled={status === 'submitting' || !isFormValid}
            >
              {status === 'submitting' ? (
                <div className="flex items-center gap-3">
                  <Loader2 className="h-6 w-6 animate-spin" />
                  Processing...
                </div>
              ) : (
                <>
                  Generate Technical Proposal
                  <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
