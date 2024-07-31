"use client";

import Link from "next/link";
import Image from "next/image";
import { useDisconnect, useReadContract } from "wagmi";
import { useWalletConnect } from "@/app/utils/walletConnect";
import { formatAddress } from "@/app/utils/utils";
import { useEffect } from "react";
import { useState } from "react";
import Menu from "../public/menu.svg";
import { coreDistributorAbi } from "@/abi/core/coreDistributorAbi";

const HeaderComponent = () => {
  const { disconnect } = useDisconnect();
  const { address, isConnected, hydrated, connectWallet } = useWalletConnect();
  const {
    data: balance,
    error,
    isLoading,
    isSuccess,
    refetch,
  } = useReadContract({
    abi: coreDistributorAbi,
    functionName: "balanceOf",
    address: "0x616A5BDb2Be3b01B73FD60FEad901BB040ee7dFA",
    chainId: 1115,
    args: [address!],
  });


  if (error) {
    console.error("Contract call error:", error);
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link: any) => {
    setSelectedLink(link);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-0  xl:px-6 bg-zinc-900 text-white">
      <div className="flex justify-between items-center w-full lg:w-auto px-4 lg:px:0">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={130} height={50} />
        </Link>
        <div className="flex items-center lg:hidden gap-x-5 mb-3">
          {hydrated && isConnected ? (
            <div className="flex items-center">
              <Image
                src="/assets/core/profile.svg"
                alt="user avatar"
                width={30}
                height={30}
              />
              <p className="text-white ml-2">
                {formatAddress(address || "")}
              </p>
            </div>
          ) : (
            <button
              onClick={connectWallet}
              className="bg-coreColor hover:bg-coreHoverColor text-white font-medium py-2 px-4 rounded border-purple-500 mr-4"
            >
              Buy Now
            </button>
          )}
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image src={Menu} alt="Menu Button" />
          </button>
        </div>
      </div>
      <nav
        className={`${isMenuOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:items-center w-full lg:w-auto bg-zinc-900 lg:bg-transparent`}
      >
        <Link
          href="/aboutbsch"
          onClick={() => handleLinkClick("ABOUT BCSH")}
          className={`py-2 px-4 block lg:inline-block hover:bg-coreHoverColor hover:rounded w-full whitespace-nowrap border-b-2 border-borderColor lg:border-b-0 ${selectedLink === "ABOUT BCSH" ? "border-l-4 border-indigo-500 lg:border-l-0" : ""
            } text-sm lg:text-base xl:text-lg`}
        >
          ABOUT BCSH
        </Link>
        <Link
          href="#"
          onClick={() => handleLinkClick("HODLER PERKS")}
          className={`py-2 px-4 whitespace-nowrap block lg:inline-block hover:bg-purple-700 disabled border-b-2 border-borderColor lg:border-b-0 ${selectedLink === "HODLER PERKS" ? "border-l-4 border-indigo-500 lg:border-l-0" : ""
            } text-sm lg:text-base xl:text-lg`}
        >
          HODLER PERKS
        </Link>
        <Link
          href="/roadmap"
          onClick={() => handleLinkClick("ROADMAP")}
          className={`py-2 px-4 block lg:inline-block hover:bg-coreHoverColor hover:rounded w-full border-b-2 border-borderColor lg:border-b-0 ${selectedLink === "ROADMAP" ? "border-l-4 border-indigo-500 lg:border-l-0" : ""
            } text-sm lg:text-base xl:text-lg`}
        >
          ROADMAP
        </Link>
        <Link
          href="#"
          onClick={() => handleLinkClick("AIRDROP")}
          className={`py-2 px-4 block lg:inline-block hover:bg-purple-700 disabled border-b-2 border-borderColor lg:border-b-0 ${selectedLink === "AIRDROP" ? "border-l-4 border-indigo-500 lg:border-l-0" : ""
            } text-sm lg:text-base xl:text-lg`}
        >
          AIRDROP
        </Link>
        <Link
          href="#"
          onClick={() => handleLinkClick("SOCIALS")}
          className={`py-2 px-4 block lg:inline-block hover:bg-purple-700 disabled border-b-2 border-borderColor lg:border-b-0 ${selectedLink === "SOCIALS" ? "border-l-4 border-indigo-500 lg:border-l-0" : ""
            } text-sm lg:text-base xl:text-lg`}
        >
          SOCIALS
        </Link>
        {isConnected && (
          <div className="flex justify-center my-6 lg:my-0">
            <button className="bg-black hover:bg-purple-600 text-white-500 border border-coreColor py-2 px-4 rounded mr-2 xl:hidden lg:hidden">
              {isLoading
                ? "Loading..."
                : balance
                  ? `${balance.toString()} NFT MINTED`
                  : `${balance && balance.toString()} NFT MINTED`}
            </button>
          </div>
        )}
      </nav>
      <div className="hidden lg:flex items-center space-x-4">
        {hydrated && isConnected ? (
          <div className="flex items-center">
            <button className="bg-black hover:bg-purple-600 text-white-500 border border-coreColor py-2 px-4 rounded mr-2">
              {isLoading
                ? "Loading..."
                : balance
                  ? `${balance.toString()} NFT MINTED`
                  : `${balance && balance.toString()} NFT MINTED`}
            </button>
            <Image
              src={"/assets/core/profile.svg"}
              alt="user avatar"
              width={30}
              height={30}
            />
            <p
              className="text-light cursor-pointer pl-2"
              onClick={() => disconnect()}
            >
              {formatAddress(address || "")}
            </p>
          </div>
        ) : (
          hydrated && (
            <button
              onClick={connectWallet}
              className="bg-coreColor hover:bg-coreHoverColor text-white font-medium py-2 px-4 rounded border-purple-500"
            >
              Buy Now
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;