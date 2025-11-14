import { ArrowRight, Lightbulb } from 'lucide-react';

export function UseCasesSlide() {
  const useCases = [
    {
      heading: 'Website Sprint',
      before: 'Before: Outdated site, unclear CTAs, slow.',
      after: 'After: 10-page responsive site with clear messaging, strong CTAs, and analytics installed.',
      icon: '🌐'
    },
    {
      heading: 'Voice Agent Sprint',
      before: 'Before: Missed calls and voicemail backlog.',
      after: 'After: Branded voice agent that answers FAQs and books appointments.',
      icon: '📞'
    },
    {
      heading: 'Slide & Sheet Copilot',
      before: 'Before: Owner buried in decks and spreadsheets.',
      after: 'After: Automated reporting plus brand-locked templates and decks.',
      icon: '📊'
    }
  ];

  return (
    <div className="h-full flex flex-col px-16 py-12 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl"></div>
      
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="flex items-start gap-4 mb-16">
          <div>
            <div className="text-sm text-white/50 mb-2 uppercase tracking-wider">Real Examples</div>
            <h1 className="text-[7rem] leading-[0.85] tracking-tight">
              What This Looks Like in Real Life
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden p-8 border border-white/20 shadow-2xl hover:border-white/30 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/5 opacity-95"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
                backgroundSize: 'cover'
              }}></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl" style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))' }}>{useCase.icon}</div>
                </div>
                <h3 className="text-3xl mb-8 tracking-tight leading-tight">{useCase.heading}</h3>
                <div className="space-y-4">
                  <div className="rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 p-4">
                    <div className="text-xs text-white/50 mb-2 uppercase tracking-wider">Before</div>
                    <p className="text-sm text-white/80 leading-relaxed">{useCase.before}</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4 text-white/60" />
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-4">
                    <div className="text-xs text-white/90 mb-2 uppercase tracking-wider">After</div>
                    <p className="text-sm text-white/95 leading-relaxed">{useCase.after}</p>
                  </div>
                </div>
              </div>
              
              {/* Corner shimmer */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-tr-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}