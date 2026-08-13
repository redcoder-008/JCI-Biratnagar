import React from 'react';
import SectionHeading from '../components/SectionHeading';
import NewsCard from '../components/NewsCard';
import { newsData } from '../data/news';

const News: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-20 min-h-screen">
      {/* Page Header */}
      <div className="bg-jci-blue py-16 text-center text-white">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Announcements</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Stay updated with the latest happenings at JCI Biratnagar.</p>
        </div>
      </div>

      <div className="section-container mt-16">
        <SectionHeading title="Latest Updates" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
