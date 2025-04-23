import * as React from "react"
import { SVGProps } from "react"
const PlusWide = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.2 11.2V4h1.6v7.2H20v1.6h-7.2V20h-1.6v-7.2H4v-1.6h7.2Z"
            clipRule="evenodd"
        />
    </svg>
)
export default PlusWide
