"use client";

import React from "react";

const products = [
  {
    name: "Blue Sky Quartzite",
    price: "₹1.00 per sq/ft",
    image: "", // Set blank since we're using solid colors
    backgroundColor: "#FFCDD2", // Example solid color for background
  },
  {
    name: "Cheema Blue",
    price: "₹1.00 per sq/ft",
    image: "",
    backgroundColor: "#BBDEFB", // Example solid color for background
  },
  {
    name: "Sira Grey",
    price: "₹1.00 per sq/ft",
    image: "",
    backgroundColor: "#C8E6C9", // Example solid color for background
  },
  {
    name: "Crystal Blue Granite",
    price: "₹1.00 per sq/ft",
    image: "",
    backgroundColor: "#D1C4E9", // Example solid color for background
  },
];

const PremiumStones = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      {/* Header Section */}
      <div
        className="flex flex-col items-start bg-transparent"
        style={{
          paddingLeft: "20vh",
          paddingRight: "20vh",
          paddingBottom: "10vh",
          paddingTop: "20vh",
        }}
      >
        {/* Title and Button */}
        <div className="flex flex-row items-center justify-between w-full px-10">
          {/* Title Section */}
          <div className="text-left">
            <div className="flex flex-row items-center gap-2 mb-1">
              <div className="h-[2px] w-12 bg-pink-600"></div>
              <div className="text-yellow-400 uppercase text-xs tracking-widest">
              QUALITY YOU CAN TRUST
              </div>
            </div>
            <h2 className="text-black text-3xl font">Our Premium Stones</h2>
          </div>

          {/* Button Section */}
          <a
            href="#"
            className="px-6 py-2 bg-red-500 text-white text-sm font-bold uppercase tracking-wide hover:bg-[#E0912D] transition h-[40px] flex items-center justify-center"
          >
            View More →
          </a>
        </div>
      </div>


      <div className="h-0.5  bg-gray-200"></div>
      {/* Products Section */}
      <div style={{ padding: "0vh 30vh 20vh 30vh" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                backgroundColor: "#fff",
                padding: "20px",
                
              }}
            >
              {/* Image Container with Solid Background */}
              <div
                style={{
                  backgroundColor: product.backgroundColor,
                  width: "100%",
                  height: "0",
                  paddingBottom: "100%", // Ensures the square aspect ratio
                  // Increased border radius
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden", // Ensures content fits within the rounded container
                }}
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {product.name[0]} {/* Placeholder: First letter of the name */}
                  </span>
                )}
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: "10px 0 5px",
                }}
              >
                {product.name}
              </h3>
              <p style={{ fontSize: "14px", color: "#666" }}>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumStones ;
