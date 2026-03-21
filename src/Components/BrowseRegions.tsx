import { useEffect, useState } from "react";
import axios from "axios";
import RegionCard from "./RegionCard";
import { useAuthStore } from "../store/AuthStore";

type Region = {
  id: string;
  name: string;
  regionImageUrl: string;
};

const BrowseRegions = () => {

  const [regions, setRegions] = useState<Region[]>([]);
  const token = useAuthStore((state) => state.token);

  const fetchRegions = async () => {
    try {
      const res = await axios.get(
        "https://nzwalksbackend.runasp.net/api/region",
        {
            headers : {
                Authorization : 'Bearer ' + token
            }
        }
      );

      setRegions(res.data);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRegions();
  }, []);

  return (
    <section className="py-16 px-6 md:px-16">

      <h2 className="text-3xl font-bold mb-8">
        Browse Regions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {regions.map((region) => (
          <RegionCard
                id={region.id}
                name={region.name}
                image={region.regionImageUrl}        />
        ))}

      </div>

    </section>
  );
};

export default BrowseRegions;