"use client";
import { ShoppingCart, LayoutGrid, Users, Code, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const allServices = [
  {
    id: "ecommerce",
    title: "eCommerce Development",
    icon: <ShoppingCart size={32} />,
    description: "High-velocity online stores engineered for conversion and global scale.",
    features: ["Payment Integration", "Inventory Management", "Mobile Responsive", "Custom Checkout"],
    color: "from-orange-500/20 to-transparent",
    border: "group-hover:border-orange-500/50"
  },
  {
    id: "erp",
    title: "ERP Software",
    icon: <LayoutGrid size={32} />,
    description: "Unified platforms that integrate finance, sales, and supply chain into one dashboard.",
    features: ["Accounting", "Business Analytics", "Sales Management", "Real-time Tracking"],
    color: "from-blue-500/20 to-transparent",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: "hrm",
    title: "HRM Solutions",
    icon: <Users size={32} />,
    description: "Smart workforce management automating everything from payroll to performance.",
    features: ["Attendance System", "Payroll Management", "Employee Tracking", "Leave Automation"],
    color: "from-emerald-500/20 to-transparent",
    border: "group-hover:border-emerald-500/50"
  },
  {
    id: "custom",
    title: "Custom Software",
    icon: <Code size={32} />,
    description: "Tailor-made digital systems built specifically for your unique business logic.",
    features: ["Bespoke Architecture", "API Integrations", "Legacy Migration", "Cloud Native"],
    color: "from-purple-500/20 to-transparent",
    border: "group-hover:border-purple-500/50"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0a192f] text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Expertise</h2>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
            Software Solutions for the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Modern Enterprise.</span>
          </h1>
          <p className="text-lg text-slate-400">
            We don't just build apps; we architect the digital infrastructure that powers global commerce and manufacturing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {allServices.map((service) => (
            <Link 
              href={`/services/${service.id}`} 
              key={service.id}
              className={`group relative p-10 rounded-[2.5rem] bg-white/5 border border-white/10 transition-all duration-500 overflow-hidden ${service.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-500 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-blue-500" />
                      {feat}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 font-bold text-blue-400 group-hover:gap-4 transition-all">
                  Explore Solution <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}