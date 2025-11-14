import { ArrowRight, TrendingUp, Sparkles, DollarSign, Users, Target, Handshake, TrendingDown, Award } from 'lucide-react';

export function BusinessModelSlide() {
  const pricingTiers = [
    {
      tier: 'Good',
      name: 'Sprint',
      price: '$5K–$18K',
      priceAnchor: 'Typical: $8K',
      description: 'One outcome, fixed scope, training.',
      details: 'Delivered in 2-4 weeks'
    },
    {
      tier: 'Better',
      name: 'Program',
      price: '$35K–$75K',
      priceAnchor: 'Typical: $50K',
      description: '2–3 linked outcomes, plus enablement.',
      featured: true,
      popularReason: '60% adoption rate',
      popularDetails: 'Bundles multiple workflows with training—higher ROI'
    },
    {
      tier: 'Best',
      name: 'Scale',
      price: '$150K–$300K+',
      priceAnchor: 'Typical: $200K',
      description: 'Multi-workstream roadmap with ongoing ops.',
      details: '6-12 month engagements'
    }
  ];

  const gtmSequence = [
    {
      step: '1',
      title: 'Beachhead',
      description: 'Secure 2-3 flagship Calgary SMB clients',
      focus: 'Proof-of-concept',
      metric: 'Q1-Q2 2025'
    },
    {
      step: '2',
      title: 'Playbooks',
      description: 'Codify frameworks into sector templates',
      focus: 'Repeatability',
      metric: 'Q3 2025'
    },
    {
      step: '3',
      title: 'Scale',
      description: 'Replicate across Calgary, expand regionally',
      focus: 'Growth',
      metric: 'Q4 2025+'
    }
  ];

  const salesChannels = [
    { channel: 'Local Chambers & Trade Associations', method: 'Partnership outreach' },
    { channel: 'Digital Marketing (LinkedIn, local SEO)', method: 'Content + case studies' },
    { channel: 'Referral Network', method: 'Client testimonials' }
  ];

  return (
    <div className="h-full flex flex-col px-16 py-12 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl"></div>
      
      <div className="flex-1 flex flex-col justify-center relative z-10">
        {/* Transitional hook - NEW */}
        <div className="mb-6 max-w-4xl">
          <p className="text-xl text-amber-300/80 italic leading-relaxed">
            → Now let's talk about how this becomes a sustainable business.
          </p>
        </div>

        <div className="flex items-start gap-4 mb-12">
          <div>
            <div className="text-sm text-white/50 mb-2 uppercase tracking-wider">Revenue & Growth</div>
            <h1 className="text-[7rem] leading-[0.85] tracking-tight">
              Business Model & Go-to-Market
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden p-10 border shadow-2xl transition-all duration-300 ${
                tier.featured 
                  ? 'border-white/30 scale-105 hover:scale-110' 
                  : 'border-white/20 hover:border-white/25 hover:scale-105'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/5 opacity-95"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
                backgroundSize: 'cover'
              }}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500">
                    <span className="text-2xl">{index + 1}</span>
                  </div>
                  {tier.featured && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span className="text-xs tracking-wide">Popular</span>
                    </div>
                  )}
                </div>
                <div className="text-xs text-white/70 mb-2 uppercase tracking-widest">{tier.tier}</div>
                <h3 className="text-5xl mb-4 tracking-tight">{tier.name}</h3>
                <div className="w-12 h-1 bg-white/40 rounded-full mb-6"></div>
                <div className="text-2xl mb-2 text-white/95">{tier.price}</div>
                <div className="text-sm mb-6 text-cyan-300/80">{tier.priceAnchor}</div>
                <p className="text-base text-white/85 leading-relaxed mb-4">{tier.description}</p>
                {tier.details && (
                  <div className="text-xs text-white/60 italic mb-4">{tier.details}</div>
                )}
                {tier.featured && (
                  <div className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-xs text-green-300 uppercase tracking-wider">{tier.popularReason}</span>
                    </div>
                    <p className="text-xs text-green-200/80 leading-relaxed">{tier.popularDetails}</p>
                  </div>
                )}
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full"></div>
            </div>
          ))}
        </div>

        {/* Pricing comparison to prize - NEW */}
        <div className="mb-10 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 shadow-lg max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-200/90">$1K prize → First client engagement</span>
            </div>
            <ArrowRight className="w-4 h-4 text-white/40" />
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-200/90">Avg $50K Program → 50x return</span>
            </div>
          </div>
        </div>

        {/* GTM Sequence - ENHANCED */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="text-sm text-white/60 uppercase tracking-wider">Go-to-Market Sequence</div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          
          {/* Hunter Hub credibility badge - NEW */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 shadow-lg">
              <Award className="w-5 h-5 text-amber-400" />
              <div>
                <span className="text-sm text-amber-200/90">Initial pilot powered by </span>
                <span className="text-sm text-amber-100 font-medium">Hunter Hub Business Playbook</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            {gtmSequence.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex flex-col items-center group flex-1">
                  <div className="w-full p-6 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 transition-all hover:scale-105 shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center">
                        <span className="text-lg">{item.step}</span>
                      </div>
                      <div className="text-2xl tracking-tight">{item.title}</div>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-white/50 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                        {item.focus}
                      </div>
                      <div className="text-xs text-cyan-300/80">{item.metric}</div>
                    </div>
                  </div>
                </div>
                {index < gtmSequence.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-white/40 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sales Channels & Partnerships - NEW */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="text-sm text-white/60 uppercase tracking-wider">Sales Channels & Unit Economics</div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Handshake className="w-5 h-5 text-pink-400" />
                <div className="text-base text-white/80 uppercase tracking-wider">Key Channels</div>
              </div>
              <div className="space-y-3">
                {salesChannels.map((item, index) => (
                  <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                        <Target className="w-4 h-4 text-pink-400" />
                      </div>
                      <div>
                        <div className="text-sm text-white/90 mb-1">{item.channel}</div>
                        <div className="text-xs text-white/60">{item.method}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <div className="text-base text-white/80 uppercase tracking-wider">Unit Economics</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 text-rose-400" />
                      <span className="text-sm text-white/80">Customer Acquisition Cost</span>
                    </div>
                    <span className="text-lg text-rose-300">~$2K</span>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-white/80">Lifetime Value (avg Program)</span>
                    </div>
                    <span className="text-lg text-green-300">~$50K</span>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-white/80">LTV : CAC Ratio</span>
                    </div>
                    <span className="text-2xl text-yellow-300">25:1</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-cyan-200/70 leading-relaxed">
                    Partnership-driven approach yields low CAC. Typical client retention: 18+ months with ongoing optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}