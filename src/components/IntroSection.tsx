
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { Building2, Users, Target, Globe } from 'lucide-react';

const IntroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const features = [
    {
      icon: Building2,
      title: "Civic Architecture",
      description: "Human-centered infrastructure and urban regeneration"
    },
    {
      icon: Target,
      title: "Strategic Management", 
      description: "Framework to funding orchestration"
    },
    {
      icon: Users,
      title: "Social Innovation",
      description: "SEED Agenda implementation"
    },
    {
      icon: Globe,
      title: "Systems Design",
      description: "Enterprise operating systems for civic grid"
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div>
              <h3 className="text-caption text-gold-500 mb-4">WHO WE ARE</h3>
              <h2 className="heading-secondary mb-6">
                Engineering the Future of
                <span className="text-gradient"> African Society</span>
              </h2>
              <div className="w-24 h-1 bg-gold-500 mb-8"></div>
            </div>

            <div className="space-y-6">
              <p className="text-body">
                Tyche & Ares is a <strong>civic architecture and strategic project management firm</strong> that designs, governs, and delivers purpose-driven systems across communities, cities, and countries.
              </p>
              
              <p className="text-body">
                Backed by the <strong>SEED Agenda</strong> and powered through the <strong>GATE Framework</strong>, we are engineering a new socio-economic era where infrastructure meets humanity, where policy becomes practice, and where vision transforms into legacy.
              </p>

              <p className="text-body">
                We don't just build structures — we architect the systems that will define Africa's next century of growth, governance, and greatness.
              </p>
            </div>

            <div className="pt-6">
              <Link  to="/projects" 
                      onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
                      className="btn-primary">
                Discover Our Vision
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`grid sm:grid-cols-2  grid-cols-1 gap-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`premium-card hover-lift ${isVisible ? 'animate-scale-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-gold-600" size={24} />
                </div>
                <h4 className="font-semibold text-navy-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-charcoal-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
