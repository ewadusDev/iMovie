import { AuthOptions } from "next-auth"
import Credential from "next-auth/providers/credentials"
import prismadb from "./prismadb"
import bcrypt from "bcryptjs"


export const authOptions: AuthOptions = {
    providers: [
        Credential({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials || !credentials?.email || !credentials?.password) {
                    throw new Error("Email and password required")
                }

                const { email, password } = credentials

                try {
                    const user = await prismadb.user.findUnique({
                        where: {
                            email
                        }
                    })

                    if (!user || !user.hashPassword) {
                        throw new Error("Email does not exist")
                    }

                    const isCorrectPassword = bcrypt.compareSync(password, user.hashPassword)

                    if (!isCorrectPassword) {
                        throw new Error("Incorrect password")
                    }
                    return user

                } catch (error) {
                    console.log(error)
                    throw new Error("Something went wrong in authorize")
                }

            }

        })
    ],
    pages: {
        signIn: "/signin",
    },

}