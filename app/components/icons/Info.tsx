import * as React from "react"
import { SVGProps } from "react"
const Info = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <circle cx={12} cy={12} r={9.231} stroke={props.stroke || "#fff"} strokeWidth={1.538} />
        <path
            fill={props.fill || "#fff"}
            d="M12.464 9.668a.94.94 0 0 1-.677-.283.912.912 0 0 1-.296-.69c0-.27.099-.504.296-.689a.94.94 0 0 1 .677-.283.99.99 0 0 1 .69.283.948.948 0 0 1 .282.69c0 .27-.098.504-.283.689a.99.99 0 0 1-.69.283Zm-.788 7.101v-6.363h1.563v6.363h-1.563Z"
        />
    </svg>
)
export default Info
