import * as React from "react"
import { SVGProps } from "react"
const ArrowRightNarrow = (props: SVGProps<SVGSVGElement>) => (
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
            strokeWidth={2.28}
            d="m7.8 21 7.2-8.83L7.8 3"
        />
    </svg>
)
export default ArrowRightNarrow
