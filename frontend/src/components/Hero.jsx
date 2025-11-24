import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 text-center">
      <h2 className="text-4xl font-bold mb-2">Summer Sale is Live!</h2>
      <p className="text-lg mb-6">Get up to 50% off on Electronics and Fashion.</p>
      <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
        Shop Now
      </button>
    </div>
  );
};

export default Hero;