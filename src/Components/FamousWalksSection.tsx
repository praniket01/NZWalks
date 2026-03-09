import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Abel from './../assets/FamousWalks/Abel.jpg'
import Hooker from './../assets/FamousWalks/Hooker.jpg'
import Roys from './../assets/FamousWalks/Roys.jpg'
import Milford from './../assets/FamousWalks/Milford.jpg'
import Tongariro from './../assets/FamousWalks/Tongariro.jpg'

type Walk = {
  id: number;
  title: string;
  location: string;
  image: string;
};

const walks: Walk[] = [
  {
    id: 1,
    title: "Tongariro Alpine Crossing",
    location: "Tongariro National Park",
    image: Tongariro,
  },
  {
    id: 2,
    title: "Hooker Valley Track",
    location: "Aoraki / Mount Cook",
    image: Hooker,
  },
  {
    id: 3,
    title: "Roys Peak Track",
    location: "Wanaka",
    image: Roys,
  },
  {
    id: 4,
    title: "Milford Track",
    location: "Fiordland",
    image: Milford,
  },
  {
    id: 5,
    title: "Abel Tasman Coast Track",
    location: "Abel Tasman National Park",
    image: Abel,
  },
];

const FamousWalksSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 320;
      scrollRef.current.scrollBy({
        left: direction === "right" ? cardWidth : -cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 px-6 md:px-16 ">
      <h2 className="text-3xl font-bold mb-10">Famous Walks</h2>

      <div className="relative">

    
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
        >
          <ChevronLeft size={28} />
        </button>

       
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth"
        >
          {walks.map((walk) => (
            <div
              key={walk.id}
              className="min-w-[300px] bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={walk.image}
                alt={walk.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold">{walk.title}</h3>
                <p className="text-gray-500">{walk.location}</p>
              </div>
            </div>
          ))}
        </div>

       
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
        >
          <ChevronRight size={28} />
        </button>

      </div>
    </section>
  );
};

export default FamousWalksSection;