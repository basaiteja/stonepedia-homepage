"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const materials = [
  {
    name: "Limestone",
    color: "#D0D0C0", // Replace with an approximate solid color
  },
  {
    name: "Indian Marble",
    color: "#D9D4D3", // Replace with an approximate solid color
  },
  {
    name: "Imported Marble",
    color: "#EAEAEA", // Replace with an approximate solid color
  },
  {
    name: "Indian Granite",
    color: "#D5D5D5", // Replace with an approximate solid color
  },
  {
    name: "Imported Granite",
    color: "#2B2E5E", // Replace with an approximate solid color
  },
];

const MaterialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{
        
        padding: "5vh 30vh 20vh 30vh",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Slider {...settings}>
        {materials.map((material, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <div
              style={{
                width: "150px",
                height: "150px",
                margin: "0 auto",
                borderRadius: "50%",
                background: material.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            ></div>
            <p
              style={{
                marginTop: "10px",
                fontSize: "16px",
                fontWeight: "600",
                color: "#fff",
              }}
            >
              {material.name}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MaterialCarousel;
