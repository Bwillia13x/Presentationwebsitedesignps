import { Shield, Users, TrendingUp, AlertCircle, DollarSign, Target } from 'lucide-react';

export function AppendixSlide() {
  const risks = [
    { 
      risk: 'AI Tool Selection', 
      mitigation: 'Maintain vendor-agnostic framework; prioritize open APIs and established platforms (OpenAI, Anthropic, Google)',
      icon: Target
    },
    { 
      risk: 'Data Privacy & Security', 
      mitigation: 'Follow PIPEDA compliance; client data stays on-premise or in Canadian cloud zones; no PII in training data',
      icon: Shield
    },
    { 
      risk: 'Client Change Management', 
      mitigation: 'Embed training + enablement in every engagement; measure adoption weekly; iterate based on feedback',
      icon: Users
    }
  ];

  const competitors = [
    { 
      name: 'General AI Consultancies', 
      strength: 'Broad expertise, large teams',
      weakness: 'Enterprise-focused, high pricing ($200K+ minimums)',
      position: 'We focus on SMBs with accessible Sprint model'
    },
    { 
      name: 'Local IT/Digital Agencies', 
      strength: 'Calgary relationships, web/marketing',
      weakness: 'Limited AI-specific workflow expertise',
      position: 'We specialize in AI workflow automation'
    },
    { 
      name: 'DIY AI Tools (ChatGPT, etc.)', 
      strength: 'Low cost, readily available',
      weakness: 'No implementation support or measurement',
      position: 'We bridge the gap from experiment to production'
    }
  ];

  const financials = [
    { metric: 'Year 1 Revenue Target', value: '$150K', detail: '3 Sprints + 1 Program' },
    { metric: 'Year 2 Revenue Target', value: '$450K', detail: '5 Programs + 4 Sprints' },
    { metric: 'Year 3 Revenue Target', value: '$900K', detail: '6 Programs + 2 Scale engagements' },
    { metric: 'Gross Margin Target', value: '65%', detail: 'Service-based, low overhead' },
    { metric: 'Break-even Timeline', value: 'Q3 2025', detail: 'After 2 Program engagements' },
    { metric: 'Team Growth', value: '1→4 FTEs', detail: 'Founder + 3 specialists by end of Year 2' }
  ];

  return (
    <div className="h-full flex flex-col px-16 py-12 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl"></div>
      
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="mb-10">
          <div className="text-sm text-white/50 mb-2 uppercase tracking-wider">Backup Materials</div>
          <h1 className="text-[6rem] leading-[0.85] tracking-tight">
            Appendix: Risk, Competition & Financials
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Risk Mitigation */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <AlertCircle className="w-5 h-5 text-rose-400" />
              <h2 className="text-2xl tracking-tight">Risk Mitigation</h2>
            </div>
            <div className="space-y-3">
              {risks.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-rose-400" />
                      </div>
                      <div>
                        <div className="text-sm text-white/90 mb-1.5">{item.risk}</div>
                        <p className="text-xs text-white/60 leading-relaxed">{item.mitigation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Competitive Landscape */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Users className="w-5 h-5 text-cyan-400" />
              <h2 className="text-2xl tracking-tight">Competitive Landscape</h2>
            </div>
            <div className="space-y-3">
              {competitors.map((comp, index) => (
                <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                  <div className="text-sm text-white/90 mb-2">{comp.name}</div>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="text-[11px] text-green-300/70">
                      ✓ {comp.strength}
                    </div>
                    <div className="text-[11px] text-rose-300/70">
                      ✗ {comp.weakness}
                    </div>
                  </div>
                  <div className="text-xs text-cyan-300/80 italic">
                    → {comp.position}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Financial Projections */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <DollarSign className="w-5 h-5 text-green-400" />
            <h2 className="text-2xl tracking-tight">3-Year Financial Projections</h2>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {financials.map((item, index) => (
              <div 
                key={index}
                className="p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/30 transition-all shadow-xl"
              >
                <div className="text-xs text-white/50 mb-2 uppercase tracking-wider">{item.metric}</div>
                <div className="text-3xl text-white/95 mb-2">{item.value}</div>
                <div className="text-xs text-white/60 leading-relaxed">{item.detail}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-purple-200/90 leading-relaxed">
                <strong>Assumptions:</strong> Conservative client acquisition (2-3 new clients/quarter); 60% repeat/expansion rate; 
                pricing anchors at Sprint=$8K, Program=$50K, Scale=$200K. Team scales with revenue to maintain 65% gross margin.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-xs text-white/40 text-center italic">
            This appendix provides additional context for judges. Not part of the main presentation flow.
          </p>
        </div>
      </div>
    </div>
  );
}
