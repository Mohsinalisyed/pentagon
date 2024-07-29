"use client";
import { useWalletConnect } from "../app/utils/walletConnect";

const MintButton: React.FC = () => {
  const { connectWallet } = useWalletConnect();
  return (
    <button
      className="relative flex items-center justify-center MintButton"
      onClick={connectWallet}
    >
      <img
        src="/FrameMint.svg"
        alt="Mint Button"
        className="w-full h-full object-contain"
        style={{ marginLeft: "170px", width: "90%" }}
      />
    </button>
  );
};
export default MintButton;
