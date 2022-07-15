import * as React from "react"
import { SVGProps } from "react"

export const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={54}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 33 54"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.204 25.024 1.25 41.624c-1.148 1.194-1.148 3.13 0 4.325l2.17 2.258a2.86 2.86 0 0 0 4.157 0l20.203-21.02a3.09 3.09 0 0 0 .824-1.683 3.133 3.133 0 0 0-.825-2.643L7.577 1.84a2.86 2.86 0 0 0-4.158 0L1.25 4.1c-1.147 1.194-1.147 3.13 0 4.325l15.955 16.6Z"
        fill="#F2CB07"
        fillOpacity={0.5}
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0.387}
        y={0.945}
        width={32.254}
        height={52.156}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={2} dy={2} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0.129167 0 0 0 0 0.129167 0 0 0 0 0.129167 0 0 0 0.1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_3391_4501"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_3391_4501"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
