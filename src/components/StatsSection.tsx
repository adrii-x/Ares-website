
import React, { useEffect, useRef, useState } from 'react';

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    communities: 0,
    partners: 0,
    years: 0
  });

  const finalStats = {
    projects: 50,
    communities: 100000,
    partners: 25,
    years: 5
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounters();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounters = () => {
    const duration = 2000; 
    const steps = 60; 
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        projects: Math.floor(finalStats.projects * progress),
        communities: Math.floor(finalStats.communities * progress),
        partners: Math.floor(finalStats.partners * progress),
        years: Math.floor(finalStats.years * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(finalStats);
      }
    }, interval);
  };

  const formatNumber = (num: number) => {
    if (num >= 100000) return `${(num / 1000).toFixed(0)}K`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const stats = [
    {
      number: counters.projects,
      suffix: '+',
      label: 'Projects Delivered',
      description: 'Across infrastructure, policy, and community development'
    },
    {
      number: counters.communities,
      suffix: '+',
      label: 'Lives Impacted',
      description: 'Through strategic civic interventions',
      format: true
    },
    {
      number: counters.partners,
      suffix: '+',
      label: 'Strategic Partners',
      description: 'Government, corporate, and institutional alliances'
    },
    {
      number: counters.years,
      suffix: '',
      label: 'Years of Excellence',
      description: 'Building Africa\'s future, one project at a time'
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      {/* Gold Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-gradient"></div>

      <div className="container-premium relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-white mb-6">
            Engineering Impact
            <span className="text-gold-400"> At Scale</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our numbers tell the story of transformation — from individual lives to entire communities, 
            we measure success by the lasting change we create.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center group ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass-card hover:bg-white/10 text-center">
                <div className="mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-gold-400 block">
                    {stat.format ? formatNumber(stat.number) : stat.number}
                    <span className="text-gold-500">{stat.suffix}</span>
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">
                  {stat.label}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <p className="text-xl text-white/90 mb-8">
            Ready to be part of Africa's transformation story?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              View Our Projects
            </button>
            <button className="btn-secondary">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
