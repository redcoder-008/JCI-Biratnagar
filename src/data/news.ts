import type { NewsArticle } from '../types';
import activityPlaceholder from '../assets/activity-placeholder.svg';

export const newsData: NewsArticle[] = [
  {
    id: '1',
    title: '[News Headline]',
    date: '[Date]',
    category: 'Announcement',
    excerpt: '[News summary will be published here.]',
    content: '[Full article content will be published here soon.]',
    image: activityPlaceholder,
    slug: 'new-leadership-announcement',
  },
  {
    id: '2',
    title: '[News Headline]',
    date: '[Date]',
    category: 'Community',
    excerpt: '[News summary will be published here.]',
    content: '[Full article content will be published here soon.]',
    image: activityPlaceholder,
    slug: 'community-outreach-milestone',
  },
  {
    id: '3',
    title: '[News Headline]',
    date: '[Date]',
    category: 'Training',
    excerpt: '[News summary will be published here.]',
    content: '[Full article content will be published here soon.]',
    image: activityPlaceholder,
    slug: 'digital-leadership-training',
  }
];
