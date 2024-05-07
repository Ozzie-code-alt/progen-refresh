"use client";
import { NavData } from "@/app/contants";
import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { Oxanium } from "next/font/google";

const OxaniumFont = Oxanium({weights: 700, subsets: ['latin']});


const Navbar = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="fixed w-[90%] py-10 z-20 overflow-y-hidden font-bold font-ox ">
      <div className="hidden lg:flex justify-between items-center w-[90%] gap-10 ">
        <Image
          src={"/LandingPageAssets/logoNavbar.png"}
          height={100}
          width={200}
          alt="Prometheus Logo"
        />
        {NavData.map((nav, index) => (
          <Link href={nav.Link}   key={index}>
            <div
              className={`font-bold font-ox hover:scale-110 cursor-pointer ease-in-out duration-300 transition text-white ${OxaniumFont.className} `}
            >
              {nav.nav}
            </div>
          </Link>
        ))}
      </div>

      <div className="flex lg:hidden">
      <div className={``}>
        {!sidebarOpen ? <button
          onClick={toggleSidebar}
          className={`absolute p-4 text-white hover:text-gray-300 focus:outline-none`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
          : <></>}
      </div>
      </div>
    </div>
  );
};

export default Navbar;
