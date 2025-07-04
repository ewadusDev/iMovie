"use client";

import Link from "next/link";
import DropdownLanguages from "../components/landing/Dropdown";
import { FOOTERLINKS, LANGUAGES } from "@/data/static";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.replace("/browse");
    }
  }, [router, isAuthenticated, session]);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await signIn("credentials", {
      email: email as string,
      password: password as string,
      redirect: false,
    });

    setIsAuthenticated(true);
  };

  return (
    <main className="">
      <div className="relative bg-[url(/home/hero/hero-bg-image.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto">
          <nav className="flex h-fit items-center justify-between py-6">
            <h4 className="text-4xl font-bold text-[#F4006F]">iMovie</h4>
          </nav>

          <form
            className="mx-auto flex w-[500px] flex-col gap-4 bg-black/50 px-12 pt-12 pb-20"
            onSubmit={handleLogin}
          >
            <h1 className="text-4xl font-semibold text-white">Sign In</h1>
            <input
              type="text"
              name="email"
              placeholder="Email or username"
              className="rounded-sm border border-[#808080] px-4 py-2 text-lg text-white placeholder-white"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="rounded-sm border border-[#808080] px-4 py-2 text-lg text-white placeholder-white"
            />
            <button
              className="rounded-sm bg-[#F4006F] px-4 py-2 text-lg font-semibold text-white"
              type="submit"
            >
              Sign In
            </button>
            <p className="text-white">
              New to iMovie?{" "}
              <span className="font-semibold underline">
                <Link href={"/signup"}>Sign up now.</Link>
              </span>
            </p>
          </form>

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
