"use client";

import {
  ArrowRight,
  Brain,
  ChevronDown,
  Clock3,
  FolderKanban,
  Menu,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const features = [
  {
    icon: Brain,
    title: "Intelligent conversations",
    description:
      "Ask questions, explore ideas, understand complex topics, and get useful answers in seconds.",
  },
  {
    icon: Sparkles,
    title: "Multiple AI models",
    description:
      "Choose the model that fits your task and switch between models whenever you need.",
  },
  {
    icon: MessageSquare,
    title: "Natural conversations",
    description:
      "Continue conversations with context instead of starting from zero every time.",
  },
  {
    icon: FolderKanban,
    title: "Projects",
    description:
      "Keep related conversations and work organized in one place.",
  },
  {
    icon: Clock3,
    title: "Chat history",
    description:
      "Return to previous conversations and continue where you left off.",
  },
  {
    icon: ShieldCheck,
    title: "Built with privacy in mind",
    description:
      "Control your account, conversations, memory, and app security.",
  },
];

const faqs = [
  {
    question: "What is TL-On?",
    answer:
      "TL-On is an AI assistant designed for conversations, learning, problem solving, coding, research, and everyday tasks.",
  },
  {
    question: "Can I use TL-On for free?",
    answer:
      "Yes. TL-On can offer a free plan with usage limits. Paid plans can provide higher limits and access to additional models and features.",
  },
  {
    question: "Can I choose different AI models?",
    answer:
      "Yes. TL-On is designed around multiple AI models so you can choose the model that fits your task.",
  },
  {
    question: "Does TL-On have a mobile app?",
    answer:
      "Yes. TL-On is being built for mobile alongside the web experience.",
  },
];

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#111111]">
      {/* Navbar */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-black/[0.06] bg-[#F7F7F5]/40 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3">
            {/* <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-sm font-extrabold tracking-tight text-white">
              TL
            </div> */}
            <Image
              src="/images/logo.png"
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <span className="text-[18px] font-bold tracking-[-0.5px]">
              Trilok-On
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm text-black/60 transition hover:text-black"
            >
              Features
            </a>
            <a
              href="#pricing"
            >
              aaaa
            </a>
            <Link href="/download"  className="text-sm text-black/60 transition hover:text-black">
            Download</Link>

            <a
              href="#models"
              className="text-sm text-black/60 transition hover:text-black"
            >
              Models
            </a>

            <a
              href="#pricing"
              className="text-sm text-black/60 transition hover:text-black"
            >
              Pricing
            </a>

            <a
              href="#about"
              className="text-sm text-black/60 transition hover:text-black"
            >
              About
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/login"
              className="rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:bg-black/[0.05]"
            >
              Log in
            </a>

            <a
              href="/signup"
              className="flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black/80"
            >
              Get started
              <ArrowRight size={15} />
            </a>
          </div>

          <button
  type="button"
  onClick={() => {
    setMobileMenu((prev) => !prev);
  }}
  className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white md:hidden"
  aria-label={mobileMenu ? "Close menu" : "Open menu"}
>
  {mobileMenu ? <X size={22} /> : <Menu size={21} />}
</button>
        </div>

        {mobileMenu && (
          <div className="border-t border-black/[0.06] bg-[#F7F7F5] px-5 pb-6 pt-4 md:hidden">
            <div className="flex flex-col gap-2">
              {[
                ["Features", "#features"
                ],
                ["Download", "/download"],
                ["Models", "#models"],
                ["Pricing", "#pricing"],
                ["About", "#about"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileMenu(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium"
                >
                  {label}
                </a>
              ))}

              <div className="mt-3 flex gap-2">
                <a
                  href="/login"
                  className="flex-1 rounded-xl border border-black/10 py-3 text-center text-sm font-semibold"
                >
                  Log in
                </a>

                <a
                  href="/signup"
                  className="flex-1 rounded-xl bg-black py-3 text-center text-sm font-semibold text-white"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}

      <section className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-24 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-black/[0.035] blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/70 px-3.5 py-2 text-xs font-medium text-black/60 shadow-sm">
            <Sparkles size={13} />
            Your intelligent AI companion
          </div>

          <h1 className="mx-auto max-w-4xl text-[48px] font-extrabold leading-[0.98] tracking-[-3px] sm:text-[72px] lg:text-[88px]">
            Intelligence,
            <br />
            built around you.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-7 text-black/55 sm:text-[18px]">
            Ask questions. Explore ideas. Learn faster.
            Build better. TL-On brings powerful AI
            conversations into one simple experience.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/signup"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-black/85 sm:w-auto"
            >
              Get started
              <ArrowRight size={16} />
            </a>

            <a
              href="#models"
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold transition hover:bg-black/[0.03] sm:w-auto"
            >
              Explore models
            </a>
          </div>
        </div>

        {/* Chat Preview */}

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="rounded-[28px] border border-black/[0.08] bg-white p-2 shadow-[0_30px_100px_rgba(0,0,0,0.10)]">
            <div className="overflow-hidden rounded-[22px] border border-black/[0.06] bg-[#FAFAF9]">
              <div className="flex h-14 items-center justify-between border-b border-black/[0.06] px-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-black text-[9px] font-bold text-white">
                    TL
                  </div>

                  <span className="text-sm font-semibold">
                    TL-On
                  </span>
                </div>

                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-black/10" />
                  <div className="h-2 w-2 rounded-full bg-black/10" />
                  <div className="h-2 w-2 rounded-full bg-black/10" />
                </div>
              </div>

              <div className="mx-auto max-w-3xl px-5 py-12 sm:px-10 sm:py-16">
                <div className="ml-auto max-w-md rounded-4xl bg-black px-4 py-3 text-sm leading-6 text-white">
                  Explain neural networks in a simple way.
                </div>

                <div className="mt-8 flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-black text-[9px] font-bold text-white">
                    TL
                  </div>

                  <div className="max-w-2xl">
                    <p className="text-sm leading-7 text-black/75">
                      A neural network is a computing system
                      inspired by how biological brains process
                      information.
                    </p>

                    <p className="mt-4 text-sm leading-7 text-black/75">
                      Think of it as layers of connected
                      mathematical units. Each layer transforms
                      the information and passes it to the next
                      one until the network produces an answer.
                    </p>

                    <div className="mt-5 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black/70" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black/30 [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black/20 [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-black/[0.06] p-4">
                <div className="mx-auto flex max-w-3xl items-center rounded-2xl border border-black/[0.08] bg-white px-4 py-3 text-sm text-black/35">
                  Ask TL-On anything...
                  <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-xl bg-black text-white">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}

      <section
        id="about"
        className="border-y border-black/[0.06] bg-white px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                One intelligent workspace
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-[-1.5px] sm:text-5xl">
                Everything you need to work with AI.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-black/55">
              TL-On brings conversations, models, projects,
              history, and personalization together so you
              can focus on the work instead of managing your
              AI tools.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}

      <section
        id="features"
        className="px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-black/40">
              Features
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-[-1.5px] sm:text-5xl">
              Designed for the way you think.
            </h2>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-black/[0.07] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.04]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold tracking-[-0.3px]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/50">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Models */}

      <section
        id="models"
        className="bg-black px-5 py-24 text-white sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                AI Models
              </span>

              <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-[-1.5px] sm:text-5xl">
                Choose the intelligence for the task.
              </h2>
            </div>

            <a
              href="/models"
              className="flex w-fit items-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              View all models
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="mt-14 grid gap-3 md:grid-cols-3">
            {[
              {
                name: "TL-On Fast",
                label: "Everyday",
                text: "Fast responses for everyday questions and conversations.",
              },
              {
                name: "TL-On Reason",
                label: "Reasoning",
                text: "Built for deeper reasoning, analysis, and complex tasks.",
              },
              {
                name: "TL-On Code",
                label: "Coding",
                text: "Focused on programming, debugging, and technical work.",
              },
            ].map((model) => (
              <div
                key={model.name}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 transition hover:bg-white/[0.08]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black">
                    <Zap size={18} />
                  </div>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/50">
                    {model.label}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold">
                  {model.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  {model.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}

      <section
        id="pricing"
        className="px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-black/40">
              Pricing
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-[-1.5px] sm:text-5xl">
              Start free. Upgrade when you need more.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-black/50">
              Flexible plans designed for casual users,
              creators, developers, and professionals.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <PriceCard
              name="Free"
              price="₹0"
              description="For exploring TL-On."
              features={[
                "AI conversations",
                "Basic models",
                "Chat history",
              ]}
            />

            <PriceCard
              name="Plus"
              price="₹199"
              description="For regular AI users."
              featured
              features={[
                "More AI usage",
                "More models",
                "Projects",
                "Priority access",
              ]}
            />

            <PriceCard
              name="Pro"
              price="₹499"
              description="For serious work."
              features={[
                "Higher usage limits",
                "Advanced models",
                "Priority processing",
                "More powerful features",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Mobile */}

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-[#EDEDEA] px-7 py-14 sm:px-12 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-black/40">
              TL-On everywhere
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-[-1.5px] sm:text-5xl">
              Your AI, wherever you go.
            </h2>

            <p className="mt-5 text-sm leading-6 text-black/50">
              Continue your conversations across your
              devices and keep your AI workspace close.
            </p>

            <a
              href="/download"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white"
            >
              Get TL-On
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="mt-12 hidden h-64 w-64 rotate-3 rounded-[40px] border-[8px] border-black bg-[#111] p-3 shadow-2xl lg:block">
            <div className="flex h-full flex-col rounded-[30px] bg-[#F7F7F5] p-4">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-black text-[8px] font-bold text-white">
                  TL
                </div>

                <span className="text-xs font-bold">
                  TL-On
                </span>
              </div>

              <div className="mt-auto rounded-xl bg-black p-3 text-[10px] leading-4 text-white">
                Ask me anything.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="border-t border-black/[0.06] bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-black/40">
              FAQ
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-[-1.5px]">
              Questions, answered.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <div key={faq.question}>
                  <button
                    onClick={() =>
                      setOpenFaq(open ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-sm font-semibold">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform ${open ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {open && (
                    <p className="pb-6 pr-10 text-sm leading-6 text-black/50">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-[32px] bg-black px-7 py-16 text-center text-white sm:px-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
            <Sparkles size={21} />
          </div>

          <h2 className="mx-auto mt-7 max-w-2xl text-4xl font-bold tracking-[-1.5px] sm:text-5xl">
            Ready to experience TL-On?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/45">
            Start a conversation and discover a simpler
            way to work with AI.
          </p>

          <a
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Get started
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Footer */}

      <footer className="border-t border-black/[0.06] bg-[#F7F7F5] px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-sm font-extrabold text-white">
                TL
              </div>

              <span className="font-bold">
                TL-On
              </span>
            </div>

            <p className="mt-4 max-w-xs text-xs leading-5 text-black/40">
              Intelligence, built around you.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm sm:grid-cols-3">
            <a
              href="#features"
              className="text-black/50 hover:text-black"
            >
              Features
            </a>

            <a
              href="#models"
              className="text-black/50 hover:text-black"
            >
              Models
            </a>

            <a
              href="#pricing"
              className="text-black/50 hover:text-black"
            >
              Pricing
            </a>

            <a
              href="/privacy"
              className="text-black/50 hover:text-black"
            >
              Privacy
            </a>

            <a
              href="/terms"
              className="text-black/50 hover:text-black"
            >
              Terms
            </a>

            <a
              href="/help"
              className="text-black/50 hover:text-black"
            >
              Help
            </a>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl border-t border-black/[0.06] pt-6">
          <p className="text-xs text-black/35">
            © 2026 TL-On. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

function PriceCard({
  name,
  price,
  description,
  features,
  featured = false,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl border p-7 ${featured
        ? "border-black bg-black text-white shadow-2xl shadow-black/10"
        : "border-black/[0.08] bg-white"
        }`}
    >
      {featured && (
        <div className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
          Popular
        </div>
      )}

      <p
        className={`text-sm font-semibold ${featured ? "text-white/60" : "text-black/50"
          }`}
      >
        {name}
      </p>

      <div className="mt-5 flex items-end gap-1">
        <span className="text-4xl font-extrabold tracking-[-1.5px]">
          {price}
        </span>

        {price !== "₹0" && (
          <span
            className={`mb-1 text-xs ${featured
              ? "text-white/40"
              : "text-black/40"
              }`}
          >
            / month
          </span>
        )}
      </div>

      <p
        className={`mt-3 text-sm ${featured
          ? "text-white/45"
          : "text-black/50"
          }`}
      >
        {description}
      </p>

      <div className="my-7 h-px bg-current opacity-10" />

      <div className="space-y-3">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-2.5"
          >
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full ${featured
                ? "bg-white text-black"
                : "bg-black text-white"
                }`}
            >
              <span className="text-[10px]">
                ✓
              </span>
            </div>

            <span
              className={`text-sm ${featured
                ? "text-white/70"
                : "text-black/60"
                }`}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      <a
        href="/signup"
        className={`mt-8 flex w-full items-center justify-center rounded-xl py-3 text-sm font-semibold ${featured
          ? "bg-white text-black"
          : "bg-black text-white"
          }`}
      >
        Get started
      </a>
    </div>
  );
}