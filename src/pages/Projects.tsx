
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ExternalLink, Calendar, MapPin, Users } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Rural Communities Health Project (RCHP)",
      subtitle: "Revolutionizing Healthcare Access",
      image: "rchp.jpeg",
      description: "A comprehensive healthcare initiative bringing medical services directly to underserved rural communities across Nigeria.",
      stats: {
        communities: "1",
        lives: "150+",
        clinics: "3",
        year: "2025"
      },
      details: [
        "Mobile clinic deployment",
        "Community health worker training",
        "Telemedicine infrastructure",
        "Maternal & child health focus"
      ]
    },
    {
      title: "Youth Leaders Bureau (YLB Inc.)",
      subtitle: "Empowering Tomorrow's Leaders",
      image: "ylb.jpeg",
      description: "Strategic youth development program creating pathways for leadership and civic engagement across Africa.",
      stats: {
        communities: "30+",
        lives: "10,000+",
        clinics: "8",
        year: "2024"
      },
      details: [
        "Leadership training programs",
        "Civic engagement workshops",
        "Mentorship networks",
        "Economic empowerment initiatives"
      ]
    },
    {
      title: "Meridian Sovereign Platform",
      subtitle: "Digital Governance Innovation",
      image: "meridian.png",
      description: "Cutting-edge digital platform streamlining governance processes and enhancing citizen engagement.",
      stats: {
        communities: "100+",
        lives: "500,000+",
        clinics: "Digital",
        year: "2024"
      },
      details: [
        "Digital identity management",
        "E-governance solutions",
        "Citizen service portals",
        "Data analytics dashboard"
      ]
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
            src="projects.jpeg"
            alt="Project Portfolio"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-playfair font-bold text-white mb-6 sm:mb-8 animate-fade-in-up leading-tight">
            Our Empire's <span className="text-gold-500">Monuments</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 animate-fade-in-up delay-300 px-4">
            Transformative Projects Shaping Communities
          </p>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-16 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="font-mono text-sm text-charcoal-600 uppercase tracking-wider text-gold-500 mb-4">FEATURED PROJECTS</h3>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-900 mb-6 sm:mb-8">Impact at Scale</h2>
          </div>

          <div className="flex flex-col sm:flex-row justify-center mb-8 sm:mb-12 gap-4">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                  activeProject === index
                    ? 'bg-gold-500 text-white'
                    : 'bg-gray-100 text-charcoal-700 hover:bg-gold-100'
                }`}
              >
                {project.title.split(' ')[0]} {project.title.includes('(') ? project.title.split('(')[1] : project.title.split(' ')[1]}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-semibold text-navy-900 mb-3 sm:mb-4">
                {projects[activeProject].title}
              </h3>
              <h4 className="text-gold-500 text-lg sm:text-xl mb-4 sm:mb-6">{projects[activeProject].subtitle}</h4>
              <p className="font-inter text-base sm:text-lg text-charcoal-700 leading-relaxed mb-6 sm:mb-8">
                {projects[activeProject].description}
              </p>

              {/* Project Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gold-500">{projects[activeProject].stats.communities}</div>
                  <div className="text-sm text-charcoal-600">Communities</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gold-500">{projects[activeProject].stats.lives}</div>
                  <div className="text-sm text-charcoal-600">Lives Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gold-500">{projects[activeProject].stats.clinics}</div>
                  <div className="text-sm text-charcoal-600">Facilities</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gold-500">{projects[activeProject].stats.year}</div>
                  <div className="text-sm text-charcoal-600">Launch Year</div>
                </div>
              </div>

              {/* Project Details */}
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {projects[activeProject].details.map((detail, index) => (
                  <li key={index} className="flex items-center text-charcoal-700 text-sm sm:text-base">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3 flex-shrink-0"></div>
                    {detail}
                  </li>
                ))}
              </ul>

              <button className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                <span>View Full Case Study</span>
                <ExternalLink className="ml-2" size={20} />
              </button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Dashboard */}
      <section className="py-16 sm:py-20 md:py-32 bg-navy-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="font-mono text-sm text-charcoal-600 uppercase tracking-wider text-gold-500 mb-4">COLLECTIVE IMPACT</h3>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 sm:mb-8">Measuring Our Legacy</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gold-500 mb-2">5+</div>
              <div className="text-white/80 text-sm sm:text-base">Communities Reached</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gold-500 mb-2">180+</div>
              <div className="text-white/80 text-sm sm:text-base">Lives Transformed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gold-500 mb-2">1</div>
              <div className="text-white/80 text-sm sm:text-base">Active Facilities</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gold-500 mb-2">5</div>
              <div className="text-white/80 text-sm sm:text-base">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
