
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Briefcase, GraduationCap, Heart, ArrowRight, MapPin, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const opportunities = [
    {
      category: 'executive',
      title: "Senior Project Manager",
      department: "Strategic Operations",
      location: "Abuja, Nigeria",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead large-scale civic architecture projects from conception to completion, managing cross-functional teams and stakeholder relationships."
    },
    {
      category: 'operational',
      title: "Community Engagement Specialist",
      department: "Social Innovation",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "3+ years",
      description: "Design and implement community outreach programs, ensuring local participation in development initiatives."
    },
    {
      category: 'internship',
      title: "GATE Framework Intern",
      department: "Youth Development",
      location: "Multiple Locations",
      type: "Internship",
      experience: "Fresh Graduate",
      description: "Support implementation of youth empowerment programs while gaining hands-on experience in civic project management."
    },
    {
      category: 'volunteer',
      title: "SEED Volunteer Coordinator",
      department: "Community Outreach",
      location: "IDP Camps",
      type: "Volunteer",
      experience: "Any Level",
      description: "Coordinate volunteer activities in internally displaced persons camps, focusing on health and education initiatives."
    },
    {
      category: 'operational',
      title: "Data Analytics Specialist",
      department: "Strategic Intelligence",
      location: "Remote/Abuja",
      type: "Full-time",
      experience: "2+ years",
      description: "Analyze project impact data and develop metrics for measuring societal transformation outcomes."
    },
    {
      category: 'executive',
      title: "Director of Partnerships",
      department: "Strategic Alliances",
      location: "Abuja, Nigeria",
      type: "Full-time",
      experience: "8+ years",
      description: "Build and maintain strategic partnerships with government agencies, NGOs, and private sector organizations."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Opportunities', icon: Briefcase },
    { id: 'executive', label: 'Executive Roles', icon: Users },
    { id: 'operational', label: 'Operational Roles', icon: Briefcase },
    { id: 'internship', label: 'Internships', icon: GraduationCap },
    { id: 'volunteer', label: 'Volunteer', icon: Heart }
  ];

  const filteredOpportunities = selectedCategory === 'all' 
    ? opportunities 
    : opportunities.filter(opp => opp.category === selectedCategory);

  const applicationSteps = [
    {
      step: 1,
      title: "Application",
      description: "Submit your application with CV and cover letter"
    },
    {
      step: 2,
      title: "Screening",
      description: "Initial review and phone/video screening"
    },
    {
      step: 3,
      title: "Assessment", 
      description: "Skills assessment and case study presentation"
    },
    {
      step: 4,
      title: "Interview",
      description: "Final interviews with team leads and leadership"
    },
    {
      step: 5,
      title: "Onboarding",
      description: "Welcome to the Tyche & Ares family!"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-hero-pattern z-10"></div>
          <img 
            src="/career.webp"
            alt="Join Our Team"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <h1 className="heading-primary text-white mb-8 animate-fade-in-up">
            Become a <span className="text-gold-500">Vanguard Architect</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 animate-fade-in-up delay-300">
            Help Build Africa
          </p>
          <p className="text-xl text-white/80 mb-12 animate-fade-in-up delay-500">
            Join a movement that's engineering the future of African society
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h3 className="text-caption text-gold-500 mb-4">CAREER OPPORTUNITIES</h3>
            <h2 className="heading-secondary mb-8">Find Your Purpose With Us</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gold-500 text-white'
                    : 'bg-gray-100 text-charcoal-700 hover:bg-gold-100'
                }`}
              >
                <category.icon className="mr-2" size={20} />
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredOpportunities.map((opportunity, index) => (
              <div key={index} className="premium-card hover-lift group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {opportunity.title}
                    </h4>
                    <p className="text-gold-600 font-medium">{opportunity.department}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    opportunity.category === 'executive' ? 'bg-navy-100 text-navy-700' :
                    opportunity.category === 'operational' ? 'bg-blue-100 text-blue-700' :
                    opportunity.category === 'internship' ? 'bg-green-100 text-green-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {opportunity.type}
                  </span>
                </div>

                <p className="text-charcoal-700 mb-6 leading-relaxed">
                  {opportunity.description}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-charcoal-600 mb-6">
                  <div className="flex items-center">
                    <MapPin className="mr-1" size={14} />
                    {opportunity.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1" size={14} />
                    {opportunity.experience}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button className="text-gold-600 font-semibold hover:text-gold-700 transition-colors">
                    View Details
                  </button>
                  <ArrowRight className="text-gold-500 group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h3 className="text-caption text-gold-500 mb-4">APPLICATION PROCESS</h3>
            <h2 className="heading-secondary mb-8">Your Journey to Join Us</h2>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gold-500 transform -translate-y-1/2 hidden lg:block"></div>
            <div className="grid lg:grid-cols-5 gap-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl relative z-10">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-navy-900 mb-2">{step.title}</h4>
                  <p className="text-charcoal-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h3 className="text-caption text-gold-500 mb-4">WHY TYCHE & ARES</h3>
            <h2 className="heading-secondary text-white mb-8">Be Part of Something Greater</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card text-center">
              <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="text-gold-500" size={28} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">Meaningful Impact</h4>
              <p className="text-white/80">Work on projects that transform communities and change lives across Africa.</p>
            </div>

            <div className="glass-card text-center">
              <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <GraduationCap className="text-gold-500" size={28} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">Continuous Learning</h4>
              <p className="text-white/80">Access to world-class training, mentorship, and professional development opportunities.</p>
            </div>

            <div className="glass-card text-center">
              <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="text-gold-500" size={28} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">Diverse Team</h4>
              <p className="text-white/80">Join a team of passionate professionals from diverse backgrounds united by a common vision.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gold-500">
        <div className="container-premium text-center">
          <h2 className="heading-secondary text-navy-900 mb-8">Ready to Build the Future?</h2>
          <p className="text-xl text-navy-700 mb-12 max-w-2xl mx-auto">
            Take the first step towards joining Africa's premier civic architecture and strategic project management firm.
          </p>
            <Link to="/contact" 
                  onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
          <button className="bg-navy-900 text-white hover:bg-navy-800 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
            Apply Now
          </button>
            </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
