
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <IntroSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
