
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';
import Carousel from "../components/Carousel";

const featuredMedia = [
  {
    type: "article",
    title: "The Future of Civic Architecture in Africa",
    excerpt: "How strategic infrastructure design can transform entire communities and create lasting social change.",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
  },
  {
    type: "video",
    title: "Dialogue with Minister of Youth Development",
    excerpt: "Strategic conversation on youth empowerment and national development priorities.",
    duration: "45 min",
    date: "Dec 8, 2024",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
  },
  {
    type: "gallery",
    title: "RCHP Project Documentation",
    excerpt: "Visual journey through our rural healthcare transformation initiative.",
    count: "24 images",
    date: "Dec 12, 2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <IntroSection />
        <Carousel items={featuredMedia} />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
