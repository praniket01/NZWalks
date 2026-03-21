import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";


const HeroSection = ({ Hero }: { Hero: string }) => {

    const navigate = useNavigate();
  const userName = useAuthStore((state) => state.userName);
  
  return (
    <div className="relative h-[500px] rounded-2xl overflow-hidden">

      <motion.img
        src={Hero}
        alt="NZ Walk"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, ease: "easeInOut" }}
      />

      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-10 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome back, {userName} 👋
          </h1>

          <p className="text-gray-200 text-lg mb-6">
            Discover breathtaking walks across New Zealand.
          </p>

          <div className="flex gap-3">

            <input
              type="text"
              placeholder="Search walks..."
              className="px-4 py-2 rounded-lg w-64 bg-white/90 backdrop-blur-md focus:outline-none"
            />

            <button
              onClick={() => navigate("/walks")}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Explore
            </button>

          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default HeroSection;