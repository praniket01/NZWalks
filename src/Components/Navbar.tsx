import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const logout  = useAuthStore((state)=>state.logout);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 md:px-16 py-4">
      <div className="flex items-center justify-between">

    
        <div
          className="text-2xl font-bold text-green-800 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          NZ Walks
        </div>

       
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <button onClick={() => navigate("/home")} className="hover:text-green-700">
            Home
          </button>
          <button onClick={() => navigate("/walks")} className="hover:text-green-700">
            Walks
          </button>
          <button onClick={() => navigate("/regions")} className="hover:text-green-700">
            Regions
          </button>
        </div>

     
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search walks..."
            className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

  
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            Profile
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
              <button
                onClick={() => navigate("/profile")}
                className="block w-full text-left px-3 py-2 hover:bg-gray-100"
              >
                My Profile
              </button>

              <button
                onClick={() => navigate("/saved")}
                className="block w-full text-left px-3 py-2 hover:bg-gray-100"
              >
                Saved Walks
              </button>

              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;