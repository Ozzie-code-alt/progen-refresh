"use client"
import { NavData } from "@/app/contants";
import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="fixed w-screen py-10 z-20 overflow-x-hidden  font-bold font-ox ">
      <div className="hidden md:flex justify-between items-center w-[90%] gap-10 ">
        <Image
          src={"/LandingPageAssets/logoNavbar.png"}
          height={100}
          width={200}
          alt="Prometheus Logo"
        />
        {NavData.map((nav, index) => (
          <div key={index} className="font-bold font-ox hover:scale-110 cursor-pointer ease-in-out duration-300 transition text-white">{nav.nav}</div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
