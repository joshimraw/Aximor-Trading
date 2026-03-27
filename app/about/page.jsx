"use client";
import { Users, Target, Rocket, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const stats = [
  { label: "Projects Delivered", value: "250+" },
  { label: "Global Clients", value: "80+" },
  { label: "Expert Developers", value: "45+" },
  { label: "Support Response", value: "< 2hr" },
];

const values = [
  {
    title: "Innovation First",
    description: "We don't just follow trends; we build the tools that set them in ERP and eCommerce.",
    icon: <Rocket className="text-orange-500" size={24} />,
  },
  {
    title: "Scalable Logic",
    description: "Our architectures are built to grow with your business, from startup to enterprise.",
    icon: <Target className="text-blue-500" size={24} />,
  },
  {
    title: "Security Centric",
    description: "Data integrity is our baseline. Every line of code is written with security in mind.",
    icon: <ShieldCheck className="text-emerald-500" size={24} />,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      {/* --- HERO SECTION --- */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl">
          <h2 className="text-orange-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Story</h2>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
            Engineering the <span className="text-blue-600">Digital Backbone</span> of Modern Trade.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Aximor Trading started with a simple mission: to bridge the gap between complex business operations 
            and intuitive digital experiences. Today, we power global enterprises with bespoke ERP and HRM solutions.
          </p>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="bg-white/5 border-y border-white/10 py-12 mb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-600/20 blur-3xl rounded-full"></div>
            <div className="relative bg-slate-800 rounded-2xl overflow-hidden aspect-video shadow-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
                <div className="flex items-center justify-center h-full">
                    <Users size={80} className="text-white/20" />
                </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">Why Businesses Trust Aximor</h3>
            <div className="space-y-6">
              {values.map((value, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{value.icon}</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{value.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE CAPABILITIES --- */}
      <section className="container mx-auto px-6 mb-32">
        <div className="bg-blue-600 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="max-w-xl">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to automate your workflow?</h3>
            <p className="text-blue-100 text-lg">
              Whether it's a custom ERP or a high-traffic eCommerce platform, we build for performance.
            </p>
          </div>
          <button className="whitespace-nowrap bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-all flex items-center gap-3">
            Get Started <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* --- CLIENTS / TRUSTED BY --- */}
      <section className="container mx-auto px-6 text-center">
        <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs mb-8">Trusted by Global Brands</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
          {/* Replace with actual partner logos later */}
          <div className="text-2xl font-black text-white tracking-tighter">LOGO_ONE</div>
          <div className="text-2xl font-black text-white tracking-tighter">LOGO_TWO</div>
          <div className="text-2xl font-black text-white tracking-tighter">LOGO_THREE</div>
          <div className="text-2xl font-black text-white tracking-tighter">LOGO_FOUR</div>
        </div>
      </section>
    </div>
  );
}