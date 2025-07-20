
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const location = '15B, Borno Street, Area 10 Abuja, FCT, Nigeria'
  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Services', path: '/services' },
        { label: 'Flagship Projects', path: '/projects' },
        { label: 'Frameworks', path: '/frameworks' }
      ]
    },
    {
      title: 'Engagement',
      links: [
        { label: 'Media & Insights', path: '/media' },
        { label: 'Partners', path: '/partners' },
        { label: 'Careers', path: '/careers' },
        { label: 'Volunteer Program', path: '/careers#volunteer' }
      ]
    },
    {
      title: 'Frameworks',
      links: [
        { label: 'SEED Agenda', path: '/frameworks#seed' },
        { label: 'GATE Framework', path: '/frameworks#gate' },
        { label: 'D.O.M.E Canon', path: '/about#dome' },
        { label: 'Impact Metrics', path: '/frameworks#metrics' }
      ]
    }
  ];

  return (
  <footer className="bg-navy-950 text-white relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-pattern opacity-5"></div>
    {/* Gold Accent Line */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient"></div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      {/* Main Footer Content */}
      <div className="py-12 sm:py-16 flex flex-col  gap-12 lg:gap-16">

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Branding & Motto (Left) */}
        <div className="flex-1 min-w-0">
             <div className="flex items-center space-x-3 mb-4">
              <div className="w-25 h-25 rounded-xl flex  flex-shrink-0 ">
                <img
                  src="/theme color(2).png"
                  alt="Tyche & Ares Logo"
                  className="w-[100px] h-[100px] object-contain rounded-xl md:ml-3"
                  draggable={false}
                />
              </div>
            </div>
          {/* Company Motto */}
          <div className="space-y-3 sm:space-y-4">
            <p className="font-playfair text-lg sm:text-xl text-gold-400 italic">
              "Manibus Nostris Mundum Mutabimus"
            </p>
            <p className="text-white/80 text-base sm:text-lg">
              With Our Hands, We Will Change the World
            </p>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              A civic architecture and strategic project management firm dedicated to 
              engineering Africa's future through the SEED Agenda and GATE Framework.
            </p>
          </div>
        </div>
        <div className="flex-1 min-w-0 mt-8 md:mt-0 md:pl-8">
          <div className="space-y-4 ">
            <h4 className="font-semibold text-gold-400 md:text-left text-center  mb-3 sm:mb-4 mt-5">Get In Touch</h4>
            <div className="flex flex-col items-center">

              <div className="flex flex-row md:flex-col items-center md:items-start justify-center md:justify-start gap-3 md:gap-4 w-full">
              <a 
                href="mailto:tycheandaresltd@gmail.com" 
                className="flex items-center space-x-2 text-white/80 hover:text-gold-400 transition-colors group text-xs sm:text-sm md:text-base w-full md:w-auto"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                <span className="break-all whitespace-normal">{`tycheandaresltd@gmail.com`}</span>
              </a>
              <a 
                href="tel:+2348103570156" 
                className="flex items-center space-x-2 text-white/80 hover:text-gold-400 transition-colors group text-xs sm:text-sm md:text-base w-full md:w-auto"
              >
                <Phone size={16} className="group-hover:scale-110 transition-transform flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                <span className="whitespace-normal">{`+234 810 357 0156`}</span>
              </a>
              <a
                  href={`https://www.google.com/maps/search/?api=1&query=${location}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 text-white/80 text-xs sm:text-sm md:text-base w-full md:w-auto hover:text-gold-400 transition-colors"
                >
                  <MapPin size={16} className="mt-1 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                  <span className="whitespace-normal">{location}</span>
                </a>
            </div>
          

            </div>

          </div>
        </div>
      </div>
        {/* Navigation Links */}
        <div className="flex-1 flex flex-col justify-center">
  <div className="grid grid-cols-3 gap-4 sm:gap-8">
    {footerSections.map((section, index) => (
      <div key={index} className="space-y-3 sm:space-y-4 m-auto">
        <h4 className="font-semibold text-gold-400 text-xs xs:text-sm sm:text-base md:text-lg  sm:text-left">{section.title}</h4>
        <ul className="space-y-2 sm:space-y-3">
          {section.links.map((link, linkIndex) => (
            <li key={linkIndex}>
              <Link 
                to={link.path}
                className="text-white/70 hover:text-gold-400 transition-colors flex items-center group text-xs xs:text-sm sm:text-base md:text-lg"
                onClick={() => {
                  if (!link.path.includes('#')) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}

              >
                <span>{link.label}</span>
                <ArrowRight 
                  size={12} 
                  className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0 sm:w-4 sm:h-4" 
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
      </div>

      {/* Bottom Section */}
      <div className="py-6 sm:py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-white/60 text-xs sm:text-sm text-center md:text-left  whitespace-nowrap">
          © 2024 Tyche & Ares Ltd. All rights reserved.
        </div>
        <div className="flex flex-row justify-around md:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm w-full ">
          <Link to="/privacy" className="text-white/60 hover:text-gold-400 transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-white/60 hover:text-gold-400 transition-colors">
            Terms of Service
          </Link>
          <Link to="/sitemap" className="text-white/60 hover:text-gold-400 transition-colors">
            Sitemap
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
};

export default Footer;
