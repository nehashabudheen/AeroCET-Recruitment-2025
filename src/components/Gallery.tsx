import React, { useEffect, useState } from 'react';
import './gallery.css';

interface ImageData {
  id: string;
  author: string;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=12')
      .then(res => res.json())
      .then(data => {
        setImages(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">📸 <span className="highlight">Image</span> Gallery</h2>

      {loading ? (
        <div className="gallery-grid">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="gallery-card shimmer-card"></div>
          ))}
        </div>
      ) : (
        <div className="gallery-grid">
          {images.map((img) => (
            <div key={img.id} className="gallery-card">
              <img
                src={`https://picsum.photos/id/${img.id}/400/300`}
                alt={img.author}
                className="gallery-img"
              />
              <div className="card-footer">
                <span>{img.author}</span>
                <a
                  href={`https://picsum.photos/id/${img.id}/800/600`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;



