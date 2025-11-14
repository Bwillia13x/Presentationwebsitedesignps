import { TrendingUp, Clock, Users, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

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
    { metric: 'Task Speed', before: 100, after: 135, improvement: 35 },
    { metric: 'Time Saved', before: 40, after: 50, improvement: 10 },
    { metric: 'Team Output', before: 100, after: 125, improvement: 25 }
  ];

  return (
    <div className="h-full flex flex-col px-16 py-12 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl"></div>
      
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="flex items-start gap-4 mb-6">
          <div>
            <div className="text-sm text-white/50 mb-2 uppercase tracking-wider">The Opportunity</div>
            <h1 className="text-[7rem] leading-[0.85] tracking-tight">
              What We Unlock When We Close the Gap
            </h1>
          </div>
        </div>

        <p className="text-2xl text-white/70 mb-12 max-w-5xl leading-relaxed">
          Closing the usage gap isn't a "nice-to-have" — it's a step-change in performance.
        </p>

        <div className="grid grid-cols-2 gap-12">
          <div className="grid grid-cols-1 gap-6">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden p-8 border border-white/20 shadow-xl hover:border-white/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-white/4 opacity-95"></div>
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                  
                  <div className="relative z-10 flex items-center gap-6">
                    <div className="w-14 h-14 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-white/90" />
                    </div>
                    <div className="flex-1">
                      <div className="text-5xl tracking-tight mb-1.5">{metric.stat}</div>
                      <div className="text-base text-white/90 mb-0.5">{metric.label}</div>
                      <div className="text-xs text-white/60">{metric.caption}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full h-full rounded-2xl bg-black/40 backdrop-blur-sm border border-white/20 p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white/80" />
                </div>
                <div className="text-xl text-white/90">Performance Impact</div>
              </div>
              <ResponsiveContainer width="100%" height="85%">
                <BarChart data={impactData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                  <XAxis 
                    dataKey="metric" 
                    stroke="rgba(255,255,255,0.4)"
                    tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.4)"
                    tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
                    label={{ value: 'Performance Index', angle: -90, position: 'insideLeft', style: { fill: 'rgba(255,255,255,0.6)', fontSize: 12 } }}
                  />
                  <Legend 
                    wrapperStyle={{ fontSize: '13px', paddingTop: '20px' }}
                    iconType="circle"
                  />
                  <Bar dataKey="before" fill="#fb923c" name="Before AI" radius={[6, 6, 0, 0]} opacity={0.9} />
                  <Bar dataKey="after" fill="#60a5fa" name="After AI" radius={[6, 6, 0, 0]} opacity={0.9} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}