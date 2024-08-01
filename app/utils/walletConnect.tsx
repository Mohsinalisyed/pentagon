import { useConnect, useAccount, useDisconnect, useChainId } from "wagmi";
import { useState, useEffect } from "react";

export const useWalletConnect = () => {
  const { connectors, connect } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [hydrated, setHydrated] = useState(false);
  const chainId = useChainId();
  const metaMaskConnector = connectors.find(
    (connector) => connector.id === "metaMaskSDK"
  );

  useEffect(() => {
    setHydrated(true);
  }, []);

  const connectWallet = () => {
    if (metaMaskConnector) {
      connect({ connector: metaMaskConnector, chainId });
    }
  };

  const disconnectWallet = async () => {
    disconnect();
  };

  return {
    address,
    isConnected,
    hydrated,
    connectWallet,
    disconnectWallet,
  };
};
