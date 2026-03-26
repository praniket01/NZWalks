import { useEffect, useState } from "react";
import axiosInstance from "../api/axioInstance";
import WalkCard from "./WalkCard";
import { useAuthStore } from "../store/AuthStore";

type Props = {
  region: string;
  difficulty: string;
};

const WalkList = ({ region, difficulty }: Props) => {

  const token = useAuthStore((state) => state.token);

  const [walks, setWalks] = useState([]);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 6;

  const fetchWalks = async () => {
    try {
      let url = `/walks?pageNumber=${pageNumber}&pageSize=${pageSize}`;

      
      if (region) {
        url += `&filterOn=Region&filterQuery=${region}`;
      } else if (difficulty) {
        url += `&filterOn=Difficulty&filterQuery=${difficulty}`;
      }

      const res = await axiosInstance.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setWalks(res.data);

    } catch (err) {
      console.error(err);
    }


  };
const fetchSaved = async () => {
  const res = await axiosInstance.get(
    'walks/saved',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  
  const ids = res.data.value.map((w: any) => w.id);
  
  setSavedIds(ids);
  
};

useEffect(() => {
  if (token) {
    fetchSaved();
  }
}, [token]);

  useEffect(() => {
    fetchWalks();
  }, [region, difficulty, pageNumber]);

  useEffect(() => {
    setPageNumber(1);
  }, [region, difficulty]);

  return (
    <div className="md:col-span-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {walks.map((walk: any) => (
          <WalkCard
            key={walk.id}
            id={walk.id}
            name={walk.name}
            description={walk.description}
            length={walk.length}
            walkImageUrl={walk.walkImageUrl}
            regionName={walk.region.name}
            difficulty={walk.difficulty.name}
            isSaved={savedIds.includes(walk.id)}
          />
        ))}
      </div>

 
      <div className="flex justify-center gap-4 mt-8">

        <button
          disabled={pageNumber === 1}
          onClick={() => setPageNumber((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span>Page {pageNumber}</span>

        <button
          onClick={() => setPageNumber((prev) => prev + 1)}
          className="px-4 py-2 bg-green-700 text-white rounded"
        >
          Next
        </button>

      </div>

    </div>
  );
};

export default WalkList;