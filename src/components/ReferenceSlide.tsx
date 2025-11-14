import { Building2, Users2, Clock, Zap, MapPin } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

export function ReferenceSlide() {
  const sectors = [
    'Healthcare',
    'Trades',
    'Professional Services',
    'Local Retail'
  ];

  const stats = [
    { icon: Building2, value: '40,000+', label: 'total businesses' },
    { icon: Users2, value: '>90%', label: 'are "small" (1–49 employees)' },
    { icon: Clock, value: 'Time-poor', label: 'owners stretched thin' },
    { icon: Zap, value: 'Fast', label: 'digital responsiveness expected' }
  ];

  const businessSizeData = [
    { name: '1-4 employees', value: 65, color: '#f472b6' },
    { name: '5-19 employees', value: 25, color: '#60a5fa' },
    { name: '20-49 employees', value: 8, color: '#a78bfa' },
    { name: '50+ employees', value: 2, color: '#fb923c' }
  ];

  return (
    <div className="h-full flex flex-col px-16 py-12 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl"></div>
      
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="flex items-start gap-4 mb-6">
          <div>
            <div className="text-sm text-white/50 mb-2 uppercase tracking-wider">The Market</div>
            <h1 className="text-[7rem] leading-[0.85] tracking-tight">
              Why Calgary's Small Businesses Are the Wedge
            </h1>
          </div>
        </div>

        <p className="text-2xl text-white/70 mb-12 max-w-4xl leading-relaxed">
          Calgary is a small-business city — and the perfect starting point.
        </p>

        <div className="grid grid-cols-2 gap-12 mb-10">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group relative rounded-3xl overflow-hidden p-6 border border-white/20 shadow-xl hover:border-white/30 hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-white/4 opacity-95"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white/90" />
                    </div>
                    <div className="text-3xl mb-2 tracking-tight">{stat.value}</div>
                    <div className="text-xs text-white/70 leading-relaxed">{stat.label}</div>
                  </div>
                  
                  {/* Subtle shimmer */}
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-tr-full"></div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full h-[340px] rounded-3xl bg-white/5 backdrop-blur-md border border-white/20 p-8 shadow-2xl">
              <div className="text-lg text-white/80 mb-4 text-center">Business Size Distribution</div>
              <ResponsiveContainer width="100%" height="88%">
                <PieChart>
                  <Pie
                    data={businessSizeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={95}
                    paddingAngle={2}
                    dataKey="value"
                    label={(entry) => `${entry.value}%`}
                    labelLine={false}
                  >
                    {businessSizeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend 
                    wrapperStyle={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}
                    iconType="circle"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="text-sm text-white/50 mr-2">Key Sectors:</div>
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-sm text-white/80 hover:bg-white/10 hover:border-white/30 transition-all shadow-lg"
            >
              {sector}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}