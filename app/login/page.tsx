import Image from "next/image"
import Link from "next/link"
import DropdownLanguages from "../components/landing/Dropdown"
import { FOOTERLINKS, LANGUAGES } from "@/data/static"


const LoginPage = () => {
    return (
        <main className="">
            <div className="relative bg-[url(/home/hero/hero-bg-image.png)] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/70" />
                <div className="container mx-auto relative z-10">
                    <nav className="h-fit flex justify-between items-center py-6 ">
                        <Image src={"/logo/medium-logo.png"} alt="logo-netflix" width={148} height={40} />
                    </nav>

                    <div className="bg-black/50 w-[500px] mx-auto flex flex-col gap-4 px-12 pt-12 pb-20">
                        <h1 className="text-white text-4xl font-semibold">Sign In</h1>
                        <input type="text" placeholder="Email or Phone Number" className="text-white text-lg py-2 px-4 placeholder-white rounded-sm border border-[#808080]" />
                        <input type="password" placeholder="Password" className="text-white text-lg py-2 px-4 placeholder-white rounded-sm border border-[#808080]" />
                        <button className="text-white text-lg py-2 px-4 font-semibold bg-[#e50914] rounded-sm">Sign In</button>
                        <p className="text-white text-lg text-center">OR</p>
                        <button className="text-white text-lg py-2 px-4 font-semibold bg-gray-300/20 rounded-sm">Use a Sign-In Code</button>
                        <p className="text-white text-lg text-center">Forgot Password?</p>
                        <div className="flex gap-3">
                            <input type="checkbox" />
                            <p className="text-white">Remember me</p>
                        </div>
                        <p className="text-white">New to Netflix? <span className="font-semibold">Sign up now.</span></p>

                        <p className="text-white">This page is protected by Google reCAPTCHA to ensure you’re not a bot. <span className="text-blue-500">Learn more.</span></p>
                    </div>


                    <footer className="pb-10 bg-black/40 mt-5">
                        <div className="container mx-auto">
                            <p className="text-white py-5">Questions? Call 1-844-505-2993</p>
                            <div className="grid grid-cols-4 gap-1 py-5">
                                {FOOTERLINKS.map((link) => {
                                    return (
                                        <Link href={link.href} key={link.label} className="w-fit">
                                            <p className="text-white underline hover:cursor-pointer">{link.label}</p>
                                        </Link>
                                    )
                                })}
                            </div>
                            <DropdownLanguages items={LANGUAGES} />
                        </div>
                    </footer>




                </div>
            </div>
        </main>
    )
}
export default LoginPage