import { useEffect, useState } from "react";
import RegionCard from "./RegionCard";
import axiosInstance from "../api/axioInstance";
import { useAuthStore } from "../store/AuthStore";

type Region = {
  id: string;
  name: string;
  regionImageUrl: string;
};

const ExploreRegions = () => {

  const [regions, setRegions] = useState<Region[]>([]);
  const token = useAuthStore((state)=> state.token);

  const fetchRegions = async () => {
    try {
      const regions = await axiosInstance.get('/region',{
        headers : {
            Authorization : 'Bearer '+ token
        }
      });

      setRegions(regions.data);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRegions();
  }, []);

  return (
    <section className="py-12">

      <h2 className="text-2xl font-semibold mb-6">
        Explore Regions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {regions.slice(0, 4).map((region) => (
          <RegionCard
            key={region.id}
            id={region.id}
            name={region.name}
            image={region.regionImageUrl}
          />
        ))}

      </div>

    </section>
  );
};

export default ExploreRegions;