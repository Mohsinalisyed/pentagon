/* eslint-disable @next/next/no-img-element */

"use client";

import MintButton from "@/components/MintButton";
import { useViewport } from "@/hooks/useViewPort";
import HeroSmall from "@/components/HeroSmall";
import { HeroDataTypes } from "@/types";
import { getHeroData } from "./utils";
import { useChainId } from "wagmi";
import { HeroTextualContent } from "@/components/HeroTextualContent";
import React from "react";
// import { useWalletConnect } from "./utils/walletConnect";
import { FooterSvg } from "@/svg";

const HomePage = () => {
  const chainId = useChainId();
  const HeroData: HeroDataTypes = getHeroData(chainId);
  return (
    <div>
      
        <div
        className="w-full h-full bg-no-repeat bg-position-center bg-cover hidden lg:block"
          style={{
            backgroundImage: `url(${HeroData.bannerLarge})`,
            aspectRatio: "16/9",
          }}
        >
          <div className="h-full grid grid-cols-3 justify-items-center items-center relative">
            <div className="flex flex-col h-full justify-center">
              <img src={HeroData.cardLarge} alt="Card Image" />
              <HeroTextualContent isLarge chainId={chainId} />
            </div>
            <MintButton isLarge chainId={chainId} />
            <img src={HeroData.mainLargelogo} alt="Logo Icon" />
          </div>
          <div className="relative flex items-center justify-end">
            {/* TODO: Add this back on Pentagon launch */}
            {/* <div className="text-center font-medium text-base m-auto">
              10 Pentagon Token to purchase in GAS
            </div> */}
            <div className="absolute right-4 bottom-4 2xl:right-20 2xl:bottom-8">
              <FooterSvg width="350" height="80" />
            </div>
          </div>
        </div>
      <div className="block lg:hidden">
        <HeroSmall chainId={chainId} />
   </div>
 
    </div>
  );
};

export default HomePage;
