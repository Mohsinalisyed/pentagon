import { LandingData } from "@/app/config/constants";
import React from "react";
import MintButton from "./MintButton";

const HeroSmall = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url('${LandingData.imgSrcSmallOne}')` }}
        className="bg-contain xl:bg-cover bg-center bg-no-repeat w-ful h-screen flex items-center justify-center relative"
      ></div>
      <div
        style={{ backgroundImage: `url('${LandingData.imgSrcSmallTwo}')` }}
        className="bg-contain xl:bg-cover bg-center bg-no-repeat w-ful h-screen flex items-center justify-center relative"
      >
        <MintButton />
      </div>
    </div>
  );
};

export default HeroSmall;
