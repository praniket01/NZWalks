import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="bg-[#f6f1e9] min-h-screen">

      <Navbar />

      <section className="py-12 px-6 md:px-16">
        <h1 className="text-3xl font-bold">Welcome back 👋</h1>
      </section>

      <section className="py-12 px-6 md:px-16">
        <h2 className="text-2xl font-semibold">Quick Actions</h2>
      </section>

      <section className="py-12 px-6 md:px-16">
        <h2 className="text-2xl font-semibold">Recommended Walks</h2>
      </section>

      <section className="py-12 px-6 md:px-16">
        <h2 className="text-2xl font-semibold">Explore Regions</h2>
      </section>

      <Footer />

    </div>
  );
};

export default Home;