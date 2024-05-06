import React from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
const BlogsSection = () => {
  return (
    <div className="text-white pb-20   mx-10 flex flex-col">
      <div className="" />

      {/*Gino's Story*/}
      <div className="flex  flex-col md:flex-row mt-12 justify-between w-full">
        <div className="w-full md:w-[60%] flex">
          <img
            src={"/BlogsAssets/GinoBlogsAssets/GinoHeader.png"}
            alt=""
            className="flex rounded-lg"
          />
        </div>
        <div className="w-full md:w-[40%] flex flex-col md:ml-14 my-4 mr-4 space-y-4">
          <Link href={"/blog/KwatroDistrito"}>
            <h1 className=" text-xl md:text-3xl text-white font-bold  cursor-pointer">
              Finding Your Creative Direction at a Marketing Agency
            </h1>
          </Link>

          <div className="flex flex-row w-full space-x-2">
            <div className="flex items-center text-2xl ">
              <CgProfile />
            </div>
            <h3 className="flex">Prometheus</h3>
          </div>
        </div>
      </div>
      {/*Map this instead*/}
      <div className="flex flex-col md:flex-row mt-12 justify-between w-full">
        <div className="w-full md:w-[60%] flex">
          <img
            src={"/BlogsAssets/KwatroDistritoBlogAssets/landscape_map.webp"}
            className="flex rounded-lg"
          />
        </div>

        <div className="w-full md:w-[40%] flex flex-col md:ml-14 my-4 mr-4 space-y-4">
          <Link href="/blog/KwatroDistrito">
            <h1 className="text-xl md:text-3xl text-white font-bold cursor-pointer">
              BUGAL SANG KWARTO DISTRITO: Campaign Sets The Fourth District Of
              Iloilo On The Tourist Map
            </h1>
          </Link>
          <div className="flex flex-row w-full space-x-2">
            <div className="flex items-center text-2xl ">
              <CgProfile />
            </div>
            <h3 className="flex">Prometheus</h3>
          </div>
        </div>
      </div>

      {/*Lcid Story */}
      <div className="flex flex-col md:flex-row mt-12 justify-between w-full">
        <div className="w-full md:w-[60%] flex">
          <img
            src={"/BlogsAssets/BeautyOfStruggleBlogs/InterstellarGroupPhoto.webp"}
            alt=""
            className="flex rounded-lg"
          />
        </div>
        <div className="w-full md:w-[40%] flex flex-col md:ml-14 my-4 mr-4 space-y-4">
          <Link href={"/beautyofthestruggle"}>
            <h1 className=" text-xl md:text-3xl text-white font-bold  cursor-pointer">
              <span className="uppercase">The Beauty of the Struggle: </span>
              How the Prometheus founder launched an award-winning marketing
              rocketship from a small bedroom
            </h1>
          </Link>

          <div className="flex flex-row w-full space-x-2">
            <div className="flex items-center text-2xl ">
              <CgProfile />
            </div>
            <h3 className="flex">Prometheus</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
