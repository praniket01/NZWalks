import { useState } from "react";
import Filters from "../Components/Filters";
import WalkList from "../Components/WalkList";

const Walks = () => {

  const [region,setRegion] = useState('');
  const [difficulty,setDifficulty] = useState('');

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">

    
      <Filters
        region={region}
        setRegion={setRegion}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />

 
      <WalkList
        region={region}
        difficulty={difficulty}
      />

    </div>
  );
};

export default Walks;