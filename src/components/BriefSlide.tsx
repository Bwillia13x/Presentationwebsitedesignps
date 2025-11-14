import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
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
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl"></div>
      
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="flex items-start gap-4 mb-6">
          <div>
            <div className="text-sm text-white/50 mb-2 uppercase tracking-wider">The Problem</div>
            <h1 className="text-[8rem] leading-[0.85] tracking-tight">
              The AI Capability–Usage Gap
            </h1>
          </div>
        </div>

        <p className="text-2xl text-white/70 mb-12 max-w-4xl leading-relaxed">
          AI capability is exploding — but usage inside small businesses lags far behind.
        </p>

        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <div className="space-y-5">
              {[
                'Employees are experimenting but lack guidance and structure.',
                'No standard workflows, templates, or guardrails.',
                'No metrics to track meaningful workflow improvements.',
                'Big gap between "AI hype" and day-to-day operational uplift.'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                    <span className="text-sm text-white/50">{index + 1}</span>
                  </div>
                  <p className="text-lg text-white/80 leading-relaxed pt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full h-[380px] rounded-3xl bg-white/5 backdrop-blur-md border border-white/20 p-8 shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-6">
                <TrendingUp className="w-5 h-5 text-white/60" />
                <div className="text-lg text-white/80">The Divergence</div>
              </div>
              <ResponsiveContainer width="100%" height="85%">
                <LineChart data={gapData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="year" 
                    stroke="rgba(255,255,255,0.5)"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.5)"
                    style={{ fontSize: '12px' }}
                  />
                  <Legend 
                    wrapperStyle={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="capability" 
                    stroke="#60a5fa" 
                    strokeWidth={3}
                    name="AI Capability"
                    dot={{ fill: '#60a5fa', r: 5 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="usage" 
                    stroke="#f472b6" 
                    strokeWidth={3}
                    name="SMB Usage"
                    dot={{ fill: '#f472b6', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}