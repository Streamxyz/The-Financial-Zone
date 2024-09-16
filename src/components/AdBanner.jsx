import React from 'react';

const AdBanner = ({ position }) => {
  const bannerClass = position === 'top' ? 'w-full h-20 mb-8' : 'w-full h-60 mb-8';

  return (
    <div className={`bg-gray-200 ${bannerClass} flex items-center justify-center`}>
      <p className="text-gray-500">Advertisement</p>
    </div>
  );
};

export default AdBanner;
