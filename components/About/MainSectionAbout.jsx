import React from 'react'
import Header from '@/components/Global/HeaderHero'
import PageTitle from '@/components/Global/PageTitle'
import CardComponentSection from '@/components/About/CardComponentSection'
import StarShipsSection from '@/components/About/StarShipSection'
import Footer from '@/components/Global/Footer'
import ThreeColumnFooter from "@/components/Global/LargeBreakpointFooter"
import Narbar from "@/components/Global/Navbar"
const MainSectionAbout = () => {
  return (
    <main>
    
     <Narbar/>
      <Header />
      <PageTitle title="Our Works" />
      <CardComponentSection/>
      <PageTitle title="StarShips" />
      <StarShipsSection/>
      <ThreeColumnFooter/>
      <Footer />
    </main>
  )
}

export default MainSectionAbout