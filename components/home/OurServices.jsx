import { ShoppingCart, Settings, Users, Code } from 'lucide-react';

const services = [
  { title: "eCommerce Development", desc: "Timely project implement.", icon: <ShoppingCart className="text-blue-900 w-10 h-10" /> },
  { title: "ERP Solutions", desc: "Robust data protection.", icon: <Settings className="text-blue-900 w-10 h-10" /> },
  { title: "HRM Software", desc: "Solutions that grow with you.", icon: <Users className="text-blue-900 w-10 h-10" /> },
  { title: "Custom Web Apps", desc: "24/7 Expert Assistance.", icon: <Code className="text-blue-900 w-10 h-10" /> },
];

export default function OurServices() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0a192f] mb-12 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-slate-300"></div> Our Services <div className="h-px w-12 bg-slate-300"></div>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group text-center">
              <div className="bg-blue-50 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}