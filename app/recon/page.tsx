import React from "react";
import TransitionComponent from "@/components/Global/TransitionComponent";
import MainSectionRecon from "@/components/Recon/MainSectionRecon";
import NavbarGroup from "@/components/Global/NavbarGroup";
const page = () => {
  return (
    <main>
      <NavbarGroup />
      <TransitionComponent />
      <MainSectionRecon />
    </main>
  );
};

export default page;
