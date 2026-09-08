import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { 
  Briefcase, 
  Settings, 
  ShieldCheck, 
  Download,
  MapPin,
  Mail,
  Phone,
  FileText,
  Info,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { companyInfo, downloadResources } from '@/data/companyInfo';
import { cn } from '@/utils/cn';

export default function CompanyProfilePage() {
  const capabilities = [
    { title: 'In-house R&D', desc: 'Continuous improvement and new product development focusing on fiber laser technology.' },
    { title: 'Advanced Assembly', desc: 'Precision assembly lines for complex CNC and SPM industrial units.' },
    { title: 'Quality Assurance', desc: 'Stringent multi-stage testing protocols for every component and machine.' },
    { title: 'Technical Support', desc: 'Nationwide network of certified engineers for rapid field response.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <SectionHeading
              title="Company Profile"
              subtitle="An authoritative overview of Subham Industries' organizational structure, manufacturing footprint, and core capabilities."
              className="mb-0"
              underline={true}
            />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Organizational Overview */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-black text-charcoal uppercase tracking-tight">Corporate Mission</h2>
                </div>
                <div className="prose prose-neutral max-w-none text-neutral-600 leading-relaxed space-y-6">
                  <p className="text-lg">
                    Subham Industries operates as a vertically integrated manufacturer, controlling every aspect of the machinery lifecycle from initial design and R&D to final assembly and global after-sales support.
                  </p>
                  <p>
                    With a focus on engineering excellence and structural integrity, we maintain a culture of technical discipline across all our operations. Our facility in Surat serves as our global engineering hub, housing our design studios, testing labs, and high-capacity fabrication bays.
                  </p>
                </div>
              </div>

              {/* Manufacturing Capabilities */}
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-black text-charcoal uppercase tracking-tight">Core Capabilities</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                  {capabilities.map((cap, i) => (
                    <div key={i} className="flex space-x-4">
                      <div className="bg-white h-10 w-10 rounded-xl flex items-center justify-center shrink-0 border border-neutral-100 shadow-sm">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-2 uppercase tracking-tight text-sm">{cap.title}</h4>
                        <p className="text-sm text-neutral-500 leading-relaxed">{cap.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Downloads Section */}
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-black text-charcoal uppercase tracking-tight">Resources & Downloads</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {downloadResources.map((resource) => (
                    <div key={resource.id} className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 group hover:border-primary/30 transition-colors">
                      <div className="flex justify-between items-start mb-6">
                        <div className="bg-white p-3 rounded-2xl shadow-sm border border-neutral-100">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest px-3 py-1 bg-neutral-100 rounded-full">
                          {resource.format} • {resource.fileSize}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-charcoal mb-3">{resource.title}</h4>
                      <p className="text-sm text-neutral-500 mb-8 leading-relaxed">
                        {resource.description}
                      </p>
                      <Button variant="outline" className="w-full group/btn rounded-2xl h-12" asChild>
                        <a href={resource.url} download>
                          Download Resource
                          <Download className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-y-0.5" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar with Company Details */}
            <div className="space-y-8">
              <div className="bg-charcoal p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
                
                <h3 className="text-xl font-bold mb-10 relative z-10 uppercase tracking-tight">Corporate Identity</h3>
                
                <div className="space-y-10 relative z-10">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Works Address</h4>
                    <div className="flex gap-4">
                      <MapPin className="h-5 w-5 text-primary shrink-0" />
                      <p className="text-sm text-white/70 leading-relaxed">
                        {companyInfo.worksAddress.street},<br />
                        {companyInfo.worksAddress.city}, {companyInfo.worksAddress.state} - {companyInfo.worksAddress.zipCode}, {companyInfo.worksAddress.country}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Registered Office</h4>
                    <div className="flex gap-4">
                      <MapPin className="h-5 w-5 text-primary shrink-0" />
                      <p className="text-sm text-white/70 leading-relaxed">
                        {companyInfo.registeredAddress.street},<br />
                        {companyInfo.registeredAddress.city}, {companyInfo.registeredAddress.state} - {companyInfo.registeredAddress.zipCode}, {companyInfo.registeredAddress.country}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Tax Identification</h4>
                    <div className="flex gap-4">
                      <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                      <p className="text-sm font-bold tracking-wider">{companyInfo.gstin}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-white/5 rounded-3xl border border-white/10 flex items-start gap-4">
                  <Info className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-[10px] font-medium text-white/40 leading-relaxed uppercase tracking-wider">
                    All administrative details above are subject to official verification.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-50 p-10 rounded-[2.5rem] border border-neutral-100">
                <h3 className="text-xl font-bold text-charcoal mb-10 uppercase tracking-tight">Contact Hub</h3>
                <div className="space-y-8">
                  <div className="flex gap-4 items-center">
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-neutral-100">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Enquiries</p>
                      <p className="text-sm font-bold text-charcoal">{companyInfo.contactEmail}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-neutral-100">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Sales</p>
                      <p className="text-sm font-bold text-charcoal">{companyInfo.salesPhone}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-neutral-100">
                      <Settings className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Technical Support</p>
                      <p className="text-sm font-bold text-charcoal">{companyInfo.technicalPhone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
