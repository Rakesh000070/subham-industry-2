import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary p-1 rounded">
                <span className="text-white font-black text-lg leading-none">SI</span>
              </div>
              <span className="text-lg font-bold tracking-tight">SUBHAM INDUSTRIES</span>
            </div>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              Leading manufacturers of industrial machinery and high-precision laser cutting solutions. Committed to quality, innovation, and customer satisfaction since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/machines" className="text-neutral-400 hover:text-white transition-colors">Machine Catalog</Link></li>
              <li><Link to="/services" className="text-neutral-400 hover:text-white transition-colors">Service & Support</Link></li>
              <li><Link to="/applications" className="text-neutral-400 hover:text-white transition-colors">Industries Served</Link></li>
              <li><Link to="/gallery" className="text-neutral-400 hover:text-white transition-colors">Project Gallery</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Machine Categories */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Categories</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li><Link to="/machines/laser-cutting" className="hover:text-white transition-colors">Laser Cutting Machines</Link></li>
              <li><Link to="/machines/fiber-laser" className="hover:text-white transition-colors">Fiber Laser Marking</Link></li>
              <li><Link to="/machines/cnc-bending" className="hover:text-white transition-colors">CNC Bending Machines</Link></li>
              <li><Link to="/machines/welding" className="hover:text-white transition-colors">Laser Welding Systems</Link></li>
              <li><Link to="/machines/engraving" className="hover:text-white transition-colors">Industrial Engraving</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span>123 Industrial Estate, Phase II, Sector 5, Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span>info@subhamindustries.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 space-y-4 md:space-y-0">
          <p>© {currentYear} Subham Industries. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
