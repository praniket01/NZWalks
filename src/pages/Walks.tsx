import Filters from "../Components/Filters";
import WalkList from "../Components/WalkList";

const Walks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      
      <div className="md:col-span-1">
        <Filters />
      </div>

      
      <div className="md:col-span-3">
        <WalkList />
      </div>

    </div>
  );
};

export default Walks;