import {
  CardFiveSvg,
  CardFourSvg,
  CardOneSvg,
  CardThreeSvg,
  CardTwoSvg,
} from "@/svg";
import Image from "next/image";
import React from "react";

const RoadmapWebComp = () => {
  return (
    <div className="w-[1224px] p-[10px]">
      <div
        style={{
          backgroundImage: "url('/roadmap.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "1950px",
          position: "relative",
          zIndex: "1",
        }}
      >
        <div className="flex justify-end">
          <div className="rounded-4xl absolute left-[6px] mt-[20px] shadow-lg flex flex-col p-2 items-center border border-solid border-yellowLight w-[550px] h-[270px]">
            <CardOneSvg />
            <h1 className="text-2xl mb-3 text-white text-center font-chakra uppercase font-bold pt-[6px]">
              100% Art reveal
            </h1>
            <p className="text-[15px] leading-[26px] text-lightGrayColor mb-3 text-center font-sans py-0 px-[22px]">
              Hold tight! The true identity of your hero will be unveiled only
              after all units are claimed. Get ready for the ultimate reveal
              that will ignite the collector in you!
            </p>
          </div>
          <Image
            src="/assets/roadmap/web/imagecard1.png"
            alt="Center Image"
            className="m-[-8px] mr-20 z-50 w-[40%]"
            width={482}
            height={364}
          />
        </div>
        <div>
          <div className="rounded-4xl absolute right-[4px] top-[385px] shadow-lg flex flex-col p-2 border border-solid border-yellowLight items-center w-[575px] h-[270px] py-[36px] px-[38px]">
            <CardTwoSvg />
            <h1 className="text-2xl mb-3 text-white text-center font-chakra uppercase font-bold">
              Full Profile Hero
            </h1>
            <p className="text-[15px] leading-[26px] text-lightGrayColor mb-3 text-center font-sans">
              Upgrade your NFT into a Full Profile Pic Feature (FPFP) to make
              your hero a standout across your social platforms. Availability
              varies, enhancing the uniqueness of each hero!
            </p>
          </div>
          <Image
            src="/assets/roadmap/web/imagecard2.png"
            alt="Center Image"
            className="mt-[20px] ml-16 z-50 w-[34%]"
            width={425}
            height={401}
          />
        </div>
        <div className="flex justify-end">
          <div className="rounded-4xl absolute left-[4px] top-[800px] shadow-lg flex flex-col p-2 border border-solid border-yellowLight items-center w-[550px] h-[270px] py-[36px] px-[32px]">
            <CardThreeSvg />
            <h1 className="text-2xl mb-3 text-white text-center font-chakra uppercase font-bold">
              3D Hero Avatar
            </h1>
            <p className="text-[15px] leading-[26px] text-lightGrayColor mb-3 text-center font-sans">
              Step into the metaverse where your hero awaits! Each NFT not only
              represents ownership but springs to life as a 3D Hero Avatar,
              ready to explore and conquer.
            </p>
          </div>
          <Image
            src="/assets/roadmap/web/imagecard3.png"
            alt="Center Image"
            className="mt-[-68px] mr-32 z-50 w-[32%]"
            width={390}
            height={485}
          />
        </div>
        <div>
          <div className="rounded-4xl absolute right-[4px] top-[1230px] shadow-lg flex flex-col p-2 border border-solid border-yellowLight items-center w-[575px] h-[270px] py-[36px] px-[38px]">
            <CardFourSvg />
            <h1 className="text-2xl mb-3 text-white text-center font-chakra uppercase font-bold">
              Metaverse Zone
            </h1>
            <p className="text-[15px] leading-[26px] text-lightGrayColor mb-3 text-center font-sans">
              Navigate through distinct zones in the metaverse, each tailored to
              the lore of your hero. It’s not just a game, it’s a quest across
              dimensions!
            </p>
          </div>
          <Image
            src="/assets/roadmap/web/imagecard4.png"
            alt="Center Image"
            className="mt-[-70px] ml-16 z-50 w-[34%]"
            width={410}
            height={483}
          />
        </div>
        <div className="flex justify-end">
          <div className="rounded-4xl absolute left-[4px] top-[1640px] shadow-lg flex flex-col p-2 border border-solid border-yellowLight items-center w-[550px] h-[270px] py-[26px] px-[32px]">
            <CardFiveSvg />
            <h1 className="text-2xl mb-3 text-white text-center font-chakra uppercase font-bold">
              Comic book reveal
            </h1>
            <p className="text-sm text-lightGrayColor mb-3 text-center font-sans">
              {
                "With each hero unlocked, delve deeper into the Blockchain Superheroes universe through exclusive comic releases. These stories aren't just read; they're collected, treasured, and revered."
              }
            </p>
          </div>
          <Image
            src="/assets/roadmap/web/imagecard5.png"
            alt="Center Image"
            className="mt-[-130px] mr-32 z-50 w-[26%]"
            width={358}
            height={586}
          />
        </div>
      </div>
    </div>
  );
};

export default RoadmapWebComp;
