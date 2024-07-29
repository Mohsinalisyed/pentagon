"use client";
import { useWriteContract } from "wagmi";
import { useWalletConnect } from "../app/utils/walletConnect";
import { coreAbi } from "@/app/utils/coreABI";
import { parseEther } from "viem";

const MintButton: React.FC = () => {
  const { connectWallet, address } = useWalletConnect();
  const {
    data: hash,
    writeContract,
    error,
    isPending,
    isSuccess,
  } = useWriteContract();
  const handleCoreMint = async () => {
    writeContract({
      address: "0x6b9502c41BcF87D259373f0478947ad75F963fd4",
      abi: coreAbi,
      chainId: 1115,
      functionName: "mint",
      value: parseEther("0.000001"),
    });
  };

  return (
    <>
      {address ? (
        <button
          className="flex items-center justify-center MintButton absolute top-[35%] md:top-[45%] md:ml-44"
          onClick={handleCoreMint}
        >
          {isPending ? (
            <div className="flex items-center justify-center mt-10">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-coreColor"></div>
            </div>
          ) : (
            <img
              src="/FrameMint.svg"
              alt="Mint Button"
              className="w-full h-full object-contain max-w-[75%] xl:w-11/12"
            />
          )}
        </button>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-coreColor hover:bg-coreHoverColor text-white border border-coreColor py-2 px-4 rounded mb-24 xl:mb-[-16px] xl:ml-36"
        >
          Buy Now
        </button>
      )}
    </>
  );
};
export default MintButton;
