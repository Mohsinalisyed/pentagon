import { IconSvgProps } from "@/types";

export const ProfileSvg: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      width={props.width ? props.width : "46"}
      height={props.height ? props.height : "46"}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="22.5" cy="22.5" r="17.5" fill={props.fill ? props.fill : "white"} />
      <path
        d="M22.77 0C10.19 0 0 10.19 0 22.77C0 35.35 10.19 45.53 22.77 45.53C35.35 45.53 45.54 35.34 45.54 22.77C45.54 10.2 35.34 0 22.77 0ZM22.77 6.81C26.93 6.81 30.3 10.18 30.3 14.34C30.3 18.5 26.93 21.87 22.77 21.87C18.61 21.87 15.24 18.5 15.24 14.34C15.24 10.18 18.61 6.81 22.77 6.81ZM22.76 39.58C18.61 39.58 14.81 38.07 11.88 35.57C11.17 34.96 10.75 34.07 10.75 33.13C10.75 28.91 14.16 25.54 18.38 25.54H27.14C31.36 25.54 34.76 28.92 34.76 33.13C34.76 34.07 34.35 34.96 33.64 35.57C30.71 38.07 26.91 39.58 22.76 39.58Z"
        fill={props.color}
      />
    </svg>
  );
};
