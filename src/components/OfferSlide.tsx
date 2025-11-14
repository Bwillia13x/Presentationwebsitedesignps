import { Hammer, Zap, ArrowRight, Layers } from 'lucide-react';

export function OfferSlide() {
  const buildItems = [
    'Website Sprint – modern, conversion-ready, responsive site.',
    'Brand Lab – web-first identity, Figma system, and assets.',
    'Analytics Sprint – useful dashboard and model.'
  ];

  const enableItems = [
    'Edge Academy – role-specific AI training.',
    'Team Clinics – upgrade key workflows with AI.',
    'Edge Membership – tune-ups, governance, and cost control.'
  ];

  return (
    <div className="h-full flex flex-col px-16 py-12 relative overflow-hidden">
      {/* Subtle background accents - monochromatic */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-white/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-white/3 rounded-full blur-3xl"></div>
      
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="flex items-start gap-4 mb-16">
          <div>
            <div className="text-sm text-white/50 mb-2 uppercase tracking-wider">The Solution</div>
            <h1 className="text-[7rem] leading-[0.85] tracking-tight">
              Prairie Signal = Build + Enable
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Studio: Build */}
          <div className="group relative rounded-3xl overflow-hidden p-12 border border-white/20 shadow-2xl hover:border-white/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/5 opacity-95"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
              backgroundSize: 'cover'
            }}></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <Hammer className="w-10 h-10 text-white/90" />
              </div>
              <div className="flex items-baseline gap-3 mb-3">
                <h2 className="text-5xl tracking-tight">Studio</h2>
                <span className="text-2xl text-white/60">Build</span>
              </div>
              <div className="w-16 h-1 bg-white/40 rounded-full mb-8"></div>
              <ul className="space-y-5 text-lg text-white/95">
                {buildItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">{index + 1}</span>
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full"></div>
          </div>

          {/* Right Column - Edge: Enable */}
          <div className="group relative rounded-3xl overflow-hidden p-12 border border-white/20 shadow-2xl hover:border-white/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/5 opacity-95"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
              backgroundSize: 'cover'
            }}></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="w-10 h-10 text-white/90" />
              </div>
              <div className="flex items-baseline gap-3 mb-3">
                <h2 className="text-5xl tracking-tight">Edge</h2>
                <span className="text-2xl text-white/60">Enable</span>
              </div>
              <div className="w-16 h-1 bg-white/40 rounded-full mb-8"></div>
              <ul className="space-y-5 text-lg text-white/95">
                {enableItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">{index + 1}</span>
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}