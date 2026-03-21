import React from "react";
import { Link, Router } from "react-router-dom";

interface HeroSectionProps {
  imageUrl: string;
  motto: string;
  description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  imageUrl,
  motto,
  description,
}) => {

  return (
    <section className="w-full min-h-150 flex items-center pt-20">
      <div className="max-w-10xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div className="flex justify-center md:justify-start">
          <img
            src={imageUrl}
            alt="Hero"
            className="rounded-2xl shadow-lg w-full object-cover
            [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]
            "
          />
        </div>

        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {motto}
          </h1>

          {description && (
            <p className="text-lg text-gray-600 max-w-xl">
              {description}
            </p>
          )}

          <div className="flex gap-4 justify-center md:justify-start">
            <Link className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-gray-800 transition"
              to={'./Signin'}>
              Get Started
            </Link>

            <button
              onClick={() => {
                const section = document.getElementById("OurFeatures");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;