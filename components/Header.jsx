"use client";
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, ShoppingCart, LayoutGrid, Users, Code } from 'lucide-react';
import Image from 'next/image';

const serviceItems = [
  { name: "eCommerce Dev", icon: <ShoppingCart size={16} />, href: "/services/ecommerce" },
  { name: "ERP Solutions", icon: <LayoutGrid size={16} />, href: "/services/erp" },
  { name: "HRM Software", icon: <Users size={16} />, href: "/services/hrm" },
  { name: "Custom Apps", icon: <Code size={16} />, href: "/services/custom" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Desktop Hover Logic
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDesktopMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDesktopMenuOpen(false);
    }, 150); // Small delay so the menu doesn't disappear instantly
  };

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "py-3 bg-[#0a192f]/95 backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button className="lg:hidden text-white order-last p-2" onClick={() => setDrawerOpen(true)}>

            <Menu size={28} />
          </button>

          <div className="flex items-center gap-3 group lg:flex-1">
            <Image
            src="/aximor-logo.png"
            alt="Aximor Logo"
            width="60"
            height="40"
             />
            <div className="flex flex-col uppercase tracking-tighter">
              <span className="text-white font-black text-xl leading-none">Aximor</span>
              <span className="text-orange-500 font-bold text-[10px] tracking-[0.3em]">Technology</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 lg:flex-1 justify-center">
            <a href="/" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Home</a>
            
            {/* Desktop Dropdown Container */}
            <div 
              className="relative py-2" 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-sm font-bold text-slate-300 hover:text-white transition-colors outline-none">
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${desktopMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* The Dropdown Menu */}
              {desktopMenuOpen && (
                <div className="absolute top-full left-0 mt-1 w-60 bg-[#0d2137] border border-white/10 rounded-xl shadow-2xl py-3 z-[100] animate-in fade-in zoom-in-95 duration-200">
                  {serviceItems.map((item) => (
                    <a 
                      key={item.name} 
                      href={item.href} 
                      className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-blue-400 transition-all"
                      onClick={() => setDesktopMenuOpen(false)} // Close on click
                    >
                      <span className="text-blue-500">{item.icon}</span> {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/about" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">About Us</a>
            <a href="/contact" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="hidden lg:flex flex-1 justify-end">
            <a href='/quote' className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2">
              Get a Quote <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* --- MOBILE SIDE DRAWER --- */}
      <div className={`fixed inset-0 z-[100] ${drawerOpen ? "visible" : "invisible"}`}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${drawerOpen ? "opacity-100" : "opacity-0"}`} 
          onClick={() => setDrawerOpen(false)}
        ></div>
        
        {/* Drawer */}
        <div className={`absolute top-0 left-0 h-full w-[300px] bg-[#0a192f] border-r border-white/10 p-8 transition-transform duration-300 ease-out flex flex-col ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex justify-between items-center mb-10">
            <span className="text-white font-black text-xl tracking-tighter uppercase">Aximor</span>
            <button onClick={() => setDrawerOpen(false)} className="text-slate-400 p-1"><X size={28} /></button>
          </div>

          <nav className="flex flex-col gap-6 overflow-y-auto">
            <a href="/" className="text-lg font-bold text-white border-b border-white/5 pb-2">Home</a>
            
            {/* Mobile Services Accordion */}
            <div className="space-y-4">
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-lg font-bold text-white border-b border-white/5 pb-2"
              >
                Services <ChevronDown className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              
              {mobileServicesOpen && (
                <div className="pl-4 flex flex-col gap-5 animate-in slide-in-from-top-2 duration-200">
                  {serviceItems.map(item => (
                    <a key={item.name} href={item.href} className="text-slate-400 text-base flex items-center gap-3 hover:text-blue-400" onClick={() => setDrawerOpen(false)}>
                      {item.icon} {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/about" className="text-lg font-bold text-white border-b border-white/5 pb-2">About Us</a>
            <a href="/portfolio" className="text-lg font-bold text-white border-b border-white/5 pb-2">Contact</a>
            
            <button className="mt-6 w-full bg-orange-600 text-white py-4 rounded-xl font-bold shadow-lg">
              Get Started Now
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}