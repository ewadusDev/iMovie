import Image from "next/image";
import Link from "next/link";
import DropdownLanguages from "../components/landing/Dropdown";
import { FOOTERLINKS, LANGUAGES } from "@/data/static";

const LoginPage = () => {
    return (
        <main className="">
            <div className="relative bg-[url(/home/hero/hero-bg-image.png)] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10 container mx-auto">
                    <nav className="flex h-fit items-center justify-between py-6">
                        <Image
                            src={"/logo/medium-logo.png"}
                            alt="logo-netflix"
                            width={148}
                            height={40}
                        />
                    </nav>

                    <div className="mx-auto flex w-[500px] flex-col gap-4 bg-black/50 px-12 pt-12 pb-20">
                        <h1 className="text-4xl font-semibold text-white">Sign In</h1>
                        <input
                            type="text"
                            placeholder="Email or Phone Number"
                            className="rounded-sm border border-[#808080] px-4 py-2 text-lg text-white placeholder-white"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="rounded-sm border border-[#808080] px-4 py-2 text-lg text-white placeholder-white"
                        />
                        <button className="rounded-sm bg-[#e50914] px-4 py-2 text-lg font-semibold text-white">
                            Sign In
                        </button>
                        <p className="text-center text-lg text-white">OR</p>
                        <button className="rounded-sm bg-gray-300/20 px-4 py-2 text-lg font-semibold text-white">
                            Use a Sign-In Code
                        </button>
                        <p className="text-center text-lg text-white">Forgot Password?</p>
                        <div className="flex gap-3">
                            <input type="checkbox" />
                            <p className="text-white">Remember me</p>
                        </div>
                        <p className="text-white">
                            New to Netflix?{" "}
                            <span className="font-semibold">Sign up now.</span>
                        </p>

                        <p className="text-white">
                            This page is protected by Google reCAPTCHA to ensure you’re not a
                            bot. <span className="text-blue-500">Learn more.</span>
                        </p>
                    </div>

                    <footer className="mt-5 bg-black/40 pb-10">
                        <div className="container mx-auto">
                            <p className="py-5 text-white">Questions? Call 1-844-505-2993</p>
                            <div className="grid grid-cols-4 gap-1 py-5">
                                {FOOTERLINKS.map((link) => {
                                    return (
                                        <Link href={link.href} key={link.label} className="w-fit">
                                            <p className="text-white underline hover:cursor-pointer">
                                                {link.label}
                                            </p>
                                        </Link>
                                    );
                                })}
                            </div>
                            <DropdownLanguages items={LANGUAGES} />
                        </div>
                    </footer>
                </div>
            </div>
        </main>
    );
};
export default LoginPage;
