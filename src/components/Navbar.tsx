import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Menu, X, Users } from 'lucide-react';
import clsx from 'clsx';
import logo from '../assets/branding/jci-biratnagar-logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Events', path: '/events' },
    { name: 'Projects', path: '/projects' },
    { name: 'News', path: '/news' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-jci-blue text-white text-sm">
        <div className="section-container flex items-center justify-between py-2">
          <span className="font-medium hidden sm:inline">Developing Leaders, Creating Impact</span>
          <a href="mailto:jcibiratnagar1973@gmail.com" className="flex items-center gap-2 font-medium transition-colors hover:text-jci-gold"><Mail size={14} /> jcibiratnagar1973@gmail.com</a>
        </div>
      </div>
      
      <nav className="section-container relative">
        <div className="flex items-center justify-between py-3 lg:py-4">
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img src={logo} alt="JCI Biratnagar" className="h-12 w-12 rounded-lg object-cover shadow-sm" />
            <div className="leading-none">
              <div className="text-xl font-bold tracking-tight text-jci-blue">JCI</div>
              <div className="mt-1 text-xs font-bold tracking-[0.12em] text-jci-blue">BIRATNAGAR</div>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden xl:flex items-center gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={clsx(
                    "text-sm font-medium transition-colors hover:text-jci-gold",
                    location.pathname === link.path ? "text-jci-gold" : "text-gray-700"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="ml-3">
              <Link
                to="/membership"
                className="flex items-center gap-1.5 rounded-lg bg-jci-gold px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-yellow-600 shadow-sm"
              >
                <Users size={16} /> Join Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-jci-blue"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={clsx(
                      "block py-2 px-4 rounded-lg text-base font-medium transition-colors hover:bg-gray-50 hover:text-jci-gold",
                      location.pathname === link.path ? "text-jci-gold bg-gray-50" : "text-gray-700"
                    )}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link
                  to="/membership"
                  className="flex items-center justify-center gap-2 w-full rounded-lg bg-jci-gold px-4 py-3 text-base font-medium text-white transition-colors hover:bg-yellow-600 shadow-sm"
                  onClick={closeMenu}
                >
                  <Users size={20} /> Join JCI Biratnagar
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
