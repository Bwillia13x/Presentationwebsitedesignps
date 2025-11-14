import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BriefSlide } from './components/BriefSlide';
import { ReferenceSlide } from './components/ReferenceSlide';
import { GoalsSlide } from './components/GoalsSlide';
import { IntroSlide } from './components/IntroSlide';
import { OfferSlide } from './components/OfferSlide';
import { UseCasesSlide } from './components/UseCasesSlide';
import { BusinessModelSlide } from './components/BusinessModelSlide';
import { ClosingSlide } from './components/ClosingSlide';
import { AppendixSlide } from './components/AppendixSlide';
import { Header } from './components/Header';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <IntroSlide key="intro" />,
    <BriefSlide key="brief" />,
    <ReferenceSlide key="reference" />,
    <GoalsSlide key="goals" />,
    <OfferSlide key="offer" />,
    <UseCasesSlide key="usecases" />,
    <BusinessModelSlide key="business" />,
    <ClosingSlide key="closing" />,
    <AppendixSlide key="appendix" />
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header currentSlide={currentSlide} totalSlides={slides.length} />
      
      <main className="h-screen pt-16">
        <div className="h-full transition-all duration-500 ease-in-out">
          {slides[currentSlide]}
        </div>
      </main>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-white/30 hover:scale-110 shadow-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex gap-2 px-5 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'w-10 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-lg shadow-pink-500/30' 
                  : 'w-2 bg-white/30 hover:bg-white/50 hover:w-4'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-white/30 hover:scale-110 shadow-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Keyboard hint */}
      <div className="fixed bottom-8 right-8 text-xs text-white/30 z-40 tracking-wide">
        Use ← → or Space to navigate
      </div>
    </div>
  );
}