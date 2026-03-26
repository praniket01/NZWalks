import axios from "axios";
import { Heart, MapPin, Mountain, Ruler } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axioInstance";
import { useAuthStore } from "../store/AuthStore";
import { header } from "framer-motion/client";

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

  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = useAuthStore((state)=> state.token);
  const navigate = useNavigate();

  const handleSaveToggle = async () =>{
    if(loading) return;
    try {
    if(!saved){
      await axiosInstance.post(`walks/save/${id}`,{

      },{
        headers : {
          Authorization : 'Bearer '+token
        }
      });
      console.log("saved "+id);
      setSaved(true);
    }else{
      await axiosInstance.delete(`walks/unsave/${id}`,{
        headers : {
          Authorization : 'Bearer '+token
        }
      });
      setSaved(false);
    } 
    } catch (error) {
        console.log(error)
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <div
      onClick={() => navigate(`/walks/${id}`)}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl hover:scale-[1.02] transition"
    >
     <button
        
        onClick={(e)=>{
          e.stopPropagation(); 
          handleSaveToggle()
        }}
        className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-110 transition"
      >
        <Heart
          size={20}
          className={saved ? "text-red-500" : "text-gray-400"}
          fill={saved ? "currentColor" : "none"}
        />
      </button> 
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