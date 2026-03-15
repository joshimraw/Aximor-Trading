import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0a192f] overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
      
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Innovation for Enterprise
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 max-w-4xl tracking-tight">
            Engineering the Future of <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-orange-400 bg-clip-text text-transparent">
              Scalable Commerce.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
            Aximor Trading builds high-performance eCommerce, ERP, and HRM software 
            that transforms complex business data into seamless user experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 mb-20">
            <button className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,88,12,0.3)]">
              Get Started Now
            </button>
            <button className="px-10 py-4 border border-slate-700 hover:border-blue-500 text-white font-bold rounded-full transition-all backdrop-blur-sm">
              View Portfolio
            </button>
          </div>

          {/* The Hero Visual: Floating App Shell */}
          <div className="relative w-full max-w-5xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0d2137] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
               {/* Use the image we generated earlier */}
              <Image 
                src="/home/hero-illustration.png" 
                alt="Aximor Software Dashboard" 
                width={1200} 
                height={600} 
                className="w-full h-auto object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}