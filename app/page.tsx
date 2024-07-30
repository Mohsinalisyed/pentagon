"use client";

import MintButton from "@/components/MintButton";
import Header from "../components/Header";
import { LandingData } from "./config/constants";
import { useViewport } from "@/hooks/useViewPort";
import HeroSmall from "@/components/HeroSmall";

const HomePage = () => {
  const { width } = useViewport();

  return (
    <>
      <div>
        <Header />
        {width > 768 ? (
          <div className="w-ful flex items-center justify-center relative">
            <img src={LandingData.imgSrcLarge} alt="Core Mint" />
            <MintButton />
          </div>
        ) : (
          <HeroSmall />
        )}
      </div>
    </>
  );
};

export default HomePage;
