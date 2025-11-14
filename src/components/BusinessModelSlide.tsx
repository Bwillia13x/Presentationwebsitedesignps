import { ArrowRight, TrendingUp, Sparkles, DollarSign } from 'lucide-react';

export function BusinessModelSlide() {
  const pricingTiers = [
    {
      tier: 'Good',
      name: 'Sprint',
      price: '$5K–$18K',
      description: 'One outcome, fixed scope, training.'
    },
    {
      tier: 'Better',
      name: 'Program',
      price: 'mid–five figures',
      description: '2–3 linked outcomes, plus enablement.',
      featured: true
    },
    {
      tier: 'Best',
      name: 'Scale',
      price: 'six figures+',
      description: 'Multi-workstream roadmap with ongoing ops.'
    }
  ];

  const gtmStages = [
    { stage: 'Beachhead', target: 'Calgary SMBs', focus: 'Proof of concept', size: 100 },
    { stage: 'Playbooks', target: 'Sector templates', focus: 'Repeatability', size: 80 },
    { stage: 'Scale', target: 'Regional expansion', focus: 'Growth', size: 60 }
  ];

  return (
    <div className="h-full flex flex-col px-16 py-12 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl"></div>
      
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="flex items-start gap-4 mb-16">
          <div>
            <div className="text-sm text-white/50 mb-2 uppercase tracking-wider">Revenue & Growth</div>
            <h1 className="text-[7rem] leading-[0.85] tracking-tight">
              Business Model & Go-to-Market
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden p-10 border shadow-2xl transition-all duration-300 ${
                tier.featured 
                  ? 'border-white/30 scale-105 hover:scale-110' 
                  : 'border-white/20 hover:scale-105'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/5 opacity-95"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
                backgroundSize: 'cover'
              }}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{index + 1}</span>
                  </div>
                  {tier.featured && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span className="text-xs tracking-wide">Popular</span>
                    </div>
                  )}
                </div>
                <div className="text-xs text-white/70 mb-2 uppercase tracking-widest">{tier.tier}</div>
                <h3 className="text-5xl mb-4 tracking-tight">{tier.name}</h3>
                <div className="w-12 h-1 bg-white/40 rounded-full mb-6"></div>
                <div className="text-2xl mb-6 text-white/95">{tier.price}</div>
                <p className="text-base text-white/85 leading-relaxed">{tier.description}</p>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full"></div>
            </div>
          ))}
        </div>

        {/* GTM Funnel */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="text-sm text-white/60 uppercase tracking-wider">Growth Strategy</div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          
          <div className="flex items-center justify-center gap-8">
            {gtmStages.map((stage, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div 
                    className="rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 flex flex-col items-center justify-center p-6 transition-all hover:scale-105 shadow-xl"
                    style={{ width: `${stage.size + 60}px`, height: `${stage.size}px` }}
                  >
                    <TrendingUp className="w-6 h-6 mb-2 text-white/80" />
                    <div className="text-xl mb-1 tracking-tight">{stage.stage}</div>
                    <div className="text-xs text-white/60 text-center">{stage.target}</div>
                  </div>
                  <div className="text-xs text-white/50 mt-3 px-3 py-1 rounded-full bg-white/5 border border-white/10">{stage.focus}</div>
                </div>
                {index < gtmStages.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-white/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}