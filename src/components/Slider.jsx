"use client"

import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 34,
      title: "Experience The World Of Natural Stones Like Never Before",
      leftImage: "https://stonepedia.in/wp-content/uploads/2024/04/banner-2.png",
      rightImage: "https://stonepedia.in/wp-content/uploads/2024/04/banner-3.png",
    },
    {
      id: 35,
      title: "Your One-Stop Platform For The World's Finest Natural Stones",
      leftImage: "https://stonepedia.in/wp-content/uploads/2024/04/banner-2.png",
      rightImage: "https://stonepedia.in/wp-content/uploads/2024/04/banner-3.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[888px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out transform ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Left Image */}
          <div
            className="absolute left-[-150px] top-[-150px] w-[592px] h-[1270px] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${slide.leftImage})` }}
          ></div>

          {/* Right Image */}
          <div
            className="absolute right-[-150px] top-[-150px] w-[592px] h-[1295px] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${slide.rightImage})` }}
          ></div>

          {/* Text */}
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-4xl font-semibold text-white leading-tight capitalize">
              {slide.title}
            </h2>
          </div>
        </div>
      ))}

      {/* Bullets */}
      <div className="absolute bottom-4 left-[50%] transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
