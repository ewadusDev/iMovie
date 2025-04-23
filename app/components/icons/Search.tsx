import * as React from "react"
import { SVGProps } from "react"
const Search = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <circle
            cx={10.695}
            cy={10.696}
            r={7.826}
            stroke={props.stroke || "#fff"}
            strokeWidth={1.739}
        />
        <path stroke={props.stroke || "#fff"} strokeWidth={1.739} d="m21.564 22-5.96-6.034" />
    </svg>
)
export default Search
