'use client'
import React from "react";
import Image from "next/image";
import RoadmapComp from "@/components/RoadmapComp";
import { useViewport } from "@/hooks/useViewPort";

const RoadMap = () => {
  const { width } = useViewport()

  return (
      
    width < 600 ?
      <div className="p-5 bg-black">
        <RoadmapComp heading="Reveal after" heading2='sold out' imgSrc="/card1image.svg" desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
        <Image
          src="/main1.svg"
          alt="About BCSH"
          width={800}
          height={800}
          className="w-full h-auto mt-5"
        />
        <RoadmapComp heading="Convert" heading2='to FPFP' imgSrc="/card2image.svg" desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
        <Image
          src="/main2.svg"
          alt="About BCSH"
          width={800}
          height={800}
          className="w-full h-auto mt-5"
        />
        <RoadmapComp heading="Metaverse" heading2='Addition' imgSrc="/card3image.svg" desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
        <Image
          src="/main3.svg"
          alt="About BCSH"
          width={800}
          height={800}
          className="w-full h-auto mt-5"
        />
        <RoadmapComp heading="Metaverse" heading2='Zone' imgSrc="/card4image.svg" desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
        <Image
          src="/main4.svg"
          alt="About BCSH"
          width={800}
          height={800}
          className="w-full h-auto mt-5"
        />
        <RoadmapComp heading="Comic" heading2='book reveal' imgSrc="/card5image.svg" desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
        <Image
          src="/main5.svg"
          alt="About BCSH"
          width={800}
          height={800}
          className="w-full h-auto mt-5"
        />
      </div>
       :
      <div className="min-h-screen flex flex-col items-center py-10 bg-black">
      <h1 className="text-yellow-400 text-4xl font-bold mb-8 font text-[]">
        ROADMAP
      </h1>
      <div className="w-full max-w-5xl shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/roadmap.svg"
          alt="About BCSH"
          width={800}
          height={1200}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default RoadMap;
