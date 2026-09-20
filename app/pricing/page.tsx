"use client";

import Link from "next/link";
import {
    ArrowRight,
    Brain,
    Check,
    ChevronDown,
    Sparkles,
    Zap,
} from "lucide-react";
import { useState } from "react";

const plans = [
    {
        name: "Free",
        description: "Explore Trikol-On and experience the essentials.",
        monthly: 0,
        yearly: 0,
        popular: false,
        cta: "Start for free",
        features: [
            "Access to core AI conversations",
            "Everyday questions and learning",
            "Basic chat history",
            "Web and mobile access",
            "Standard response limits",
        ],
    },
    {
        name: "Plus",
        description: "More intelligence for learning, work and creation.",
        monthly: 199,
        yearly: 1999,
        popular: true,
        cta: "Choose Plus",
        features: [
            "Everything in Free",
            "Higher usage limits",
            "Faster AI responses",
            "Advanced AI models",
            "Longer conversations",
            "Projects and organized workflows",
            "Priority access",
        ],
    },
    {
        name: "Pro",
        description: "Maximum capability for serious AI workflows.",
        monthly: 499,
        yearly: 4999,
        popular: false,
        cta: "Choose Pro",
        features: [
            "Everything in Plus",
            "Highest usage limits",
            "Premium model access",
            "Complex reasoning workflows",
            "Advanced coding assistance",
            "Priority infrastructure",
            "Early access to new capabilities",
        ],
    },
];

const faqs = [
    {
        question: "Can I use Trikol-On for free?",
        answer:
            "Yes. The Free plan gives you access to the core Trikol-On experience without requiring a paid subscription.",
    },
    {
        question: "Can I change my plan later?",
        answer:
            "Yes. You can change your subscription as your usage changes. Your account and conversations remain associated with your Trikol-On account.",
    },
    {
        question: "What is included in Plus?",
        answer:
            "Plus is designed for people who use AI regularly for learning, coding, research, writing and everyday productivity. It provides higher limits and access to more capable models.",
    },
    {
        question: "What is Pro designed for?",
        answer:
            "Pro is intended for heavier AI usage and more demanding workflows, including advanced reasoning, coding and extended AI sessions.",
    },
    {
        question: "Can I cancel my subscription?",
        answer:
            "Yes. Paid subscriptions can be cancelled from your account subscription settings. Access continues according to the applicable billing period.",
    },
    {
        question: "Will my plan work on both web and mobile?",
        answer:
            "Yes. Your Trikol-On account is designed to work across supported web and mobile experiences.",
    },
];

