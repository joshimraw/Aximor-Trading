import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-[#0a192f] overflow-hidden py-20 lg:py-32">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -mr-40 -mt-20"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column (Text & CTAs) */}
        <div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Smart Software Solutions <br /> 
            <span className="text-blue-400 text-3xl lg:text-5xl">for Modern Businesses</span>
          </h1>
          <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
            We build powerful eCommerce platforms, ERP systems, and HRM software to grow your business with cutting-edge technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-md font-bold transition-all shadow-lg shadow-orange-900/20">
              Get a Quote
            </button>
            <button className="border border-slate-500 hover:bg-white/5 text-white px-8 py-4 rounded-md font-bold transition-all">
              Contact Us
            </button>
          </div>
        </div>
        
        {/* Right Column (New Optimized Image Implementation) */}
        <div className="flex justify-center relative">
          <div className="w-full h-auto aspect-video max-w-3xl lg:max-w-none">
            {/* Optimized Next.js Image component */}
            <Image 
              src="/home/hero-illustration.png" // Path relative to the /public folder
              alt="Aximor Trading Analytics Dashboard and Modular Data Cubes"
              width={1600} // Based on standard generated dimensions
              height={900} 
              priority // Crucial for Largest Contentful Paint (LCP) SEO
              className="object-contain drop-shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}