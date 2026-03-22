import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";
import logo from '../assets/logo.jpg'
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const logout = useAuthStore((state) => state.logout);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    navigate("/signin");
  };

  useEffect(() => {
    if (!search.trim()) {
      setResults([]);
      return;
    }
    const timeout = setTimeout(async () => {
      try {
        const res = await axios.post(
          `https://nzwalksbackend.runasp.net/api/walks/search`, {
          searchQuery: search
        }
        );
        setResults(res.data);
        setShowDropdown(true);
      } catch (err) {
        console.error(err);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [search]);

      useEffect(() => {
      const handleClick = () => setShowDropdown(false);
      window.addEventListener("click", handleClick);
      return () => window.removeEventListener("click", handleClick);
    }, []);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 md:px-16 py-4">
      <div className="flex items-center justify-between">


        <img
          src={logo}
          className="h-auto w-40 cursor-pointer"
          onClick={() => navigate("/home")}
        >

        </img>


        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <button onClick={() => navigate("/home")} className="text-xl hover:text-green-700">
            Home
          </button>
          <button onClick={() => navigate("/walks")} className="text-xl hover:text-green-700">
            Walks
          </button>
          <button onClick={() => navigate("/regions")} className="text-xl hover:text-green-700">
            Regions
          </button>
        </div>


        <div className="relative">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowDropdown(true)}
            className="border px-3 py-2 rounded-lg w-64"
            placeholder="Search walks..."
          />


          {showDropdown && results.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 z-50">

              {results.map((walk: any) => (
                <div
                  key={walk.id}
                  className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    navigate(`api/walks/${walk.id}`);
                    setShowDropdown(false);
                  }}
                >

                  <img
                    src={walk.walkImageUrl}
                    className="w-12 h-12 rounded-md object-cover"
                  />

                  <div>
                    <p className="font-medium text-sm">
                      {walk.name}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-1">
                      {walk.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          )}

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