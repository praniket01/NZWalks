import Features from './Components/Features'
import './App.css'
import FamousWalksSection from './Components/FamousWalksSection'
import HeroSection from './Components/Hero'
import heroImage from './assets/Hero.jpg'
import Footer from './Components/Footer'


function App() {

  return (
    <div className="bg-[#efefef] min-h-screen">
      <HeroSection imageUrl= {heroImage} motto='Walk Through the Heart of country' description='Discover scenic trails, peaceful forests, dramatic coastlines, and breathtaking mountain paths across New Zealand. Start your journey and experience nature like never before.'/>
      <FamousWalksSection />
      <Features />
      <Footer />
    </div>
  )
}

export default App
