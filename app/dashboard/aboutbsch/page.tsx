/* eslint-disable @next/next/no-img-element */
"use client"
import { useViewport } from "@/hooks/useViewPort";
import AboutLogo from "@/Svg/AboutLogo";
import React from "react";

const AboutBSCH = () => {
  const { width } = useViewport()
  return (
    <div className="bg-black text-white p-8 relative max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-center text-4xl font-bold text-[#EFC235] mb-16">ABOUT US</h1>
      <div className="absolute mt-[26%] ml-[44%] hidden xl:block">
        <AboutLogo />
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col">
          <div className="text-center lg:text-left lg:pr-16 ">
            <h2 className="text-2xl mb-4">
              Welcome to a captivating universe where every blockchain superhero
              NFT is more than just a digital collectible.
            </h2>
            <p className="text-md text-[#969EB2] mb-5">
              {`It's your ticket to an immersive adventure across various
              blockchain realms. Each hero is uniquely crafted and minted as its
              own native blockchain, reflecting the distinct spirit and
              innovative flair of each platform.`}
            </p>
            <p className="text-md text-[#969EB2]" >
              {`At BCSH, every NFT is a gateway to a story, where superheroes
              aren't just born—they're discovered and cherished. With our heroes
              officially trademarked in the United States Patent and Trademark
              Office, each one carries a special badge of authenticity and
              honor, making them not only unique but also a true part of
              blockchain history.`}
            </p>

          </div>
          <div className="mt-[30px] ml-[-5px] hidden lg:block">
              <img src="/aboutimage2.png" alt="aboutimage"/>
          </div>
          <div className="mt-[30px] flex justify-center lg:hidden">
              <img src="/resabout1.png" alt="aboutimage" />
          </div>
        </div>
        <div className="flex flex-col mt-[0px] xl:mt-[-90px]">
          <div className="hidden lg:block">
              <img src="/aboutright1.png" alt="aboutimage" />
          </div>
          <div className="lg:pl-24 text-center lg:text-left">
            <h1 className="text-2xl mb-4 text-white">
              {`But BCSH is about more than just collecting—it's about participating.
                See all Game.`}
            </h1>
            <p className="text-md text-[#969EB2] mb-3">
              {`We're building a community where every member contributes to the narrative, helping heroes evolve and take on new adventures. By joining BCSH, you're not just collecting NFTs; you're helping to shape their stories and unlock their potential.`}
            </p>
            <p className="text-md text-[#969EB2] mb-3">
              {`Whether you're a fan of epic quests or enchanted by the lore of different blockchains, our heroes offer you a way to engage with blockchain technology in a fun and meaningful way. Every hero card is a piece of the action, a fragment of the saga that you help to unfold.`}
            </p>
            <p className="text-md text-[#969EB2]">
              {`Step into our world, collect your heroes, and join us on a journey of discovery and engagement. Each superhero is waiting for their story to be told—with your help. Be part of a vibrant community that values creativity, involvement, and the thrill of the chase.`}
            </p>

          </div>
          <div className="mt-[30px] flex justify-center lg:hidden" >  
              <img src="/resabout2.png" alt="aboutimage" />    
          </div>
        </div>
     </div>
    </div>
  );
};

export default AboutBSCH;