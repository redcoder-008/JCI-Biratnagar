import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import { NewsArticle } from '../types';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="card flex flex-col h-full group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          <span className="flex items-center text-jci-gold">
            <Tag size={14} className="mr-1" />
            {article.category}
          </span>
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {article.date}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-jci-blue transition-colors">
          {article.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
          {article.excerpt}
        </p>
        
        <Link 
          to={`/news/${article.slug}`}
          className="inline-flex items-center text-jci-blue font-semibold hover:text-jci-gold transition-colors mt-auto"
        >
          Read More
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
