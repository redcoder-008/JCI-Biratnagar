import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { ExternalLink, MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="bg-white pb-20 min-h-screen">
      {/* Page Header */}
      <div className="bg-jci-blue py-16 text-center text-white">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Get in touch with JCI Biratnagar for inquiries, collaborations, or membership.</p>
        </div>
      </div>

      <div className="section-container mt-16">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <SectionHeading title="Get In Touch" />
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Whether you have a question about membership, projects, or anything else, our team is ready to answer all your questions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-jci-blue/10 flex items-center justify-center text-jci-blue shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Official Address</h3>
                  <p className="text-gray-600">Jaycees Marga, Biratnagar, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-jci-blue/10 flex items-center justify-center text-jci-blue shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone Number</h3>
                  <a href="tel:+9779810492929" className="text-gray-600 transition-colors hover:text-jci-blue">981-0492929</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-jci-blue/10 flex items-center justify-center text-jci-blue shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email Address</h3>
                  <a href="mailto:jcibiratnagar1973@gmail.com" className="text-gray-600 transition-colors hover:text-jci-blue">jcibiratnagar1973@gmail.com</a>
                </div>
              </div>
            </div>
            
            <div className="pt-8 mt-8 border-t border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Facebook', href: 'https://www.facebook.com/p/Biratnagar-Jaycees-61571983140311/' },
                  { name: 'Instagram', href: 'https://www.instagram.com/biratnagar_junior_jaycees/?hl=en' },
                  { name: 'TikTok', href: 'https://www.tiktok.com/@biratnagar.jaycee' },
                ].map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:-translate-y-0.5 hover:bg-jci-gold hover:text-white">
                    {social.name} <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-jci-blue mb-6">Send us a Message</h3>
              
              {formStatus === 'success' ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 text-center animate-pulse">
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p>Thank you for contacting us. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jci-blue focus:border-jci-blue outline-none transition-shadow"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jci-blue focus:border-jci-blue outline-none transition-shadow"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jci-blue focus:border-jci-blue outline-none transition-shadow"
                        placeholder="Your Phone Number"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jci-blue focus:border-jci-blue outline-none transition-shadow"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jci-blue focus:border-jci-blue outline-none transition-shadow resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className={`btn-primary w-full flex justify-center items-center gap-2 text-lg py-4 ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : (
                      <>Send Message <Send size={20} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
