import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-bold mb-2">X050</h1>
          <p className="text-gray-400">Innovative Sound Technology</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-10 mt-6 md:mt-0">
          <ul className="space-y-2">
            <h2 className="text-lg font-semibold">Products</h2>
            <li className="text-gray-400 hover:text-white cursor-pointer">Explore all Pods</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">X050 Pro</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">Accessories</li>
          </ul>
          <ul className="space-y-2">
            <h2 className="text-lg font-semibold">Company</h2>
            <li className="text-gray-400 hover:text-white cursor-pointer">About Us</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">Careers</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">Contact</li>
          </ul>
          <ul className="space-y-2">
            <h2 className="text-lg font-semibold">Support</h2>
            <li className="text-gray-400 hover:text-white cursor-pointer">Help Center</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">Warranty</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Product Image */}
        <div className="mt-6 md:mt-0">
          <img src="/Headphone.webp" alt="X050 Headphones" className="w-32 md:w-48" />
        </div>
      </div>

      {/* Copyright and Socials */}
      <div className="mt-10 text-center text-gray-400 text-sm border-t border-gray-700 pt-5">
        <p>© {new Date().getFullYear()} X050. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
