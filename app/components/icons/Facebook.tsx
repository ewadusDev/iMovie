import * as React from "react"
import { SVGProps } from "react"
const Facebook = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill={props.fill || "#fff"}
            d="m16.928 13.281.606-3.95h-3.791V6.765c0-1.081.53-2.135 2.227-2.135h1.724V1.267S16.13 1 14.634 1c-3.122 0-5.163 1.892-5.163 5.318V9.33H6v3.951h3.47v9.553a13.76 13.76 0 0 0 4.273 0V13.28h3.185Z"
        />
    </svg>
)
export default Facebook
