import React from 'react';

const products = [
  {
    name: "Blue Sky Quartzite",
    backgroundColor: "#FFCDD2", // Example solid color for background
  },
  {
    name: "Cheema Blue",
    backgroundColor: "#BBDEFB", // Example solid color for background
  },
  {
    name: "Sira Grey",
    backgroundColor: "#C8E6C9", // Example solid color for background
  },
  {
    name: "Crystal Blue Granite",
    backgroundColor: "#D1C4E9", // Example solid color for background
  },
  {
    name: "Golden Cream",
    backgroundColor: "#FFE0B2", // Example solid color for background
  },
  {
    name: "Black Pearl",
    backgroundColor: "#CFD8DC", // Example solid color for background
  },
];

const Ideal = () => {
  return (
    <>
      <div
        className="flex flex-col items-start bg-transparent"
        style={{
          paddingLeft: "20vh",
          paddingRight: "20vh",
          paddingBottom: "10vh",
          paddingTop: "20vh",
        }}
      >
        {/* Title Section and Button in One Line */}
        <div className="flex flex-row items-center justify-between w-full px-10">
          {/* Title Section */}
          <div className="text-left">
            <div className="flex flex-row items-center gap-2 mb-1">
              {/* Reduced margin-bottom from 'mb-2' to 'mb-1' */}
              <div className="h-[2px] w-12 bg-pink-600"></div>
              <div className="text-yellow-400 uppercase text-xs tracking-widest">
                DISCOVER YOUR IDEAL STONE
              </div>
            </div>
            <h2 className="text-white text-3xl font">StonePedia Exclusive</h2>
          </div>

          {/* Button Section */}
          <a
            href="#"
            className="px-6 py-6 bg-red-500 text-white text-sm font-bold uppercase tracking-wide hover:bg-[#E0912D] transition h-[40px] flex items-center justify-center"
          >
            View More --→
          </a>
        </div>
      </div>

      <div className="h-0.5  bg-gray-800"></div>
      {/* Products Section */}
      <div style={{ padding: "0vh 30vh 20vh 30vh" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 columns to match the image format
            gap: "20px",
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                
                padding: "20px",
              }}
            >
              {/* Image Container with Solid Background */}
              <div
                style={{
                  backgroundColor: product.backgroundColor,
                  width: "100%",
                  height: "180px", // Adjusted to fit the format size

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden", // Ensures content fits within the rounded container
                }}
              ></div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: "10px 0 5px",
                  color: "#fff", 
                }}
              >
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ideal;
