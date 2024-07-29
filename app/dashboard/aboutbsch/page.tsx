"use client"
import { useViewport } from "@/hooks/useViewPort";
import React from "react";

const AboutBSCH = () => {
  const { width } = useViewport()
  return (
    <div className="bg-black text-white p-8 relative">
      <div className="absolute top-[-4rem] hidden lg:block left-1/2 transform -translate-x-1/2 z-40 pt-[700px]">
        <img
          src="/about-logo.svg"
          alt="Center Image"
          className="w-48"
          style={{borderRadius: "160px", border: "20px solid black"}}
        />
      </div>
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-center text-4xl font-bold text-[#EFC235] mb-16">ABOUT US</h1>
        <div className="flex flex-col lg:flex-row items-center md:space-x-8 ">
          <div className="md:w-1/2  md:text-left ml-0 mb-6 md:mb-0 lg:pr-[50px]">
            <h2 className="text-2xl mb-4">
              Welcome to a captivating universe where every blockchain superhero
              NFT is more than just a digital collectible.
            </h2>
            <p className="text-lg text-[#969EB2] mb-5">
              {`It's your ticket to an immersive adventure across various
              blockchain realms. Each hero is uniquely crafted and minted as its
              own native blockchain, reflecting the distinct spirit and
              innovative flair of each platform.`}
            </p>
            <p className="text-lg text-[#969EB2]" >
              {`At BCSH, every NFT is a gateway to a story, where superheroes
              aren't just born—they're discovered and cherished. With our heroes
              officially trademarked in the United States Patent and Trademark
              Office, each one carries a special badge of authenticity and
              honor, making them not only unique but also a true part of
              blockchain history.`}
            </p>
          </div>
          <div className="md:w-1/2 justify-center">
            <img
              src={width < 600 ? '/aboutImage1.svg' : "/about-right.svg"}
              alt="Blockchain Superhero"
              className="rounded-lg shadow-lg max-w-full  xl:max-w-[100%]"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center md:space-x-8">
          <div className="md:w-1/2">
            <img
              src={width < 600 ? '/aboutimage2.svg':"/about-left.svg"}
              alt="Blockchain Superhero"
              className="rounded-lg shadow-lg ml-[-20px]  max-w-full  xl:max-w-[100%]"
            />
          </div>
          <div className="md:w-1/2  md:text-left lg:pl-[100px] z-[100]">
            <h1 className="text-lg mb-4 text-white">
              {`But BCSH is about more than just collecting—it's about participating.
                See all Game.`}
            </h1>
            <p className="text-lg text-[#969EB2] mb-5">
              {`We're building a community where every member contributes to the narrative, helping heroes evolve and take on new adventures. By joining BCSH, you're not just collecting NFTs; you're helping to shape their stories and unlock their potential.`}
            </p>
            <p className="text-lg text-[#969EB2] mb-5">
              {`Whether you’re a fan of epic quests or enchanted by the lore of different blockchains, our heroes offer you a way to engage with blockchain technology in a fun and meaningful way. Every hero card is a piece of the action, a fragment of the saga that you help to unfold.`}
            </p>
            <p className="text-lg text-[#969EB2]">
              {`Step into our world, collect your heroes, and join us on a journey of discovery and engagement. Each superhero is waiting for their story to be told—with your help. Be part of a vibrant community that values creativity, involvement, and the thrill of the chase.`}
            </p>
          </div>
        </div>

        <p className="text-center text-lg mt-4 lg:mt-32 text-[#EFC235]">
          Get ready to explore, interact, and be part of something bigger.
          Welcome to the Blockchain Superheroes experience!
        </p>
      </section>
    </div>
  );
};

export default AboutBSCH;
