"use client";

import Image from "next/image";
import TopNavbar from "./components/landing/TopNavbar";
import { useState } from "react";
import DropdownLanguages from "./components/landing/Dropdown";
import { FOOTERLINKS, LANGUAGES } from "@/data/static";
import Link from "next/link";

export default function Home() {
  const [isCollaped1, setIsCollaped1] = useState(false);
  const [isCollaped2, setIsCollaped2] = useState(false);
  const [isCollaped3, setIsCollaped3] = useState(false);
  const [isCollaped4, setIsCollaped4] = useState(false);
  const [isCollaped5, setIsCollaped5] = useState(false);
  const [isCollaped6, setIsCollaped6] = useState(false);

  return (
    <main>
      {/* Hero */}
      <div className="relative h-dvh bg-[url(/home/hero/hero-bg-image.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 container mx-auto">
          <TopNavbar />
          <div className="px-72 pt-80">
            <div>
              <h1 className="text-5xl font-bold text-white">
                Unlimited movies, TV shows, and more
              </h1>
              <p className="mt-4 text-center text-2xl text-white">
                Watch anywhere. Cancel anytime.
              </p>
            </div>
            <div className="mt-6 flex flex-col">
              <p className="text-center text-xl text-white">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="mx-auto mt-3.5 flex h-11 gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="text-md w-full rounded-sm border-1 border-[#808080] bg-black/50 px-5 py-4 text-white placeholder-[#808080]"
                />
                <button className="w-[270px] rounded-sm bg-[#e50914] px-4 text-xl font-medium text-white">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sections */}
      <section>
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex-1 border-white">
            <h2 className="text-5xl font-bold text-white">Enjoy on your TV</h2>
            <p className="mt-4 text-[24px] text-white">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center border-white">
            <Image
              src={"/home/section/screens-preview.png"}
              alt="screens-preview"
              width={546}
              height={410}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex flex-1 items-center justify-center border-white">
            <Image
              src={"/home/section/screens-preview-2.png"}
              alt="screens-preview"
              width={546}
              height={410}
            />
          </div>
          <div className="flex-1 border-white">
            <h2 className="text-5xl font-bold text-white">Watch everywhere</h2>
            <p className="mt-4 text-[24px] text-white">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex-1 border-white">
            <h2 className="text-5xl font-bold text-white">
              Create profiles for kids
            </h2>
            <p className="mt-4 text-[24px] text-white">
              Send lids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center border-white">
            <Image
              src={"/home/section/screens-preview-1.png"}
              alt="screens-preview"
              width={546}
              height={410}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex flex-1 items-center justify-center border-white">
            <Image
              src={"/home/section/screens-preview-3.png"}
              alt="screens-preview"
              width={546}
              height={410}
            />
          </div>
          <div className="flex-1 border-white">
            <h2 className="text-5xl font-bold text-white">
              Download your shows to watch offline
            </h2>
            <p className="mt-4 text-[24px] text-white">
              Watch on a plane, train or submarine...
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <h5 className="py-10 text-center text-3xl font-semibold text-white">
            Frequently Asked Questions
          </h5>
          <div className="px-36">
            <div className="mb-2" onClick={() => setIsCollaped1(!isCollaped1)}>
              <div className="flex items-center justify-between bg-[#2a2a2a] p-6">
                <p className="text-white">What is Netflix?</p>
                <p className="text-white">+</p>
              </div>
              <div
                className={`mt-2 bg-[#2a2a2a] p-6 text-white ${isCollaped1 ? "block" : "hidden"}`}
              >
                <p>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices.
                </p>
                <br />
                <p>
                  You can watch as much as you want, whenever you want without a
                  single commercial – all for one low monthly price. There&#39s
                  always something new to discover and new TV shows and movies
                  are added every week!
                </p>
              </div>
            </div>

            <div className="mb-2" onClick={() => setIsCollaped2(!isCollaped2)}>
              <div className="flex items-center justify-between bg-[#2a2a2a] p-6">
                <p className="text-white">How much does Netflix cost?</p>
                <p className="text-white">+</p>
              </div>
              <div
                className={`mt-2 bg-[#2a2a2a] p-6 text-white ${isCollaped2 ? "block" : "hidden"}`}
              >
                <p>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from $7.99 to $24.99 a month (pre-tax). No extra costs, no
                  contracts.
                </p>
              </div>
            </div>

            <div className="mb-2" onClick={() => setIsCollaped3(!isCollaped3)}>
              <div className="flex items-center justify-between bg-[#2a2a2a] p-6">
                <p className="text-white">Where can i watch?</p>
                <p className="text-white">+</p>
              </div>
              <div
                className={`mt-2 bg-[#2a2a2a] p-6 text-white ${isCollaped3 ? "block" : "hidden"}`}
              >
                <p>
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles. You can also
                  download your favorite shows with the iOS or Android app.
                </p>
                <br />
                <p>
                  Use downloads to watch while you&apos;re on the go and without
                  an internet connection. Take Netflix with you anywhere.
                </p>
              </div>
            </div>

            <div className="mb-2" onClick={() => setIsCollaped4(!isCollaped4)}>
              <div className="flex items-center justify-between bg-[#2a2a2a] p-6">
                <p className="text-white">How do i cancel?</p>
                <p className="text-white">+</p>
              </div>
              <div
                className={`mt-2 bg-[#2a2a2a] p-6 text-white ${isCollaped4 ? "block" : "hidden"}`}
              >
                <p>
                  Netflix is flexible. There are no pesky contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees - start or stop your
                  account anytime.
                </p>
              </div>
            </div>

            <div className="mb-2" onClick={() => setIsCollaped5(!isCollaped5)}>
              <div className="flex items-center justify-between bg-[#2a2a2a] p-6">
                <p className="text-white">What can i watch on Netflix?</p>
                <p className="text-white">+</p>
              </div>
              <div
                className={`mt-2 bg-[#2a2a2a] p-6 text-white ${isCollaped5 ? "block" : "hidden"}`}
              >
                <p>
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </p>
              </div>
            </div>

            <div className="mb-2" onClick={() => setIsCollaped6(!isCollaped6)}>
              <div className="flex items-center justify-between bg-[#2a2a2a] p-6">
                <p className="text-white">Is Netflix good for kids?</p>
                <p className="text-white">+</p>
              </div>
              <div
                className={`mt-2 bg-[#2a2a2a] p-6 text-white ${isCollaped6 ? "block" : "hidden"}`}
              >
                <p>
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col pt-7">
          <p className="text-md text-center text-white">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="mx-auto mt-3.5 flex h-11 gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="text-md w-full rounded-sm border-1 border-[#808080] bg-black/50 px-5 py-4 text-white placeholder-[#808080]"
            />
            <button className="w-[270px] rounded-sm bg-[#e50914] px-4 text-xl font-medium text-white">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <footer className="pb-10">
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
    </main>
  );
}
