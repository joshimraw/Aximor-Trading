import { MessageSquare } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a192f]/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-600 rounded flex items-center justify-center font-bold text-white italic">X</div>
          <span className="text-white font-bold text-xl tracking-tight">AXIMOR <span className="font-light block text-[10px] -mt-1 tracking-[.2em]">TRADING</span></span>
        </div>
        
        <nav className="hidden md:flex gap-8 text-slate-300 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors border-b-2 border-orange-600 pb-1">Home</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">About Us</a>
          <a href="#" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-semibold transition-all">
          Get a Quote
        </button>
      </div>
    </header>
  );
}