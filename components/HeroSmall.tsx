import { LandingData } from "@/app/config/constants";
import React from "react";
import MintButton from "./MintButton";

const HeroSmall = () => {
  return (
    <div className="h-full w-full">
      <img
        src={LandingData.imgSrcSmallOne}
        alt="Core Mint Image One"
        className="w-full"
      />
      <div className="relative">
        <img
          src={LandingData.imgSrcSmallTwo}
          alt="Core Mint Image Two"
          className="w-full"
        />
        <MintButton />
      </div>
    </div>
  );
};

export default HeroSmall;
