import { useConnect, useAccount, useDisconnect, useChainId } from "wagmi";

export const useWalletConnect = () => {
  const { connectors, connect } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const metaMaskConnector = connectors.find(
    (connector) => connector.id === "metaMaskSDK"
  );

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
    connectWallet,
    disconnectWallet,
  };
};
