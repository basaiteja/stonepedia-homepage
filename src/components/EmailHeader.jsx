const EmailHeader = () => {
    return (
      <div className="flex justify-between items-center w-[80%]   text-white p-8">
        {/* Logo Section */}
        <div className="pl-[20%]">
          {/* <img
            src="/logo-1.png" // Path to your white logo
            alt="Logo"
           
            className="h-10 filter invert grayscale"// Adjust height if needed
          /> */}
          <div
  className="h-32 w-32 bg-white mask mask-image mx-auto"
  style={{
    maskImage: "url('/logo-1.png')",
    WebkitMaskImage: "url('/logo-1.png')",
    maskSize: "contain",
    WebkitMaskSize: "contain",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
  }}
></div>



        </div>
  
        {/* Email Input Section */}
        <div className="flex items-center border-b border-gray-500 w-1/3">
          <input
            type="email"
            placeholder="Your Email Address"
            className="bg-black text-white w-full py-2 px-4 outline-none"
          />
          <button className="text-white ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.94 13.44a1 1 0 011.22-.72l9.72 2.68a1 1 0 01.56 1.62l-4.68 4.68a1 1 0 01-1.63-.57l-2.69-9.73a1 1 0 01.5-1.26zM11.2 8.8a1 1 0 011.4 0l6 6a1 1 0 01-1.4 1.4l-6-6a1 1 0 010-1.4z" />
            </svg>
          </button>
        </div>
      </div>
    );
  };
  
  export default EmailHeader;
  