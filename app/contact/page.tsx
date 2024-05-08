import TransitionComponent from "@/components/Global/TransitionComponent";
import React from "react";
import MainSectionContact from "@/components/Contact/MainSectionContact";
import NavbarGroup from "@/components/Global/NavbarGroup";
const page = () => {
  return (
    <main>
      <NavbarGroup />
      <TransitionComponent />
      <MainSectionContact />
    </main>
  );
};

export default page;
