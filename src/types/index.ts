export interface LeadershipMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  organizer: string;
  image: string;
  category: 'Upcoming' | 'Past';
  slug: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  slug: string;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  images: string[];
}
