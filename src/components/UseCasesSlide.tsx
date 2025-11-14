import { ArrowRight, Lightbulb, Globe, Phone, FileSpreadsheet, TrendingUp, Clock, CheckCircle2, Target } from 'lucide-react';

export function UseCasesSlide() {
  const useCases = [
    {
      heading: 'Website Sprint',
      before: 'Outdated site, unclear CTAs, slow load times',
      after: '10-page responsive site with clear messaging, strong CTAs, and analytics',
      icon: Globe,
      outcome: '+47% conversion rate',
      metric: 'Website traffic → leads',
      clientLogo: '🏥', // Placeholder - could be actual logo
      clientName: 'Calgary Medical Clinic'
    },
    {
      heading: 'Voice Agent Sprint',
      before: 'Missed calls and voicemail backlog, lost appointments',
      after: 'Branded AI voice agent answers FAQs and books appointments 24/7',
      icon: Phone,
      outcome: '-65% missed calls',
      metric: 'Call handling efficiency',
      clientLogo: '🔧', // Placeholder
      clientName: 'Local HVAC Services'
    },
    {
      heading: 'Slide & Sheet Copilot',
      before: 'Owner buried in manual decks and spreadsheet reporting',
      after: 'Automated reporting with brand-locked templates and AI-generated insights',
      icon: FileSpreadsheet,
      outcome: '-4 hrs/week reporting time',
      metric: 'Time saved on admin',
      clientLogo: '💼', // Placeholder
      clientName: 'Professional Services Firm'
    }
  ];

  return (
    <div className="h-full flex flex-col px-16 py-12 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl"></div>
      
      <div className="flex-1 flex flex-col justify-center relative z-10">
        {/* Transitional hook - NEW */}
        <div className="mb-6 max-w-4xl">
          <p className="text-xl text-pink-300/80 italic leading-relaxed">
            → Here's what this transformation looks like in practice.
          </p>
        </div>

        <div className="flex items-start gap-4 mb-12">
          <div>
            <div className="text-sm text-white/50 mb-2 uppercase tracking-wider">Real Examples</div>
            <h1 className="text-[7rem] leading-[0.85] tracking-tight">
              What This Looks Like in Real Life
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
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
                  {/* Mini case study logo/client - NEW */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-sm">
                        {useCase.clientLogo}
                      </div>
                      <div className="text-xs text-white/60">{useCase.clientName}</div>
                    </div>
                  </div>

                  {/* Icon with updated lucide icon - NEW */}
                  <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-500">
                    <IconComponent className="w-8 h-8 text-white/90" />
                  </div>
                  
                  <h3 className="text-3xl mb-6 tracking-tight leading-tight">{useCase.heading}</h3>
                  
                  <div className="space-y-3 mb-6">
                    {/* Before - with icon - UPDATED */}
                    <div className="rounded-xl bg-rose-500/10 backdrop-blur-sm border border-rose-500/20 p-4 group-hover:border-rose-500/30 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 rounded bg-rose-500/30 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                        </div>
                        <div className="text-xs text-rose-200/90 uppercase tracking-wider">Before</div>
                      </div>
                      <p className="text-sm text-rose-100/80 leading-relaxed">{useCase.before}</p>
                    </div>
                    
                    {/* Arrow - UPDATED */}
                    <div className="flex justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-white/60" />
                      </div>
                    </div>
                    
                    {/* After - with icon - UPDATED */}
                    <div className="rounded-xl bg-green-500/10 backdrop-blur-sm border border-green-500/20 p-4 group-hover:border-green-500/30 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <div className="text-xs text-green-200/90 uppercase tracking-wider">After</div>
                      </div>
                      <p className="text-sm text-green-100/80 leading-relaxed">{useCase.after}</p>
                    </div>
                  </div>

                  {/* Measurable outcome callout - NEW */}
                  <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-cyan-400" />
                      <div className="text-xs text-cyan-200/90 uppercase tracking-wider">Impact</div>
                    </div>
                    <div className="text-2xl text-cyan-200 mb-0.5">{useCase.outcome}</div>
                    <div className="text-xs text-cyan-200/70">{useCase.metric}</div>
                  </div>
                </div>
                
                {/* Corner shimmer */}
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-tr-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}