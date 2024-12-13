import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto  py-1.5">
          {/* Logo Section */}
          <div className="flex items-center justify-start flex-none">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-1.png"
                alt="Stone Pedia Logo"
                className="h-12.5 w-auto"
                width={160}
                height={160}
              />
            </Link>
          </div>

          {/* Menu Section */}
          <ul className="flex-1 flex justify-center space-x-10 font-medium text-gray-700 text-sm">
            <li>
              <Link href="#" className="hover:text-purple-800">
                SHOP BY CATEGORY
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-purple-800">
                PARTNER WITH US
              </Link>
            </li>
          </ul>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4 flex-none">
            {/* Search Bar */}
            {/* <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for products..."
                className="block w-full pl-10 pr-4 py-2 text-sm border rounded-lg bg-gray-50 focus:ring-purple-800 focus:border-purple-800"
              />
            </div> */}

          {/* Search Bar */}

<div className="relative hidden md:block">
  <div className="absolute inset-y-0 left-0 flex items-center pl-5  pointer-events-none">
    <svg
      className="w-5 h-5 text-gray-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
  </div>
  <div className="   " >
  <input
    type="text"
    placeholder="Search for products..."
    className="block w-64 pl-12 pr-4 py-2 text-m text-gray-700  rounded-full bg-gray-100 focus:ring-purple-700 focus:border-purple-700"
  />
  </div>
 
</div>



            {/* Cart Icon */}
            <div className="relative pl-10  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l1.6 5M17 13l-1.6 5M6 21a1 1 0 1 0 2 0 1 1 0 0 0-2 0m10 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
                />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center  px-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                0
              </span>
            </div>

            {/* Hamburger Menu */}
            <button
              className="inline-flex items-center justify-end  w-10 h-10 text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
