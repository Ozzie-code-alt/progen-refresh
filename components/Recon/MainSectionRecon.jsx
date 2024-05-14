import React from "react";
import Header from "@/components/Global/HeaderHero";
import PageTitle from "../Global/PageTitle";
import Footer from "../Global/Footer";
import ThreeColumnFooter from "../Global/LargeBreakpointFooter";
const MainSectionRecon = () => {
  return (
    <main>
      <Header />
      <PageTitle title="Recon" />
      <div className="w-full pb-10 h-full">
        <div className="p-10">
          <img
            className=" border-2 border-white w-full h-full"
            src="/ReconAssets/recon.webp"
          />
        </div>
      </div>
      <footer>
          <div className="md:hidden">
            <Footer />
          </div>

          <div className="hidden md:block">
            <ThreeColumnFooter />
          </div>
        </footer>
    </main>
  );
};

export default MainSectionRecon;
