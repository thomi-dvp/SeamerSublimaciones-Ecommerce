import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1600494603989-9650cf6dad51?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1531373559948-63f9454a2c56?auto=format&fit=crop&w=1920&q=80'
];

const BackgroundCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-background">
      {images.map((image, index) => (
        <div
          key={index}
          className="carousel-slide"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: currentImage === index ? 1 : 0
          }}
        />
      ))}
      <div className="hero-overlay"></div>
    </div>
  );
};

export default BackgroundCarousel;