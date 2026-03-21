import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
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
            <li onClick={()=>{navigate('/home')}} className="hover:text-white cursor-pointer">Home</li>
            <li onClick={()=>{navigate('/walks')}} className="hover:text-white cursor-pointer">Walks</li>
            <li onClick={()=>{navigate('/regions')}} className="hover:text-white cursor-pointer">Regions</li>
            <li onClick={()=> {
              const section = document.getElementById("OurFeatures");
              section?.scrollIntoView({ behavior: "smooth" });
            }} className="hover:text-white cursor-pointer">About</li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-4">Popular Walks</h3>
          <ul className="space-y-10 gap-y-10 text-gray-300">
            <Link to='http://localhost:5173/api/walks/B1000000-0000-4000-8000-000000000067'> <li className="hover:text-white cursor-pointer">Sunny Meadow Path</li> </Link>
            <Link to='http://localhost:5173/api/walks/B1000000-0000-4000-8000-000000000092'> <li className="hover:text-white cursor-pointer">Valley Breeze Trail</li> </Link>
            <Link to='http://localhost:5173/api/walks/B1000000-0000-4000-8000-000000000097'> <li className="hover:text-white cursor-pointer">Alpine Peak Trek</li> </Link>
            <Link to='http://localhost:5173/api/walks/B1000000-0000-4000-8000-000000000100' > <li className="hover:text-white cursor-pointer">Cliff Horizon Walk</li> </Link>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <div className="flex space-x-4">
            <button
              onClick={() => {
                window.open(
                  `https://www.facebook.com`,
                  "_blank"
                );
              }}
            >
              <Facebook className="cursor-pointer hover:text-green-300" />
            </button>
              <button
              onClick={() => {
                window.open(
                  `https://www.instagram.com`,
                  "_blank"
                );
              }}
            >
            <Instagram className="cursor-pointer hover:text-green-300" />
            </button>
              <button
              onClick={() => {
                window.open(
                  `https://www.x.com`,
                  "_blank"
                );
              }}
            >
            <Twitter className="cursor-pointer hover:text-green-300" />
            </button>
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