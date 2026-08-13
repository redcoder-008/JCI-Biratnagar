import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import LeadershipCard from '../components/LeadershipCard';
import EventCard from '../components/EventCard';
import NewsCard from '../components/NewsCard';
import ProjectCard from '../components/ProjectCard';
import StatisticCard from '../components/StatisticCard';
import { leadershipData } from '../data/leadership';
import { eventsData } from '../data/events';
import { newsData } from '../data/news';
import { projectsData } from '../data/projects';
import { galleryData } from '../data/gallery';
import { Users, Briefcase, Calendar as CalendarIcon, Award } from 'lucide-react';
import avatarPlaceholder from '../assets/avatars/avatar-placeholder.svg';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-jci-dark min-h-[80vh] flex items-center select-none">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1920" 
            alt="JCI Biratnagar Hero" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="section-container relative z-10 py-20 text-center text-white">
          <span className="inline-block px-4 py-1.5 rounded-full bg-jci-gold/20 text-jci-gold font-bold text-sm tracking-wider uppercase mb-6 border border-jci-gold/30">
            JCI Biratnagar
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Developing Leaders.<br />
            <span className="text-jci-gold">Creating Impact.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Empowering young people to create positive change in their communities and beyond through leadership development and meaningful action.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/membership" className="btn-primary w-full sm:w-auto text-lg px-8">
              Join JCI
            </Link>
            <Link to="/events" className="btn-secondary w-full sm:w-auto text-lg px-8 border-white text-white hover:bg-white hover:text-jci-blue">
              Explore Our Activities
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-jci-blue mb-6">About JCI Biratnagar</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  JCI Biratnagar is a local chapter of Junior Chamber International, committed to developing young leaders and creating positive impact through community involvement, leadership development and meaningful action.
                </p>
                <p>
                  We provide development opportunities that empower young people to create positive change in our local community, contributing to the broader mission of JCI Nepal and the world.
                </p>
              </div>
              <Link to="/about" className="inline-flex items-center font-bold text-jci-blue mt-8 hover:text-jci-gold transition-colors">
                Read More 
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800" 
                  alt="About JCI Biratnagar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-jci-gold text-white p-6 rounded-xl shadow-lg hidden md:block">
                <div className="text-3xl font-bold">Since</div>
                <div className="text-xl font-medium">[Year]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-jci-blue">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatisticCard number="XX+" label="Years of Service" icon={<Award size={32} />} />
            <StatisticCard number="XX+" label="Members" icon={<Users size={32} />} />
            <StatisticCard number="XX+" label="Projects" icon={<Briefcase size={32} />} />
            <StatisticCard number="XX+" label="Events" icon={<CalendarIcon size={32} />} />
          </div>
        </div>
      </section>

      {/* President Message Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="w-64 h-64 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img src={avatarPlaceholder} alt="President" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-jci-blue mb-2">Message from the President</h2>
              <div className="text-lg font-semibold text-jci-gold mb-6">Your Name - President, JCI Biratnagar</div>
              <blockquote className="text-xl italic text-gray-600 border-l-4 border-jci-gold pl-6 py-2">
                "[President message will be added soon. This section will feature an inspiring welcome message from the current President of JCI Biratnagar.]"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeading 
            title="Our Leadership" 
            subtitle="Meet the dedicated team driving JCI Biratnagar towards creating positive change." 
            centered 
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {leadershipData.slice(0, 5).map(member => (
              <LeadershipCard key={member.id} member={member} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/leadership" className="btn-secondary">
              View All Leadership
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <SectionHeading 
            title="Upcoming Events" 
            subtitle="Join us in our upcoming events and be a part of the change." 
            centered 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.slice(0, 3).map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/events" className="btn-secondary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeading
            title="Our Projects"
            subtitle="A space for the initiatives and impact stories of JCI Biratnagar."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
          <div className="mt-12 text-center">
            <Link to="/projects" className="btn-secondary">Explore All Projects</Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeading 
            title="Latest News" 
            subtitle="Updates and stories from JCI Biratnagar." 
            centered 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.slice(0, 3).map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/news" className="btn-secondary">
              View More News
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <SectionHeading
            title="Gallery"
            subtitle="Moments from JCI Biratnagar activities will appear here."
            centered
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryData.map((album) => (
              <Link to="/gallery" key={album.id} className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-jci-dark">
                <img src={album.coverImage} alt="Activity image placeholder" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-jci-dark/55 transition-colors group-hover:bg-jci-dark/35" />
                <span className="absolute inset-x-4 bottom-4 text-sm font-bold text-white sm:text-base">{album.title}</span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/gallery" className="btn-secondary">View Gallery</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-jci-blue text-center">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create Positive Change?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Become a member of JCI Biratnagar and join a global network of young active citizens.
          </p>
          <Link to="/membership" className="btn-primary text-lg px-10 py-4 shadow-lg shadow-jci-gold/20">
            Join JCI Biratnagar Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
