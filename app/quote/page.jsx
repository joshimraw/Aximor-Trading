"use client";
import { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, MessageSquare, Sparkles } from 'lucide-react';

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0a192f] text-white pt-32 pb-20 min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-48 -mt-24"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full -ml-48 -mb-24"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} /> Ready to Scale
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tighter">
            Architect Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Next Breakthrough.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl">
            From custom ERP logic to high-velocity eCommerce architectures—tell us what you're building and we'll handle the heavy lifting.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:items-start">
          
          {/* --- LEFT: SIDEBAR INFO --- */}
          <div className="lg:col-span-4 space-y-8">
            <div className="grid gap-6">
              {[
                { icon: <Phone size={20} />, label: "Direct Line", val: "+880 19 11183385", color: "text-blue-400" },
                { icon: <Mail size={20} />, label: "Support", val: "hello@aximortrading.com", color: "text-orange-400" },
                { icon: <MapPin size={20} />, label: "HQ", val: "Mirpur Dhaka, Bangladesh", color: "text-emerald-400" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <div className={`${item.color}`}>{item.icon}</div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">{item.label}</p>
                    <p className="text-sm font-medium text-slate-200">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-blue-600/10 to-transparent border border-blue-500/20">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-blue-400">
                <MessageSquare size={18} /> The Protocol
              </h4>
              <div className="space-y-4">
                {["Requirement Analysis", "Logic Architecture", "Fixed Quote Delivery"].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT: THE FORM --- */}
          <div className="lg:col-span-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-[#0d2137]/50 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Client Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Alex Rivera" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Terminal</label>
                    <input 
                      required
                      type="email" 
                      placeholder="alex@enterprise.com" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">System Type</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-slate-300 cursor-pointer appearance-none">
                      <option className="bg-[#0a192f]">eCommerce Ecosystem</option>
                      <option className="bg-[#0a192f]">Custom ERP Solution</option>
                      <option className="bg-[#0a192f]">HRM Infrastructure</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Budget Tier</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-slate-300 cursor-pointer appearance-none">
                      <option className="bg-[#0a192f]">$10k - $25k</option>
                      <option className="bg-[#0a192f]">$25k - $50k</option>
                      <option className="bg-[#0a192f]">$100k+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3 mb-10">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Project Brief</label>
                  <textarea 
                    rows={4} 
                    placeholder="Describe the technical scope and goals..." 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white placeholder:text-slate-600 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 group shadow-xl shadow-blue-600/20"
                >
                  Initialize Proposal
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            ) : (
              <div className="bg-blue-600/10 border border-blue-500/20 p-16 rounded-[2.5rem] text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/40">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-black text-white">Transmission Successful</h3>
                <p className="text-slate-400 max-w-md mx-auto">
                  Our systems have received your project brief. A senior architect will contact you via the provided terminal within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-blue-400 font-bold hover:text-white transition-colors"
                >
                  Send another transmission
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}