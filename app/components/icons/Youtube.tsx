import * as React from "react"
import { SVGProps } from "react"
const Youtube = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill={props.fill || "#fff"}
            d="M22.54 6.403a2.755 2.755 0 0 0-1.945-1.945c-1.716-.46-8.596-.46-8.596-.46s-6.88 0-8.595.46a2.755 2.755 0 0 0-1.945 1.945c-.46 1.715-.46 5.295-.46 5.295s0 3.58.46 5.295a2.755 2.755 0 0 0 1.945 1.945c1.716.46 8.595.46 8.595.46s6.88 0 8.595-.46a2.755 2.755 0 0 0 1.945-1.945c.46-1.715.46-5.295.46-5.295s0-3.58-.46-5.295Z"
        />
        <path fill={props.fill || "#000"} d="m9.8 14.998 5.715-3.3-5.715-3.3v6.6Z" />
    </svg>
)
export default Youtube
