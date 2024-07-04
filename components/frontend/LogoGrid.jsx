import React from 'react';
import Image from 'next/image';

const LogoGrid = () => {
  const logos = [
    { src: 'https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Black.png', alt: 'Spotify' },
    { src: '/itunes.png', alt: 'iTunes' },
    { src: '/soundcloud.png', alt: 'Soundcloud' },
    { src: '/tidal.png', alt: 'Tidal' },
  ];

  return (
    <section className="py-20 bg-black ">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-wrap -m-4">
          {logos.map((logo, index) => (
            <div key={index} className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="py-4 bg-gray-200">
                <Image className="h-6 mx-auto" src={logo.src} alt={logo.alt} width={100} height={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;
