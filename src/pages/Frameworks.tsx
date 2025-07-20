
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Leaf, Scale, Equal, TrendingUp, Shield, Dumbbell, Lightbulb, DollarSign } from 'lucide-react';

const Frameworks = () => {
  const [activeSeedPanel, setActiveSeedPanel] = useState<number | null>(null);
  const [activeGatePanel, setActiveGatePanel] = useState<number | null>(null);

  const seedPillars = [
    {
      icon: Leaf,
      title: "Sustainability",
      subtitle: "Building for Future Generations",
      content: "Every project we undertake considers its environmental impact and long-term viability. We design systems that can be maintained, upgraded, and expanded by local communities for decades to come."
    },
    {
      icon: Scale,
      title: "Equity",
      subtitle: "Inclusion Through Project Access",
      content: "Fair distribution of resources and opportunities ensures that all community members can benefit from development initiatives, regardless of their socioeconomic status or background."
    },
    {
      icon: Equal,
      title: "Equality",
      subtitle: "Universal Civic Rights in Infrastructure",
      content: "Basic services and infrastructure should be accessible to all citizens as a fundamental right, not a privilege based on location or economic capacity."
    },
    {
      icon: TrendingUp,
      title: "Development",
      subtitle: "Targeted Growth Through Engineered Systems",
      content: "Strategic development that addresses root causes while building capacity for sustained growth and prosperity within local communities."
    }
  ];

  const gatePillars = [
    {
      icon: Shield,
      title: "Governance",
      subtitle: "Youth Inclusion & Civic Engagement",
      content: "Empowering young people to participate meaningfully in decision-making processes and civic responsibilities."
    },
    {
      icon: Dumbbell,
      title: "Athletics/Academics",
      subtitle: "Mind-Body Development",
      content: "Holistic education that combines intellectual growth with physical wellness and character development."
    },
    {
      icon: Lightbulb,
      title: "Talent",
      subtitle: "Skills-as-Structure Philosophy",
      content: "Treating human capabilities as the foundation of all development, with skills development as infrastructure investment."
    },
    {
      icon: DollarSign,
      title: "Entrepreneurship",
      subtitle: "Scalable Economic Models",
      content: "Creating sustainable economic opportunities that can grow and replicate across different communities and contexts."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-hero-pattern z-10"></div>
          <img 
            src="/thinkinng.webp"
            alt="Strategic Frameworks"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <h1 className="heading-primary text-white mb-8 animate-fade-in-up">
            Strategic Thought <span className="text-gold-500">Made Visible</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 animate-fade-in-up delay-300">
            The SEED Agenda & GATE Framework
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h3 className="text-caption text-gold-500 mb-4">SEED AGENDA</h3>
            <h2 className="heading-secondary mb-8">The Foundation of Our Philosophy</h2>
            <p className="text-xl text-charcoal-700 max-w-3xl mx-auto">
              Four interconnected principles that guide every decision and shape every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {seedPillars.map((pillar, index) => (
              <div
                key={index}
                className={`premium-card cursor-pointer transition-all duration-300 ${
                  activeSeedPanel === index ? 'scale-105 shadow-gold' : 'hover:shadow-lg'
                }`}
                onClick={() => setActiveSeedPanel(activeSeedPanel === index ? null : index)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mr-4">
                    <pillar.icon className="text-gold-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-navy-900">{pillar.title}</h4>
                    <p className="text-sm text-gold-600 font-mono uppercase tracking-wider">{pillar.subtitle}</p>
                  </div>
                </div>
                
                <div className={`transition-all duration-300 overflow-hidden ${
                  activeSeedPanel === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-charcoal-700 leading-relaxed pt-4 border-t border-gray-200">
                    {pillar.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h3 className="text-caption text-gold-500 mb-4">GATE FRAMEWORK</h3>
            <h2 className="heading-secondary mb-8">Youth Empowerment Architecture</h2>
            <p className="text-xl text-charcoal-700 max-w-3xl mx-auto">
              A comprehensive system for developing the next generation of African leaders and change-makers.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block relative">
                <div className="w-32 h-32 border-4 border-gold-500 rounded-full flex items-center justify-center bg-white shadow-lg">
                  <span className="text-2xl font-bold text-gold-600">GATE</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {gatePillars.map((pillar, index) => (
                <div
                  key={index}
                  className={`premium-card cursor-pointer transition-all duration-300 ${
                    activeGatePanel === index ? 'scale-105 shadow-gold' : 'hover:shadow-lg'
                  }`}
                  onClick={() => setActiveGatePanel(activeGatePanel === index ? null : index)}
                >
                  <div className="w-16 h-16 bg-gold-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <pillar.icon className="text-gold-600" size={28} />
                  </div>
                  <h4 className="text-xl font-semibold text-navy-900 text-center mb-2">{pillar.title}</h4>
                  <p className="text-sm text-gold-600 font-mono uppercase tracking-wider text-center mb-4">{pillar.subtitle}</p>
                  
                  <div className={`transition-all duration-300 overflow-hidden ${
                    activeGatePanel === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-charcoal-700 leading-relaxed text-sm pt-4 border-t border-gray-200">
                      {pillar.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h3 className="text-caption text-gold-500 mb-4">THEORY IN ACTION</h3>
            <h2 className="heading-secondary text-white mb-8">Case Studies & Success Stories</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card text-center">
              <h4 className="text-xl font-semibold text-white mb-4">Rural Health Transformation</h4>
              <p className="text-white/80 mb-6">SEED principles applied to healthcare delivery resulted in 300% improvement in community health outcomes.</p>
              <div className="text-3xl font-bold text-gold-500">300%</div>
              <div className="text-white/60 text-sm">Health Outcome Improvement</div>
            </div>

            <div className="glass-card text-center">
              <h4 className="text-xl font-semibold text-white mb-4">Youth Leadership Development</h4>
              <p className="text-white/80 mb-6">GATE framework implementation created 500+ youth-led enterprises across 15 states.</p>
              <div className="text-3xl font-bold text-gold-500">500+</div>
              <div className="text-white/60 text-sm">Youth Enterprises Created</div>
            </div>

            <div className="glass-card text-center">
              <h4 className="text-xl font-semibold text-white mb-4">Community Sustainability</h4>
              <p className="text-white/80 mb-6">Projects designed with SEED agenda show 95% long-term sustainability rate.</p>
              <div className="text-3xl font-bold text-gold-500">95%</div>
              <div className="text-white/60 text-sm">Sustainability Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Frameworks;
