
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-[#f6f1e9] min-h-screen">

      <Navbar />

      <main className="px-6 md:px-16 py-6">
        <Outlet />
      </main>

    </div>
  );
};

export default MainLayout;