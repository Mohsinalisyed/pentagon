"use client"
import React from "react";
import { Heading } from "../../components/Heading";
import { ArrowHodlerSvg } from "../../svg/ArrowHodlerSvg";
import Footer from "../../components/Footer";

const HodlerPerks = () => {
  return (
    <>
      <div className="bg-black text-white p-8 max-w-[1400px] mx-auto">
        <Heading title="Hodler Perks" />
        <div className="flex items-center justify-center mb-8 mt-[-86px]">
          <div className="hidden lg:block sm:px-6 md:px-6 lg:px-6 xl:px-6 2xl:px-16">
            <img src="/hodlerperks.png" alt="socials" className="w-full" />
          </div>
        </div>
        <div className="mt-40 flex justify-center lg:hidden">
          <img
            src="/hodlerbackground.png"
            alt="aboutimage"
            className="w-full"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HodlerPerks;
