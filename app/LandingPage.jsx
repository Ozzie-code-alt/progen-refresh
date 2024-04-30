import React from "react";
import HeroSection from "@/components/LandingPage/HeroSection";
import PageTransition from "@/components/Global/PageTransistion";
import PrometheusPlayer from "@/components/LandingPage/PrometheusPlayer";
import Services from "@/components/LandingPage/Services";
import Footer from "@/components/Global/Footer";
import StarshipsAndBrands from "@/components/LandingPage/StarshipsAndBrands";
import StarshipCaptains from "@/components/LandingPage/StarshipCaptains";
const LandingPage = () => {
  return (
    <div className="h-auto bg-black overflow-x-hidden w-screen">
      <PageTransition>
        <HeroSection />
        <PrometheusPlayer />
        <Services />
        <StarshipsAndBrands />
        <StarshipCaptains />
        <Footer />
      </PageTransition>
    </div>
  );
};

export default LandingPage;
