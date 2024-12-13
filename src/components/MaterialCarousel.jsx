"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Updated import
import "swiper/css";
import "swiper/css/pagination";

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
  return (
    <div
      style={{
        padding: "5vh 30vh 20vh 30vh",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={2}
        slidesPerView={5}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
        }}
        style={{ width: "100%" }}
      >
        {materials.map((material, index) => (
          <SwiperSlide key={index}>
            <div style={{ textAlign: "center" }}>
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
                  marginTop: "20px",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                {material.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MaterialCarousel;
