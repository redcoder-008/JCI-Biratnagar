import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/branding/jci-biratnagar-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jci-dark text-gray-300">
      <div className="section-container py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          <div className="lg:col-span-1">
            <img src={logo} alt="JCI Biratnagar" className="mb-5 h-16 w-16 rounded-lg object-cover" />
            <p className="text-sm leading-relaxed text-gray-400">
              A local chapter of Junior Chamber International, empowering young people to create positive change in their communities.
            </p>
            <p className="mt-6 text-sm text-gray-500">Official social links will be added soon.</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-jci-gold transition-colors">About Us</Link></li>
              <li><Link to="/leadership" className="text-sm text-gray-400 hover:text-jci-gold transition-colors">Leadership</Link></li>
              <li><Link to="/events" className="text-sm text-gray-400 hover:text-jci-gold transition-colors">Events</Link></li>
              <li><Link to="/projects" className="text-sm text-gray-400 hover:text-jci-gold transition-colors">Projects</Link></li>
              <li><Link to="/gallery" className="text-sm text-gray-400 hover:text-jci-gold transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Information</h3>
            <ul className="space-y-3">
              <li><Link to="/news" className="text-sm text-gray-400 hover:text-jci-gold transition-colors">News & Announcements</Link></li>
              <li><Link to="/membership" className="text-sm text-gray-400 hover:text-jci-gold transition-colors">Become a Member</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-jci-gold transition-colors">Contact Us</Link></li>
              <li>
                <a href="https://jcinepal.org.np/" target="_blank" rel="noopener noreferrer" className="text-sm text-jci-gold font-medium hover:text-white transition-colors">
                  JCI Nepal National Website ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={18} className="text-jci-gold shrink-0 mt-0.5" />
                <span>[Official Address], Biratnagar, Nepal</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={18} className="text-jci-gold shrink-0" />
                <span>[Phone Number]</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={18} className="text-jci-gold shrink-0" />
                <span>[Official Email]</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="border-t border-gray-800 bg-black/20">
        <div className="section-container flex flex-col items-center justify-between gap-4 py-6 text-sm text-gray-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} JCI Biratnagar. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-gray-600">Developing Leaders for a Changing World</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
