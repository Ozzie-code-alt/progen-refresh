import React from "react";
import MainSectionBlogs from "@/components/Blogs/MainSectionBlogs";
import TransitionComponent from "@/components/Global/TransitionComponent";
const page = () => {
  return (
    <main>
      <TransitionComponent />
      <MainSectionBlogs />
    </main>
  );
};

export default page;
