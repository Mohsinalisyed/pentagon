export let LandingData = {
  chainId: 1,
  chainName: "",
  chainSymbol: "",
  chainExplorer: "",
  chainIcon: "/",
  chainContractAddress: "0x",
  imgSrcSmallOne: "/assets/core/coreHero1.svg",
  imgSrcSmallTwo: "/assets/core/coreHero2.svg",
  imgSrcLarge: "/assets/core/MintPageForCore.svg",
  addClass: "bg-coreColor hover:bg-coreHoverColor",
};

switch (process.env.NEXT_APP_CHAIN_ID) {
  case "core":
    LandingData = {
      chainId: 1,
      chainName: "",
      chainSymbol: "",
      chainExplorer: "",
      chainIcon: "/",
      chainContractAddress: "0x",
      imgSrcSmallOne: "/assets/core/coreHero1.svg",
      imgSrcSmallTwo: "/assets/core/coreHero2.svg",
      imgSrcLarge: "/assets/core/MintPageForCore.svg",
      addClass: "bg-coreColor hover:bg-coreHoverColor",
    };
    break;
  case "multivers":
    LandingData = {
      chainId: 4,
      chainName: "",
      chainSymbol: "",
      chainExplorer: "",
      chainIcon: "/",
      chainContractAddress: "0x",
      imgSrcSmallOne: "/assets/core/MintPageForCore.svg",
      imgSrcSmallTwo: "/assets/multivers/MintPageForMultivers.svg",
      imgSrcLarge: "/assets/multivers/MintPageForMultivers.svg",
      addClass: "bg-multiversColor hover:bg-multiversHoverColor",
    };
    break;
  case "pentagon":
    LandingData = {
      chainId: 1,
      chainName: "",
      chainSymbol: "",
      chainExplorer: "",
      chainIcon: "/",
      chainContractAddress: "0x",
      imgSrcSmallOne: "/assets/core/MintPageForCore.svg",
      imgSrcSmallTwo: "/assets/multivers/MintPageForMultivers.svg",
      imgSrcLarge: "/assets/pentagon/MintPageForPentagon.svg",
      addClass: "bg-pentagonColor hover:bg-pentagonHoverColor",
    };
    break;
}
