import React from "react";
import first from './../assets/Features/first.jpg'
import second from './../assets/Features/second.jpg'
import third from './../assets/Features/third.jpg'


type Feature = {
  title: string;
  description: string;
  image: string;
};

const features: Feature[] = [
  {
    title: "Explore Rich Regions",
    description:
      "Browse walking trails across New Zealand’s diverse regions. From alpine landscapes to coastal paths, discover the beauty of every region.",
    image: first,
  },
  {
    title: "Discover Famous Walks",
    description:
      "Explore iconic walking tracks like Tongariro Alpine Crossing, Roys Peak, and Milford Track with detailed information.",
    image: second,
  },
  {
    title: "Plan Your Next Adventure",
    description:
      "Find the perfect trail based on your location, time, and experience level to make every walk memorable.",
    image: third,
  },
];

const Features: React.FC = () => {
  return (
    <section id="OurFeatures" className="py-20 px-6 md:px-16 bg-[#efefef]">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Features</h2>
          <p className="text-gray-600">
            Everything you need to explore New Zealand's best walking trails.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <img
            src={features[0].image}
            alt={features[0].title}
            className="rounded-xl shadow-lg"
          />

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              {features[0].title}
            </h3>
            <p className="text-gray-600">
              {features[0].description}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              {features[1].title}
            </h3>
            <p className="text-gray-600">
              {features[1].description}
            </p>
          </div>

          <img
            src={features[1].image}
            alt={features[1].title}
            className="rounded-xl shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={features[2].image}
            alt={features[2].title}
            className="rounded-xl shadow-lg"
          />

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              {features[2].title}
            </h3>
            <p className="text-gray-600">
              {features[2].description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;