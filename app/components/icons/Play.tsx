import * as React from "react"
import { SVGProps } from "react"
const Play = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill={props.fill || "#fff"}
            d="M18.383 11.043a1.08 1.08 0 0 1 0 1.914L4.58 20.174A1.08 1.08 0 0 1 3 19.217V4.783a1.08 1.08 0 0 1 1.58-.957l13.802 7.217Z"
        />
    </svg>
)
export default Play
