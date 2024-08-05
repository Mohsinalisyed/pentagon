import { RoadmapCompProps } from "@/types";
import React from "react";

const RoadmapComp: React.FC<RoadmapCompProps> = ({
  heading,
  imgSrc,
  desc,
  heading2,
}) => {
  return (
    <div className="rounded-lg shadow-lg flex flex-col p-5 my-8 border border-solid border-yellowLight items-center">
      {React.createElement(imgSrc)}
      <h1 className="text-3xl mb-4 text-white text-center uppercase font-chakra font-bold">
        {heading}
        <br />
        {heading2}
      </h1>
      <p className="text-lg text-[#969EB2] mb-5 text-center font-sans">
        {desc}
      </p>
    </div>
  );
};

export default RoadmapComp;
