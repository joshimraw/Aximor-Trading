import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050c1a] text-slate-300 pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center font-bold text-white italic">X</div>
              <span className="text-white font-bold text-lg tracking-tight">AXIMOR <span className="font-light block text-[9px] -mt-1 tracking-[.2em]">TRADING</span></span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Leading the way in digital transformation with custom-built enterprise solutions designed for the modern era.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-600 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-orange-600 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="hover:text-orange-600 transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="hover:text-orange-600 transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Our Company</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Latest News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">eCommerce Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ERP Software Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HRM Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Web Apps</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-600 shrink-0" />
                <span>123 Tech Plaza, Business District,<br />Digital City, 56789</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-600 shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-600 shrink-0" />
                <span>info@aximortrading.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Aximor Trading. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}