import * as React from "react"
import { SVGProps } from "react"
const Flag = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill={props.fill || "#fff"}
            d="m12.382 5.796.447 3.272 6.935.525v4.043l-9.05-1.05V9.84L4.236 8.79V4.222l8.146 1.574Zm1.833-2.222L2 2v20h2.236V11.012l4.496.957.057 2.315L22 15.858V7.895l-7.337-.525-.448-3.796Z"
        />
    </svg>
)
export default Flag
