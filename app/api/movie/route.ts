import { minioClient } from "@/lib/db"
import { NextResponse, NextRequest } from "next/server"


export const POST = async (req: NextRequest) => {
    const { filePath } = await req.json()
    console.log(filePath)

    if (!filePath || typeof filePath !== "string") {
        return NextResponse.json({ error: "Invalid file path" }, { status: 400 })
    }

    try {
        const url = await minioClient(filePath)
        return NextResponse.json({ url }, { status: 200 })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ error }, { status: 500 })

    }
}
