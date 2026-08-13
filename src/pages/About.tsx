import React from 'react';
import SectionHeading from '../components/SectionHeading';

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-20">
      {/* Page Header */}
      <div className="bg-jci-blue py-16 text-center text-white">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About JCI Biratnagar</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Discover our mission, vision, and the positive change we bring to the community.</p>
        </div>
      </div>

      <div className="section-container mt-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-16">
          <SectionHeading title="Who We Are" />
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              JCI Biratnagar is a local chapter of Junior Chamber International (JCI), a worldwide federation of young leaders and entrepreneurs. Our members are dedicated to creating positive change in their communities through active participation in leadership development, community service, and international networking.
            </p>
            <p>
              Established with the core belief that we have the power to change our world for the better, JCI Biratnagar empowers young people aged 18 to 40 by providing them with the necessary tools, skills, and opportunities.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h3 className="text-2xl font-bold text-jci-gold mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600">
              To provide development opportunities that empower young people to create positive change.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h3 className="text-2xl font-bold text-jci-gold mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600">
              To be the leading global network of young active citizens.
            </p>
          </div>
        </div>

        <div className="bg-jci-dark rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-8 text-jci-gold">The JCI Creed</h3>
          <div className="max-w-3xl mx-auto text-xl md:text-2xl font-medium leading-loose">
            <p>We believe:</p>
            <p>That faith in God gives meaning and purpose to human life;</p>
            <p>That the brotherhood of man transcends the sovereignty of nations;</p>
            <p>That economic justice can best be won by free men through free enterprise;</p>
            <p>That government should be of laws rather than of men;</p>
            <p>That earth's great treasure lies in human personality;</p>
            <p>And that service to humanity is the best work of life.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
