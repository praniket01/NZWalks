import { useEffect, useState } from "react";
import WalkCard from "./WalkCard";
import axiosInstance from "../api/axioInstance";
import { useAuthStore } from "../store/AuthStore";

type Walk = {
  id: string;
  name: string;
  description: string;
  length: number;
  walkImageUrl: string;

  region: {
    id: string;
    name: string;
  };

  difficulty: {
    id: string;
    name: string;
  };
};

const RecommendedWalks = () => {
    const [walks, setWalks] = useState<Walk[]>([]);
    const [loading, setLoading] = useState(true);
    const token = useAuthStore((state) => state.token);

    const fetchWalks = async () => {
        try {
            const recommendedWalks = await axiosInstance.get('/walks?pageNumber=1&pageSize=6',{
                headers:{
                    Authorization : 'Bearer '+ token
                }
            });
            console.log(recommendedWalks);
            setWalks(recommendedWalks.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWalks();
    }, []);

    return (
        <section className="py-12">

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">
                    Recommended Walks
                </h2>

                <button
                    className="text-green-700 font-medium hover:underline"
                >
                    View All
                </button>
            </div>

            {loading ? (
                <p>Loading walks...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {walks.slice(0, 6).map((walk) => (
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

        </section>
    );
};

export default RecommendedWalks;