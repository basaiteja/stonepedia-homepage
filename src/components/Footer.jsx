import React from "react";
import EmailHeader from "./EmailHeader";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
    <EmailHeader/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        
          {/* Product Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">StonePedia Exclusive</a></li>
              <li><a href="#" className="hover:underline">Best Seller</a></li>
              <li><a href="#" className="hover:underline">Premium Stones</a></li>
              <li><a href="#" className="hover:underline">Shop By Color</a></li>
              <li><a href="#" className="hover:underline">Shop By Category</a></li>
              <li><a href="#" className="hover:underline">Applications</a></li>
              <li><a href="#" className="hover:underline">Customer Review</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Request For Quotation</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Login</a></li>
              <li><a href="#" className="hover:underline">Sign Up</a></li>
              <li><a href="#" className="hover:underline">Report Complaint</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Carrier</a></li>
              <li><a href="#" className="hover:underline">Terms & Condition</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookies Policy</a></li>
              <li><a href="#" className="hover:underline">Cancellation Policy</a></li>
              <li><a href="#" className="hover:underline">Disclaimer</a></li>
            </ul>
          </div>

          {/* Reach Us Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Reach Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">In The Press</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Youtube</a></li>
              <li><a href="#" className="hover:underline">Feedback</a></li>
              <li><a href="#" className="hover:underline">Partner With Us</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-sm">Copyright © 2024 - StonePedia Private Limited. All Rights Reserved.</p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
