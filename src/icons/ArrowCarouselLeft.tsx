import * as React from "react"
import { SVGProps } from "react"

export const ArrowCarouselLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={35}
    height={54}
    fill="none"
    viewBox="0 0 35 54"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.184 22.92a2.931 2.931 0 0 0 0 4.202l2.428 2.381.01.01 19.115 18.753a3.07 3.07 0 0 0 4.283 0l2.428-2.382a2.931 2.931 0 0 0 0-4.201L16.464 25.02 33.448 8.36a2.931 2.931 0 0 0 0-4.202L31.02 1.776a3.07 3.07 0 0 0-4.283 0L7.612 20.54 5.184 22.92Z"
        fill="#F5DB13"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0.297}
        y={0.906}
        width={34.039}
        height={52.23}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-2} dy={2} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0.129167 0 0 0 0 0.129167 0 0 0 0 0.129167 0 0 0 0.3 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_3391_4495"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_3391_4495"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

