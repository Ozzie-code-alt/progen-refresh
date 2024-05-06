import React from "react";
import MainSectionBlogs from "@/components/Blogs/MainSectionBlogs";
import TransitionComponent from "@/components/Global/TransitionComponent";
import Navbar from "@/components/Global/Navbar";
const page = () => {
  return (
    <main>
      <Navbar />
      <TransitionComponent />
      <MainSectionBlogs />
    </main>
  );
};

export default page;
