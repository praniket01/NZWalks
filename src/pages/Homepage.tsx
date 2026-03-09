import React from 'react'
import HeroSection from '../Components/Hero'
import FamousWalksSection from '../Components/FamousWalksSection'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import heroImage from './../assets/Hero.jpg'

const Homepage = () => {
    return (
        <div>
            <HeroSection imageUrl={heroImage} motto='Walk Through the Heart of country' description='Discover scenic trails, peaceful forests, dramatic coastlines, and breathtaking mountain paths across New Zealand. Start your journey and experience nature like never before.' />
            <FamousWalksSection />
            <Features />
            <Footer />
        </div>
    )
}

export default Homepage