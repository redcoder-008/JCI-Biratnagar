import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import { eventsData } from '../data/events';
import { newsData } from '../data/news';

interface ContentDetailProps {
  kind: 'event' | 'news';
}

export default function ContentDetail({ kind }: ContentDetailProps) {
  const { slug } = useParams();
  const event = kind === 'event' ? eventsData.find((entry) => entry.slug === slug) : undefined;
  const article = kind === 'news' ? newsData.find((entry) => entry.slug === slug) : undefined;
  const item = event ?? article;
  const backPath = event ? '/events' : '/news';
  const sectionName = event ? 'Events' : 'News';

  if (!item) {
    return (
      <div className="section-container py-24 text-center">
        <h1 className="section-title">Content Not Found</h1>
        <p className="section-subtitle">This item may have been removed or is not available yet.</p>
        <Link className="btn-secondary" to={backPath}>Return to {sectionName}</Link>
      </div>
    );
  }

  const image = item.image;

  return (
    <article className="bg-gray-50 py-12 sm:py-16">
      <div className="section-container max-w-4xl">
        <Link to={backPath} className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-jci-blue transition-colors hover:text-jci-gold">
          <ArrowLeft size={17} /> Back to {sectionName}
        </Link>
        <div className="overflow-hidden rounded-2xl bg-jci-dark shadow-sm">
          <img src={image} alt="Activity image placeholder" className="h-64 w-full object-cover sm:h-80" />
          <div className="bg-white p-6 sm:p-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-jci-gold">{item.category}</p>
            <h1 className="mb-6 text-3xl font-bold text-jci-blue sm:text-5xl">{item.title}</h1>
            {event ? (
              <div className="mb-8 grid gap-3 border-y border-gray-100 py-5 text-sm text-gray-600 sm:grid-cols-3">
                <span className="flex items-center gap-2"><Calendar size={16} className="text-jci-gold" /> {event.date}</span>
                <span className="flex items-center gap-2"><Clock size={16} className="text-jci-gold" /> {event.time}</span>
                <span className="flex items-center gap-2"><MapPin size={16} className="text-jci-gold" /> {event.location}</span>
              </div>
            ) : article ? <p className="mb-8 text-sm font-semibold text-gray-500">{article.date}</p> : null}
            <p className="text-lg leading-relaxed text-gray-600">{event ? event.description : article?.content}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
