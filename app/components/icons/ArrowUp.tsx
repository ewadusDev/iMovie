import * as React from "react"
import { SVGProps } from "react"
const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill={props.fill || "#fff"}
            fillRule="evenodd"
            d="m17 15-5-5-5 5h10Z"
            clipRule="evenodd"
        />
    </svg>
)
export default ArrowUp
