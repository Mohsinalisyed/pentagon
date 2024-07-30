'use client'
import React from "react";
import Image from "next/image";
import RoadmapComp from "@/components/RoadmapComp";
import { useViewport } from "@/hooks/useViewPort";

const RoadMap = () => {
  const { width } = useViewport()

  return (
      
    width < 600 ?
      <div className="p-5 bg-black">
        <RoadmapComp heading="Reveal after" heading2='sold out' imgSrc="/card1image.svg" desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
        <object data="https://www.google.com/imgres?q=skeleton%20image%20react%20loading&imgurl=https%3A%2F%2Fcdn.prod.website-files.com%2F610bb663a35dd3364ddbf08c%2F63219b2e6e6a367eb5621951_react-skeleton-header-min.png&imgrefurl=https%3A%2F%2Fbirdeatsbug.com%2Fblog%2Fimplementing-skeleton-screen-in-react-with-react-loading-skeleton-and-suspense&docid=mIUEBa9IIqQQbM&tbnid=Hw0QGeNRnPFxtM&vet=12ahUKEwjK0Jrnq86HAxWuBdsEHVlVN1AQM3oECGkQAA..i&w=3600&h=2341&hcb=2&ved=2ahUKEwjK0Jrnq86HAxWuBdsEHVlVN1AQM3oECGkQAAhttps://img.freepik.com/free-photo/free-photo-black-grunge-abstract-background-pattern-wallpaper_1340-33834.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722297600&semt=ais_hybrid" type="image/svg+xml" >
          <Image
            src="/main1.svg"
            alt="About BCSH"
            width={800}
            height={800}
            className="w-full h-auto mt-5"
            loader={({ src }) => `${src}?w=800&h=800`}

          />
        </object>
       
        <RoadmapComp heading="Convert" heading2='to FPFP' imgSrc="/card2image.svg" desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
        <object data="https://www.google.com/imgres?q=skeleton%20image%20react%20loading&imgurl=https%3A%2F%2Fcdn.prod.website-files.com%2F610bb663a35dd3364ddbf08c%2F63219b2e6e6a367eb5621951_react-skeleton-header-min.png&imgrefurl=https%3A%2F%2Fbirdeatsbug.com%2Fblog%2Fimplementing-skeleton-screen-in-react-with-react-loading-skeleton-and-suspense&docid=mIUEBa9IIqQQbM&tbnid=Hw0QGeNRnPFxtM&vet=12ahUKEwjK0Jrnq86HAxWuBdsEHVlVN1AQM3oECGkQAA..i&w=3600&h=2341&hcb=2&ved=2ahUKEwjK0Jrnq86HAxWuBdsEHVlVN1AQM3oECGkQAAhttps://img.freepik.com/free-photo/free-photo-black-grunge-abstract-background-pattern-wallpaper_1340-33834.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722297600&semt=ais_hybrid" type="image/svg+xml" >
          <Image
            src="/main2.svg"
            alt="About BCSH"
            width={800}
            height={800}
            className="w-full h-auto mt-5"
            loader={({ src }) => `${src}?w=800&h=800`}

          />
        </object>
      
        <RoadmapComp heading="Metaverse" heading2='Addition' imgSrc="/card3image.svg" desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
        <object data="https://www.google.com/imgres?q=skeleton%20image%20react%20loading&imgurl=https%3A%2F%2Fcdn.prod.website-files.com%2F610bb663a35dd3364ddbf08c%2F63219b2e6e6a367eb5621951_react-skeleton-header-min.png&imgrefurl=https%3A%2F%2Fbirdeatsbug.com%2Fblog%2Fimplementing-skeleton-screen-in-react-with-react-loading-skeleton-and-suspense&docid=mIUEBa9IIqQQbM&tbnid=Hw0QGeNRnPFxtM&vet=12ahUKEwjK0Jrnq86HAxWuBdsEHVlVN1AQM3oECGkQAA..i&w=3600&h=2341&hcb=2&ved=2ahUKEwjK0Jrnq86HAxWuBdsEHVlVN1AQM3oECGkQAAhttps://img.freepik.com/free-photo/free-photo-black-grunge-abstract-background-pattern-wallpaper_1340-33834.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722297600&semt=ais_hybrid" type="image/svg+xml" >
          <Image
            src="/main3.svg"
            alt="About BCSH"
            width={800}
            height={800}
            className="w-full h-auto mt-5"
            loader={({ src }) => `${src}?w=800&h=800`}

          />
        </object>
       
        <RoadmapComp heading="Metaverse" heading2='Zone' imgSrc="/card4image.svg" desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
        <object data="https://www.google.com/imgres?q=skeleton%20image%20react%20loading&imgurl=https%3A%2F%2Fcdn.prod.website-files.com%2F610bb663a35dd3364ddbf08c%2F63219b2e6e6a367eb5621951_react-skeleton-header-min.png&imgrefurl=https%3A%2F%2Fbirdeatsbug.com%2Fblog%2Fimplementing-skeleton-screen-in-react-with-react-loading-skeleton-and-suspense&docid=mIUEBa9IIqQQbM&tbnid=Hw0QGeNRnPFxtM&vet=12ahUKEwjK0Jrnq86HAxWuBdsEHVlVN1AQM3oECGkQAA..i&w=3600&h=2341&hcb=2&ved=2ahUKEwjK0Jrnq86HAxWuBdsEHVlVN1AQM3oECGkQAAhttps://img.freepik.com/free-photo/free-photo-black-grunge-abstract-background-pattern-wallpaper_1340-33834.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722297600&semt=ais_hybrid" type="image/svg+xml" >
          <Image
            src="/main4.svg"
            alt="About BCSH"
            width={800}
            height={800}
            className="w-full h-auto mt-5"
            loader={({ src }) => `${src}?w=800&h=800`}

          />
        </object>
       
        <RoadmapComp heading="Comic" heading2='book reveal' imgSrc="/card5image.svg" desc='Lounge areas with comfortable seating for relaxation between gaming sessions. Provide snacks, drink, and vending machine for refreshments.' />
        <object data="https://www.google.com/imgres?q=skeleton%20image%20react%20loading&imgurl=https%3A%2F%2Fcdn.prod.website-files.com%2F610bb663a35dd3364ddbf08c%2F63219b2e6e6a367eb5621951_react-skeleton-header-min.png&imgrefurl=https%3A%2F%2Fbirdeatsbug.com%2Fblog%2Fimplementing-skeleton-screen-in-react-with-react-loading-skeleton-and-suspense&docid=mIUEBa9IIqQQbM&tbnid=Hw0QGeNRnPFxtM&vet=12ahUKEwjK0Jrnq86HAxWuBdsEHVlVN1AQM3oECGkQAA..i&w=3600&h=2341&hcb=2&ved=2ahUKEwjK0Jrnq86HAxWuBdsEHVlVN1AQM3oECGkQAAhttps://img.freepik.com/free-photo/free-photo-black-grunge-abstract-background-pattern-wallpaper_1340-33834.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722297600&semt=ais_hybrid" type="image/svg+xml" >
        <Image
          src="/main5.svg"
          alt="About BCSH"
          width={800}
          height={800}
            className="w-full h-auto mt-5"
            loader={({ src }) => `${src}?w=800&h=800`}
        />
        </object>
       
      </div>
       :
      <div className="min-h-screen flex flex-col items-center py-10 bg-black">
      <h1 className="text-yellow-400 text-4xl font-bold mb-8 font text-[]">
        ROADMAP
        </h1>
        
      <div className="w-full max-w-5xl shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/roadmap.svg"
          alt="About BCSH"
          width={800}
          height={1200}
          className="w-full h-auto"
          loader={({ src }) => `${src}?w=800&h=1200`}
            
        />
      </div>
    </div>
  );
};

export default RoadMap;
