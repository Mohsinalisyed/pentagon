import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = 'd5ff6a2009db22fbacced7f98dca4bd5'

export const config = createConfig({
  chains: [mainnet, base],
  multiInjectedProviderDiscovery: false,
  connectors: [
    metaMask()
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})