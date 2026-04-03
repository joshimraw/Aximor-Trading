"use client";
import { useParams } from 'next/navigation';
import { CheckCircle2, ArrowRight, BarChart3, Globe, Zap, Users, ShoppingCart, LayoutGrid } from 'lucide-react';
import Link from 'next/link';

const serviceContent = {
  ecommerce: {
    title: "eCommerce Development",
    accent: "text-orange-500",
    bgAccent: "bg-orange-500/10",
    description: "Architecting high-conversion online stores that turn visitors into loyal customers. We specialize in building scalable architectures for global trade.",
    imagePlaceholder: "/services/ecommerce.jpg", // Online store vibe
    features: [
      { title: "Payment Integration", desc: "Secure SSL-encrypted gateways supporting global and local currencies." },
      { title: "Inventory Engine", desc: "Automated stock tracking with real-time low-inventory alerts." },
      { title: "Mobile Responsive", desc: "Flawless shopping experiences across all screen sizes and devices." },
      { title: "User Analytics", desc: "Deep insights into customer behavior and conversion funnels." }
    ]
  },
  erp: {
    title: "ERP Solutions",
    accent: "text-blue-500",
    bgAccent: "bg-blue-500/10",
    description: "Aximor Technology ERP empowers apparel, textile, and footwear businesses. From concept creation to shipment, its flexible modules streamline every stage of production.",
    imagePlaceholder: "/services/erp.jpg", // Business Analytics vibe
    features: [
      { title: "Accounting", desc: "Unified financial tracking with automated balance sheets and tax reports." },
      { title: "Production Flow", desc: "Specialized modules for Knit Composite and garment manufacturing." },
      { title: "Sales Management", desc: "End-to-end tracking from lead generation to final invoice." },
      { title: "Supply Chain", desc: "Coordinate raw material sourcing and vendor relationships effortlessly." }
    ]
  },
  hrm: {
    title: "HRM Software",
    accent: "text-emerald-500",
    bgAccent: "bg-emerald-500/10",
    description: "Simplify workforce management by bringing all HR activities into one smart system. Automate routine tasks and manage your team more effectively.",
    imagePlaceholder: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800", // Team/People vibe
    features: [
      { title: "Attendance System", desc: "Biometric-ready tracking with automated late-entry and leave logic." },
      { title: "Payroll Engine", desc: "One-click salary generation with tax, bonus, and deduction handling." },
      { title: "Performance", desc: "KPI-based tracking to identify and reward your top-tier talent." },
      { title: "Digital Docs", desc: "Secure cloud storage for employee contracts and identification." }
    ]
  },
  custom: {
    title: "Custom Software",
    accent: "text-purple-500",
    bgAccent: "bg-purple-500/10",
    description: "Tailor-made systems built for unique business logic. We bridge the gap between complex requirements and high-performance reality.",
    imagePlaceholder: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", // Code vibe
    features: [
      { title: "Bespoke Logic", desc: "Software built specifically for your internal workflows, not generic templates." },
      { title: "Cloud Native", desc: "High-availability architectures designed to scale as your data grows." },
      { title: "API First", desc: "Seamless integration with your existing tools and third-party services." },
      { title: "Ongoing Support", desc: "Continuous updates and maintenance from our dedicated Dhaka team." }
    ]
  }
};

export default function ServiceDetail() {
  const params = useParams();
  const data = serviceContent[params.id] || serviceContent.erp; // Default to ERP if ID not found

  return (
    <div className="bg-[#0a192f] text-white pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-5 duration-700">
            <div className={`inline-block px-4 py-1 rounded-full border border-white/10 ${data.bgAccent} ${data.accent} font-bold text-xs uppercase tracking-widest`}>
              Enterprise Solution
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
              {data.title}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
              {data.description}
            </p>
            <div className="flex gap-4">
              <Link href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-600/20">
                Discuss Project
              </Link>
            </div>
          </div>

          {/* --- SERVICE IMAGE --- */}
          <div className="relative group animate-in fade-in slide-in-from-right-5 duration-700">
            <div className={`absolute inset-0 ${data.accent} opacity-20 blur-[120px] rounded-full`}></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-video lg:aspect-square">
              <img 
                src={data.imagePlaceholder} 
                alt={data.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* --- FEATURES GRID --- */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black mb-4">Core Capabilities</h2>
              <p className="text-slate-400">Everything you need to automate, monitor, and scale your {data.title} system.</p>
            </div>
            <div className="h-px flex-grow bg-white/10 hidden md:block mb-4 mx-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.features.map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all">
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${data.accent}`}>
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- CTA BOTTOM --- */}
        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 ${data.accent} opacity-10 blur-[100px]`}></div>
          <h3 className="text-3xl md:text-5xl font-black mb-8 relative z-10">
            Ready to deploy your <span className={data.accent}>{data.title}?</span>
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 relative z-10">
            Our Dhaka-based engineering team specializes in {data.title.toLowerCase()} for the manufacturing and retail sectors. Let's build something efficient together.
          </p>
          <Link href="/quote" className="inline-flex items-center gap-3 bg-white text-[#0a192f] px-5 md:px-10 py-2 md:py-5 rounded-full font-black text-lg hover:bg-orange-500 hover:text-white transition-all relative z-10">
            Get Started Now <ArrowRight size={22} />
          </Link>
        </div>

      </div>
    </div>
  );
}