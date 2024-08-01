import { HeroDataTypes } from "@/types";

export const getHeroData = (chainId: number): HeroDataTypes => {
  const baseData = {
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
    rpcUrls: "https://rpc.test.btcs.network/",
    blockExplorers: {
      default: {
        name: "Etherscan",
        url: "https://scan.test.btcs.network/",
      },
    },
  };

  switch (chainId) {
    case 1115:
      return {
        chains: [
          {
            ...baseData,
            chainId: 1115,
            chainName: "Core Testnet",
            nativeCurrency: { name: "Core", symbol: "tCORE", decimals: 18 },
          },
        ],
        chainContractAddress: "0x",
        bannerSmall: "/assets/core/bannerSmall.svg",
        bannerLarge: "/assets/core/bannerLarge.png",
        bannerSmallBG: "/assets/core/bannerSmallBG.png",
        bannerSmallCard: "/assets/core/bannerSmallCard.png",
        // bannerLargeCard: "/assets/bannerLargeCard.png",
        cardSmall: "/assets/cardSmall.png",
        cardLarge: "/assets/cardLarge.png",
        eLogo: "/assets/eLogo.svg",
        mainSmallLogo: "/assets/core/mainLogo.svg",
        mainLargelogo: "/assets/core/mainLogo.svg",
        addClass: "bg-coreColor hover:bg-coreHoverColor",
        profile: "#FF9211",
      };

    case 2:
      return {
        chains: [
          {
            ...baseData,
            chainId: 2,
            chainName: "Multivers Testnet",
            nativeCurrency: {
              name: "Multivers",
              symbol: "tMULTIVERS",
              decimals: 18,
            },
          },
        ],
        chainContractAddress: "0x",
        bannerSmall: "/assets/multivers/cardSmall.svg",
        bannerLarge: "/assets/multivers/bannerLarge.png",
        bannerSmallBG: "/assets/core/bannerSmallBG.png",
        bannerSmallCard: "/assets/multivers/bannerSmallCard.png",
        cardSmall: "/assets/bannerSmallCard.png",
        cardLarge: "/assets/cardLarge.png",
        mainSmallLogo: "/assets/multivers/mainLogo.svg",
        mainLargelogo: "/assets/multivers/mainLogo.svg",
        eLogo: "/assets/eLogo.svg",
        addClass: "bg-multiversColor hover:bg-multiversHoverColor",
        profile: "#5D41DF",
      };

    case 3:
      return {
        chains: [
          {
            ...baseData,
            chainId: 3,
            chainName: "Pentagon Testnet",
            nativeCurrency: {
              name: "Pentagon",
              symbol: "tPENTAGON",
              decimals: 18,
            },
          },
        ],
        chainContractAddress: "0x",
        bannerSmall: "/assets/pentagon/bannerSmall.svg",
        bannerLarge: "/assets/pentagon/bannerLarge.png",
        bannerSmallBG: "/assets/core/bannerSmallBG.png",
        bannerSmallCard: "/assets/pentagon/bannerSmallCard.png",
        cardSmall: "/assets/cardSmall.png",
        cardLarge: "/assets/cardLarge.png",
        mainSmallLogo: "/assets/pentagon/mainLogo.svg",
        mainLargelogo: "/assets/pentagon/mainLogo.svg",
        eLogo: "/assets/eLogo.svg",
        addClass: "bg-pentagonColor hover:bg-pentagonHoverColor",
        profile: "#0BBCA3",
      };

    default:
      return {
        chains: [
          {
            ...baseData,
            chainId: 1115,
            chainName: "Core Testnet",
            nativeCurrency: { name: "Core", symbol: "tCORE", decimals: 18 },
          },
        ],
        chainContractAddress: "0x",
        bannerSmall: "/assets/core/bannerSmall.svg",
        bannerLarge: "/assets/core/bannerLarge.png",
        bannerSmallBG: "/assets/core/bannerSmallBG.png",
        bannerSmallCard: "/assets/core/bannerSmallCard.png",
        // bannerLargeCard: "/assets/bannerLargeCard.png",
        cardSmall: "/assets/cardSmall.png",
        cardLarge: "/assets/cardLarge.png",
        eLogo: "/assets/eLogo.svg",
        mainSmallLogo: "/assets/core/mainLogo.svg",
        mainLargelogo: "/assets/core/mainLogo.svg",
        addClass: "bg-coreColor hover:bg-coreHoverColor",
        profile: "#FF9211",
      };
  }
};
