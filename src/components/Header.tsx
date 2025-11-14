import brandLogo from 'figma:asset/f2b0aa5e7b92bb48302800c39968099a5c3498ec.png';

interface HeaderProps {
  currentSlide: number;
  totalSlides: number;
}

export function Header({ currentSlide, totalSlides }: HeaderProps) {
  const slideNames = [
    'Introduction',
    'The Problem',
    'The Market',
    'The Opportunity',
    'The Solution',
    'Real Examples',
    'Revenue & Growth',
    'The Ask'
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-16 py-6 flex items-center justify-between backdrop-blur-md bg-black/60 border-b border-white/5 shadow-2xl">
      <div className="flex items-center gap-3 group">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 group-hover:border-white/30 flex items-center justify-center p-1.5 transition-all duration-300 group-hover:scale-110 shadow-lg">
          <img src={brandLogo} alt="Prairie Signal" className="w-full h-full object-contain" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm tracking-wide">Prairie Signal</span>
          <span className="text-[8px] align-super text-white/50">™</span>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
        <span className="text-xs text-white/50 tracking-wide">{slideNames[currentSlide]}</span>
        <div className="w-1 h-1 rounded-full bg-white/30"></div>
        <span className="text-xs text-white/60 font-mono tracking-wider">{String(currentSlide + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}</span>
      </div>

      <div className="text-xs text-white/40 max-w-xs text-right leading-relaxed tracking-wide">
        Closing the AI usage gap for Calgary's small businesses
      </div>
    </header>
  );
}