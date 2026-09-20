import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image  from "next/image";

const productLinks = [
  { label: "Features", href: "/#features" },
  { label: "Models", href: "/models" },
  { label: "Pricing", href: "/pricing" },
  { label: "Download", href: "/download" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Help & Support", href: "/help" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const accountLinks = [
  { label: "Log in", href: "/login" },
  { label: "Get started", href: "/signup" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[#080808] px-5 py-16 text-white sm:px-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-0 h-100 w-175 -translate-x-1/2 rounded-full bg-white/2.5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/30 text-xs font-black text-black shadow-[0_10px_35px_rgba(255,255,255,0.08)]">
              <Image src="/images/logo.png" width={50} height={50} alt="faild to load logo"/>
              </div>
             

              <div>
                <p className="text-[17px] font-bold tracking-[-0.4px]">
                  Trilok-On
                </p>

                <p className="mt-0.5 text-[10px] font-medium text-white/30">
                  Intelligent AI workspace
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/35">
              Intelligence, built around you. A simple workspace for
              conversations, learning, reasoning, coding, research, and
              creation.
            </p>

            <Link
              href="/signup"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Get started
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <FooterColumn title="Product" links={productLinks} />

          <FooterColumn title="Company" links={companyLinks} />

          <FooterColumn title="Account" links={accountLinks} />
        </div>

        <div className="mt-16 border-t border-white/8 pt-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/25">
              © 2026 Trilok-On. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-xs text-white/25">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/10">
                <Sparkles size={10} />
              </span>

              <span>AI for learning, reasoning and creation.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/30">
        {title}
      </p>

      <div className="mt-5 flex flex-col gap-3.5">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="w-fit text-sm text-white/40 transition hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}