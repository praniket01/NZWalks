import { useNavigate } from "react-router-dom";
import Hero from '../assets/Hero.jpg'
import { useAuthStore } from "../store/AuthStore";

const HeroSection = () => {

  const navigate = useNavigate();
  const userName = useAuthStore((state) => state.userName);

  return (
    <section className="py-16">

      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center justify-between gap-8">

        
        <div>

          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Welcome back, {userName} 👋
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            Ready to explore your next New Zealand adventure?
          </p>

          
          <div className="flex gap-3">

            <input
              type="text"
              placeholder="Search walks..."
              className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            <button
              onClick={() => navigate("/walks")}
              className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
            >
              Explore Walks
            </button>

          </div>

        </div>

        
        <div className="hidden md:block">
          <img
            src={Hero}
            alt="NZ Walk"
            className="rounded-2xl shadow-lg w-full object-cover
            [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]
            "
          />
        </div>

      </div>

    </section>
  );
};

export default HeroSection;