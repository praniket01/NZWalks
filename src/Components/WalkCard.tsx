import { MapPin, Mountain, Ruler } from "lucide-react";
import { useNavigate } from "react-router-dom";

type WalkCardProps = {
  id: string;
  name: string;
  description: string;
  length: number;
  walkImageUrl: string;
  regionName: string;
  difficulty: string;
};

const WalkCard = ({
  id,
  name,
  description,
  length,
  walkImageUrl,
  regionName,
  difficulty,
}: WalkCardProps) => {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/walk/${id}`)}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl hover:scale-[1.02] transition"
    >
      
      <img
        src={walkImageUrl}
        alt={name}
        className="h-48 w-full object-cover"
      />

      
      <div className="p-4">

        <h3 className="font-semibold text-lg text-gray-800 mb-1">
          {name}
        </h3>

        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
          <MapPin size={16} />
          {regionName}
        </div>

        <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
          <Mountain size={16} />
          Difficulty: {difficulty}
        </div>

        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Ruler size={16} />
          Length: {length} km
        </div>

      </div>
    </div>
  );
};

export default WalkCard;