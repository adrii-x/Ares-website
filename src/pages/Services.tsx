
import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Building2, Settings, Network, Users, Zap, CheckCircle } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: Building2,
      title: "Civic Architecture",
      description: "Human-centered infrastructure and urban regeneration",
      details: [
        "Urban planning and development",
        "Community infrastructure design", 
        "Sustainable building solutions",
        "Public space optimization"
      ]
    },
    {
      icon: Settings,
      title: "Strategic Project Management",
      description: "Framework to funding orchestration",
      details: [
        "End-to-end project delivery",
        "Stakeholder coordination",
        "Resource optimization", 
        "Timeline management"
      ]
    },
    {
      icon: Network,
      title: "Institutional Systems Design",
      description: "Enterprise operating systems for civic grid",
      details: [
        "Organizational restructuring",
        "Process optimization",
        "Digital transformation",
        "Governance frameworks"
      ]
    },
    {
      icon: Users,
      title: "Social Innovation",
      description: "SEED Agenda implementation",
      details: [
        "Community engagement programs",
        "Social impact measurement",
        "Inclusive development strategies",
        "Participatory planning"
      ]
    },
    {
      icon: Zap,
      title: "Strategic Youth Initiatives", 
      description: "GATE Framework empowerment",
      details: [
        "Youth leadership development",
        "Skills training programs",
        "Mentorship networks",
        "Entrepreneurship support"
      ]
    }
  ];

  const processSteps = [
    { title: "Discovery", description: "Understanding your vision and requirements" },
    { title: "Strategy", description: "Developing comprehensive implementation plans" },
    { title: "Design", description: "Creating detailed blueprints and frameworks" },
    { title: "Execute", description: "Delivering projects with precision and excellence" },
    { title: "Monitor", description: "Ensuring long-term success and impact" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-hero-pattern z-10"></div>
          <img 
            src="/services.jpeg"
            alt="Strategic Services"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-playfair font-bold text-white mb-6 sm:mb-8 animate-fade-in-up leading-tight">
            What We <span className="text-gold-500">Architect</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 animate-fade-in-up delay-300 px-4">
            Comprehensive Solutions for Societal Transformation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={sectionRef} className="py-16 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="font-mono text-sm text-charcoal-600 uppercase tracking-wider text-gold-500 mb-4">OUR SERVICES</h3>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-900 mb-6 sm:mb-8">Engineering Excellence Across Every Domain</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-premium border border-gray-100 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gold-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                  <service.icon className="text-gold-600 group-hover:text-white transition-colors duration-300" size={window.innerWidth < 640 ? 24 : 32} />
                </div>
                <h4 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-navy-900 leading-tight mb-3 sm:mb-4">{service.title}</h4>
                <p className="font-inter text-base sm:text-lg text-charcoal-700 leading-relaxed mb-4 sm:mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-charcoal-600 text-sm sm:text-base">
                      <CheckCircle className="text-gold-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 sm:py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="font-mono text-sm text-charcoal-600 uppercase tracking-wider text-gold-500 mb-4">OUR PROCESS</h3>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-900 mb-6 sm:mb-8">From Vision to Reality</h2>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gold-500 transform -translate-y-1/2 hidden lg:block"></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white font-bold text-lg sm:text-xl relative z-10">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-navy-900 mb-2 text-base sm:text-lg">{step.title}</h4>
                  <p className="text-charcoal-600 text-sm sm:text-base">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
