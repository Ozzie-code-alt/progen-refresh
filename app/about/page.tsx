import React from "react";
import MainSectionAbout from "@/components/About/MainSectionAbout";
import TransitionComponent from "@/components/Global/TransitionComponent";
const page = () => {
  return (
    <main>
        <TransitionComponent />
      <MainSectionAbout />
    </main>
  );
};

export default page;
