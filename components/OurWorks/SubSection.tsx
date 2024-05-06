"use client";
import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { workData } from "@/app/contants";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AiFillPlayCircle } from "react-icons/ai";
import Header from "@/components/Global/HeaderHero";
import PageTitle from "@/components/Global/PageTitle";
import Link from "next/link";
import ThreeColumnFooter from "@/components/Global/LargeBreakpointFooter";
import Footer from "@/components/Global/Footer";
import Navbar from "../Global/Navbar";
const SubSectionPage = () => {
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getIndex = searchParams?.get("index") as string;
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Suspense fallback={<div>AiFillPlayCircle...</div>}>
      <>
      <Navbar />
          <Header />
        <div className="mt-5 relative h-auto">
          <PageTitle title="Works" />
          <Link href={`/works`} className="text-white/70">
            <button className="flex flex-row space-x-1 cursor-pointer pt-5  w-full h-full ">
              <div className="flex">
                <HiOutlineArrowNarrowLeft className="h-8 w-8 ml-10 mb-5" />
              </div>

              <div className="flex h-8 z-50 w-8 items-center font-bold font-ox">
                <p>BACK</p>
              </div>
            </button>
          </Link>
          <div className="w-full h-96 flex justify-center items-center relative">
            <AiFillPlayCircle
              className="absolute z-10 w-16 h-16 md:w-16 md:h-16 text-white cursor-pointer"
              onClick={openModal}
            />
            <img
              src={workData[Number(getIndex)].img}
              className="w-full h-full object-cover px-10"
            />

            <div className="absolute flex flex-col bg-black/60 w-full h-full justify-end">
              <div className="mt-auto px-14 flex flex-col justify-start mb-10">
                <p className="text-white text-lg md:text-4xl lg:text-4xl font-ox font-black">
                  {workData[Number(getIndex)].title.toLocaleUpperCase()}
                </p>
                <p className="text-white text-sm md:text-2xl font-ox">
                  {workData[Number(getIndex)].description}
                </p>
              </div>
            </div>
          </div>

          {isModalOpen && (
            <div className="fixed top-0 left-0 pb-40 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-75">
              <div className="p-4 rounded-lg flex justify-center items-center">
                <div className="flex flex-col justify-center items-center w-screen h-auto md:w-full md:h-full">
                  <div className="flex justify-end w-full">
                    <button className="text-white" onClick={closeModal}>
                      <IoMdCloseCircleOutline className="w-6 h-6 mb-2 mr-3" />
                    </button>
                  </div>

                  {workData[Number(getIndex)].videoLink ? (
                    <ReactPlayer
                      controls={true}
                      playing
                      url={workData[Number(getIndex)].videoLink}
                    />
                  ) : (
                    <div className="w-2/3 pb-[800px] ">
                      <Carousel>
                        {workData[Number(getIndex)].images?.map(
                          (image: string) => {
                            return (
                              <div key={getIndex}>
                                <img src={image} />
                              </div>
                            );
                          }
                        )}
                      </Carousel>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="pt-16">
          <ThreeColumnFooter />
          <Footer />
        </div>
      </>
    </Suspense>
  );
};

export default SubSectionPage;
