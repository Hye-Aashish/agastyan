import React from 'react'
import CareerTerminalSection from '../components/CareerTerminalSection'
import HeroSection from './HeroSection'
import OurCoruses from './OurCoruses'
import PlacementProcess from './PlacementProcess'
import Demo from './Demo'
import StudentCertification from './StudentCertification'
import OwnerTrustSection from './OwnerTrustSection'
import ApplyNowPopup from '../components/ApplyNowPopup'
import StatsCounter from '../components/StatsCounter'
import Testimonials from '../components/Testimonials'
import FaqSection from '../components/FaqSection'

const Home = () => {
  return (
    <>
      <ApplyNowPopup />
      <HeroSection />
      <CareerTerminalSection />
      <StatsCounter />
      <OurCoruses />
      <PlacementProcess />
      <Demo />
      <StudentCertification />
      <Testimonials />
      <OwnerTrustSection />
      <FaqSection />
    </>
  )
}

export default Home