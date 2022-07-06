import * as React from "react"
import { SVGProps } from "react"

export const ArrowFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={7}
    height={3}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 3"
    {...props}
  >
    <path
      transform="matrix(.83206 .5547 -.35113 .93633 .95 1)"
      stroke="#000"
      d="M0-.5h3.606"
    />
    <path
      transform="matrix(.832 -.55478 .3512 .9363 3.95 3)"
      stroke="#000"
      d="M0-.5h3.606"
    />
  </svg>
)

