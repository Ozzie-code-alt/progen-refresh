import React from 'react'
import Header from '@/components/Global/HeaderHero'
import PageTitle from '@/components/Global/PageTitle'
import CardComponentSection from '@/components/About/CardComponentSection'
import StarShipsSection from '@/components/About/StarShipSection'
import Footer from '@/components/Global/Footer'
import ThreeColumnFooter from "@/components/Global/LargeBreakpointFooter"

import NavbarGroup from '../Global/NavbarGroup'
const MainSectionAbout = () => {
  return (
    <main>
    
     <NavbarGroup/>
      <Header />
      <PageTitle title="About" />
      <CardComponentSection/>
      <PageTitle title="StarShips" />
      <StarShipsSection/>
      <ThreeColumnFooter/>
      <Footer />
    </main>
  )
}

export default MainSectionAbout