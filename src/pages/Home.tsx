import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import QuickActions from "../Components/QuickActions";
import RecommendedWalks from "../Components/RecommendedWalks";

const Home = () => {
  return (
    <div className="bg-[#f6f1e9] min-h-screen">
      <HeroSection />
     
      <QuickActions />

      <RecommendedWalks />

      <section className="py-12 px-6 md:px-16">
        <h2 className="text-2xl font-semibold">Explore Regions</h2>
      </section>

      <Footer />

    </div>

  );
};

export default Home;