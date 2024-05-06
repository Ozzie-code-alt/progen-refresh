"use client";
import SubSectionPage from "@/components/OurWorks/SubSection";
import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";
const Subpage = () => {


  const SubSectionPageDynamic = dynamic(() => import("@/components/OurWorks/SubSection"), {ssr: false})
  return (
    <Suspense fallback={<div>AiFillPlayCircle...</div>}>
      <>
       <div>
        <SubSectionPageDynamic/>
       </div>
      </>
    </Suspense>
  );
};

export default Subpage;
