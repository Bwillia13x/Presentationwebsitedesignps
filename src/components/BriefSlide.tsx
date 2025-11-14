import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { TrendingUp, AlertTriangle } from 'lucide-react';

export function BriefSlide() {
  const gapData = [
    { year: '2020', capability: 20, usage: 18 },
    { year: '2021', capability: 35, usage: 22 },
    { year: '2022', capability: 55, usage: 28 },
    { year: '2023', capability: 80, usage: 35 },
    { year: '2024', capability: 95, usage: 42 },
    { year: '2025', capability: 100, usage: 48 }
  ];

  return (
    <div className="h-full flex flex-col px-16 py-12 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl"></div>
      
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="flex items-start gap-4 mb-6">
          <div>
            <div className="text-sm text-white/50 mb-2 uppercase tracking-wider">The Problem</div>
            <h1 className="text-[8rem] leading-[0.85] tracking-tight">
              The AI Capability–Usage Gap
            </h1>
          </div>
        </div>

        <p className="text-2xl text-white/70 mb-4 max-w-4xl leading-relaxed">
          AI capability is exploding — but usage inside small businesses lags far behind.
        </p>

        {/* Quantified data callout - NEW */}
        <div className="mb-12 flex items-center gap-6">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 shadow-lg">
            <AlertTriangle className="w-5 h-5 text-cyan-400" />
            <div>
              <span className="text-2xl text-cyan-200">52%</span>
              <span className="text-base text-cyan-200/80 ml-2">of SMEs now use AI tools</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-rose-500/10 border border-rose-500/20 shadow-lg">
            <AlertTriangle className="w-5 h-5 text-rose-400" />
            <div>
              <span className="text-2xl text-rose-200">12%</span>
              <span className="text-base text-rose-200/80 ml-2">see measurable productivity gains</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {[
                'Employees experiment with AI but lack structured guidance and governance.',
                'No standard workflows, templates, or metrics to measure real operational uplift.'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                    <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors">{index + 1}</span>
                  </div>
                  <p className="text-lg text-white/80 leading-relaxed pt-1 group-hover:text-white/95 transition-colors">{item}</p>
                </div>
              ))}
            </div>
            
            {/* Three Core Barriers - NEW */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="text-sm text-white/60 mb-4 uppercase tracking-wider">Three Core Barriers</div>
              <div className="space-y-3">
                {[
                  { title: 'Unclear strategic vision', icon: '🎯' },
                  { title: 'Operational integration challenges', icon: '⚙️' },
                  { title: 'Difficulty measuring ROI', icon: '📊' }
                ].map((barrier, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/15 transition-all">
                    <span className="text-lg">{barrier.icon}</span>
                    <span className="text-sm text-white/80">{barrier.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Citation - MOVED */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-white/40 leading-relaxed">
                Sources: McKinsey Global Survey on AI (2024); Calgary Chamber of Commerce SMB Technology Report (2024)
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full h-[420px] rounded-3xl bg-white/5 backdrop-blur-md border border-white/20 hover:border-white/25 p-8 shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-white/60" />
                  <div className="text-lg text-white/80">The Divergence (2020-2025)</div>
                </div>
                {/* Gap indicator - NEW */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20">
                  <div className="text-xl text-rose-300">52pt</div>
                  <div className="text-xs text-rose-300/80">gap</div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height="82%">
                <LineChart data={gapData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="year" 
                    stroke="rgba(255,255,255,0.5)"
                    style={{ fontSize: '12px' }}
                    label={{ value: 'Year', position: 'insideBottom', offset: -10, fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.5)"
                    style={{ fontSize: '12px' }}
                    label={{ value: 'Index (normalized)', angle: -90, position: 'insideLeft', fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.9)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Legend 
                    wrapperStyle={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', paddingTop: '10px' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="capability" 
                    stroke="#22d3ee" 
                    strokeWidth={3}
                    name="AI Capability Growth"
                    dot={{ fill: '#22d3ee', r: 6, strokeWidth: 2, stroke: '#0e7490' }}
                    activeDot={{ r: 8 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="usage" 
                    stroke="#fb7185" 
                    strokeWidth={3}
                    name="SMB Adoption & Usage"
                    dot={{ fill: '#fb7185', r: 6, strokeWidth: 2, stroke: '#be123c' }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              {/* Data source note - NEW */}
              <div className="mt-2 text-[10px] text-white/30 text-center">
                Projected trend based on industry adoption patterns (McKinsey, Gartner, 2024)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}