import brandLogo from 'figma:asset/f2b0aa5e7b92bb48302800c39968099a5c3498ec.png';

export function IntroSlide() {
  return (
    <div className="h-full flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated wave layers - NEW */}
      <div className="absolute inset-0 opacity-[0.15]">
        {/* Wave 1 - Slow, large amplitude */}
        <svg className="absolute w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          <path
            d="M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z"
            fill="url(#wave1Gradient)"
            opacity="0.3"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="
                M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z;
                M0,400 Q360,500 720,400 T1440,400 L1440,800 L0,800 Z;
                M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z
              "
            />
          </path>
          <defs>
            <linearGradient id="wave1Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Wave 2 - Medium speed */}
        <svg className="absolute w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          <path
            d="M0,300 Q360,200 720,300 T1440,300 L1440,800 L0,800 Z"
            fill="url(#wave2Gradient)"
            opacity="0.2"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="
                M0,300 Q360,200 720,300 T1440,300 L1440,800 L0,800 Z;
                M0,300 Q360,400 720,300 T1440,300 L1440,800 L0,800 Z;
                M0,300 Q360,200 720,300 T1440,300 L1440,800 L0,800 Z
              "
            />
          </path>
          <defs>
            <linearGradient id="wave2Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Wave 3 - Fast, subtle */}
        <svg className="absolute w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          <path
            d="M0,500 Q360,450 720,500 T1440,500 L1440,800 L0,800 Z"
            fill="url(#wave3Gradient)"
            opacity="0.15"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,500 Q360,450 720,500 T1440,500 L1440,800 L0,800 Z;
                M0,500 Q360,550 720,500 T1440,500 L1440,800 L0,800 Z;
                M0,500 Q360,450 720,500 T1440,500 L1440,800 L0,800 Z
              "
            />
          </path>
          <defs>
            <linearGradient id="wave3Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Enhanced ambient gradients with AI/tech feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/8 via-cyan-500/5 to-transparent animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-pink-500/8 via-purple-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/8 via-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      
      {/* Subtle grid pattern overlay for tech feel */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto px-16">
        {/* Pain-point lead-in - NEW */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-rose-500/10 border border-rose-500/20 shadow-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse"></div>
            <p className="text-base text-rose-200/90 tracking-wide">
              Most Calgary SMEs experiment with AI but never see real gains
            </p>
          </div>
        </div>

        {/* Logo Icon - Enhanced */}
        <div className="mb-16 relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-400/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative w-32 h-32 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-500">
            <img src={brandLogo} alt="Prairie Signal" className="w-20 h-20 object-contain" />
          </div>
        </div>

        {/* Main Heading with subtle gradient */}
        <div className="relative mb-8">
          <h1 className="text-[10rem] leading-[0.85] tracking-[-0.02em] bg-gradient-to-br from-white via-white to-white/90 bg-clip-text">
            Prairie Signal
          </h1>
        </div>

        {/* Decorative Line - Enhanced */}
        <div className="w-96 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-10 shadow-lg shadow-white/10"></div>

        {/* Subtitle - Sharpened value proposition from Gamma PDF */}
        <p className="text-3xl text-white/70 tracking-wide leading-relaxed mb-8 max-w-4xl">
          Transforming AI Potential into Business Results
        </p>

        {/* Tagline Badge - Enhanced with repositioned original tagline */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 animate-pulse shadow-lg shadow-pink-500/50"></div>
          <p className="text-sm text-white/60 tracking-wider uppercase group-hover:text-white/80 transition-colors">
            Closing the AI Usage Gap
          </p>
        </div>
      </div>
      
      {/* Bottom metadata - Enhanced */}
      <div className="absolute bottom-20 left-16 flex items-center gap-4 z-10 group">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20 group-hover:to-white/40 transition-colors"></div>
        <p className="text-xs text-white/40 tracking-[0.2em] uppercase group-hover:text-white/60 transition-colors">Calgary · 2025</p>
      </div>

      <div className="absolute bottom-20 right-16 flex items-center gap-4 z-10 group">
        <p className="text-xs text-white/40 tracking-[0.2em] uppercase group-hover:text-white/60 transition-colors">Investor Deck</p>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20 group-hover:to-white/40 transition-colors"></div>
      </div>
    </div>
  );
}