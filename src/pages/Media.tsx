
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, FileText, Mic, Image, Calendar, Clock, ArrowRight } from 'lucide-react';

const Media = () => {
  const [activeTab, setActiveTab] = useState('insights');

  const mediaContent = {
    insights: [
      {
        type: 'article',
        title: "The Future of Civic Architecture in Africa",
        excerpt: "How strategic infrastructure design can transform entire communities and create lasting social change.",
        readTime: "8 min read",
        date: "Dec 15, 2024",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
      },
      {
        type: 'whitepaper',
        title: "SEED Agenda Implementation Guide",
        excerpt: "A comprehensive framework for implementing sustainable, equitable development projects across Africa.",
        readTime: "25 min read",
        date: "Nov 28, 2024",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        type: 'brief',
        title: "Youth Leadership in Governance",
        excerpt: "Executive brief on integrating young voices into policy-making and civic decision processes.",
        readTime: "12 min read",
        date: "Nov 10, 2024",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      }
    ],
    interviews: [
      {
        type: 'video',
        title: "Dialogue with Minister of Youth Development",
        excerpt: "Strategic conversation on youth empowerment and national development priorities.",
        duration: "45 min",
        date: "Dec 8, 2024",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
      },
      {
        type: 'podcast',
        title: "The Future of African Cities",
        excerpt: "Discussion with urban planning experts on sustainable city development.",
        duration: "32 min",
        date: "Nov 22, 2024",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c"
      }
    ],
    visuals: [
      {
        type: 'gallery',
        title: "RCHP Project Documentation",
        excerpt: "Visual journey through our rural healthcare transformation initiative.",
        count: "24 images",
        date: "Dec 12, 2024",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f"
      },
      {
        type: 'presentation',
        title: "GATE Framework Presentation",
        excerpt: "Comprehensive overview of our youth empowerment methodology.",
        count: "36 slides",
        date: "Nov 30, 2024",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      }
    ]
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'article':
      case 'whitepaper':
      case 'brief':
        return FileText;
      case 'video':
        return Play;
      case 'podcast':
        return Mic;
      case 'gallery':
      case 'presentation':
        return Image;
      default:
        return FileText;
    }
  };

  const tabs = [
    { id: 'insights', label: 'Insights', icon: FileText },
    { id: 'interviews', label: 'Interviews', icon: Mic },
    { id: 'visuals', label: 'Visuals', icon: Image }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-hero-pattern z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
            alt="Media Center"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <h1 className="heading-primary text-white mb-8 animate-fade-in-up">
            Our <span className="text-gold-500">Voice</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 animate-fade-in-up delay-300">
            Thought Leadership & Strategic Insights
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-premium">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gold-500 text-white'
                    : 'bg-gray-100 text-charcoal-700 hover:bg-gold-100'
                }`}
              >
                <tab.icon className="mr-2" size={20} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="masonry-grid">
            {mediaContent[activeTab as keyof typeof mediaContent].map((item, index) => {
              const IconComponent = getIcon(item.type);
              return (
                <div key={index} className="premium-card hover-lift group cursor-pointer">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-navy-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <IconComponent className="text-white" size={32} />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-charcoal-600">
                      <span className="bg-gold-100 text-gold-700 px-2 py-1 rounded text-xs font-semibold uppercase">
                        {item.type}
                      </span>
                      <div className="flex items-center">
                        <Calendar className="mr-1" size={14} />
                        {item.date}
                      </div>
                    </div>

                    <h3 className="font-semibold text-navy-900 text-lg group-hover:text-gold-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-charcoal-700 text-sm leading-relaxed">
                      {item.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-charcoal-600">
                        <Clock className="mr-1" size={14} />
                        {'readTime' in item ? item.readTime : 'duration' in item ? item.duration : item.count}
                      </div>
                      <ArrowRight className="text-gold-500 group-hover:translate-x-1 transition-transform" size={16} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-premium text-center">
          <h3 className="text-caption text-gold-500 mb-4">STAY INFORMED</h3>
          <h2 className="heading-secondary text-white mb-8">Get Our Latest Insights</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Subscribe to receive our thought leadership content, project updates, and strategic insights directly in your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;
