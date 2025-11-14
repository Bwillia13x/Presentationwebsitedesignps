import { TrendingUp, Clock, Users, Target, Smile, Brain, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip, LabelList } from 'recharts';

export function GoalsSlide() {
  const metrics = [
    {
      stat: '10–40%',
      label: 'performance uplift',
      caption: 'on complex tasks with an AI copilot.',
      icon: TrendingUp
    },
    {
      stat: '2+',
      label: 'hours saved weekly',
      caption: 'per employee.',
      icon: Clock
    },
    {
      stat: '1–3',
      label: 'FTEs equivalent',
      caption: 'for a 10–20 person team.',
      icon: Users
    }
  ];

  const impactData = [
    { metric: 'Task Speed', before: 100, after: 135, improvement: '+35%' },
    { metric: 'Hours Saved/Week', before: 40, after: 50, improvement: '+2.5hrs' },
    { metric: 'Team Capacity', before: 100, after: 125, improvement: '+25%' }
  ];

  return (
    <div className="h-full flex flex-col px-16 py-12 relative overflow-hidden">
      {/* Enhanced background accents with animation */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-green-400 to-blue-400 opacity-30 blur-xl animate-float"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 15}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="flex-1 flex flex-col justify-center relative z-10">
        {/* Transitional hook - NEW */}
        <div className="mb-6 max-w-4xl">
          <p className="text-xl text-green-300/80 italic leading-relaxed">
            → So what happens when Calgary SMBs actually close this gap?
          </p>
        </div>

        <div className="flex items-start gap-4 mb-6">
          <div>
            <div className="text-sm text-white/50 mb-2 uppercase tracking-wider">The Opportunity</div>
            <h1 className="text-[7rem] leading-[0.85] tracking-tight">
              What We Unlock When We Close the Gap
            </h1>
          </div>
        </div>

        <p className="text-2xl text-white/70 mb-8 max-w-5xl leading-relaxed">
          Closing the usage gap isn't a "nice-to-have" — it's a step-change in performance.
        </p>

        {/* Assumptions callout - ENHANCED */}
        <div className="mb-10 p-5 rounded-xl bg-blue-500/10 border border-blue-500/20 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-start gap-3">
            <Brain className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 animate-pulse" style={{ animationDuration: '3s' }} />
            <div>
              <div className="text-sm text-blue-200/90 mb-1">Methodology</div>
              <p className="text-xs text-blue-200/70 leading-relaxed">
                Impact estimates based on: MIT Sloan Study (2023) on AI-assisted workers; Prairie Signal pilot projects with 12 Calgary SMBs (Q3-Q4 2024); McKinsey analysis of GPT-4 productivity gains.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-8">
          <div className="grid grid-cols-1 gap-6">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden p-8 border border-white/20 shadow-xl hover:border-white/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.4 + index * 0.15}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-white/4 opacity-95"></div>
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                  
                  <div className="relative z-10 flex items-center gap-6">
                    <div className="w-14 h-14 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <IconComponent className="w-7 h-7 text-white/90" />
                    </div>
                    <div className="flex-1">
                      <div className="text-5xl tracking-tight mb-1.5 font-bold">{metric.stat}</div>
                      <div className="text-base text-white/90 mb-0.5">{metric.label}</div>
                      <div className="text-xs text-white/60">{metric.caption}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full h-full rounded-2xl bg-black/40 backdrop-blur-sm border border-white/20 hover:border-white/25 hover:shadow-2xl hover:shadow-blue-500/10 p-10 shadow-xl transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.85s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white/80" />
                </div>
                <div className="text-xl text-white/90">Performance Impact</div>
              </div>
              <ResponsiveContainer width="100%" height="78%">
                <BarChart data={impactData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                  <XAxis 
                    dataKey="metric" 
                    stroke="rgba(255,255,255,0.4)"
                    tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 13 }}
                    label={{ value: 'Metric', position: 'insideBottom', offset: -20, fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.4)"
                    tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 13 }}
                    label={{ value: 'Performance Index', angle: -90, position: 'insideLeft', fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.95)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '12px',
                      fontSize: '13px',
                      padding: '12px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                    }}
                    formatter={(value, name, props) => {
                      if (name === 'Before AI' || name === 'After AI') {
                        return [value, name];
                      }
                      return [value, name];
                    }}
                    labelFormatter={(label) => label}
                  />
                  <Legend 
                    wrapperStyle={{ fontSize: '13px', paddingTop: '15px' }}
                    iconType="circle"
                  />
                  <Bar dataKey="before" fill="#fb923c" name="Before AI" radius={[6, 6, 0, 0]} opacity={0.9} animationDuration={1500} animationBegin={200}>
                    <LabelList dataKey="before" position="top" fill="rgba(255,255,255,0.6)" fontSize={11} />
                  </Bar>
                  <Bar dataKey="after" fill="#60a5fa" name="After AI" radius={[6, 6, 0, 0]} opacity={0.9} animationDuration={1500} animationBegin={600}>
                    <LabelList dataKey="improvement" position="top" fill="#22d3ee" fontSize={12} fontWeight="bold" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              {/* Chart note - NEW */}
              <div className="mt-2 text-[10px] text-white/30 text-center">
                Performance measured relative to baseline (Before AI = 100)
              </div>
            </div>
          </div>
        </div>

        {/* Intangible benefits section - NEW */}
        <div className="grid grid-cols-3 gap-4">
          <div className="group flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/15 transition-all">
            <Smile className="w-8 h-8 text-green-400 flex-shrink-0" />
            <div>
              <div className="text-sm text-green-200 mb-0.5">Customer Satisfaction</div>
              <div className="text-xs text-green-200/70">Faster response, better quality</div>
            </div>
          </div>
          
          <div className="group flex items-center gap-3 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/15 transition-all">
            <Brain className="w-8 h-8 text-purple-400 flex-shrink-0" />
            <div>
              <div className="text-sm text-purple-200 mb-0.5">Better Decision-Making</div>
              <div className="text-xs text-purple-200/70">Data-driven insights at scale</div>
            </div>
          </div>
          
          <div className="group flex items-center gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/15 transition-all">
            <Award className="w-8 h-8 text-amber-400 flex-shrink-0" />
            <div>
              <div className="text-sm text-amber-200 mb-0.5">Employee Morale</div>
              <div className="text-xs text-amber-200/70">Less busywork, more strategic work</div>
            </div>
          </div>
        </div>

        {/* Citations - NEW */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <p className="text-xs text-white/40 leading-relaxed">
            Sources: MIT Sloan Management Review (2023); McKinsey Global Institute on Generative AI (2024); Prairie Signal internal pilot data
          </p>
        </div>
      </div>
    </div>
  );
}