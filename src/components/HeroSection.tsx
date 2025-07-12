
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';




const companyName = [
  { char: 'T', delay: 60 },
  { char: 'Y', delay: 60 },
  { char: 'C', delay: 60 },
  { char: 'H', delay: 60 },
  { char: 'E', delay: 60 },
  { char: ' ', delay: 0 },
  { char: '&', delay: 200, className: 'mx-1 sm:mx-2 lg:mx-4 text-gold-500' },
  { char: ' ', delay: 0 },
  { char: 'A', delay: 60 },
  { char: 'R', delay: 60 },
  { char: 'E', delay: 60 },
  { char: 'S', delay: 60 },
  { char: ' ', delay: 0 },
  { char: 'L', delay: 60, className: 'ml-1 sm:ml-2 lg:ml-4 text-gold-500' },
  { char: 'T', delay: 60, className: 'text-gold-500' },
  { char: 'D', delay: 60, className: 'text-gold-500' }
];


const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [typedName, setTypedName] = useState('');
  const [nameIndex, setNameIndex] = useState(0);

  const heroTexts = [
    "We don't just build structures — we engineer society.",
    "Designing for posterity, managing with clarity.",
    "With our hands, we will change the world."
  ];


  useEffect(() => {
    if (nameIndex < companyName.length) {
      const timeout = setTimeout(() => {
        setTypedName((prev) => prev + companyName[nameIndex].char);
        setNameIndex((prev) => prev + 1);
      }, companyName[nameIndex].delay);
      return () => clearTimeout(timeout);
    }
  }, [nameIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
        setIsTyping(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
        setTimeout(() => {
          setShowScrollIndicator(false);
        }, 2000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {showScrollIndicator && (
          <div className="absolute bottom-12 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-50">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
            </div>
          </div>
        )}


      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-gold-500/90 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-4 sm:mb-6 lg:mb-8">
       <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-playfair font-bold text-white mb-2 sm:mb-4 leading-none tracking-tight">
            {companyName.map((item, idx) => (
              <span
                key={idx}
                className={item.className || ''}
                style={{
                  visibility: idx < nameIndex ? 'visible' : 'hidden',
                  transition: 'visibility 0.1s'
                }}
              >
                {item.char}
              </span>
            ))}
            <span className="inline-block w-2 h-8 align-middle bg-white animate-pulse ml-1" style={{visibility: nameIndex < companyName.length ? 'visible' : 'hidden'}}></span>
          </h1>
          
          <p className="font-playfair text-lg sm:text-xl md:text-2xl lg:text-3xl text-gold-400 italic mb-4 sm:mb-6 lg:mb-8 animate-fade-in-up delay-1100 px-2">
            "Manibus Nostris Mundum Mutabimus"
          </p>
          
          <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up delay-1200 px-2">
            With Our Hands, We Will Change the World
          </p>
        </div>

        <div className="mb-6 sm:mb-8 lg:mb-12 h-12 sm:h-16 lg:h-20 flex items-center justify-center px-2">
          <h2 className={`text-[15px] sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white transition-opacity duration-500 text-center ${
            isTyping ? 'opacity-100' : 'opacity-0'
          }`}>
            <span className="text-typing">
              {heroTexts[currentTextIndex]}
            </span>
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center animate-fade-in-up delay-1300 px-6 max-w-4xl mx-auto">
          <button className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-white font-semibold px-4   sm: min-w-0 lg:px-8 py-3 lg:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-gold hover:shadow-gold-lg relative overflow-hidden group text-sm sm:text-base">
            <span className="flex items-center justify-center relative z-10">
              <span className="hidden sm:inline">Explore Our Projects</span>
              <span className="sm:hidden">Our Projects</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </span>
          </button>
          
          <button className="w-full sm:w-auto border-2 border-gold-500 text-white hover:bg-gold-500 hover:border-transparent hover:text-navy-900 font-semibold px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 group text-sm sm:text-base">
            <span className="flex items-center justify-center">
              <span className="hidden sm:inline">Join the SEED Agenda</span>
              <span className="sm:hidden">SEED Agenda</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </span>
          </button>
          
          <button className="w-full sm:w-auto text-white hover:text-gold-600 font-semibold px-3 sm:px-4 py-2 transition-all duration-300 relative group flex items-center justify-center text-sm sm:text-base">
            <Play className="mr-2 group-hover:scale-110 transition-transform" size={18} />
            <span className="hidden sm:inline">Watch Our Story</span>
            <span className="sm:hidden">Our Story</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-5 bg-gradient-to-br from-navy-900/20 via-transparent to-charcoal-900/30"></div>
    </section>
  );
};

export default HeroSection;
