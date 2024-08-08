import { IconSvgProps } from "@/types";

export const TelegramSvg: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 250 211"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="249"
        height="210"
        stroke="url(#paint0_linear_1109_225)"
      />
      <mask
        id="mask0_1109_225"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="250"
        height="211"
      >
        <rect
          x="0.5"
          y="0.5"
          width="249"
          height="210"
          fill="#D9D9D9"
          stroke="url(#paint1_linear_1109_225)"
        />
      </mask>
      <g mask="url(#mask0_1109_225)">
        <path
          opacity="0.1"
          d="M252.088 24L12 111.602V124.264L80.7646 143.413L102.513 206.343H119.871L147.859 180.509L206.946 219.652L218.445 215.706L262 31.5046L252.088 24ZM206.482 202.947L128.665 151.393L119.993 162.042L135.936 172.603L113.289 193.122L95.5205 141.704L198.445 86.274L190.936 74.929L86.4971 131.174L35.9697 117.107L244.793 40.9162L206.482 202.947Z"
          fill="url(#paint2_linear_1109_225)"
        />
        <path
          d="M160.352 64L72 96.2375V100.897L97.3054 107.944L105.309 131.102H111.697L121.996 121.595L143.74 136L147.972 134.548L164 66.7617L160.352 64ZM143.57 129.853L114.933 110.881L111.741 114.8L117.608 118.686L109.274 126.237L102.736 107.315L140.612 86.9168L137.848 82.7419L99.4149 103.44L80.8209 98.2634L157.668 70.2251L143.57 129.853Z"
          fill="url(#paint3_linear_1109_225)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1109_225"
          x1="-137"
          y1="90.308"
          x2="757"
          y2="90.308"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5E40E7" />
          <stop offset="1" stop-color="#EFC235" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1109_225"
          x1="-137"
          y1="90.308"
          x2="757"
          y2="90.308"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5E40E7" />
          <stop offset="1" stop-color="#EFC235" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1109_225"
          x1="137"
          y1="24"
          x2="137"
          y2="219.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EFC235" />
          <stop offset="1" stop-color="#5E40E7" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1109_225"
          x1="118"
          y1="64"
          x2="118"
          y2="136"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EFC235" />
          <stop offset="1" stop-color="#5E40E7" />
        </linearGradient>
      </defs>
    </svg>
  );
};
