"use client";
import { useWriteContract } from "wagmi";
import { useWalletConnect } from "../app/utils/walletConnect";
import { parseEther } from "viem";
import { useQueryClient } from "@tanstack/react-query";
import { coreMintAbi } from "@/abi/core/coreMintAbi";

const MintButton: React.FC = () => {
  const { connectWallet, isConnected } = useWalletConnect();
  const queryClient = useQueryClient();
  const {
    data: hash,
    writeContract,
    error,
    isPending,
    isSuccess,
  } = useWriteContract({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  });
  const handleCoreMint = async () => {
    if (isConnected) {
      writeContract({
        address: "0x6b9502c41BcF87D259373f0478947ad75F963fd4",
        abi: coreMintAbi,
        chainId: 1115,
        functionName: "mint",
        value: parseEther("0.000001"),
      });
    } else {
      connectWallet();
    }
  };

  return (
    <>
      <button
        className="flex items-center justify-center MintButton absolute top-[35%] md:top-[44%] md:ml-20 xl:top-[44%] 2xl:ml-44"
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
            className="w-full h-full max-w-[40%] sm:max-w-[50%] md:max-w-[70%] 2xl:max-w-full "
          />
        )}
      </button>
    </>
  );
};
export default MintButton;
