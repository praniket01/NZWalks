import { useEffect, useState } from "react";
import axios from "axios";
import WalkCard from "./WalkCard";
import axiosInstance from "../api/axioInstance";
import { useAuthStore } from "../store/AuthStore";

type Walk = any;

const WalkList = () => {

  const [walks, setWalks] = useState<Walk[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(6);
  const [loading, setLoading] = useState(false);
  const token = useAuthStore((state) => state.token);

  const fetchWalks = async () => {
    try {
      setLoading(true);

      const res = await axiosInstance.get(`walks?pageNumber=${pageNumber}&pageSize=${pageSize}`,
        {
          headers :{
            Authorization : 'Bearer '+ token
          }
        });

      setWalks(res.data);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWalks();
  }, [pageNumber]);

  return (
    <div>

      
      {loading ? (
        <p>Loading...</p>
      ) : (
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
            />
          ))}
        </div>
      )}


      <div className="flex justify-center gap-4 mt-8">

        <button
          disabled={pageNumber === 1}
          onClick={() => setPageNumber((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="px-4 py-2 font-medium">
          Page {pageNumber}
        </span>

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