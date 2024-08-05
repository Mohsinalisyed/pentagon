'use client'
import React from "react";
import Image from "next/image";
import RoadmapComp from "@/components/RoadmapComp";
import RoadmapWebComp from "@/components/RoadmapWebComp";
import Footer from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { CardFiveSvg, CardFourSvg, CardOneSvg, CardThreeSvg, CardTwoSvg } from "@/svg";

const RoadMap = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center py-10 bg-black">
        <Heading title="Roadmap" />
        <div className="p-5 bg-black flex flex-col items-center lg:hidden">
          <RoadmapComp heading="Reveal after" heading2='sold out' imgSrc={CardOneSvg} desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
          <Image
            src="/card1.png"
            alt="About BCSH"
            width={338}
            height={263}
            className="mt-5 w-[100%]"
            loader={({ src }) => `${src}?w=400&h=400`}
          />


          <RoadmapComp heading="Convert" heading2='to FPFP' imgSrc={CardTwoSvg} desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
          <Image
            src="/card2.png"
            alt="About BCSH"
            width={325}
            height={281}
            className="mt-5 w-[100%]"
            loader={({ src }) => `${src}?w=400&h=400`}

          />

          <RoadmapComp heading="Metaverse" heading2='Addition' imgSrc={CardThreeSvg} desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
          <Image
            src="/card3.png"
            alt="About BCSH"
            width={325}
            height={445}
            className="mt-5 w-[100%]"
            loader={({ src }) => `${src}?w=400&h=400`}

          />

          <RoadmapComp heading="Metaverse" heading2='Zone' imgSrc={CardFourSvg} desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
          <Image
            src="/card4.png"
            alt="About BCSH"
            width={325}
            height={275}
            className="mt-5 w-[100%]"
            loader={({ src }) => `${src}?w=400&h=400`}

          />

          <RoadmapComp heading="Comic" heading2='book reveal' imgSrc={CardFiveSvg} desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
          <Image
            src="/card5.png"
            alt="About BCSH"
            width={325}
            height={245}
            className="mt-5 w-[100%]"
            loader={({ src }) => `${src}?w=400&h=400`}
          />

        </div>
        <div className="w-full max-w-5xl shadow-lg rounded-lg overflow-hidden hidden lg:block">
          <RoadmapWebComp />
        </div>
      </div>
      <Footer />

    </>
  );
};

export default RoadMap;
