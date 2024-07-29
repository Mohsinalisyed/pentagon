"use client";
import Link from "next/link";
import Image from "next/image";
import { useDisconnect, useReadContract } from "wagmi";
import { useWalletConnect } from "@/app/utils/walletConnect";
import { coreAbi } from "@/app/utils/coreABI";
import { formatAddress } from "@/app/utils/utils";
import { useEffect } from "react";
import { useState } from "react";
import Menu from "../public/menu.svg";
const Header = () => {
  const { disconnect } = useDisconnect();
  const { address, isConnected, hydrated, connectWallet } = useWalletConnect();
  const {
    data: balance,
    error,
    isLoading,
    isSuccess,
    refetch,
  } = useReadContract({
    abi: coreAbi,
    functionName: "mintingCount",
    address: "0x6b9502c41BcF87D259373f0478947ad75F963fd4",
    chainId: 1115,
  });

  useEffect(() => {
    refetch();
  }, [balance]);

  if (error) {
    console.error("Contract call error:", error);
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-6 bg-zinc-900 text-white">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="logo" width={130} height={50} />
        </Link>
        <div className="flex items-center md:hidden gap-x-5 mb-3">
          {hydrated && isConnected ? (
            <div className="flex items-center">
              <Image
                src={"/assets/core/profile.svg"}
                alt="user avatar"
                width={30}
                height={30}
              />
              <p className="text-white ml-2">
                {address?.substring(0, 8)}...{address?.substring(address.length - 4)}
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
          } flex-col md:flex md:flex-row md:items-center w-full md:w-auto bg-zinc-900 md:bg-transparent`}
      >
        <Link href="/dashboard/aboutbsch" className="py-2 px-4 block md:inline-block hover:bg-coreHoverColor hover:rounded w-full whitespace-nowrap">ABOUT BCSH</Link>
        <Link href="#" className="py-2 px-4 whitespace-nowrap block md:inline-block hover:bg-purple-700 disabled ">HODLER PERKS</Link>
        <Link href="/dashboard/roadmap" className="py-2 px-4 block md:inline-block hover:bg-coreHoverColor hover:rounded w-full">ROADMAP</Link>
        <Link href="#" className="py-2 px-4 block md:inline-block hover:bg-purple-700 disabled">AIRDROP</Link>
        <Link href="#" className="py-2 px-4 block md:inline-block hover:bg-purple-700 disabled">SOCIALS</Link>
      </nav>
      <div className="hidden md:flex items-center space-x-4">
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
    </header>
  );
};
export default Header;