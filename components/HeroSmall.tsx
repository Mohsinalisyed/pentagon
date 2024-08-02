/* eslint-disable @next/next/no-img-element */

import React from "react";
import MintButton from "./MintButton";
import { getHeroData } from "@/app/utils";
import { HeroDataTypes } from "@/types";
import { HeroTextualContent } from "./HeroTextualContent";
import { useWalletConnect } from "@/app/utils/walletConnect";
import { FooterSvg } from "@/svg";

const HeroSmall: React.FC<{ chainId: number }> = ({ chainId }) => {
  const HeroData: HeroDataTypes = getHeroData(chainId);
  const { isConnected } = useWalletConnect();

  return (
    <div className="block lg:hidden">
      <div
        className="w-full bg-no-repeat bg-cover bg-center pt-7 pb-12"
        style={{
          backgroundImage: `url(${HeroData.bannerSmallBG})`,
        }}
      >
        <div className="flex flex-col gap-4">
          <img src={HeroData.cardSmall} alt="Card Image" className="mx-auto" />
          <HeroTextualContent chainId={chainId} />
        </div>
      </div>
      <MintButton chainId={chainId} />
      {/* TODO: Add this back on Pentagon launch */}
      {/* {isConnected && (
        <div className="text-center border-coreLightColor border-y-[1px] font-medium text-base py-5">
          10 Pentagon Token to purchase in GAS
        </div>
      )} */}
      <div className="bg-greyColor h-full py-12 m-auto">
        <FooterSvg />
      </div>
    </div>
  );
};

export default HeroSmall;
