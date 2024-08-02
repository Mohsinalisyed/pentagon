/* eslint-disable @next/next/no-img-element */

import { getHeroData } from "@/app/utils";
import { HeroDataTypes } from "@/types";
import React from "react";

export const HeroTextualContent: React.FC<{
  isLarge?: boolean;
  chainId: number;
}> = ({ isLarge, chainId }) => {
  const HeroData: HeroDataTypes = getHeroData(chainId);
  return (
    <>
      <div
        className={
          isLarge
            ? "ml-10 text-3xl 2xl:text-[45px] leading-[50px] italic uppercase"
            : "text-[32px] italic font-extrabold text-center uppercase"
        }
      >
        <div className="font-extrabold text-white">Collect them all</div>
        <div
          className={`${
            isLarge ? "2xl:text-[40px]" : "text-[28px]"
          } font-normal text-white`}
        >
          <span className="font-extrabold">BCSH</span> NFT trading cards
        </div>
      </div>

      <img
        src={HeroData.eLogo}
        alt="Logo Icon"
        className={isLarge ? "mx-auto pt-5 max-w-96" : "m-auto"}
      />
    </>
  );
};
