import { CheckCircle2, Calendar, Rocket } from 'lucide-react';
import brandLogo from 'figma:asset/f2b0aa5e7b92bb48302800c39968099a5c3498ec.png';

export function ClosingSlide() {
  const actions = [
    "Fund Calgary's first AI Usage Gap Lab.",
    "Run 3 Edge Readiness Audits for Calgary SMBs.",
    "Build and deploy one flagship workflow (voice agent + copilot).",
    "Publish a public case study and starter playbook."
  ];

  const roadmapPhases = [
    { phase: 'Q1', milestone: 'Lab Launch', month: 'Jan-Mar', color: 'from-pink-500 to-rose-500' },
    { phase: 'Q2', milestone: 'Audits Complete', month: 'Apr-Jun', color: 'from-purple-500 to-pink-500' },
    { phase: 'Q3', milestone: 'Workflow Deploy', month: 'Jul-Sep', color: 'from-blue-500 to-cyan-500' },
    { phase: 'Q4', milestone: 'Case Study Published', month: 'Oct-Dec', color: 'from-cyan-400 to-teal-400' }
  ];

  return (
    <div className="h-full flex flex-col px-16 py-12 relative overflow-hidden">
      {/* Ambient gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-500/10 opacity-50"></div>
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="flex items-start gap-4 mb-12">
          <div>
            <div className="text-sm text-white/50 mb-2 uppercase tracking-wider">The Ask</div>
            <h1 className="text-[7rem] leading-[0.85] tracking-tight">
              What We'll Do With Your Support
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 mb-16">
          <div>
            <div className="text-lg text-white/60 mb-8">With this funding, we will:</div>
            <ul className="space-y-6">
              {actions.map((action, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-pink-400" />
                  </div>
                  <span className="text-xl text-white/90 leading-relaxed pt-1.5">{action}</span>
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
                    <div key={index} className="flex flex-col items-center">
                      <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${item.color} opacity-90 border-2 border-white/30 backdrop-blur-sm flex items-center justify-center mb-4 relative z-10 hover:scale-110 transition-all shadow-xl`}>
                        <div className="text-center">
                          <div className="text-2xl mb-1">{item.phase}</div>
                          <div className="text-xs text-white/70">{item.month}</div>
                        </div>
                      </div>
                      <div className="text-xs text-white/80 text-center leading-relaxed px-2">{item.milestone}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="space-y-8 max-w-5xl mx-auto text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <p className="text-3xl text-white/90 leading-relaxed">
            Help turn Calgary from AI-curious into AI-compounding.
          </p>
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 opacity-30 blur-2xl rounded-3xl"></div>
            <p className="relative text-5xl tracking-tight bg-gradient-to-br from-white via-white to-white/80 bg-clip-text">
              Back Prairie Signal.
            </p>
          </div>
          
          {/* Logo at bottom */}
          <div className="pt-12 flex justify-center">
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