import React from "react";
import Navbar from "@/components/Global/Navbar";
import Header from "@/components/Global/HeaderHero";
import PageTitle from "@/components/Global/PageTitle";
import BlogsSection from "@/components/Blogs/BlogsSection";
import Footer from "@/components/Global/Footer";
import ThreeColumnFooter from "@/components/Global/LargeBreakpointFooter";
const MainSectionBlogs = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <PageTitle title="Blogs" />
      <BlogsSection/>
      <ThreeColumnFooter/>
      <Footer />
    </div>
  );
};

export default MainSectionBlogs;
