import React from 'react'
import Header from '../Global/HeaderHero'
import PageTitle from '../Global/PageTitle'
import ContactForm from './ContactForm'
import Footer from '../Global/Footer'
import ThreeColumnFooter from '../Global/LargeBreakpointFooter'
const MainSectionContact = () => {
  return (
    <main>
      <Header />
      <PageTitle title="Contact Us" />
      <ContactForm />
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

export default MainSectionContact