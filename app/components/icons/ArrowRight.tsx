import * as React from "react"
import { SVGProps } from "react"
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke={props.stroke || "#fff"}
            strokeLinecap="square"
            strokeWidth={2.174}
            d="M7.85 20 16 12 7.85 4"
        />
    </svg>
)
export default ArrowRight
