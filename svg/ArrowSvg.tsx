import { IconSvgProps } from "@/types";

export const ArrowSvg: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      width={props.width || "96"}
      height={props.height || "91"}
      viewBox={props.viewBox || "0 0 96 91"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg" 
    >
      <path
        d="M34.5 44.5L1.5 0H26.5L58.5 44.5L24.5 90.5H0L34.5 44.5Z"
        fill="#FE2C3B"
      />
      <path
        d="M71.5 44.5L38.5 0H63.5L95.5 44.5L61.5 90.5H37L71.5 44.5Z"
        fill="#FE2C3B"
      />
    </svg>
  );
};
