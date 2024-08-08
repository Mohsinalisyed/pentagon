"use client";
import { Heading } from "@/components/Heading";
import React, { ReactSVG } from "react";
import Image from "next/image";
import { TwitterSvg } from "@/svg/TwitterSvg";
import { TelegramSvg } from "@/svg/TelegramSvg";
import { NotificationSvg } from "@/svg/NotificationSvg";
import { DiscordSvg } from "@/svg/DiscordSvg";
import { GlobeSvg } from "@/svg/GlobeSvg";
import { YoutubeSvg } from "@/svg/YoutubeSvg";
import Footer from "@/components/Footer";
import { SocialsSvg } from "@/svg/SocialsSvg";

const SocialIcon = ({ icon, link }: { icon: any; link: any }) => {
  return (
    <div
      className="w-[150px] h-[127px] sm:w-[150px] sm:h-[127px] md:w-[150px] md:h-[127px]  lg:w-[250px] lg:h-[211px]"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon()}
      </a>
    </div>
  );
};

const Socials = () => {
  return (
    <>
      <div className="bg-black text-white p-8 max-w-[1400px] mx-auto">
        <Heading title="Socials" />
        <div className="flex items-center justify-center mb-8 mt-[-135px]">
          <div className="hidden lg:block sm:px-6 md:px-6 lg:px-6 xl:px-6 2xl:px-16">
            <img
              src="/assets/socials/socials.png"
              alt="socials"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="mt-40 flex justify-center lg:hidden">
          <img
            src="/socialbackground.png"
            alt="aboutimage"
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-center mt-6 lg:mt-16 mb-[469px]">
          <div className="flex flex-wrap justify-center items-center max-w-[860px] gap-2 sm:gap-4 md:gap-8 lg:gap-8 xl:gap-8">
            <SocialIcon icon={TwitterSvg} link={"https://x.com/PentagonGames88"}/>
            <SocialIcon icon={TelegramSvg} link={"https://t.me/PentagonGamesXP"}/>
            <SocialIcon icon={NotificationSvg} link={"https://x.com/PentagonGamesXP"} />
            <SocialIcon icon={DiscordSvg} link={"https://discord.gg/pentagongamesxp"}/>
            <SocialIcon icon={GlobeSvg} link={"https://pentagon.games/"}/>
            <SocialIcon icon={YoutubeSvg} link={"https://www.youtube.com/@PentagonGamesXP"} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Socials;
