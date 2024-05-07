import React from "react";
import MainSectionWork from "@/components/OurWorks/MainSectionWork";
import TransitionComponent from "@/components/Global/TransitionComponent";
import NavbarGroup from "@/components/Global/NavbarGroup";
const page = () => {
  return (
    <main>
      <TransitionComponent />
      <NavbarGroup/>
      <MainSectionWork />
    </main>
  );
};

export default page;
