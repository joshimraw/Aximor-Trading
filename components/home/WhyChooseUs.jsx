import { Zap, ShieldCheck, Maximize, Headset } from 'lucide-react';

const reasons = [
  { title: "Fast Delivery", desc: "Timely project completion.", icon: <Zap /> },
  { title: "Secure Systems", desc: "Robust data protection.", icon: <ShieldCheck /> },
  { title: "Scalable Software", desc: "Solutions that grow with you.", icon: <Maximize /> },
  { title: "Dedicated Support", desc: "24/7 Expert Assistance.", icon: <Headset /> },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0a192f] mb-12 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-slate-300"></div> Why Choose Us <div className="h-px w-12 bg-slate-300"></div>
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 border border-blue-100 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
              <p className="text-slate-500 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}