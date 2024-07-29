"use client";

import MintButton from "@/components/MintButton";
import Header from "../components/Header";
import { LandingData } from "./config/constants";
import { useViewport } from "@/hooks/useViewPort";
import HeroSmall from "@/components/HeroSmall";
import Footer from "@/components/Footer";

const HomePage = () => {
  const { width } = useViewport();
  
  return (
    <>
      <div>
        <Header />
        {width > 768 ? (
          <div
            style={{ backgroundImage: `url('${LandingData.imgSrcLarge}')` }}
            className="bg-contain xl:bg-cover bg-center bg-no-repeat w-ful h-[1050px] flex items-center justify-center relative"
          >
            <MintButton />
          </div>
        ) : (
          <HeroSmall />
        )}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default HomePage;
