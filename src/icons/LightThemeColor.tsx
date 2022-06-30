import * as React from "react"
import { SVGProps } from "react"

export const LightThemeColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={10.465} cy={10} r={4} fill="#232324" />
    <rect x={1.465} y={9} width={4} height={2} rx={1} fill="#232324" />
    <rect x={15.465} y={9} width={4} height={2} rx={1} fill="#232324" />
    <rect
      x={3.395}
      y={15.656}
      width={4}
      height={2}
      rx={1}
      transform="rotate(-45 3.395 15.656)"
      fill="#232324"
    />
    <rect
      x={13.293}
      y={5.758}
      width={4}
      height={2}
      rx={1}
      transform="rotate(-45 13.293 5.758)"
      fill="#232324"
    />
    <rect
      x={3.395}
      y={4.344}
      width={2}
      height={4}
      rx={1}
      transform="rotate(-45 3.395 4.344)"
      fill="#232324"
    />
    <rect
      x={13.293}
      y={14.242}
      width={2}
      height={4}
      rx={1}
      transform="rotate(-45 13.293 14.242)"
      fill="#232324"
    />
    <rect x={9.465} y={1} width={2} height={4} rx={1} fill="#232324" />
    <rect x={9.465} y={15} width={2} height={4} rx={1} fill="#232324" />
  </svg>
)
