import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { Users, Briefcase, Globe, Award, Target, BookOpen } from 'lucide-react';

const Membership: React.FC = () => {
  const benefits = [
    { icon: <Users size={24} />, title: 'Networking', desc: 'Connect with young professionals and leaders locally and globally.' },
    { icon: <Award size={24} />, title: 'Leadership Development', desc: 'Hone your leadership skills through practical experience and training.' },
    { icon: <Target size={24} />, title: 'Personal Growth', desc: 'Discover your potential and grow both personally and professionally.' },
    { icon: <Briefcase size={24} />, title: 'Business Opportunities', desc: 'Engage with entrepreneurs and explore new business avenues.' },
    { icon: <Globe size={24} />, title: 'International Exposure', desc: 'Participate in international conferences and training programs.' },
    { icon: <BookOpen size={24} />, title: 'Community Impact', desc: 'Be part of meaningful projects that create lasting positive change.' },
  ];

  return (
    <div className="bg-gray-50 pb-20 min-h-screen">
      {/* Page Header */}
      <div className="bg-jci-blue py-16 text-center text-white">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Become a JCI Member</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Join a global network of young active citizens making a difference.</p>
        </div>
      </div>

      <div className="section-container mt-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-16 text-center">
          <h2 className="text-3xl font-bold text-jci-blue mb-6">Why To Join JCI Biratnagar?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            JCI offers a unique platform for young people to develop their leadership skills, social responsibility, entrepreneurship, and fellowship necessary to create positive change.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-jci-gold shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <SectionHeading title="Membership Process" />
            <ol className="space-y-6 relative border-l-2 border-gray-200 ml-3 md:ml-4">
              {[
                { step: '1', title: 'Learn About JCI', desc: 'Understand our mission, vision, and values.' },
                { step: '2', title: 'Submit Application', desc: 'Fill out the membership application form.' },
                { step: '3', title: 'Attend  Orientation', desc: 'Participate in the new member orientation session.' },
                { step: '4', title: 'Become a Member', desc: 'Get officially inducted into JCI Biratnagar.' },
                { step: '5', title: 'Start Participating', desc: 'Join projects, attend meetings, and start your journey.' },
              ].map((item, index) => (
                <li key={index} className="pl-8 relative">
                  <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-jci-gold text-white flex items-center justify-center font-bold shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-jci-blue text-white p-8 md:p-12 rounded-2xl shadow-xl text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Join?</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Membership information will be updated soon. Please contact us directly for current membership details and application process.
            </p>
            <Link to="/contact" className="btn-primary w-full shadow-lg shadow-jci-gold/20 text-lg py-4">
              Contact Us for Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
