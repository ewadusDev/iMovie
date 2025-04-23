import * as React from "react"
import { SVGProps } from "react"
const Account = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <rect
            width={17.6}
            height={17.6}
            x={2.878}
            y={1.88}
            stroke="#B3B3B3"
            strokeWidth={1.76}
            rx={2.64}
        />
        <path fill="#141414" d="M11.678 18.6h2.64v1.76h-2.64z" />
        <path
            stroke="#B3B3B3"
            strokeLinecap="round"
            strokeWidth={1.32}
            d="m8.158 23 3.84-3.52-3.84-3.52"
        />
        <rect
            width={2.64}
            height={2.64}
            x={6.399}
            y={6.72}
            fill="#B3B3B3"
            rx={1.32}
        />
        <rect
            width={2.64}
            height={2.64}
            x={14.318}
            y={6.72}
            fill="#B3B3B3"
            rx={1.32}
        />
        <path
            stroke={props.stroke || "#B3B3B3"}
            strokeLinecap="round"
            strokeWidth={1.32}
            d="M9.918 12.88s1.865.44 3.08.44c1.216 0 3.08-.44 3.08-.44"
        />
    </svg>
)
export default Account
