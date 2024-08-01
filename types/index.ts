import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
};

export interface MintButtonProps {
  handleCoreMint: () => void;
  isLoading: boolean;
  isPending: boolean;
  chainId: number;
  width?: string;
  height?: string;
}

export interface RoadmapCompProps {
  heading: string;
  imgSrc: string;
  desc: string;
  heading2: string;
}

export * from "./heroTypes";
