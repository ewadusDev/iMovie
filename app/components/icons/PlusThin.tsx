import * as React from "react"
import { SVGProps } from "react"
const PlusThin = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path stroke={props.stroke || "#fff"} strokeWidth={1.212} d="M12 21V3m-9 9h18" />
    </svg>
)
export default PlusThin
