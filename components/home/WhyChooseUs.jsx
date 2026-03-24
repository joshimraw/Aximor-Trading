import { Zap, ShieldCheck, Maximize, Headset } from 'lucide-react';

const reasons = [
  { 
    title: "Fast Delivery", 
    desc: "Agile workflows ensuring your project hits the market on schedule.", 
    icon: <Zap className="w-6 h-6" />,
    color: "group-hover:text-amber-500",
    bg: "bg-amber-500/10"
  },
  { 
    title: "Secure Systems", 
    desc: "Enterprise-grade encryption and robust data protection protocols.", 
    icon: <ShieldCheck className="text-blue-600 w-6 h-6" />,
    color: "group-hover:text-blue-500",
    bg: "bg-blue-500/10"
  },
  { 
    title: "Scalable Software", 
    desc: "Cloud-native architectures that expand seamlessly with your user base.", 
    icon: <Maximize className="text-emerald-600 w-6 h-6" />,
    color: "group-hover:text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  { 
    title: "Dedicated Support", 
    desc: "Our engineers are on standby 24/7 to ensure zero downtime.", 
    icon: <Headset className="text-purple-600 w-6 h-6" />,
    color: "group-hover:text-purple-500",
    bg: "bg-purple-500/10"
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Our Edge</h2>
          <h3 className="text-4xl font-black text-[#0a192f]">Why Partners Trust Aximor</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-8 rounded-2xl border border-slate-100 bg-white hover:border-transparent hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Hover Background Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-[360deg]`}>
                  <div className={`transition-colors duration-300 text-slate-700 ${item.color}`}>
                    {item.icon}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed text-center">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}