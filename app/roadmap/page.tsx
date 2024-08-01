'use client'
import React from "react";
import Image from "next/image";
import RoadmapComp from "@/components/RoadmapComp";
import RoadmapWebComp from "@/components/RoadmapWebComp";
import Footer from "@/components/Footer";

const RoadMap = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center py-10 bg-black">
        <h1 className="text-center text-4xl font-bold text-yellowLight mb-4 lg:my-20 font-chakra">ROADMAP</h1>
        <div className="p-5 bg-black flex flex-col items-center lg:hidden">
          <RoadmapComp heading="Reveal after" heading2='sold out' imgSrc="/card1image.svg" desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
          <Image
            src="/card1.png"
            alt="About BCSH"
            width={400}
            height={400}
            className="mt-5"
            loader={({ src }) => `${src}?w=400&h=400`}
          />


          <RoadmapComp heading="Convert" heading2='to FPFP' imgSrc="/card2image.svg" desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
          <Image
            src="/card2.png"
            alt="About BCSH"
            width={400}
            height={400}
            className="mt-5"
            loader={({ src }) => `${src}?w=400&h=400`}

          />

          <RoadmapComp heading="Metaverse" heading2='Addition' imgSrc="/card3image.svg" desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
          <Image
            src="/card3.png"
            alt="About BCSH"
            width={400}
            height={400}
            className="mt-5"
            loader={({ src }) => `${src}?w=400&h=400`}

          />

          <RoadmapComp heading="Metaverse" heading2='Zone' imgSrc="/card4image.svg" desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
          <Image
            src="/card4.png"
            alt="About BCSH"
            width={400}
            height={400}
            className="mt-5"
            loader={({ src }) => `${src}?w=400&h=400`}

          />

          <RoadmapComp heading="Comic" heading2='book reveal' imgSrc="/card5image.svg" desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
          <Image
            src="/card5.png"
            alt="About BCSH"
            width={400}
            height={400}
            className="mt-5"
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
