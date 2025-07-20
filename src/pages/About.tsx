
import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Target, Compass, Crown } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const domeCanons = [
    {
      icon: Shield,
      title: "Doctrine",
      subtitle: "Civic Engineering & Project Sovereignty",
      description: "Our foundational belief that every project must serve the greater civic good while maintaining complete operational independence."
    },
    {
      icon: Target,
      title: "Operations", 
      subtitle: "Ground-up Logistics & Institutional Integration",
      description: "Seamless execution from conception to completion, ensuring every stakeholder is aligned and every outcome is measured."
    },
    {
      icon: Compass,
      title: "Metrics",
      subtitle: "Societal Impact Per Policy Unit Deployed", 
      description: "Quantifying transformation through precise measurement of how each initiative creates lasting societal change."
    },
    {
      icon: Crown,
      title: "Ethos",
      subtitle: "Honor, Structure, Legacy & Guardianship",
      description: "The values that guide every decision, ensuring our work stands as a testament to excellence for generations."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-hero-pattern z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
            alt="Corporate Architecture"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-playfair font-bold text-white mb-6 sm:mb-8 animate-fade-in-up leading-tight">
            The Empire's <span className="text-gold-500">Foundation</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 animate-fade-in-up delay-300 px-4">
            Built on Excellence, Driven by Vision
          </p>
        </div>
      </section>

      <section ref={sectionRef} className="py-16 sm:py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <div className={`bg-white rounded-2xl shadow-premium border border-gray-100 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h3 className="font-mono text-sm text-charcoal-600 uppercase tracking-wider text-gold-500 mb-4">MISSION</h3>
              <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-medium text-navy-900 leading-tight mb-6">Our Purpose</h2>
              <p className="font-inter text-base sm:text-lg text-charcoal-700 leading-relaxed mb-6">
                To design and implement civic solutions that address societal needs at scale — infrastructure, policy, health, culture, governance — with precision, clarity, and legacy in mind.
              </p>
              <p className="font-inter text-base sm:text-lg text-charcoal-700 leading-relaxed">
                We believe in the power of systematic thinking applied to human challenges, creating frameworks that transform communities while respecting their unique character and needs.
              </p>
            </div>

            <div className={`bg-white rounded-2xl shadow-premium border border-gray-100 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <h3 className="font-mono text-sm text-charcoal-600 uppercase tracking-wider text-gold-500 mb-4">VISION</h3>
              <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-medium text-navy-900 leading-tight mb-6">Our Destination</h2>
              <p className="font-inter text-base sm:text-lg text-charcoal-700 leading-relaxed mb-6">
                To be the definitive builder of Africa's future ecosystems — city by city, mind by mind, system by system.
              </p>
              <p className="font-inter text-base sm:text-lg text-charcoal-700 leading-relaxed">
                We envision a continent where infrastructure serves humanity, where policy becomes practice, and where every project contributes to a legacy of sustainable development and social progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-32 bg-navy-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="font-mono text-sm text-charcoal-600 uppercase tracking-wider text-gold-500 mb-4">D.O.M.E CANON</h3>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 sm:mb-8">Our Strategic Framework</h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
              The four pillars that guide every decision, every project, and every partnership we undertake.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {domeCanons.map((canon, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/20 text-center hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gold-500/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <canon.icon className="text-gold-500" size={window.innerWidth < 640 ? 24 : 32} />
                </div>
                <h4 className="text-xl sm:text-2xl font-playfair font-semibold text-white mb-2">{canon.title}</h4>
                <p className="text-gold-400 text-xs sm:text-sm mb-3 sm:mb-4 font-mono uppercase tracking-wider">{canon.subtitle}</p>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">{canon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-32 bg-gold-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-navy-900 italic leading-tight px-4">
            "Designing for posterity, managing with clarity, executing for sovereignty."
          </blockquote>
          <p className="text-navy-700 mt-6 sm:mt-8 text-lg sm:text-xl">— The Tyche & Ares Creed</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
