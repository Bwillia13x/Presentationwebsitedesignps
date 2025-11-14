import { Hammer, Zap, RefreshCw, ArrowRight, Layers, DollarSign, Clock, TrendingUp, Award, CheckCircle2 } from 'lucide-react';

export function OfferSlide() {
  const buildItems = [
    { 
      title: 'Website Sprint', 
      desc: 'Modern, conversion-ready, responsive site.',
      details: '2–3 weeks | $8K–15K'
    },
    { 
      title: 'Brand Lab', 
      desc: 'Web-first identity, Figma system, and assets.',
      details: '1–2 weeks | $5K–10K'
    },
    { 
      title: 'Analytics Sprint', 
      desc: 'Useful dashboard and model.',
      details: '1 week | $3K–6K'
    }
  ];

  const enableItems = [
    { 
      title: 'Edge Academy', 
      desc: 'Role-specific AI training with certification.',
      details: 'Half-day workshop | $2K per session'
    },
    { 
      title: 'Team Clinics', 
      desc: 'Upgrade key workflows with AI + post-audit ROI report.',
      details: '1–2 days | $3K–5K'
    }
  ];

  const evolveItems = [
    { 
      title: 'Edge Membership', 
      desc: 'Monthly AI audits, governance playbooks & cost control.',
      details: '$499/mo or $4,990/yr'
    },
    { 
      title: 'Optimization Sprints', 
      desc: 'Quarterly tune-ups for workflows and tool stack.',
      details: '$2K–4K per quarter'
    }
  ];

  return (
    <div className="h-full flex flex-col px-16 py-12 relative overflow-hidden">
      {/* Subtle background accents - monochromatic */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-white/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-white/3 rounded-full blur-3xl"></div>
      
      <div className="flex-1 flex flex-col justify-center relative z-10">
        {/* Transitional hook - UPDATED */}
        <div className="mb-6 max-w-4xl">
          <p className="text-xl text-purple-300/80 italic leading-relaxed">
            → Prairie Signal delivers this step-change through three focused pillars.
          </p>
        </div>

        <div className="flex items-start gap-4 mb-12">
          <div>
            <div className="text-sm text-white/50 mb-2 uppercase tracking-wider">The Prairie Signal Method</div>
            <h1 className="text-[7rem] leading-[0.85] tracking-tight">
              Studio · Edge · Evolve
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Studio: Build */}
          <div className="group relative rounded-3xl overflow-hidden p-12 border border-white/20 shadow-2xl hover:border-white/30 hover:scale-[1.01] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/5 opacity-95"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
              backgroundSize: 'cover'
            }}></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-500">
                <Hammer className="w-10 h-10 text-white/90" />
              </div>
              <div className="mb-2">
                <h2 className="text-5xl tracking-tight">Studio</h2>
              </div>
              <div className="text-lg text-white/70 mb-1">Build your digital foundation</div>
              <div className="w-16 h-1 bg-white/40 rounded-full mb-8"></div>
              
              <ul className="space-y-6 mb-8">
                {buildItems.map((item, index) => (
                  <li key={index} className="group/item">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/20 group-hover/item:bg-white/15 group-hover/item:border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300">
                        <span className="text-xs">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-lg text-white/95 group-hover/item:text-white transition-colors leading-relaxed">
                          <span className="font-medium">{item.title}</span> – {item.desc}
                        </div>
                        <div className="flex items-center gap-2 mt-1.5">
                          <Clock className="w-3.5 h-3.5 text-cyan-400/70" />
                          <span className="text-xs text-cyan-300/80">{item.details}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Success metric callout - NEW */}
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <div className="text-xs text-green-200/90 uppercase tracking-wider">Signature Success</div>
                </div>
                <div className="text-sm text-green-200/80 leading-relaxed">
                  Avg. +47% conversion uplift after Website Sprint
                </div>
              </div>
            </div>
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full"></div>
          </div>

          {/* Middle Column - Edge: Enable */}
          <div className="group relative rounded-3xl overflow-hidden p-12 border border-white/20 shadow-2xl hover:border-white/30 hover:scale-[1.01] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/5 opacity-95"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
              backgroundSize: 'cover'
            }}></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-500">
                <Zap className="w-10 h-10 text-white/90" />
              </div>
              <div className="mb-2">
                <h2 className="text-5xl tracking-tight">Edge</h2>
              </div>
              <div className="text-lg text-white/70 mb-1">Equip teams with AI skills & workflows</div>
              <div className="w-16 h-1 bg-white/40 rounded-full mb-8"></div>
              
              <ul className="space-y-6 mb-8">
                {enableItems.map((item, index) => (
                  <li key={index} className="group/item">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/20 group-hover/item:bg-white/15 group-hover/item:border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300">
                        <span className="text-xs">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-lg text-white/95 group-hover/item:text-white transition-colors leading-relaxed">
                          <span className="font-medium">{item.title}</span> – {item.desc}
                        </div>
                        <div className="flex items-center gap-2 mt-1.5">
                          <DollarSign className="w-3.5 h-3.5 text-purple-400/70" />
                          <span className="text-xs text-purple-300/80">{item.details}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Recurring revenue highlight - NEW */}
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-purple-400" />
                  <div className="text-xs text-purple-200/90 uppercase tracking-wider">Membership Benefits</div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-purple-300/70" />
                    <div className="text-xs text-purple-200/80">Monthly AI audit & optimization</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-purple-300/70" />
                    <div className="text-xs text-purple-200/80">Governance playbook & templates</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-purple-300/70" />
                    <div className="text-xs text-purple-200/80">Priority support & tool cost control</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full"></div>
          </div>

          {/* Right Column - Evolve: Optimize */}
          <div className="group relative rounded-3xl overflow-hidden p-12 border border-white/20 shadow-2xl hover:border-white/30 hover:scale-[1.01] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/5 opacity-95"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
              backgroundSize: 'cover'
            }}></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-500">
                <RefreshCw className="w-10 h-10 text-white/90" />
              </div>
              <div className="mb-2">
                <h2 className="text-5xl tracking-tight">Evolve</h2>
              </div>
              <div className="text-lg text-white/70 mb-1">Optimize and scale your AI investments</div>
              <div className="w-16 h-1 bg-white/40 rounded-full mb-8"></div>
              
              <ul className="space-y-6 mb-8">
                {evolveItems.map((item, index) => (
                  <li key={index} className="group/item">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/20 group-hover/item:bg-white/15 group-hover/item:border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300">
                        <span className="text-xs">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-lg text-white/95 group-hover/item:text-white transition-colors leading-relaxed">
                          <span className="font-medium">{item.title}</span> – {item.desc}
                        </div>
                        <div className="flex items-center gap-2 mt-1.5">
                          <DollarSign className="w-3.5 h-3.5 text-purple-400/70" />
                          <span className="text-xs text-purple-300/80">{item.details}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Recurring revenue highlight - NEW */}
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-purple-400" />
                  <div className="text-xs text-purple-200/90 uppercase tracking-wider">Membership Benefits</div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-purple-300/70" />
                    <div className="text-xs text-purple-200/80">Monthly AI audit & optimization</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-purple-300/70" />
                    <div className="text-xs text-purple-200/80">Governance playbook & templates</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-purple-300/70" />
                    <div className="text-xs text-purple-200/80">Priority support & tool cost control</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}