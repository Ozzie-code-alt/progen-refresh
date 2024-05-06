import React from "react";
import MainSectionWork from "@/components/OurWorks/MainSectionWork";
import TransitionComponent from "@/components/Global/TransitionComponent";
import Navbar from "@/components/Global/Navbar";
const page = () => {
  return (
    <main>
      <TransitionComponent />
      <Navbar />
      <MainSectionWork />
    </main>
  );
};

export default page;
