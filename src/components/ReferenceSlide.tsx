import { Building2, Users2, Clock, Zap, MapPin, Target, DollarSign, TrendingUp } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

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
    { icon: Clock, value: '60+ hrs/wk', label: 'owners work—little time for strategy' },
    { icon: Zap, value: '<6 months', label: 'ROI expectation for new tech' }
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
        {/* Transitional hook - NEW */}
        <div className="mb-6 max-w-4xl">
          <p className="text-xl text-cyan-300/80 italic leading-relaxed">
            → This gap represents a major opportunity in Calgary's business landscape.
          </p>
        </div>

        <div className="flex items-start gap-4 mb-16">
          <div>
            <div className="text-sm text-white/50 mb-2 uppercase tracking-wider">The Market</div>
            <h1 className="text-[7rem] leading-[0.85] tracking-tight">
              Why Calgary's Small Businesses Are the Wedge
            </h1>
          </div>
        </div>

        <p className="text-2xl text-white/70 mb-8 max-w-4xl leading-relaxed">
          Calgary is a small-business city — and the perfect starting point.
        </p>

        {/* TAM/SAM/SOM Market Sizing - NEW */}
        <div className="mb-10 grid grid-cols-3 gap-4">
          <div className="group relative rounded-2xl overflow-hidden p-5 border border-cyan-500/30 shadow-xl bg-cyan-500/5 hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-5 h-5 text-cyan-400" />
              <div className="text-xs text-cyan-300/80 uppercase tracking-wider">TAM</div>
            </div>
            <div className="text-3xl text-cyan-200 mb-1">$480M</div>
            <div className="text-xs text-cyan-200/70">All Calgary SMBs (40K businesses × $12K avg)</div>
          </div>
          
          <div className="group relative rounded-2xl overflow-hidden p-5 border border-purple-500/30 shadow-xl bg-purple-500/5 hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5 text-purple-400" />
              <div className="text-xs text-purple-300/80 uppercase tracking-wider">SAM</div>
            </div>
            <div className="text-3xl text-purple-200 mb-1">$144M</div>
            <div className="text-xs text-purple-200/70">AI-ready sectors (12K businesses in target verticals)</div>
          </div>
          
          <div className="group relative rounded-2xl overflow-hidden p-5 border border-pink-500/30 shadow-xl bg-pink-500/5 hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-pink-400" />
              <div className="text-xs text-pink-300/80 uppercase tracking-wider">SOM (Year 1)</div>
            </div>
            <div className="text-3xl text-pink-200 mb-1">$1.2M</div>
            <div className="text-xs text-pink-200/70">Initial 100 clients × $12K average project</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-10">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group relative rounded-3xl overflow-hidden p-6 border border-white/20 shadow-xl hover:border-white/30 hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-white/4 opacity-95"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-all duration-500">
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
            <div className="w-full h-[340px] rounded-3xl bg-white/5 backdrop-blur-md border border-white/20 hover:border-white/25 p-8 shadow-2xl transition-all duration-300">
              <div className="text-lg text-white/80 mb-4 text-center">Business Size Distribution</div>
              <ResponsiveContainer width="100%" height="82%">
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
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.9)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              {/* Data source - NEW */}
              <div className="mt-2 text-[10px] text-white/30 text-center">
                Source: Statistics Canada, Business Counts (2024)
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap mb-6">
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

        {/* Citations section - NEW */}
        <div className="pt-4 border-t border-white/10">
          <p className="text-xs text-white/40 leading-relaxed">
            Sources: City of Calgary Economic Development (2024); Statistics Canada Business Register; Alberta Small Business Profile (2024)
          </p>
        </div>
      </div>
    </div>
  );
}