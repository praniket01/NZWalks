import { useNavigate } from "react-router-dom";

type RegionCardProps = {
  id: string;
  name: string;
  image: string;
};

const RegionCard = ({ id, name, image }: RegionCardProps) => {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/regions/${id}`)}
      className="relative rounded-xl overflow-hidden cursor-pointer group"
    >

      <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover group-hover:scale-110 transition duration-300"
      />

      
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

        <h3 className="text-white text-xl font-semibold">
          {name}
        </h3>

      </div>

    </div>
  );
};

export default RegionCard;