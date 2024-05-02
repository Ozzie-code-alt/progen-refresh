import React from "react";
import HeroSection from "@/components/LandingPage/HeroSection";
import PageTransition from "@/components/Global/PageTransition";
import PrometheusPlayer from "@/components/LandingPage/PrometheusPlayer";
import Services from "@/components/LandingPage/Services";
import Footer from "@/components/Global/Footer";
import StarshipCaptains from "@/components/LandingPage/StarshipCaptains";
import dynamic from "next/dynamic";
import Navbar from "@/components/Global/Navbar";
import ThreeColumnFooter from "@/components/Global/LargeBreakpointFooter"
const StarshipandBrandsNoSSR = dynamic(() => import("@/components/LandingPage/StarshipsAndBrands"), { ssr: false });

const LandingPage = () => {
  return (
    <div className="h-auto bg-black overflow-x-hidden w-screen">
      <PageTransition>
        <Navbar/>
        <HeroSection />
        <PrometheusPlayer />
        <Services />
        <StarshipandBrandsNoSSR />
        <StarshipCaptains />
        <ThreeColumnFooter/>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default LandingPage;
