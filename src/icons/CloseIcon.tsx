import * as React from "react"
import { SVGProps } from "react"

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 27 27"
    {...props}
  >
    <rect
      width={29.685}
      height={7.711}
      rx={3}
      transform="scale(.99683 1.00316) rotate(45 2.546 7.078)"
      fill="#212121"
    />
    <rect
      width={29.685}
      height={7.711}
      rx={3}
      transform="scale(-.99683 -1.00316) rotate(-45 -19.952 29.553)"
      fill="#212121"
    />
  </svg>
)
