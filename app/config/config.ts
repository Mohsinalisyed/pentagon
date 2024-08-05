import { http, createConfig, } from "wagmi";
import { base, mainnet, optimism,  } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";
import { type Chain } from "viem";
import { baseUrl } from "../utils";

const projectId = "d5ff6a2009db22fbacced7f98dca4bd5";

export const coreTestNet = {
  id: 1115,
  name: "Core Testnet",
  nativeCurrency: { name: "Core", symbol: "tCORE", decimals: 18 },
  rpcUrls: {
    default: { http: [baseUrl.btcs] },
  },
  blockExplorers: {
    default: { name: "Etherscan", url: "https://scan.test.btcs.network/" },
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    },
    ensUniversalResolver: {
      address: "0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da",
      blockCreated: 16773775,
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601,
    },
  },
  testnet: true,
} as const satisfies Chain;

export const config = createConfig({
  chains: [coreTestNet],
  multiInjectedProviderDiscovery: false,
  connectors: [metaMask()],
  transports: {
    [coreTestNet.id]: http(baseUrl.btcs),
  },
  ssr: true
});
