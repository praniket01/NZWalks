import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchWalks = () => {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleSearch = () => {

    const params = new URLSearchParams();

    if (search) params.append("name", search);
    if (region) params.append("region", region);
    if (difficulty) params.append("difficulty", difficulty);

    navigate(`/walks?${params.toString()}`);
  };

  return (
    <section className="py-12">

      <div className="bg-white rounded-xl shadow-md p-6">

        <h2 className="text-2xl font-semibold mb-6">
          Find Your Perfect Walk
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          
          <input
            type="text"
            placeholder="Search walks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg px-3 py-2"
          />

       
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option value="">All Regions</option>
            <option value="Motueka">Motueka</option>
            <option value="Nelson">Nelson</option>
            <option value="Tasman">Tasman</option>
          </select>

         
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option value="">All Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

       
          <button
            onClick={handleSearch}
            className="bg-green-700 text-white rounded-lg px-4 py-2 hover:bg-green-800"
          >
            Search
          </button>

        </div>

      </div>

    </section>
  );
};

export default SearchWalks;