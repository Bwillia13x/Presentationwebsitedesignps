import brandLogo from 'figma:asset/f2b0aa5e7b92bb48302800c39968099a5c3498ec.png';

export function IntroSlide() {
  return (
    <div className="h-full flex items-center justify-center relative overflow-hidden bg-black">
      {/* Simplified ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent"></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto px-16">
        {/* Logo Icon - Simplified */}
        <div className="mb-16 relative">
          <div className="w-32 h-32 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <img src={brandLogo} alt="Prairie Signal" className="w-20 h-20 object-contain" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="relative mb-8">
          <h1 className="text-[10rem] leading-[0.85] tracking-[-0.02em]">
            Prairie Signal
          </h1>
        </div>

        {/* Decorative Line */}
        <div className="w-96 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-10"></div>

        {/* Subtitle */}
        <p className="text-3xl text-white/70 tracking-wide leading-relaxed mb-8 max-w-4xl">
          Bringing State-of-the-Art AI to Calgary Businesses
        </p>

        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 shadow-lg">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400"></div>
          <p className="text-sm text-white/60 tracking-wider uppercase">
            Closing the AI Usage Gap
          </p>
        </div>
      </div>
      
      {/* Bottom metadata */}
      <div className="absolute bottom-20 left-16 flex items-center gap-4 z-10">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20"></div>
        <p className="text-xs text-white/40 tracking-[0.2em] uppercase">Calgary · 2025</p>
      </div>

      <div className="absolute bottom-20 right-16 flex items-center gap-4 z-10">
        <p className="text-xs text-white/40 tracking-[0.2em] uppercase">Investor Deck</p>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20"></div>
      </div>
    </div>
  );
}