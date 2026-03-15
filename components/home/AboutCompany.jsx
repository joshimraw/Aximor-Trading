import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function AboutCompany() {
  const highlights = [
    "Enterprise-grade ERP Architectures",
    "Scalable HRM Solutions",
    "High-Conversion eCommerce Platforms",
    "Modern Tech Stack (Next.js & Tailwind)"
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Illustration or Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="relative bg-slate-100 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
               {/* Replace with an actual office/team image or abstract tech visual */}
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-[#0a192f] flex items-center justify-center">
                 <span className="text-white font-bold opacity-20 text-5xl italic">AXIMOR</span>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              About Our Company
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-6 leading-tight">
              Driving Growth through <br />
              <span className="text-blue-600">Intelligent Software</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Aximor Trading is a technology company focused on building scalable 
              business software including ERP, HRM, and eCommerce platforms 
              for modern organizations. We bridge the gap between complex 
              business requirements and elegant technical execution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((text, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-orange-600 w-5 h-5 shrink-0" />
                  <span className="text-slate-700 font-medium">{text}</span>
                </div>
              ))}
            </div>
            
            <button className="mt-10 group flex items-center gap-2 font-bold text-[#0a192f] hover:text-blue-600 transition-colors">
              Learn more about our mission
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}