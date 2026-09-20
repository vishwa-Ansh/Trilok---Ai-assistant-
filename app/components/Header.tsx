"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-black/6 bg-[#F7F7F5]/40 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">

        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo.png"
            alt="Trilok-On"
            width={50}
            height={50}
            className="object-contain"
            priority
          />

          <span className="text-[18px] font-bold tracking-[-0.5px] text-black">
            Trilok-On
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/#features"
            className="text-sm text-black/60 transition hover:text-black"
          >
            Features
          </Link>

          <Link
            href="/download"
            className="text-sm text-black/60 transition hover:text-black"
          >
            Download
          </Link>

          <Link
            href="/models"
            className="text-sm text-black/60 transition hover:text-black"
          >
            Models
          </Link>

          <Link
            href="/pricing"
            className="text-sm text-black/60 transition hover:text-black"
          >
            Pricing
          </Link>

          <Link
            href="/about"
            className="text-sm text-black/60 transition hover:text-black"
          >
            About
          </Link>

        </div>

        <div className="hidden items-center gap-3 md:flex">

          <Link
            href="/login"
            className="rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:bg-black/10 text-black"
          >
            Log in
          </Link>

          <Link
            href="/signup"
            className="flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black/80"
          >
            Get started
            <ArrowRight size={15} />
          </Link>

        </div>

        <button
          type="button"
          onClick={() => setMobileMenu((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white md:hidden"
          aria-label={mobileMenu ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenu}
        >
          {mobileMenu ? <X size={22} /> : <Menu size={21} />}
        </button>

      </div>

      {mobileMenu && (
        <div className="border-t border-black/6 bg-[#F7F7F5] px-5 pb-6 pt-4 md:hidden">

          <div className="flex flex-col gap-2">

            <Link
              href="/#features"
              onClick={closeMenu}
              className="rounded-xl px-3 py-3 text-sm font-medium"
            >
              Features
            </Link>

            <Link
              href="/download"
              onClick={closeMenu}
              className="rounded-xl px-3 py-3 text-sm font-medium"
            >
              Download
            </Link>

            <Link
              href="/models"
              onClick={closeMenu}
              className="rounded-xl px-3 py-3 text-sm font-medium"
            >
              Models
            </Link>

            <Link
              href="/pricing"
              onClick={closeMenu}
              className="rounded-xl px-3 py-3 text-sm font-medium"
            >
              Pricing
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="rounded-xl px-3 py-3 text-sm font-medium"
            >
              About
            </Link>

            <div className="mt-3 flex gap-2">

              <Link
                href="/login"
                onClick={closeMenu}
                className="flex-1 rounded-xl border border-black/10 py-3 text-center text-sm font-semibold"
              >
                Log in
              </Link>

              <Link
                href="/signup"
                onClick={closeMenu}
                className="flex-1 rounded-xl bg-black py-3 text-center text-sm font-semibold text-white"
              >
                Get started
              </Link>

            </div>

          </div>

        </div>
      )}

    </nav>
  );
}