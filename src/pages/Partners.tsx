
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Building, Users, Globe, Handshake, Star, MapPin } from 'lucide-react';

const Partners = () => {
  const partnerCategories = [
    {
      title: "Government Partners",
      icon: Building,
      description: "Ministries and government agencies collaborating on national development initiatives",
      partners: [
        "Federal Ministry of Youth & Sports Development",
        "Ministry of Health",
        "Ministry of Education",
        "National Planning Commission",
        "FCT Administration"
      ]
    },
    {
      title: "Corporate Affiliates",
      icon: Handshake,
      description: "Private sector organizations supporting our mission and projects",
      partners: [
        "PAIGAS Energy Solutions",
        "Nigerian Infrastructure Corp",
        "Access Bank Plc",
        "MTN Nigeria",
        "Dangote Foundation"
      ]
    },
    {
      title: "Individual Collaborators",
      icon: Users,
      description: "Thought leaders and experts contributing their expertise to our initiatives",
      partners: [
        "Dr. Aisha Mohammed - Public Health Expert",
        "Prof. Emeka Okafor - Urban Planning",
        "Fatima Al-Rashid - Social Innovation",
        "Chief Adebayo Ogundimu - Community Development",
        "Dr. Sarah Kinuthia - Youth Empowerment"
      ]
    },
    {
      title: "Institutional Hosts",
      icon: Globe,
      description: "Universities and institutions providing platforms for our programs",
      partners: [
        "University of Abuja",
        "Lagos Business School",
        "African Development Bank",
        "Tony Elumelu Foundation",
        "African Union Youth Division"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Tyche & Ares has been instrumental in transforming our approach to youth development. Their GATE framework has created measurable impact across our programs.",
      author: "Hon. Sunday Dare",
      position: "Former Minister of Youth & Sports Development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      quote: "The SEED Agenda implementation in our rural health project exceeded all expectations. Their systematic approach to community engagement is unparalleled.",
      author: "Dr. Patience Oduya",
      position: "Director, Community Health Initiative",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
    },
    {
      quote: "Working with Tyche & Ares on infrastructure projects has shown us the power of civic architecture done right. They truly engineer society.",
      author: "Arch. Kunle Adeyemi",
      position: "Principal Partner, NLE Works",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    }
  ];

  const partnershipBenefits = [
    {
      icon: Star,
      title: "Strategic Alliance",
      description: "Join a network of organizations committed to transforming Africa through systematic development."
    },
    {
      icon: Globe,
      title: "Continental Reach",
      description: "Access to projects and initiatives spanning multiple African countries and communities."
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Connect with leading professionals, policymakers, and innovators across various sectors."
    },
    {
      icon: MapPin,
      title: "Local Impact",
      description: "Make a tangible difference in communities while building sustainable development models."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-hero-pattern z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Our Alliance"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <h1 className="heading-primary text-white mb-8 animate-fade-in-up">
            Our <span className="text-gold-500">Alliance</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 animate-fade-in-up delay-300">
            Strategic Partnerships That Drive Change
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h3 className="text-caption text-gold-500 mb-4">OUR PARTNERS</h3>
            <h2 className="heading-secondary mb-8">Building Together, Growing Together</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {partnerCategories.map((category, index) => (
              <div key={index} className="premium-card hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="text-gold-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-navy-900">{category.title}</h4>
                  </div>
                </div>
                
                <p className="text-charcoal-700 mb-6">{category.description}</p>
                
                <ul className="space-y-2">
                  {category.partners.map((partner, partnerIndex) => (
                    <li key={partnerIndex} className="flex items-center text-charcoal-600">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                      {partner}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h3 className="text-caption text-gold-500 mb-4">TESTIMONIALS</h3>
            <h2 className="heading-secondary mb-8">What Our Partners Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="premium-card">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h5 className="font-semibold text-navy-900">{testimonial.author}</h5>
                    <p className="text-sm text-charcoal-600">{testimonial.position}</p>
                  </div>
                </div>
                <blockquote className="text-charcoal-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h3 className="text-caption text-gold-500 mb-4">WHY PARTNER WITH US</h3>
            <h2 className="heading-secondary text-white mb-8">Partnership Benefits</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="glass-card text-center">
                <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <benefit.icon className="text-gold-500" size={28} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{benefit.title}</h4>
                <p className="text-white/80 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gold-500">
        <div className="container-premium text-center">
          <h2 className="heading-secondary text-navy-900 mb-8">Ready to Join Our Alliance?</h2>
          <p className="text-xl text-navy-700 mb-12 max-w-2xl mx-auto">
            Partner with us to create lasting impact across Africa through strategic development initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-navy-900 text-white hover:bg-navy-800 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              Become a Partner
            </button>
            <button className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
