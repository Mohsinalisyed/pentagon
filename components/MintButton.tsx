"use client";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useWalletConnect } from "../app/utils/walletConnect";
import { parseEther } from "viem";
import { useQueryClient } from "@tanstack/react-query";
import { coreMintAbi } from "@/abi/core/coreMintAbi";

const MintButton: React.FC = () => {
  const { connectWallet, isConnected } = useWalletConnect();
  const queryClient = useQueryClient();

  // write contract
  const {
    data: hash,
    writeContract,
    isPending,
  } = useWriteContract({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  });

  // contract call to mint
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

  // wait for transaction receipt
  const { isLoading, isFetching, isSuccess } = useWaitForTransactionReceipt({
    hash: hash,
  });

  return (
    <>
      <button
        className=" items-center justify-center MintButton absolute top-[30%] md:top-[45%] md:ml-24 xl:top-[43%] xl:ml-36 2xl:top-[44%] 2xl:ml-44 m-auto w-full md:w-auto"
        onClick={handleCoreMint}
      >
        {isLoading || isPending ? (
          <div className="flex items-center justify-center mt-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-coreColor"></div>
          </div>
        ) : (
          <img
            src="/FrameMint.png"
            alt="Mint Button"
            className="w-full h-full max-w-[75%] sm:max-w-[70%] md:max-w-[50%] xl:max-w-[80%] 2xl:max-w-full m-auto"
          />
        )}
      </button>
    </>
  );
};
export default MintButton;
