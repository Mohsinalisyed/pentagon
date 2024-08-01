export interface HeroDataTypes {
  chains: Chain[];
  chainContractAddress: string;
  bannerSmall: string;
  bannerLarge: string;
  bannerSmallBG: string;
  bannerSmallCard: string;
  cardSmall: string;
  cardLarge: string;
  mainSmallLogo: string;
  mainLargelogo: string;
  eLogo: string;
  addClass: string;
  profile: string;
}

export interface Chain {
  chainId: number;
  chainName: string;
  nativeCurrency: NativeCurrency;
  rpcUrls: string;
  blockExplorers: BlockExplorers;
  contracts: Contracts;
}

export interface NativeCurrency {
  name: string;
  symbol: string;
  decimals: number;
}

export interface BlockExplorers {
  default: Default;
}

export interface Default {
  name: string;
  url: string;
}

export interface Contracts {
  ensRegistry: EnsRegistry;
  ensUniversalResolver: EnsUniversalResolver;
  multicall3: Multicall3;
}

export interface EnsRegistry {
  address: string;
}

export interface EnsUniversalResolver {
  address: string;
  blockCreated: number;
}

export interface Multicall3 {
  address: string;
  blockCreated: number;
}
