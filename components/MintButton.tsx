/* eslint-disable @next/next/no-img-element */

"use client";

import React from "react";
import {
  useWaitForTransactionReceipt,
  useWriteContract,
  useBalance,
} from "wagmi";
import { useWalletConnect } from "../app/utils/walletConnect";
import { parseEther, formatUnits } from "viem";
import { useQueryClient } from "@tanstack/react-query";
import { coreMintAbi } from "@/abi/core/coreMintAbi";
import { ArrowSvg } from "@/svg";
import { HeroDataTypes, MintButtonProps } from "@/types";
import { errorToast, getHeroData, successToast } from "@/app/utils";
import { useViewport } from "@/hooks/useViewPort";
import { LoadingSpinner } from "./LoadingSpinner";

const MintButtonLarge: React.FC<MintButtonProps> = ({
  handleCoreMint,
  isLoading,
  isPending,
}) => (
  <div className="w-full" onClick={handleCoreMint}>
    <div className="absolute top-[43%] right-[34%] mint-button-style">
      <div className="text-2xl 2xl:text-4xl font-light uppercase text-white">
        initiate
      </div>
      <div className="flex gap-2 items-center justify-start h-28 max-h-28">
        <div className="bg-white h-full flex items-center px-3">
          <ArrowSvg />
        </div>
        <div
          className="px-10 bg-white cursor-pointer h-full uppercase text-black flex items-center"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 0 100%)",
          }}
        >
          {isLoading || isPending ? (
            <LoadingSpinner />
          ) : (
            <p className="text-2xl md:text-7xl text-[90px] font-extrabold">
              Mint
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
);

const MintButtonSmall: React.FC<MintButtonProps> = ({
  handleCoreMint,
  isLoading,
  isPending,
  chainId,
  height,
  width,
}) => {
  const HeroData: HeroDataTypes = getHeroData(chainId);
  return (
    <div className="h-full relative" onClick={handleCoreMint}>
      <img src={HeroData.bannerSmall} alt="Banner Image" className="w-full" />
      <div className="w-full absolute top-[38%] flex flex-col justify-center items-center">
        <div className="flex gap-2 items-center h-[6.5rem] max-h-[6.5rem] relative ">
          <div className="w-full text-4xl font-light uppercase flex justify-start absolute top-[-45%] text-white">
            initiate
          </div>
          <div className="bg-white h-full flex items-center px-3">
            <ArrowSvg width="80px" height="80px" />
          </div>
          <div
            className="px-10 bg-white cursor-pointer h-full uppercase text-black flex items-center"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)",
            }}
          >
            {isLoading || isPending ? (
              <LoadingSpinner />
            ) : (
              <p className="text-[5rem] leading-[1] font-[1000]">Mint</p>
            )}
          </div>
        </div>
      </div>
      <div className="absolute left-[39%] sm:left-[42%] top-[60%]">
        {width && height ? (
          <img
            src={HeroData.mainSmallLogo}
            alt="Logo Icon"
            width={width}
            height={height}
          />
        ) : (
          <img src={HeroData.mainSmallLogo} alt="Logo Icon" />
        )}
      </div>
    </div>
  );
};

const MintButton: React.FC<{ isLarge?: boolean; chainId: number }> = ({
  isLarge,
  chainId,
}) => {
  const { connectWallet, isConnected, address } = useWalletConnect();
  const queryClient = useQueryClient();
  const { width } = useViewport();
  const { data: balance } = useBalance({
    address: address,
    chainId: chainId,
    blockTag: "latest",
  });
  const walletBalance = formatUnits(balance?.value || BigInt(0), 18);
  const finalWidth = width > 1440 ? 300 : width > 600 ? 130 : 90;
  const finalHeight = width > 1440 ? 344 : width > 600 ? 149 : 104;
  const {
    data: hash,
    writeContract,
    isPending,
  } = useWriteContract({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries();
        successToast("Transaction Successful");
      },
      onError: (error) => {
        errorToast(
          error.name === "ContractFunctionExecutionError"
            ? "Insufficient Balance"
            : "User rejected the request."
        );
      },
    },
  });

  const handleCoreMint = async () => {
    if (isConnected) {
      writeContract({
        address: "0x6b9502c41BcF87D259373f0478947ad75F963fd4",
        abi: coreMintAbi,
        chainId: chainId,
        functionName: "mint",
        value: parseEther("0.000001"),
      });
    } else {
      connectWallet();
    }
  };

  const { isLoading } = useWaitForTransactionReceipt({ hash });

  return isLarge ? (
    <MintButtonLarge
      handleCoreMint={handleCoreMint}
      isLoading={isLoading}
      isPending={isPending}
      chainId={chainId}
      width={`${finalWidth}px`}
      height={`${finalHeight}px`}
    />
  ) : (
    <MintButtonSmall
      handleCoreMint={handleCoreMint}
      isLoading={isLoading}
      isPending={isPending}
      chainId={chainId}
      width={`${finalWidth}px`}
      height={`${finalHeight}px`}
    />
  );
};

export default MintButton;
