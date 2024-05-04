import React from "react";
import Header from "@/components/Global/HeaderHero";
import PageTitle from "@/components/Global/PageTitle";
import { worksData } from "@/app/contants";
import Link from "next/link";
import Footer from "@/components/Global/Footer";
import ThreeColumnFooter from "@/components/Global/LargeBreakpointFooter";
const MainSectionWork = () => {
  return (
    <main>
      <Header />
      <PageTitle title="Our Works" />
      <div className="mt-10 mb-10">
        <div className="flex flex-row flex-wrap justify-center mx-10">
          {worksData.map((works, index) => {
            return (
              <div className="w-full md:w-1/3 relative group" key={index}>
                <Link href={`#`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in"></div>
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <img
                    src={works.img}
                    alt="Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-center px-5">
                    <p className="text-white font-ox font-black text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in">
                      {works.title.toLocaleUpperCase()}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <ThreeColumnFooter/>
      <Footer />
    </main>
  );
};

export default MainSectionWork;
