
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, Clock, Calendar } from 'lucide-react';





export  function ContactMapSection() {
  const location = '15B, Borno Street, Area 10 Abuja, FCT, Nigeria';
  
  return (
    <div className="bg-white rounded-2xl shadow-premium">
      <div className="relative aspect-[16/7] rounded-lg overflow-hidden">
        {/* Simple Google Maps link */}
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(location)}&output=embed`}
          allowFullScreen
          loading="lazy"
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </div>
  );
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "tycheandaresltd@gmail.com",
      description: "Send us a message anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+234 810 357 0156",
      description: "Available during business hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "15B, Borno Street, Area 10",
      description: "Abuja, FCT, Nigeria"
    }
  ];

  const subjects = [
    "General Inquiry",
    "Partnership Opportunity",
    "Project Consultation",
    "Career Inquiry",
    "Media/Press",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-hero-pattern z-10"></div>
          <img 
            src="/contact us.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <h1 className="heading-primary text-white mb-8 animate-fade-in-up">
            Connect with <span className="text-gold-500">Excellence</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 animate-fade-in-up delay-300">
            Let's Build the Future Together
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-caption text-gold-500 mb-4">GET IN TOUCH</h3>
              <h2 className="heading-tertiary mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-navy-900 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your inquiry or how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full group"
                >
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </button>
              </form>

        <div className=" mx-0">
          <div className="text-center mt-10 ">

          </div>

          <div className="bg-white rounded-2xl  shadow-premium">
            <ContactMapSection/>
          </div>
        </div>

            </div>

            <div>
              <h3 className="text-caption text-gold-500 mb-4">CONTACT INFORMATION</h3>
              <h2 className="heading-tertiary mb-8">Reach Out to Us</h2>
              
              <div className="space-y-10">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-gold-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">{info.title}</h4>
                      {
                      (info.details.includes('tycheandaresltd@gmail.com'))?(
                        <a href={`mailto:${info.details}`} className="text-gold-500 hover:underline">
                          {info.details}
                        </a>):
                      (info.details.includes('+234')) ?
                        (<a href={`tel:${info.details}`} className="text-gold-500 hover:underline">
                          {info.details}
                        </a>)
                       :
                        <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${info.details}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold-500 hover:underline">
                          {info.details}
                        </a>
                        
                      
                    }
                      <p className="text-sm text-charcoal-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-14 p-6 bg-gray-50 rounded-2xl">
                <h4 className="font-semibold text-navy-900 mb-4 flex items-center">
                  <Clock className="mr-2 text-gold-500" size={20} />
                  Business Hours
                </h4>
                <div className="space-y-2 text-sm text-charcoal-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM WAT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM WAT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-gold-50 rounded-2xl">
                <h4 className="font-semibold text-navy-900 mb-4 flex items-center">
                  <Calendar className="mr-2 text-gold-500" size={20} />
                  Schedule a Meeting
                </h4>
                <p className="text-sm text-charcoal-700 mb-4">
                  Prefer a face-to-face discussion? Schedule a consultation with our team.
                </p>
                <button className="btn-secondary text-sm">
                  Book Consultation
                </button>
              </div>
            </div>


          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default Contact;
