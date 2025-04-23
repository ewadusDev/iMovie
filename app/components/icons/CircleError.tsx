import * as React from "react"
import { SVGProps } from "react"
const CircleError = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill={props.fill || "#EB3942"}
            fillRule="evenodd"
            d="M11.591 12 9.046 9.454l.565-.565 2.546 2.545 2.545-2.545.566.565L12.722 12l2.546 2.546-.566.565-2.545-2.545L9.61 15.11l-.565-.565L11.59 12Z"
            clipRule="evenodd"
        />
        <circle cx={12} cy={12} r={7.5}
            stroke={props.stroke || "#EB3942"} />
    </svg>
)
export default CircleError
