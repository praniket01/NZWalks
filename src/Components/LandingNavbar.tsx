import { Link } from "react-router-dom";


const LandingNavbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-20 px-6 md:px-16 py-4 flex justify-between items-center text-white">

      
      <h1 className="text-2xl font-bold text-green-300">
        NZWalks
      </h1>

      
      <div className="flex gap-6 items-center">

        <button
          onClick={() => {
            document.getElementById("OurFeatures")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-gray-300"
        >
          Features
        </button>

        <Link to="/signin" className="hover:text-gray-300">
          Sign In
        </Link>

        <Link
          to="/signup"
          className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
        >
          Get Started
        </Link>

      </div>

    </div>
  );
};

export default LandingNavbar;