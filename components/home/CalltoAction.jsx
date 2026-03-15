import { ArrowRight, Sparkles } from 'lucide-react';

export default function CalltoAction() {
  return (
    <section className="py-24 bg-[#0a192f] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-600/10 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-16 text-center shadow-2xl">
          
          <div className="flex justify-center mb-6">
            <div className="bg-orange-600/20 p-3 rounded-2xl">
              <Sparkles className="text-orange-500 w-8 h-8" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Ready to scale your <br />
            <span className="text-blue-400">digital infrastructure?</span>
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join forward-thinking organizations using Aximor Trading to automate 
            operations through custom ERP, HRM, and eCommerce solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(234,88,12,0.3)]">
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-full font-bold text-lg transition-all">
              Schedule a Demo
            </button>
          </div>

          <p className="mt-8 text-slate-500 text-sm font-medium">
            No commitment required. Let's discuss your project goals first.
          </p>
        </div>
      </div>
    </section>
  );
}