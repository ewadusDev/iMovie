import * as React from "react"
import { SVGProps } from "react"
const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
            strokeWidth={1.875}
            d="M9.5 4 2 11.813l7.5 7.812"
        />
        <path stroke={props.stroke || "#fff"} strokeWidth={1.875} d="M22 11.813H2.625" />
    </svg>
)
export default ArrowLeft
