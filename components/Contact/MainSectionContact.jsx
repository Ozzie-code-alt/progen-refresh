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
      <ThreeColumnFooter/>
      <Footer />
    </main>
  )
}

export default MainSectionContact