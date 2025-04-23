import * as React from "react"
import { SVGProps } from "react"
const Cross = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke={props.stroke || "#fff"}
            strokeWidth={1.231} d="m4 20 8-8 8-8M4 4l16 16" />
    </svg>
)
export default Cross
