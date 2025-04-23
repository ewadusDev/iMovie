import * as React from "react"
import { SVGProps } from "react"
const Notification = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill={props.fill || "#fff"}
            d="M12.51 5.484c.34 0 1.15.216 1.15.216 2.191.502 3.734 2.52 3.734 4.8v6.135l.448.45.374.377H6.706l.375-.377.448-.45V10.5c0-2.28 1.543-4.298 3.735-4.8 0 0 .867-.216 1.15-.216M12.46 2a1.47 1.47 0 0 0-1.493 1.5v.7c-2.837.65-4.977 3.25-4.977 6.3V16L4 18v1h16.923v-1l-1.99-2v-5.5c0-3.05-2.141-5.65-4.978-6.3v-.7c0-.85-.647-1.5-1.494-1.5Zm1.992 18H10.47c0 1.1.895 2 1.99 2 1.096 0 1.992-.9 1.992-2Z"
        />
    </svg>
)
export default Notification
