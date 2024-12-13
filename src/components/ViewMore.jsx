import React from 'react';

const ChooseByCategory = () => {
  return (
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
              What We Offer?
            </div>
          </div>
          <h2 className="text-white text-3xl font">Choose By Category</h2>
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
  );
};

export default ChooseByCategory;
