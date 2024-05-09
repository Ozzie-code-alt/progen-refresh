import React from "react";
import Navbar from "@/components/Global/Navbar";
import Header from "@/components/Global/HeaderHero";
import PageTitle from "@/components/Global/PageTitle";
import BlogsSection from "@/components/Blogs/BlogsSection";
import Footer from "@/components/Global/Footer";
import ThreeColumnFooter from "@/components/Global/LargeBreakpointFooter";
import PageTransition from "../Global/PageTransition";
const MainSectionBlogs = () => {
  return (
    <div className="bg-black">
      <PageTransition>
        <Header />
        <PageTitle title="Blogs" />
        <div className="z-0 relative">
          <BlogsSection />
        </div>
        <ThreeColumnFooter />
        <Footer />
      </PageTransition>
    </div>
  );
};

export default MainSectionBlogs;
