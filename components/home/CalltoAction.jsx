export default function CalltoAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0a192f] to-blue-900 text-center relative overflow-hidden">
      {/* Visual sweep effect */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Start Your Digital Transformation with Aximor Trading
        </h2>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-md font-bold text-lg transition-transform hover:scale-105 shadow-xl">
          Get Started Now
        </button>
      </div>
    </section>
  );
}