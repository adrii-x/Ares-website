
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';
import Carousel from "../components/Carousel";

const featuredMedia = [
  {
    type: "brief",
    title: "Meridian Platform Executive Brief",
    excerpt: "The Meridian Sovereign Platform is a sovereign-grade digital infrastructure purpose-built to decentralize data collection while centralizing insight, serving as a multi-sectoral tool for health, humanitarian aid, logistics, and policy governance.",
    readTime: "3 min read",
    date: "Dec 10, 2024",
    image: "meridian.png"
  },
  {
    type: "video",
    title: "RCHP: Community Engagement and Healthcare Outreach in Rural Nigeria",
    excerpt: "A visual insight into the Rural Communities Healthcare Project (RCHP), showcasing direct community engagement and healthcare delivery in rural Nigerian communities with PAIGAS and Tyche & Ares Ltd.",
    duration: "10 min",
    date: "Jan 15, 2025",
    image: "rchp img.png"
  },
  {
    type: "gallery",
    title: "Securing Partnerships at Political and Diplomatic Level",
    excerpt: "Key figures including Johannes Ofili (CEO/MD Tyche & Ares Ltd.), Ambassador Martin Uhomoibhi (President PAIGAS), Senator Ned Nwoko, and Sylvanus Fihke engaged in discussions to secure political and diplomatic partnerships.",
    count: "1 image",
    date: "July 20, 2025",
    image: "P&D level.jpeg"
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
