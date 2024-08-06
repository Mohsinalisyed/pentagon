"use client";

import Link from "next/link";
import Image from "next/image";
import { useChainId, useDisconnect, useReadContract } from "wagmi";
import { useWalletConnect } from "@/app/utils/walletConnect";
import { formatAddress } from "@/app/utils/utils";
import { useEffect, useState } from "react";
import Menu from "../public/menu.svg";
import { coreDistributorAbi } from "@/abi/core/coreDistributorAbi";
import { getHeroData } from "@/app/utils";
import { HeroDataTypes } from "@/types";
import { BreadcrumSvg, ProfileSvg, SiteLogoSvg } from "@/svg";
import React from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const { disconnect } = useDisconnect();
  const { address, isConnected, connectWallet } = useWalletConnect();
  const chainId = useChainId();
  const HeroData: HeroDataTypes = getHeroData(chainId);
  const pathname = usePathname();

  const {
    data: balance,
    error,
    isLoading,
  } = useReadContract({
    abi: coreDistributorAbi,
    functionName: "balanceOf",
    address: "0x616A5BDb2Be3b01B73FD60FEad901BB040ee7dFA",
    chainId: chainId,
    args: [address!],
  });

  if (error) {
    console.error("Contract call error:", error);
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "ABOUT BSCH", href: "/aboutbsch", disabled: false },
    { name: "HODLER PERKS", href: "/hodlerperks", disabled: true },
    { name: "ROADMAP", href: "/roadmap", disabled: false },
    { name: "AIRDROP", href: "/airdrop", disabled: true },
    { name: "SOCIALS", href: "/socials", disabled: true },
  ];

  const renderNavLinks = (
    navLinks: Array<{ name: string; href: string; disabled: boolean }>
  ) => (
    <nav
      className={`${
        isMenuOpen ? "flex" : "hidden"
      } flex-col lg:flex lg:flex-row lg:items-center w-full lg:w-auto bg-zinc-900 lg:bg-transparent font-medium`}
    >
      {navLinks.map((link) => {
        return (
          <Link
            href={link.href}
            key={link.href}
            className={`py-2 px-5 block lg:inline-block w-full whitespace-nowrap border-b-2 border-borderColor lg:border-b-0 ${
              pathname === link.href
                ? "border-l-4 border-l-purpleColor bg-coreHoverColor lg:border-l-0 xl:rounded lg:rounded-none"
                : ""
            } leading-9 font-semibold lg:text-base xl:text-lg ${
              link.disabled ? "disabled" : ""
            }`}
            aria-disabled={link.disabled}
          >
            {link.name}
          </Link>
        );
      })}
      {isConnected && (
        <div className="flex justify-center my-6 lg:my-0">
          <button className="bg-black hover:bg-purple-600 text-white-500 border border-coreColor py-3 px-3 rounded mr-2 xl:hidden lg:hidden w-[85%]">
            {isLoading
              ? "Loading..."
              : balance
              ? `${balance.toString()} NFT MINTED`
              : "0 NFT MINTED"}
          </button>
        </div>
      )}
    </nav>
  );

  const renderBuyNowButton = () => (
    <button
      onClick={connectWallet}
      className="bg-coreColor hover:bg-coreHoverColor text-black lg:text-white font-bold py-2 px-4 rounded border-purple-500 mr-4 lg:w-[142px] lg:h-[50px] w-[82px] h-[29.55px] text-[10px] lg:text-[16px] uppercase"
    >
      Buy Now
    </button>
  );

  const renderAddress = (address: string) => (
    <div className="flex items-center">
      <ProfileSvg
        color={HeroData.profile}
        width={"30px"}
        height={"30px"}
        fill={"black"}
      />
      <p className="text-white ml-2" onClick={() => disconnect()}>{formatAddress(address || "")}</p>
    </div>
  );

  return (
    <div
      className={`flex flex-col lg:flex-row justify-between items-center px-0  xl:px-6 bg-zinc-900 text-white font-archivo 2xl:fixed 
      ${pathname === "/" ? "bg-black" : "bg-darkGrayColor"} w-full z-[9999]`}
    >
      <div className="flex justify-between items-center w-full lg:w-auto px-4 lg:px:0">
        <Link href="/">
          <SiteLogoSvg />
        </Link>
        <div className="flex items-center lg:hidden gap-x-5 mb-3">
          {isConnected ? renderAddress(address || "") : renderBuyNowButton()}
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <BreadcrumSvg />
          </button>
        </div>
      </div>
      {renderNavLinks(navLinks)}
      <div className="hidden lg:flex items-center space-x-4">
        {isConnected ? (
          <div className="flex items-center">
            <button className="bg-black hover:bg-purple-600 text-white-500 border border-coreColor py-2 px-4 rounded mr-2">
              {isLoading
                ? "Loading..."
                : balance
                ? `${balance} NFT MINTED`
                : "0 NFT MINTED"}
            </button>
            <ProfileSvg
              color={HeroData.profile}
              width={"45px"}
              height={"45px"}
              fill={"white"}
            />
            <p
              className="text-light cursor-pointer pl-2"
              onClick={() => disconnect()}
            >
              {formatAddress(address || "")}
            </p>
          </div>
        ) : (
          renderBuyNowButton()
        )}
      </div>
    </div>
  );
};
