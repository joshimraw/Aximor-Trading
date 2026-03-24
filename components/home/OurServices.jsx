import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const services = [
  { 
    title: "eCommerce Development", 
    desc: "High-performance online stores built for conversion and speed.", 
    image: "/home/ecommerce.jpg",
    accent: "border-blue-500"
  },
  { 
    title: "ERP Solutions", 
    desc: "Centralize your business operations with robust data management.", 
    image: "/home/erp.jpg", 
    accent: "border-orange-500"
  },
  { 
    title: "HRM Software", 
    desc: "Intelligent workforce management tools that scale with your team.", 
    image: "/home/hrm.jpg", 
    accent: "border-blue-400"
  },
  { 
    title: "Custom Web Apps", 
    desc: "Tailor-made digital solutions for unique enterprise challenges.", 
    image: "/home/app.jpg", 
    accent: "border-indigo-500"
  },
];

export default function OurServices() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">
              What We Do
            </h2>
            <h3 className="text-4xl font-extrabold text-[#0a192f] leading-tight">
              Premium Digital Solutions <br /> For Global Enterprises
            </h3>
          </div>
          <button className="text-[#0a192f] font-bold flex items-center gap-2 hover:gap-4 transition-all border-b-2 border-orange-500 pb-1 w-fit">
            View All Services <ArrowRight size={20} />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image Placeholder Container */}
              <div className="relative h-48 bg-slate-200 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t from-[#0a192f]/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity`} />
                {/* Fallback box if image doesn't exist yet */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                   <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Service Preview</span>
                </div>
                <Image 
                  src={s.image} 
                  alt={s.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Accent bar that appears on hover */}
                <div className={`absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${s.accent.replace('border', 'bg')}`} />
                
                <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
                <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-orange-600 flex items-center gap-2 transition-colors">
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}