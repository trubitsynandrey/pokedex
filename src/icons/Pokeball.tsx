import * as React from "react"
import { SVGProps } from "react"

export const Pokeball = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={28}
    fill="none"
    viewBox="0 0 27 28"
    {...props}
  >
    <g filter="url(#a)">
      <g clipPath="url(#b)">
        <path
          d="M19.629 15.94c3.387-3.423 3.387-8.973 0-12.396a8.612 8.612 0 0 0-12.268 0c-3.388 3.423-3.388 8.973 0 12.396a8.612 8.612 0 0 0 12.268 0Z"
          fill="#1D1E1D"
        />
        <path
          d="M22.702 8.768c-.483-4.707-4.42-8.377-9.207-8.377-4.787 0-8.723 3.67-9.206 8.377h18.413Z"
          fill="url(#c)"
        />
        <path
          d="M4.29 10.715c.482 4.707 4.42 8.378 9.205 8.378s8.724-3.67 9.206-8.378H4.289Z"
          fill="#E7E7E9"
        />
        <path
          d="M13.495 12.69c1.61 0 2.916-1.319 2.916-2.946 0-1.628-1.306-2.947-2.916-2.947-1.611 0-2.917 1.32-2.917 2.947s1.306 2.946 2.917 2.946Z"
          fill="#1D1E1D"
        />
        <path
          d="M13.493 12.046c1.259 0 2.28-1.03 2.28-2.302s-1.021-2.303-2.28-2.303c-1.258 0-2.278 1.031-2.278 2.303 0 1.271 1.02 2.302 2.278 2.302Z"
          fill="#F7F7F7"
        />
        <path
          d="M13.495 11.299c.85 0 1.538-.696 1.538-1.554 0-.858-.689-1.554-1.538-1.554-.85 0-1.538.696-1.538 1.554 0 .858.688 1.554 1.538 1.554Z"
          fill="#B8B5B5"
        />
        <path
          d="M13.495 11.183c.786 0 1.424-.644 1.424-1.44 0-.794-.638-1.438-1.424-1.438-.787 0-1.425.644-1.425 1.439s.638 1.439 1.425 1.439Z"
          fill="#F7F7F7"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="c"
        x1={24.264}
        y1={7.403}
        x2={7.667}
        y2={7.748}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B57E10" />
        <stop offset={0.241} stopColor="#B57E10" />
        <stop offset={0.404} stopColor="#F9DF7B" />
        <stop offset={0.594} stopColor="#FFF3A6" />
        <stop offset={0.781} stopColor="#F9DF7B" />
        <stop offset={1} stopColor="#B57E10" />
      </linearGradient>
      <clipPath id="b">
        <path
          fill="#fff"
          transform="translate(4.29 .39)"
          d="M0 0h18.413v18.704H0z"
        />
      </clipPath>
      <filter
        id="a"
        x={0.289}
        y={0.391}
        width={26.414}
        height={26.703}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_3391_4513"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_3391_4513"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
