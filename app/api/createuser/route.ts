import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb"

export const POST = async (request: NextRequest) => {
    const body = await request.json()

    if (!body) {
        return NextResponse.json("No body in request", { status: 400 })
    }

    const { username, name, email, password } = body

    try {
        const user = await prismadb.user.findUnique({
            where: {
                email
            }
        })

        if (user) {
            return NextResponse.json("User already exists", { status: 400 })
        }

        await prismadb.user.create({
            data: {
                username,
                name,
                email,
                hashPassword: await bcrypt.hash(password, 10)
            }
        })

        return NextResponse.json("Created user successfully", { status: 200 })

    } catch (error) {
        console.error(error)
        return NextResponse.json("Something went wrong authentication route", { status: 500 })
    }
} 