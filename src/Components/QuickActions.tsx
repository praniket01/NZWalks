import { useNavigate } from "react-router-dom";
import { Map, Compass, Bookmark, Clock } from "lucide-react";

const QuickActions = () => {

  const navigate = useNavigate();

  const actions = [
    {
      title: "Explore Walks",
      icon: <Compass size={28} />,
      path: "/walks",
    },
    {
      title: "Browse Regions",
      icon: <Map size={28} />,
      path: "/regions",
    },
    {
      title: "Saved Walks",
      icon: <Bookmark size={28} />,
      path: "/saved",
    },
    {
      title: "Recently Added",
      icon: <Clock size={28} />,
      path: "/recent",
    },
  ];

  return (
    <section className="py-12">

      <h2 className="text-2xl font-semibold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {actions.map((action, index) => (
          <div
            key={index}
            onClick={() => navigate(action.path)}
            className="cursor-pointer bg-white shadow-md rounded-xl p-6 flex flex-col items-center gap-3 hover:shadow-xl hover:scale-105 transition"
          >
            <div className="text-green-700">
              {action.icon}
            </div>

            <h3 className="font-medium text-gray-800">
              {action.title}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
};

export default QuickActions;