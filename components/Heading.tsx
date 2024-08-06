import React from "react";

interface IProps {
  title: string;
}

export const Heading = ({ title }: IProps) => {
  return (
    <h1 className="text-center text-4xl font-bold text-yellowLight mb-4 lg:mb-16 mt-12 lg:mt-12 xl:mt-16 2xl:mt-32 font-chakra uppercase">
      {title}
    </h1>
  );
};
