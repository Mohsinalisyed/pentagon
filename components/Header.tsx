"use client";
import Link from "next/link";
import Image from "next/image";
import { useDisconnect } from "wagmi";
import { useWalletConnect } from "@/app/utils/walletConnect";
import { useState } from "react";
import Menu from "../public/menu.svg";
const Header = () => {
  const { disconnect } = useDisconnect();
  const { address, isConnected, hydrated, connectWallet } = useWalletConnect();
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
                src={"/account1.svg"}
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
              className="bg-[#5E40E7] hover:bg-[#5740BD] text-white font-medium py-2 px-4 rounded border-purple-500 mr-4"
            >
              Connect Wallet
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
        <Link href="/dashboard/aboutbsch" className="py-2 px-4 whitespace-nowrap block md:inline-block hover:bg-[#5E40E7] w-full">ABOUT BCSH</Link>
        <Link href="#" className="py-2 px-4 whitespace-nowrap block md:inline-block hover:bg-purple-700 disabled">HODLER PERKS</Link>
        <Link href="/dashboard/roadmap" className="py-2 px-4 block md:inline-block hover:bg-[#5E40E7] w-full">ROADMAP</Link>
        <Link href="#" className="py-2 px-4 block md:inline-block hover:bg-purple-700 disabled">AIRDROP</Link>
        <Link href="#" className="py-2 px-4 block md:inline-block hover:bg-purple-700 disabled">SOCIALS</Link>
        <button className="bg-black hover:bg-[#5E40E7] text-white-500 border border-[#5E40E7] py-2 px-4 rounded mr-2 mt-2 mb-2 lg:hidden">
          5 NFT MINTED
        </button>
      </nav>
      <div className="hidden md:flex items-center space-x-4">
        {hydrated && isConnected ? (
          <div className="flex items-center">
            <button className="bg-black hover:bg-purple-600 text-white-500 border border-purple-500 py-2 px-4 rounded mr-2">
              5 NFT MINTED
            </button>
            <Image
              src={"/account1.svg"}
              alt="user avatar"
              width={30}
              height={30}
            />
            <p
              className="text-white cursor-pointer"
              onClick={() => disconnect()}
            >
              {address?.substring(0, 8)}...{address?.substring(address.length - 4)}
            </p>
          </div>
        ) : (
          hydrated && (
            <button
              onClick={connectWallet}
              className="bg-[#5E40E7] hover:bg-[#5740BD] text-white font-medium py-2 px-4 rounded border-purple-500"
            >
              Connect Wallet
            </button>
          )
        )}
      </div>
    </header>
  );
};
export default Header;