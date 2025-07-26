import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Building, FileText, GraduationCap, Filter, Calendar, Grid3X3, List , Shield} from 'lucide-react';

const Certifications = () => {
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [counters, setCounters] = useState({
    agreements: 0,
    certifications: 0,
    validations: 0,
    partnerships: 0
  });

  const certifications = [

  
    {
      id: 1,
      title: 'SCUML Certificate of Registration',
      category: 'certifications',
      year: 2025,
      type: 'Regulatory Compliance',
      description: 'Registered by SCUML, adhering to the Money Laundering Act, 2022.',
      impact: 'Demonstrates compliance with anti-money laundering regulations in Nigeria.',
      icon: Shield
    },


    {
      id: 2,
      title: 'Certificate of Incorporation',
      category: 'validations',
      year: 2024,
      type: 'Corporate Registration',
      description: 'Incorporated by CAC under Companies and Allied Matters Act 2020',
      impact: 'Establishes us as a legally recognized entity in Nigeria',
      icon: Building
    },
    {
      id: 3,
      title: 'Taxpayer Identification Number (TIN) Certificate',
      category: 'validations',
      year: 2024,
      type: 'Tax Registration',
      description: 'Received TIN 1073069781 from JTB on January 30, 2024',
      impact: 'Enables fulfillment of tax obligations in Nigeria.',
      icon: FileText
    },
   
  ];



  // const certifications = [
  //   {
  //     id: 1,
  //     title: 'Ministry of Infrastructure Partnership Agreement',
  //     category: 'agreements',
  //     year: 2023,
  //     type: 'Government Partnership',
  //     description: 'Comprehensive partnership agreement with the Ministry of Infrastructure for national development projects.',
  //     impact: 'Enables participation in $2.5B infrastructure program',
  //     icon: Building
  //   },
  //   {
  //     id: 2,
  //     title: 'PAIGAS Corporate Alliance Contract',
  //     category: 'agreements',
  //     year: 2023,
  //     type: 'Corporate Alliance',
  //     description: 'Strategic alliance with PAIGAS for energy infrastructure development across multiple regions.',
  //     impact: 'Access to renewable energy projects worth $500M',
  //     icon: FileText
  //   },
  //   {
  //     id: 3,
  //     title: 'Municipal Development Consortium',
  //     category: 'agreements',
  //     year: 2022,
  //     type: 'Municipal Contract',
  //     description: 'Lead contractor agreement for smart city development in 15 metropolitan areas.',
  //     impact: 'Managing urban development for 2.3M residents',
  //     icon: Building
  //   },
  //   {
  //     id: 4,
  //     title: 'International Sustainable Development Alliance',
  //     category: 'agreements',
  //     year: 2024,
  //     type: 'International Collaboration',
  //     description: 'Partnership with UN-Habitat for sustainable urban development initiatives.',
  //     impact: 'Contributing to global sustainability goals',
  //     icon: Award
  //   },
  //   {
  //     id: 5,
  //     title: 'SCUML Certificate of Registration',
  //     category: 'certifications',
  //     year: 2025,
  //     type: 'Regulatory Compliance',
  //     description: 'Registered by SCUML, adhering to the Money Laundering Act, 2022.',
  //     impact: 'Demonstrates compliance with anti-money laundering regulations in Nigeria.',
  //     icon: Shield
  //   },
  //   {
  //     id: 6,
  //     title: 'Project Management Professional (PMP)',
  //     category: 'certifications',
  //     year: 2022,
  //     type: 'Professional Credential',
  //     description: 'Advanced project management certification for large-scale infrastructure projects.',
  //     impact: 'Enhanced project delivery capabilities',
  //     icon: FileText
  //   },
  //   {
  //     id: 7,
  //     title: 'Strategic Planning Excellence Award',
  //     category: 'certifications',
  //     year: 2024,
  //     type: 'Recognition Award',
  //     description: 'Recognition for outstanding strategic planning in urban development projects.',
  //     impact: 'Industry leadership recognition',
  //     icon: Award
  //   },
  //   {
  //     id: 8,
  //     title: 'Certificate of Incorporation',
  //     category: 'validations',
  //     year: 2024,
  //     type: 'Corporate Registration',
  //     description: 'Incorporated by CAC under Companies and Allied Matters Act 2020',
  //     impact: 'Establishes us as a legally recognized entity in Nigeria',
  //     icon: Building
  //   },
  //   {
  //     id: 9,
  //     title: 'Taxpayer Identification Number (TIN) Certificate',
  //     category: 'validations',
  //     year: 2024,
  //     type: 'Tax Registration',
  //     description: 'Received TIN 1073069781 from JTB on January 30, 2024',
  //     impact: 'Enables fulfillment of tax obligations in Nigeria.',
  //     icon: FileText
  //   },
  //   {
  //     id: 10,
  //     title: 'Educational Program Accreditation',
  //     category: 'validations',
  //     year: 2022,
  //     type: 'Program Certification',
  //     description: 'Accredited training programs for next-generation engineers.',
  //     impact: 'Training 500+ engineers annually',
  //     icon: GraduationCap
  //   }
  // ];

  const filteredCertifications = certifications.filter(cert => 
    filter === 'all' || cert.category === filter
  );

  const sortedCertifications = filteredCertifications.sort((a, b) => b.year - a.year);

  useEffect(() => {
    const agreements = certifications.filter(c => c.category === 'agreements').length;
    const professionalCerts = certifications.filter(c => c.category === 'certifications').length;
    const validations = certifications.filter(c => c.category === 'validations').length;
    const partnerships = certifications.length;

    const animateCounter = (target: number, setter: (value: number) => void) => {
      let current = 0;
      const increment = target / 30;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 50);
    };

    setTimeout(() => {
      animateCounter(agreements, (value) => setCounters(prev => ({ ...prev, agreements: value })));
      animateCounter(professionalCerts, (value) => setCounters(prev => ({ ...prev, certifications: value })));
      animateCounter(validations, (value) => setCounters(prev => ({ ...prev, validations: value })));
      animateCounter(partnerships, (value) => setCounters(prev => ({ ...prev, partnerships: value })));
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-white">
      <Navigation />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-hero-pattern z-10"></div>
          <img 
            src="/alliance.jpeg"
            alt="Validated Excellence"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight animate-fade-in-up">
              VALIDATED <span className="text-gold-500">EXCELLENCE</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-inter mb-12 animate-fade-in-up delay-300">
              Our Credentials Speak for Themselves
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center animate-fade-in-up delay-500">
                <div className="text-3xl md:text-4xl font-bold text-gold-500 mb-2">
                  {counters.agreements}+
                </div>
                <div className="text-sm text-white/80 uppercase tracking-wider">
                  Deal Signatures
                </div>
              </div>
              <div className="text-center animate-fade-in-up delay-600">
                <div className="text-3xl md:text-4xl font-bold text-gold-500 mb-2">
                  {counters.certifications}+
                </div>
                <div className="text-sm text-white/80 uppercase tracking-wider">
                  Professional Certs
                </div>
              </div>
              <div className="text-center animate-fade-in-up delay-700">
                <div className="text-3xl md:text-4xl font-bold text-gold-500 mb-2">
                  {counters.validations}+
                </div>
                <div className="text-sm text-white/80 uppercase tracking-wider">
                  Institutional Validations
                </div>
              </div>
              <div className="text-center animate-fade-in-up delay-800">
                <div className="text-3xl md:text-4xl font-bold text-gold-500 mb-2">
                  {counters.partnerships}+
                </div>
                <div className="text-sm text-white/80 uppercase tracking-wider">
                  Total Partnerships
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-5 bg-gradient-to-br from-navy-900/20 via-transparent to-charcoal-900/30"></div>
      </section>

      <section className="py-8 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'all' 
                    ? 'bg-gold-500 text-white' 
                    : 'bg-white text-charcoal-700 hover:bg-gold-100'
                }`}
              >
                All Categories
              </button>
              <button
                onClick={() => setFilter('agreements')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'agreements' 
                    ? 'bg-gold-500 text-white' 
                    : 'bg-white text-charcoal-700 hover:bg-gold-100'
                }`}
              >
                Deal Signatures
              </button>
              <button
                onClick={() => setFilter('certifications')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'certifications' 
                    ? 'bg-gold-500 text-white' 
                    : 'bg-white text-charcoal-700 hover:bg-gold-100'
                }`}
              >
                Professional Certs
              </button>
              <button
                onClick={() => setFilter('validations')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'validations' 
                    ? 'bg-gold-500 text-white' 
                    : 'bg-white text-charcoal-700 hover:bg-gold-100'
                }`}
              >
                Institutional Validations
              </button>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-gold-500 text-white' 
                    : 'bg-white text-charcoal-700 hover:bg-gold-100'
                }`}
              >
                <Grid3X3 size={20} />
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'timeline' 
                    ? 'bg-gold-500 text-white' 
                    : 'bg-white text-charcoal-700 hover:bg-gold-100'
                }`}
              >
                <Calendar size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedCertifications.map((cert) => {
                const IconComponent = cert.icon;
                return (
                  <Card 
                    key={cert.id} 
                    className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm border-gold-200 hover:border-gold-400"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gold-100 rounded-lg group-hover:bg-gold-200 transition-colors">
                          <IconComponent className="w-6 h-6 text-gold-600" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="secondary" className="mb-2 bg-navy-100 text-navy-700">
                            {cert.year}
                          </Badge>
                          <CardTitle className="text-lg font-playfair text-navy-900 group-hover:text-gold-600 transition-colors">
                            {cert.title}
                          </CardTitle>
                          <CardDescription className="text-gold-600 font-medium">
                            {cert.type}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-charcoal-700 mb-4 leading-relaxed">
                        {cert.description}
                      </p>
                      <div className="bg-gold-50 p-4 rounded-lg border border-gold-200">
                        <p className="text-sm font-medium text-gold-800">
                          <strong>Impact:</strong> {cert.impact}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="space-y-8">
              {sortedCertifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div key={cert.id} className="flex gap-8 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold">
                        {cert.year}
                      </div>
                      {index < sortedCertifications.length - 1 && (
                        <div className="w-px h-16 bg-gold-200 mt-4"></div>
                      )}
                    </div>
                    <Card className="flex-1 group-hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gold-100 rounded-lg">
                            <IconComponent className="w-6 h-6 text-gold-600" />
                          </div>
                          <div className="flex-1">
                            <Badge variant="secondary" className="mb-2 bg-navy-100 text-navy-700">
                              {cert.type}
                            </Badge>
                            <h3 className="text-xl font-playfair text-navy-900 mb-2">
                              {cert.title}
                            </h3>
                            <p className="text-charcoal-700 mb-4">
                              {cert.description}
                            </p>
                            <div className="bg-gold-50 p-4 rounded-lg border border-gold-200">
                              <p className="text-sm font-medium text-gold-800">
                                <strong>Impact:</strong> {cert.impact}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;
