import { CheckCircle2, Calendar, Rocket, DollarSign, Target, TrendingUp, Sparkles } from 'lucide-react';
import brandLogo from 'figma:asset/f2b0aa5e7b92bb48302800c39968099a5c3498ec.png';

export function ClosingSlide() {
  const actions = [
    {
      action: "Fund Calgary's first AI Usage Gap Lab.",
      details: "Software licenses, audit tools, and outreach materials.",
      outcome: "3 readiness audits completed",
      budget: "$400"
    },
    {
      action: "Run 3 Edge Readiness Audits for Calgary SMBs.",
      details: "Identify AI opportunities across operations, sales, and support.",
      outcome: "≥3 actionable AI opportunities per client",
      budget: "$200"
    },
    {
      action: "Build and deploy one flagship workflow (voice agent + copilot).",
      details: "Live proof-of-concept with real Calgary business.",
      outcome: "25% reduction in call handling time",
      budget: "$300"
    },
    {
      action: "Publish a public case study and starter playbook.",
      details: "Shareable template for other Calgary SMBs to replicate.",
      outcome: "1 public playbook + case study",
      budget: "$100"
    }
  ];

  const roadmapPhases = [
    { 
      phase: '3mo', 
      milestone: 'Edge Readiness Audits', 
      month: 'Mar 2025', 
      deliverable: '3 Calgary SMB audits complete' 
    },
    { 
      phase: '6mo', 
      milestone: 'Flagship AI Workflow', 
      month: 'Jun 2025', 
      deliverable: '1 live system deployed' 
    },
    { 
      phase: '9mo', 
      milestone: 'Public Case Study', 
      month: 'Sep 2025', 
      deliverable: 'Playbook + case study released' 
    },
    { 
      phase: '12mo', 
      milestone: 'Replication Ready', 
      month: 'Dec 2025', 
      deliverable: 'Framework scaled to 5+ SMBs' 
    }
  ];

  return (
    <div className="h-full flex flex-col px-16 py-12 relative overflow-hidden">
      {/* Ambient gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-cyan-500/5 opacity-50"></div>
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl"></div>
      
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="flex items-start gap-4 mb-8">
          <div>
            <div className="text-sm text-white/50 mb-2 uppercase tracking-wider">The Ask</div>
            <h1 className="text-[7rem] leading-[0.85] tracking-tight">
              Launch the AI Usage Gap Lab
            </h1>
          </div>
        </div>

        {/* Prize amount and use-of-funds header - UPDATED */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-white/20 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                <DollarSign className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <div className="text-sm text-white/60 uppercase tracking-wider mb-1">Hunter Hub Funding</div>
                <div className="text-4xl text-white/95 tracking-tight">$1,000</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg text-cyan-300 mb-1">Seeds Calgary's first AI Usage Gap Lab</div>
              <div className="text-sm text-cyan-200/70">Directly powers software, audits, and proof-of-concept deployment</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-12">
          <div>
            <div className="text-lg text-white/60 mb-6">With this funding, we will:</div>
            <ul className="space-y-5">
              {actions.map((item, index) => (
                <li key={index} className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-white/30 transition-all duration-300">
                      <CheckCircle2 className="w-5 h-5 text-pink-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-lg text-white/90 leading-relaxed mb-1 group-hover:text-white transition-colors">
                        {item.action}
                      </div>
                      <div className="text-xs text-white/60 mb-2 leading-relaxed">{item.details}</div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-green-500/10 border border-green-500/20">
                          <Target className="w-3 h-3 text-green-400" />
                          <span className="text-xs text-green-300/90">{item.outcome}</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20">
                          <DollarSign className="w-3 h-3 text-purple-400" />
                          <span className="text-xs text-purple-300/90">{item.budget}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Calendar className="w-5 h-5 text-white/60" />
                <div className="text-lg text-white/70">2025 Roadmap</div>
              </div>
              <div className="relative">
                {/* Timeline line with gradient */}
                <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-400 rounded-full opacity-40"></div>
                
                {/* Timeline phases */}
                <div className="grid grid-cols-4 gap-2 relative">
                  {roadmapPhases.map((item, index) => (
                    <div key={index} className="flex flex-col items-center group">
                      <div className="w-24 h-24 rounded-2xl bg-white/10 border-2 border-white/30 group-hover:border-white/50 backdrop-blur-sm flex items-center justify-center mb-4 relative z-10 hover:scale-110 transition-all duration-300 shadow-xl">
                        <div className="text-center">
                          <div className="text-2xl mb-1">{item.phase}</div>
                          <div className="text-xs text-white/70">{item.month}</div>
                        </div>
                      </div>
                      <div className="text-xs text-white/80 text-center leading-relaxed px-2 mb-2">{item.milestone}</div>
                      <div className="text-[10px] text-white/50 text-center leading-tight px-1">{item.deliverable}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI for supporters section - NEW */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 flex items-center justify-center shadow-lg flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="text-base text-cyan-200 mb-2 uppercase tracking-wider">Expected ROI for Calgary</div>
              <p className="text-lg text-cyan-100/90 leading-relaxed mb-3">
                This $1,000 accelerates our roadmap by 6 months, delivering 3 working AI systems to Calgary SMBs by Q3 2025—each saving 2+ hours/week and demonstrating 25%+ efficiency gains.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-cyan-200/80">3 businesses transformed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-cyan-200/80">1 public playbook for replication</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-cyan-200/80">6-month acceleration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="space-y-8 max-w-5xl mx-auto text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <p className="text-3xl text-white/90 leading-relaxed">
            Together, let's build a stronger, smarter Calgary.
          </p>
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 opacity-30 blur-2xl rounded-3xl"></div>
            <p className="relative text-5xl tracking-tight bg-gradient-to-br from-white via-white to-white/80 bg-clip-text">
              Back Prairie Signal.
            </p>
          </div>
          
          {/* Logo at bottom */}
          <div className="pt-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-400/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-xl">
                <img src={brandLogo} alt="Prairie Signal" className="w-16 h-16 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}