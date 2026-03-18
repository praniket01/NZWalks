import ExploreRegions from "../Components/ExploreRegions";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import QuickActions from "../Components/QuickActions";
import RecommendedWalks from "../Components/RecommendedWalks";

const Home = () => {
  return (
    <div className="bg-[#f6f1e9] min-h-screen">
      <HeroSection />
     
      {/* <SearchWalks /> */}

      <QuickActions />

      <RecommendedWalks />

      <ExploreRegions />

      <Footer />

    </div>

  );
};

export default Home;