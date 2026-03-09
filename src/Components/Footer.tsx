import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2f3e2e] text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

     
        <div>
          <h2 className="text-2xl font-bold mb-4">NZ Walks</h2>
          <p className="text-gray-300 text-sm">
            Discover breathtaking walking trails across New Zealand.
            From alpine adventures to coastal paths, explore the best
            nature has to offer.
          </p>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Walks</li>
            <li className="hover:text-white cursor-pointer">Regions</li>
            <li className="hover:text-white cursor-pointer">About</li>
          </ul>
        </div>

   
        <div>
          <h3 className="text-lg font-semibold mb-4">Popular Walks</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Tongariro Alpine Crossing</li>
            <li className="hover:text-white cursor-pointer">Hooker Valley Track</li>
            <li className="hover:text-white cursor-pointer">Roys Peak</li>
            <li className="hover:text-white cursor-pointer">Milford Track</li>
          </ul>
        </div>

   
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <div className="flex space-x-4">
            <Facebook className="cursor-pointer hover:text-green-300" />
            <Instagram className="cursor-pointer hover:text-green-300" />
            <Twitter className="cursor-pointer hover:text-green-300" />
          </div>
        </div>

      </div>

  
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} NZ Walks. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;