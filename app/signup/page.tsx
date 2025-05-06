"use client";

import { FOOTERLINKS, LANGUAGES } from "@/data/static";
import Link from "next/link";
import DropdownLanguages from "../components/landing/Dropdown";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { createUser } from "@/lib/actions";

const SignUpPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const initialState = "";
  const [state, actionForm] = useActionState(createUser, initialState);

  if (state === "User created successfully") {
    router.push("/signin");
  }

  useEffect(() => {
    if (session) {
      router.replace("/browse");
    }
  }, [router, session]);

  return (
    <main className="">
      <div className="relative bg-[url(/home/hero/hero-bg-image.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto">
          <nav className="flex h-fit items-center justify-between py-6">
            <h4 className="text-4xl font-bold text-[#C600D1]">NETFLIX888</h4>
          </nav>

          <form
            className="mx-auto flex w-[500px] flex-col gap-4 bg-black/50 px-12 pt-12 pb-20"
            action={actionForm}
          >
            <h1 className="text-4xl font-semibold text-white">Sign Up</h1>
            <input
              type="text"
              placeholder="Fullname"
              name="name"
              className="rounded-sm border border-[#808080] px-4 py-2 text-lg text-white placeholder-white"
            />
            <input
              type="text"
              placeholder="username"
              name="username"
              className="rounded-sm border border-[#808080] px-4 py-2 text-lg text-white placeholder-white"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="rounded-sm border border-[#808080] px-4 py-2 text-lg text-white placeholder-white"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="rounded-sm border border-[#808080] px-4 py-2 text-lg text-white placeholder-white"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="cfPassword"
              className="rounded-sm border border-[#808080] px-4 py-2 text-lg text-white placeholder-white"
            />
            <button
              className="rounded-sm bg-[#C600D1] px-4 py-2 text-lg font-semibold text-white"
              type="submit"
            >
              Create Account
            </button>
            <p className="text-white">
              Have an account?{" "}
              <span className="font-semibold underline">
                <Link href={"/signin"}>Sign in now.</Link>
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
export default SignUpPage;
