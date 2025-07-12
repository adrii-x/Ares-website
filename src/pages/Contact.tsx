
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, Clock, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
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
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-hero-pattern z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
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

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
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
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-caption text-gold-500 mb-4">CONTACT INFORMATION</h3>
              <h2 className="heading-tertiary mb-8">Reach Out to Us</h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-gold-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">{info.title}</h4>
                      <p className="text-lg text-charcoal-700 mb-1">{info.details}</p>
                      <p className="text-sm text-charcoal-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
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

              <div className="mt-8 p-6 bg-gold-50 rounded-2xl">
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

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h3 className="text-caption text-gold-500 mb-4">FIND US</h3>
            <h2 className="heading-secondary mb-8">Our Location</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-premium">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-gold-500 mx-auto mb-4" size={48} />
                <h4 className="text-xl font-semibold text-navy-900 mb-2">Interactive Map</h4>
                <p className="text-charcoal-600">15B, Borno Street, Area 10, Abuja, FCT, Nigeria</p>
                <button className="mt-4 text-gold-600 hover:text-gold-700 font-semibold">
                  Get Directions →
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
