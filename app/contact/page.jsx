"use client";
import { Phone, Mail, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';

export default function ContactPage() {
  const contactDetails = [
    {
      icon: <Phone className="text-blue-500" size={24} />,
      title: "Direct Mobile",
      value: "+880 19 11183385",
      sub: "Available 9AM - 6PM (GMT+6)",
      href: "tel:+8801911183385"
    },
    {
      icon: <Mail className="text-orange-500" size={24} />,
      title: "Official Mail",
      value: "info@aximor.tech",
      sub: "Expect a response within 2hr",
      href: "mailto:info@aximor.tech"
    },
    {
      icon: <MapPin className="text-emerald-500" size={24} />,
      title: "HQ Address",
      value: "1/E, Plot-42, Zoo Road",
      sub: "Mirpur-1, Dhaka-1216",
      href: "https://maps.google.com"
    }
  ];

  return (
    <div className="bg-[#0a192f] text-white pt-32 pb-20 min-h-screen relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-orange-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">Get In Touch</h2>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
            Let’s Connect Your <br/> <span className="text-blue-500 underline decoration-blue-500/20 underline-offset-8">Vision to Reality.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Whether you have a technical query or a project proposal, our team in Dhaka is ready to assist.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {contactDetails.map((item, i) => (
            <a 
              href={item.href} 
              key={i} 
              className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0d2137] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-2">{item.title}</h3>
              <p className="text-xl font-bold text-white mb-1">{item.value}</p>
              <p className="text-sm text-slate-500">{item.sub}</p>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Quick FAQ / Info Box */}
          <div className="bg-[#0d2137]/50 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Clock className="text-blue-500" /> Operational Hours
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-slate-400 font-medium">Saturday — Thursday</span>
                <span className="text-white font-bold">09:00 — 18:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-slate-400 font-medium">Friday</span>
                <span className="text-orange-500 font-bold uppercase text-xs">Closed</span>
              </div>
              <div className="flex justify-between items-center pb-4">
                <span className="text-slate-400 font-medium">Technical Support</span>
                <span className="text-emerald-500 font-bold text-sm uppercase">24/7 Available</span>
              </div>
            </div>
            
            <div className="mt-10 p-6 rounded-2xl bg-blue-600/10 border border-blue-500/20">
              <p className="text-sm text-blue-200 leading-relaxed italic">
                "Our physical office is located in the heart of Dhaka's tech hub. Feel free to schedule a visit for an in-person consultation regarding your enterprise software needs."
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-[2.5rem] overflow-hidden border border-white/10 h-[450px] relative group">
            <div className="absolute inset-0 bg-slate-800 flex items-center justify-center flex-col gap-4 text-slate-500">
               {/* This is a placeholder for an iframe or Map component */}
               <div className="w-20 h-20 rounded-full border-4 border-slate-700 border-t-blue-600 animate-spin"></div>
               <p className="font-bold tracking-widest uppercase text-xs">Initializing Satellite Map...</p>
            </div>
            {/* Real Map Integration Tip:
                Replace the above div with:
                <iframe 
                  src="https://www.google.com/maps/embed?pb=..." 
                  className="w-full h-full grayscale invert opacity-80 contrast-125"
                ></iframe>
            */}
          </div>
        </div>
      </div>
    </div>
  );
}