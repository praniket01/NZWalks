import { Heart } from "lucide-react";
import WalkCard from "../Components/WalkCard";
import { useAuthStore } from "../store/AuthStore";
import { useNavigate } from "react-router-dom";
import nocontent from '../assets/empty-state.png'

const SavedWalks = () => {
  const savedWalks = useAuthStore((s) => s.savedWalks);
  const navigate = useNavigate();

  return (
    <div className="px-6 md:px-16 py-10">

      <h1 className="flex items-center gap-2 text-2xl font-bold mb-6">
        Your Saved Walks <Heart className="text-red-500 fill-red-500 hover:scale-110 transition"/>
      </h1>

      
      {savedWalks.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-center">

          <img
            src= {nocontent}
            alt="No saved walks"
            className="w-64 mb-6 opacity-80"
          />

          <h2 className="text-xl font-semibold mb-2">
            No saved walks yet
          </h2>

          <p className="text-gray-500 mb-4">
            Start exploring and save your favorite walks
          </p>

          <button
            onClick={() => navigate("/walks")}
            className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800"
          >
            Explore Walks
          </button>

        </div>
      ) : (

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {savedWalks.map((walk) => (
            <WalkCard
              key={walk.id}
              id={walk.id}
              name={walk.name}
              description={walk.description}
              length={walk.length}
              walkImageUrl={walk.walkImageUrl}
              regionName={walk.region.name}
              difficulty={walk.difficulty.name}
            />
          ))}
        </div>

      )}

    </div>
  );
};

export default SavedWalks;