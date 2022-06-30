import * as React from "react"
import { SVGProps } from "react"

export const BurgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 22"
    {...props}
  >
    <rect x={0.877} width={30.938} height={5.5} rx={2} fill="#212121" />
    <rect
      x={0.877}
      y={8.25}
      width={30.938}
      height={5.5}
      rx={2}
      fill="#212121"
    />
    <rect
      x={0.877}
      y={16.5}
      width={30.938}
      height={5.5}
      rx={2}
      fill="#212121"
    />
  </svg>
)

