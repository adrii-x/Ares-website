import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";


type MediaItem = {
  type: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readTime?: string;
  duration?: string;
  count?: string;
};

const CARD_GAP = 24; // px gap between cards

const FeaturedCarousel = ({ items }: { items: MediaItem[] }) => {
  const [scrollX, setScrollX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(320); // default card width
  const [visibleCards, setVisibleCards] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive card width and visible cards
  useEffect(() => {
    // const updateCardWidth = () => {
    //   const width = window.innerWidth;
    //   if (width < 640) {
    //     setCardWidth(220);
    //     setVisibleCards(1.5);
    //   } else if (width < 1024) {
    //     setCardWidth(280);
    //     setVisibleCards(2.5);
    //   } else {
    //     setCardWidth(320);
    //     setVisibleCards(3);
    //   }
    // };
    // updateCardWidth();
    // window.addEventListener("resize", updateCardWidth);
    // return () => window.removeEventListener("resize", updateCardWidth);


  setCardWidth(320);
  setVisibleCards(3);
  }, []);

  // Duplicate items for infinite scroll effect
  const duplicatedItems = [...items, ...items, ...items];

  // Auto-scroll marquee effect
  useEffect(() => {
    let animationId: number;
    if (!isPaused) {
      const animate = () => {
        setScrollX((prev) => {
          const maxScroll =
            cardWidth * items.length + CARD_GAP * items.length;
          if (prev >= maxScroll) {
            return 0;
          }
          return prev + 1.2;
        });
        animationId = requestAnimationFrame(animate);
      };
      animationId = requestAnimationFrame(animate);
    }
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isPaused, cardWidth, items.length]);

  // Pause auto-scroll on interaction
  const pauseAutoScroll = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 3000);
  };

  // Arrow navigation
  const handleNav = (direction: "left" | "right") => {
    pauseAutoScroll();
    setScrollX((prev) => {
      const maxScroll =
        cardWidth * items.length + CARD_GAP * items.length;
      if (direction === "left") {
        return prev - cardWidth - CARD_GAP < 0
          ? maxScroll - cardWidth - CARD_GAP
          : prev - cardWidth - CARD_GAP;
      } else {
        return prev + cardWidth + CARD_GAP > maxScroll
          ? 0
          : prev + cardWidth + CARD_GAP;
      }
    });
  };

  // Swipe handlers
  let startX = 0;
  const handleTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) handleNav("left");
    if (startX - endX > 50) handleNav("right");
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  return (
    <section className="w-full py-12 bg-gold-50">
      <div className="max-w-6xl mx-auto px-4">
        <Link
          to="/media"
          className="block w-fit mx-auto mb-6"
        >
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6 text-center hover:text-gold-500 cursor-pointer">
          Media Highlights
        </h2>
        </Link>
        <div className="relative flex items-center justify-center">

        
          {/* Left Arrow */}
          <button
            onClick={() => handleNav("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gold-100 hover:bg-gold-400 text-gold-700 rounded-full w-10 h-10 flex items-center justify-center shadow transition z-10"
            aria-label="Previous"
          >
            <ArrowLeft size={22} />
          </button>

          {/* Carousel Track */}
          <div
            ref={containerRef}
            className="overflow-hidden w-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              maxWidth: `${cardWidth * visibleCards + CARD_GAP * (visibleCards - 1)}px`,
            }}
          >
            <div
              className="flex transition-none mb-6"
              style={{
                transform: `translateX(-${scrollX}px)`,
                gap: `${CARD_GAP}px`,
                width: `${duplicatedItems.length * cardWidth + duplicatedItems.length * CARD_GAP}px`,
              }}
            >
              {duplicatedItems.map((item, idx) => (
                <button
                  key={idx}
                  className="bg-white rounded-xl shadow-lg border border-gold-100 flex flex-col items-center px-4 py-6 hover:scale-101 hover:-translate-y-1"
                  style={{
                    minWidth: `${cardWidth}px`,
                    maxWidth: `${cardWidth}px`,
                    flex: "0 0 auto",
                  }} 
                >
                  <div className="w-full h-40 sm:h-48 rounded-lg overflow-hidden mb-4 bg-gold-50 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full space-y-2">
                    <div className="flex items-center justify-between text-xs text-gold-700 mb-2">
                      <span className="bg-gold-100 px-2 py-1 rounded font-semibold uppercase">
                        {item.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-navy-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-700 text-sm leading-relaxed mb-2">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gold-700">
                      <Clock size={14} />
                      {"readTime" in item
                        ? item.readTime
                        : "duration" in item
                        ? item.duration
                        : item.count}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleNav("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gold-100 hover:bg-gold-400 text-gold-700 rounded-full w-10 h-10 flex items-center justify-center shadow transition z-10"
            aria-label="Next"
          >
            <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;