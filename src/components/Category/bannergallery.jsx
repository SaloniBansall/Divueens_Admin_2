import React from 'react';
import Banner from './Banner';

const BannerGallery = () => {
  const banners = [
    {
      image: 'https://via.placeholder.com/400x300',
      title: 'Banner 1',
      description: 'This is the first banner.',
      link: '#'
    },
    {
      image: 'https://via.placeholder.com/400x300',
      title: 'Banner 2',
      description: 'This is the second banner.',
      link: '#'
    },
    {
      image: 'https://via.placeholder.com/400x300',
      title: 'Banner 3',
      description: 'This is the third banner.',
      link: '#'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {banners.map((banner, index) => (
        <Banner
          key={index}
          image={banner.image}
          title={banner.title}
          description={banner.description}
          link={banner.link}
        />
      ))}
    </div>
  );
};

export default BannerGallery;