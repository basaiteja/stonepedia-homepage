"use client";

import React, { useState, useEffect } from "react";

const TestimonialWithForm = () => {
  // Testimonials data
  const testimonials = [
    {
      name: "Ghanishtha Sharma",
      date: "10 months ago",
      rating: 5,
      review:
        "Stonepedia's team is too helpful and has great stock availability. Thank you, I will surely recommend it to my representatives!",
    },
    {
      name: "Rahul Singh",
      date: "5 months ago",
      rating: 5,
      review:
        "Amazing service and timely delivery. Couldn't ask for more!",
    },
    {
      name: "Priya Mehra",
      date: "8 months ago",
      rating: 5,
      review:
        "Very professional and helpful team. Highly recommended!",
    },
  ];

  // State to track the active testimonial
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically move to the next testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="flex flex-col lg:flex-row align-middle text-white p-8 lg:p-12 space-y-8 lg:space-y-0 lg:space-x-8 max-w-screen-lg mx-auto"
        style={{ width: "80%" }}
      >
        {/* Testimonial Section */}
        <div className="lg:w-1/2">
          <div className="text-left">
            <div className="flex flex-row items-center gap-2 mt-8 mb-1">
              <div className="h-[2px] w-12 bg-pink-600"></div>
              <div className="text-yellow-400 uppercase text-[8px] tracking-widest">
                Testimonials
              </div>
            </div>
            <h2 className="text-white text-2xl font-bold">
              What Our Happy Client Say About Us
            </h2>
          </div>

          <div className="relative bg-white text-black p-6 rounded-lg shadow-lg mt-10 text-center">
            {/* Testimonial Content */}
            <div className="relative mb-4">
              <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2">
                <img
                  src="/google-avatar.png"
                  alt="Client Avatar"
                  className="w-16 h-16 rounded-full border-4 border-white"
                />
              </div>
            </div>
            <h4 className="text-lg font-bold text-gray-800 mt-8">
              {testimonials[activeIndex].name}
            </h4>
            <span className="text-gray-500 text-sm">
              {testimonials[activeIndex].date}
            </span>
            <div className="text-yellow-500 text-lg mt-2 flex justify-center items-center gap-1">
              {"★".repeat(testimonials[activeIndex].rating)}
              <span className="text-blue-500 text-sm">✔</span>
            </div>
            <p className="text-gray-700 mt-4">
              {testimonials[activeIndex].review}
            </p>

            {/* Navigation Buttons */}
            {/* <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-120 px-8">
              <button
                onClick={() =>
                  setActiveIndex((prevIndex) =>
                    prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
                  )
                }
                className="bg-gray-300 text-black p-2 rounded-full hover:bg-gray-400"
                style={{ position: "absolute", left: "0" }}
              >
                {"<"}
              </button>
              <button
                onClick={() =>
                  setActiveIndex((prevIndex) =>
                    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                  )
                }
                className="bg-gray-300 text-black p-2 rounded-full hover:bg-gray-400"
                style={{ position: "absolute", right: "0" }}
              >
                {">"}
              </button>
            </div> */}
          </div>
          <div className="mt-4 text-right">
            <button className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700">
              Write Review →
            </button>
          </div>
        </div>

        {/* Consultation Form */}
        <div
          className="lg:w-1/2 bg-gray-100 text-black px-5 rounded-lg py-10 shadow-md display-flex"
          style={{ padding: "5% 3%" }}
        >
          <div className="text-left">
            <div className="flex flex-row items-center gap-2 mb-1">
              <div className="h-[2px] w-12 bg-pink-600"></div>
              <div className="text-black-400 uppercase text-[10px] tracking-widest">
                Happy to consult
              </div>
            </div>
            <h2 className="text-black text-2xl font-bold">
              Book consultation now
            </h2>
          </div>
          <p className="text-left text-gray-600 mb-6 text-[12px]">
            Our dedicated team will get back to you within the next 24 hours.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-3 rounded w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <textarea
              placeholder="Write Your Message"
              className="border border-gray-300 p-3 rounded w-full"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-[#e9417b] text-white py-3 px-4 rounded w-30 hover:bg-[#d2366f]"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestimonialWithForm;