export default function PricingPage() {
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="min-h-screen overflow-hidden bg-[#F5F4F0] text-[#111111]">

            {/* =========================================================
          BACKGROUND GRID
      ========================================================= */}

            <div className="pointer-events-none fixed inset-0 z-0">

                <div
                    className="absolute inset-0 opacity-[0.26]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)
            `,
                        backgroundSize: "56px 56px",
                    }}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,transparent_0%,#F5F4F0_72%)]" />

            </div>

            {/* =========================================================
          NAVBAR
      ========================================================= */}

            <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

                <Link href="/" className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl">
                        <img
                            src="/images/tl-on-logo-v2.png"
                            alt="Trikol-On"
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <div>

                        <div className="text-[19px] font-semibold tracking-[-0.055em]">
                            Trikol-On
                        </div>

                        <div className="text-[8px] uppercase tracking-[0.24em] text-black/35">
                            Intelligence
                        </div>

                    </div>

                </Link>

                <div className="hidden items-center gap-8 text-[13px] text-black/50 md:flex">

                    <Link href="/" className="transition hover:text-black">
                        Home
                    </Link>

                    <Link href="/models" className="transition hover:text-black">
                        Models
                    </Link>

                    <Link
                        href="/pricing"
                        className="font-medium text-black"
                    >
                        Pricing
                    </Link>

                    <Link href="/download" className="transition hover:text-black">
                        Download
                    </Link>

                    <Link
                        href="/login"
                        className="flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 font-medium text-white transition hover:bg-black/80"
                    >
                        Get started
                        <ArrowRight size={14} />
                    </Link>

                </div>

            </nav>

            {/* =========================================================
          HERO
      ========================================================= */}

            <section className="relative z-10 px-6 pb-16 pt-24 lg:px-10 lg:pt-32">

                <div className="mx-auto max-w-7xl">

                    <div className="mx-auto max-w-4xl text-center">

                        <div className="mb-8 inline-flex items-center gap-2 border border-black/10 bg-white/60 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-black/45 backdrop-blur-xl">

                            <Sparkles size={12} />

                            Simple plans. Powerful intelligence.

                        </div>

                        <h1 className="text-[58px] font-semibold leading-[0.9] tracking-[-0.075em] sm:text-7xl lg:text-[100px]">

                            Intelligence
                            <br />

                            <span className="text-black/20">
                                without friction.
                            </span>

                        </h1>

                        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-black/50 sm:text-lg">
                            Choose the Trikol-On experience that fits the way you
                            learn, work, create and explore with AI.
                        </p>

                    </div>

                    {/* BILLING SWITCH */}

                    <div className="mt-12 flex justify-center">

                        <div className="flex items-center gap-1 rounded-full border border-black/10 bg-white/70 p-1 shadow-[0_10px_35px_rgba(0,0,0,0.04)]">

                            <button
                                type="button"
                                onClick={() => setBilling("monthly")}
                                className={`rounded-full px-5 py-2.5 text-xs font-medium transition ${billing === "monthly"
                                        ? "bg-black text-white"
                                        : "text-black/45 hover:text-black"
                                    }`}
                            >
                                Monthly
                            </button>

                            <button
                                type="button"
                                onClick={() => setBilling("yearly")}
                                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium transition ${billing === "yearly"
                                        ? "bg-black text-white"
                                        : "text-black/45 hover:text-black"
                                    }`}
                            >
                                Yearly

                                <span
                                    className={`rounded-full px-2 py-0.5 text-[9px] ${billing === "yearly"
                                            ? "bg-white/15 text-white"
                                            : "bg-black/5 text-black/40"
                                        }`}
                                >
                                    Save
                                </span>

                            </button>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
          PRICING
      ========================================================= */}

            <section className="relative z-10 px-6 pb-32 lg:px-10">

                <div className="mx-auto max-w-7xl">

                <div className="grid gap-5 lg:grid-cols-3">
  {plans.map((plan) => {
    const price =
      billing === "monthly"
        ? plan.monthly
        : plan.yearly;

    return (
      <div
        key={plan.name}
        className={`relative flex flex-col overflow-hidden border p-8 ${
          plan.popular
            ? "border-black bg-black text-white"
            : "border-black/10 bg-white/70 text-black"
        }`}
      >
        <p
          className={`text-[10px] font-semibold uppercase tracking-[0.25em] ${
            plan.popular
              ? "text-white/35"
              : "text-black/30"
          }`}
        >
          {plan.name}
        </p>

        <p
          className={`mt-5 min-h-[56px] text-sm leading-6 ${
            plan.popular
              ? "text-white/45"
              : "text-black/45"
          }`}
        >
          {plan.description}
        </p>

        <div className="mt-9 flex items-end gap-2">
          <span className="text-5xl font-semibold tracking-[-0.06em]">
            ₹{price}
          </span>

          {price !== 0 && (
            <span
              className={`pb-1 text-xs ${
                plan.popular
                  ? "text-white/35"
                  : "text-black/30"
              }`}
            >
              / month
            </span>
          )}
        </div>

        <Link
          href={`/pricing/${plan.name.toLowerCase()}`}
          className={`mt-9 flex h-12 items-center justify-center gap-2 text-sm font-semibold transition ${
            plan.popular
              ? "bg-white text-black hover:bg-white/90"
              : "bg-black text-white hover:bg-black/85"
          }`}
        >
          {plan.cta}
          <ArrowRight size={15} />
        </Link>

        <div
          className={`my-8 h-px ${
            plan.popular
              ? "bg-white/10"
              : "bg-black/10"
          }`}
        />

        <p
          className={`mb-5 text-[9px] font-semibold uppercase tracking-[0.22em] ${
            plan.popular
              ? "text-white/30"
              : "text-black/30"
          }`}
        >
          Includes
        </p>

        <div className="flex-1 space-y-4">

          {plan.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3"
            >
              <div
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  plan.popular
                    ? "bg-white/10 text-white"
                    : "bg-black/5 text-black"
                }`}
              >
                <Check size={11} />
              </div>

              <span
                className={`text-sm leading-5 ${
                  plan.popular
                    ? "text-white/55"
                    : "text-black/50"
                }`}
              >
                {feature}
              </span>
            </div>
          ))}

        </div>
      </div>
    );
  })}
</div>

                </div>

            </section>

            {/* =========================================================
          VALUE SECTION
      ========================================================= */}

            <section className="relative z-10 border-y border-black/10 bg-white/65">

                <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">

                    <div className="grid gap-16 lg:grid-cols-2">

                        <div>

                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/30">
                                Why upgrade
                            </p>

                            <h2 className="mt-6 max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl">
                                More capability.
                                <br />
                                Less limitation.
                            </h2>

                        </div>

                        <div className="max-w-xl lg:ml-auto">

                            <p className="text-lg leading-8 text-black/55">
                                Paid plans are designed for people who use AI as a
                                regular part of their workflow — from learning and
                                coding to research, writing and creation.
                            </p>

                            <div className="mt-10 divide-y divide-black/10 border-y border-black/10">

                                <div className="flex items-center gap-4 py-5">

                                    <Zap size={18} />

                                    <div>
                                        <p className="text-sm font-medium">
                                            Higher limits
                                        </p>

                                        <p className="mt-1 text-xs text-black/35">
                                            More room for extended AI sessions.
                                        </p>
                                    </div>

                                </div>

                                <div className="flex items-center gap-4 py-5">

                                    <Brain size={18} />

                                    <div>
                                        <p className="text-sm font-medium">
                                            More capable models
                                        </p>

                                        <p className="mt-1 text-xs text-black/35">
                                            Access models designed for demanding tasks.
                                        </p>
                                    </div>

                                </div>

                                <div className="flex items-center gap-4 py-5">

                                    <Sparkles size={18} />

                                    <div>
                                        <p className="text-sm font-medium">
                                            A more complete workspace
                                        </p>

                                        <p className="mt-1 text-xs text-black/35">
                                            Move from questions to actual outcomes.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
          FAQ
      ========================================================= */}

            <section className="relative z-10 px-6 py-32 lg:px-10">

                <div className="mx-auto max-w-5xl">

                    <div className="text-center">

                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/30">
                            Questions
                        </p>

                        <h2 className="mt-5 text-5xl font-semibold tracking-[-0.065em] sm:text-6xl">
                            Frequently asked.
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-black/40">
                            Everything you need to understand the Trikol-On plans.
                        </p>

                    </div>

                    <div className="mt-16 border-t border-black/10">

                        {faqs.map((faq, index) => {

                            const isOpen = openFaq === index;

                            return (
                                <div
                                    key={faq.question}
                                    className="border-b border-black/10"
                                >

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenFaq(isOpen ? null : index)
                                        }
                                        className="flex w-full items-center justify-between gap-6 py-6 text-left"
                                    >

                                        <span className="text-sm font-medium sm:text-base">
                                            {faq.question}
                                        </span>

                                        <ChevronDown
                                            size={17}
                                            className={`shrink-0 text-black/35 transition ${isOpen ? "rotate-180" : ""
                                                }`}
                                        />

                                    </button>

                                    {isOpen && (
                                        <div className="max-w-3xl pb-7 pr-10 text-sm leading-7 text-black/45">
                                            {faq.answer}
                                        </div>
                                    )}

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* =========================================================
          FINAL CTA
      ========================================================= */}

            <section className="relative z-10 px-6 pb-28 lg:px-10">

                <div className="relative mx-auto max-w-7xl overflow-hidden bg-black px-7 py-24 text-center text-white sm:px-12 sm:py-32">

                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.075]"
                        style={{
                            backgroundImage: `
                linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
              `,
                            backgroundSize: "52px 52px",
                        }}
                    />

                    <div className="relative">

                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                            <Sparkles size={18} />
                        </div>

                        <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-white/30">
                            Choose your dimension
                        </p>

                        <h2 className="mx-auto mt-6 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-7xl">
                            Start with Trikol-On.
                        </h2>

                        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
                            Start free and move to a plan when you need more
                            intelligence, more capability and more room to create.
                        </p>

                        <div className="mt-10 flex justify-center">

                            <Link
                                href="/signup"
                                className="flex items-center gap-2 bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
                            >
                                Start for free
                                <ArrowRight size={16} />
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
          FOOTER
      ========================================================= */}

            <footer className="relative z-10 border-t border-black/10">

                <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-xs text-black/35 sm:flex-row sm:items-center sm:justify-between lg:px-10">

                    <div className="flex items-center gap-3">

                        <div className="h-7 w-7 overflow-hidden rounded-lg">

                            <img
                                src="/images/tl-on-logo-v2.png"
                                alt="Trikol-On"
                                className="h-full w-full object-contain"
                            />

                        </div>

                        <span>
                            © 2026 Trikol-On
                        </span>

                    </div>

                    <div className="flex flex-wrap gap-6">

                        <Link href="/about" className="hover:text-black">
                            About
                        </Link>

                        <Link
                            href="/pricing"
                            className="text-black"
                        >
                            Pricing
                        </Link>

                        <Link href="/privacy" className="hover:text-black">
                            Privacy
                        </Link>

                        <Link href="/terms" className="hover:text-black">
                            Terms
                        </Link>

                        <Link href="/help" className="hover:text-black">
                            Help
                        </Link>

                    </div>

                </div>

            </footer>

        </main>
    );
}