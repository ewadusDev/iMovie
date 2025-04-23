import * as React from "react"
import { SVGProps } from "react"
const Person = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <circle
            cx={11.883}
            cy={5.654}
            r={3.807}
            stroke={props.stroke || "#B3B3B3"}
            strokeWidth={1.692}
        />
        <path
            stroke={props.stroke || "#B3B3B3"}
            strokeWidth={1.692}
            d="M19.92 18.768c0 1.002-.2 1.638-.486 2.059-.28.412-.7.71-1.326.918-.64.215-1.454.323-2.451.372-.822.04-1.722.038-2.71.036a335.093 335.093 0 0 0-1.239 0c-2.266.003-4.217.006-5.657-.417-.756-.222-1.284-.539-1.63-.966-.34-.42-.576-1.036-.576-2.002 0-3.839 3.453-6.769 8.038-6.769 4.584 0 8.038 2.93 8.038 6.769Z"
        />
    </svg>
)
export default Person
