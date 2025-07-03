import React from 'react';

const Loader = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-4 border-gray-300 border-t-[#fb1fb1] rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;