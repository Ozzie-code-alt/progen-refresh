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
      <footer>
          <div className="md:hidden">
            <Footer />
          </div>

          <div className="hidden md:block">
            <ThreeColumnFooter />
          </div>
        </footer>
    </main>
  )
}

export default MainSectionAbout