import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#050c1a] text-slate-400 pt-20 pb-10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -mb-48 -ml-24"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column (4 Cols) */}
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <Image
                src="/aximor-logo.png"
                alt="Aximor Logo"
                width="60"
                height="40"
                  />
              <div>
                <span className="text-white font-bold text-xl tracking-tight block leading-none">AXIMOR</span>
                <span className="text-orange-500 font-light text-[10px] tracking-[0.3em] uppercase">Technology</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Empowering global enterprises with cutting-edge ERP, HRM, and eCommerce architectures. We turn complex business logic into seamless digital reality.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column (2 Cols) */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
              Company
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services Column (2 Cols) */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              Services
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/services/erp" className="hover:text-blue-400 transition-colors">ERP Systems</a></li>
              <li><a href="/services/hrm" className="hover:text-blue-400 transition-colors">HRM Software</a></li>
              <li><a href="/services/ecommerce" className="hover:text-blue-400 transition-colors">eCommerce</a></li>
              <li><a href="/services/custom" className="hover:text-blue-400 transition-colors">Custom Dev</a></li>
            </ul>
          </div>

          {/* Newsletter Column (4 Cols) */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-sm mb-6 text-slate-500">Subscribe to get the latest insights on business automation.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-blue-600 transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-full transition-colors flex items-center justify-center">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Final Bottom Bar */}
        <div className="flex flex-col md:row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">
          <p>© {new Date().getFullYear()} Aximor Trading — All Systems Operational</p>
        </div>
      </div>
    </footer>
  );
}