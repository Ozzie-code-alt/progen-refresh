"use client";
import { NavData } from "@/app/contants";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Oxanium } from "next/font/google";

const OxaniumFont = Oxanium({weights: 700, subsets: ['latin']});


const Navbar = () => {
  return (
    <div className="fixed w-[90%] py-10 z-20 overflow-x-hidden font-bold font-ox ">
      <div className="hidden md:flex justify-between items-center w-[90%] gap-10 ">
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
    </div>
  );
};

export default Navbar;
