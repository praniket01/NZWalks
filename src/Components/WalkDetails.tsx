import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore } from "../store/AuthStore";
import { CalendarCheck, Compass, Heart, MapPin, Mountain, Ruler } from "lucide-react";

const WalkDetails = () => {

    const { id } = useParams();
    const [walk, setWalk] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const token = useAuthStore((state) => state.token);

    const fetchWalk = async () => {
        try {
            const res = await axios.get(
                `https://nzwalksbackend.runasp.net/api/walks/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
            );
            setWalk(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWalk();
    }, [id]);

    if (loading) return <p className="p-10">Loading...</p>;
    if (!walk) return <p className="p-10">Walk not found</p>;

    return (
        <div className="bg-[#f6f1e9] px-6 min-h-screen">

            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">


                <img
                    src={walk.walkImageUrl}
                    alt={walk.name}
                    className="w-full h-full object-cover scale-105"
                />


                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-6 left-6 md:left-16">

                    <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-wide">
                        {walk.name}
                    </h1>

                    <p className="text-gray-200 mt-1 text-sm md:text-base">
                        {walk.region.name}
                    </p>

                </div>

            </div>

            <div className="px-6 md:px-16 py-10">


                <div className="flex flex-wrap gap-4 mb-8">

                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow text-sm">
                        <MapPin size={16} className="text-green-700" />
                        {walk.region.name}
                    </div>

                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow text-sm">
                        <Mountain size={16} className="text-green-700" />
                        {walk.difficulty.name}
                    </div>

                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow text-sm">
                        <Ruler size={16} className="text-green-700" />
                        {walk.length} km
                    </div>


                </div>



                <div className="px-6 md:px-16 py-10">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">


                        <div className="md:col-span-2">

                            <h2 className="text-2xl font-semibold mb-4">
                                Overview
                            </h2>

                            <p className="text-gray-700 leading-relaxed">
                                {expanded
                                    ? walk.description
                                    : walk.description.substring(0, 200) + "..."}
                            </p>

                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="text-green-700 mt-3 font-medium"
                            >
                                {expanded ? "Show Less" : "Read More"}
                            </button>

                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-24">

                            <h3 className="text-lg font-semibold mb-4">
                                Plan Your Walk
                            </h3>

                            <div className="flex flex-col gap-4">


                                <button className="flex items-center justify-center gap-2 bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition shadow-sm">
                                    <CalendarCheck size={18} />
                                    Book Trip
                                </button>


                                <button
                                    onClick={() => {
                                        const query = `${walk.name} ${walk.region.name}`;
                                        window.open(
                                            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
                                            "_blank"
                                        );
                                    }}
                                    className="flex items-center justify-center gap-2 border py-3 rounded-lg hover:bg-gray-100 transition shadow-sm"
                                >
                                    <MapPin size={18} />
                                    Locate on Map
                                </button>

                            </div>

                        </div>

                    </div>

                </div>


            </div>

        </div>
    );
};

export default WalkDetails;