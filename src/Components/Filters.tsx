import { useState } from "react";

const Filters = () => {

  const [region, setRegion] = useState("");
  const [difficulty, setDifficulty] = useState("");

  return (
    <div className="bg-white p-5 rounded-xl shadow-md space-y-4">

      <h3 className="font-semibold text-lg">Filters</h3>

      
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="w-full border p-2 rounded-lg"
      >
        <option value="">All Regions</option>
        <option value="Motueka">Motueka</option>
        <option value="Nelson">Nelson</option>
      </select>

      
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="w-full border p-2 rounded-lg"
      >
        <option value="">All Difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

    </div>
  );
};

export default Filters;