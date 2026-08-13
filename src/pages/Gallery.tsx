import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { galleryData } from '../data/gallery';

const Gallery: React.FC = () => {
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null);

  const selectedAlbum = galleryData.find(album => album.id === activeAlbum);

  return (
    <div className="bg-white pb-20 min-h-screen">
      {/* Page Header */}
      <div className="bg-jci-blue py-16 text-center text-white">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Explore moments from our events, projects, and activities.</p>
        </div>
      </div>

      <div className="section-container mt-16">
        {!activeAlbum ? (
          <>
            <SectionHeading title="Albums" centered />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryData.map(album => (
                <div 
                  key={album.id} 
                  className="card group cursor-pointer"
                  onClick={() => setActiveAlbum(album.id)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={album.coverImage} 
                      alt={album.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                      <h3 className="text-2xl font-bold text-center drop-shadow-md mb-2">{album.title}</h3>
                      <span className="text-sm font-medium bg-jci-gold px-3 py-1 rounded-full shadow-sm">
                        {album.images.length} Photos
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-jci-blue">{selectedAlbum?.title}</h2>
              <button 
                onClick={() => setActiveAlbum(null)}
                className="text-jci-blue hover:text-jci-gold font-semibold transition-colors"
              >
                &larr; Back to Albums
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {selectedAlbum?.images.map((img, index) => (
                <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img src={img} alt={`${selectedAlbum.title} ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
