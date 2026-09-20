"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { useParams } from "next/navigation";

const planData = {
  free: {
    name: "Free",
    eyebrow: "Begin your journey",
    price: "₹0",
    period: "",
    description:
      "Experience the core of Trikol-On for everyday questions, learning and exploration.",
    statement: "Intelligence, without the commitment.",
    features: [
      "Core AI conversations",
      "Everyday questions and learning",
      "Basic chat history",
      "Web and mobile access",
      "Standard response limits",
    ],
  },
  plus: {
    name: "Plus",
    eyebrow: "For curious minds",
    price: "₹199",
    period: "/ month",
    description:
      "More intelligence for people who use AI regularly for learning, coding, research and creation.",
    statement: "More capability for deeper work.",
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
  pro: {
    name: "Pro",
    eyebrow: "For serious workflows",
    price: "₹499",
    period: "/ month",
    description:
      "Maximum capability for demanding AI workflows, advanced reasoning, coding and extended sessions.",
    statement: "Built when intelligence becomes your workflow.",
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
};

export default function PlanPage() {
  const params = useParams();

  const planKey = String(params.plan).toLowerCase();

  const plan =
    planData[planKey as keyof typeof planData];

  if (!plan) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F5F4F0] px-6">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-black/35">
            Trikol-On
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em]">
            Plan not found
          </h1>

          <Link
            href="/pricing"
            className="mt-8 inline-flex items-center gap-2 bg-black px-6 py-3.5 text-sm font-semibold text-white"
          >
            <ArrowLeft size={15} />
            Back to pricing
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F4F0] text-[#111111]">

      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0%,#F5F4F0_70%)]" />
      </div>

      <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

        <Link href="/" className="flex items-center gap-3">

          <div className="h-9 w-9 overflow-hidden rounded-xl">
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

        <Link
          href="/pricing"
          className="group flex items-center gap-2 text-xs font-medium text-black/40 transition hover:text-black"
        >
          <ArrowLeft
            size={14}
            className="transition group-hover:-translate-x-0.5"
          />
          All plans
        </Link>

      </nav>

      <section className="relative z-10 px-6 pb-32 pt-20 lg:px-10 lg:pt-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

            <div>

              <div className="flex items-center gap-3">

                <span className="h-1.5 w-1.5 rounded-full bg-black" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/35">
                  {plan.eyebrow}
                </span>

              </div>

              <h1 className="mt-8 text-[76px] font-semibold leading-[0.84] tracking-[-0.08em] sm:text-[100px] lg:text-[128px]">
                {plan.name}
              </h1>

              <p className="mt-8 max-w-xl text-xl leading-9 tracking-[-0.02em] text-black/55">
                {plan.description}
              </p>

              <div className="mt-12 flex items-end gap-3">

                <span className="text-6xl font-semibold tracking-[-0.07em] sm:text-7xl">
                  {plan.price}
                </span>

                {plan.period && (
                  <span className="pb-2 text-sm text-black/35">
                    {plan.period}
                  </span>
                )}

              </div>

              <p className="mt-4 text-xs text-black/30">
                {planKey === "free"
                  ? "No payment required."
                  : "Flexible subscription. Manage your plan anytime."}
              </p>

            </div>

            <div className="relative">

              <div className="absolute -inset-10 rounded-full bg-black/[0.035] blur-[90px]" />

              <div className="relative overflow-hidden bg-[#090909] p-8 text-white shadow-[0_40px_120px_rgba(0,0,0,0.16)] sm:p-10">

                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
                    `,
                    backgroundSize: "46px 46px",
                  }}
                />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
                      <Sparkles size={17} />
                    </div>

                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                      Trikol-On / {plan.name}
                    </span>

                  </div>

                  <p className="mt-12 max-w-md text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">
                    {plan.statement}
                  </p>

                  <div className="my-10 h-px bg-white/10" />

                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
                    Included
                  </p>

                  <div className="mt-7 space-y-5">

                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-black">
                          <Check size={11} />
                        </div>

                        <span className="text-sm leading-5 text-white/60">
                          {feature}
                        </span>
                      </div>
                    ))}

                  </div>

                  <Link
                    href={
                      planKey === "free"
                        ? "/signup"
                        : `/checkout?plan=${planKey}`
                    }
                    className="mt-10 flex h-13 items-center justify-center gap-2 bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/90"
                  >
                    {planKey === "free"
                      ? "Start for free"
                      : `Continue with ${plan.name}`}
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="relative z-10 border-y border-black/10 bg-white/60">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/30">
                Plan details
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.06em] sm:text-5xl">
                Everything you need
                <br />
                to go further.
              </h2>

            </div>

            <div className="grid border-t border-black/10 sm:grid-cols-2">

              {plan.features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex gap-4 border-b border-black/10 py-6 sm:nth-[odd]:border-r sm:nth-[odd]:pr-8 sm:nth-[even]:pl-8"
                >
                  <span className="text-[9px] tracking-[0.2em] text-black/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm leading-6 text-black/55">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      <section className="relative z-10 px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-end">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/30">
                Trikol-On
              </p>

              <h2 className="mt-6 max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-6xl">
                Intelligence should
                <br />
                feel effortless.
              </h2>

            </div>

            <div className="max-w-lg lg:ml-auto">

              <p className="text-base leading-8 text-black/45">
                Choose a plan based on how deeply you want AI to become
                part of your everyday work, learning and creation.
              </p>

              <Link
                href="/pricing"
                className="mt-8 inline-flex items-center gap-2 border-b border-black pb-2 text-sm font-medium"
              >
                Compare all plans
                <ArrowRight size={15} />
              </Link>

            </div>

          </div>

        </div>

      </section>

      <section className="relative z-10 px-6 pb-28 lg:px-10">

        <div className="relative mx-auto max-w-7xl overflow-hidden bg-black px-7 py-24 text-center text-white sm:px-12 sm:py-28">

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
              `,
              backgroundSize: "52px 52px",
            }}
          />

          <div className="relative">

            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/15">
              <Sparkles size={16} />
            </div>

            <p className="mt-7 text-[9px] uppercase tracking-[0.3em] text-white/30">
              {plan.name} / Trikol-On
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
              Ready to explore more?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/40">
              Step into Trikol-On and make intelligence part of the way
              you learn, think and create.
            </p>

            <Link
              href={
                planKey === "free"
                  ? "/signup"
                  : `/checkout?plan=${planKey}`
              }
              className="mt-9 inline-flex items-center gap-2 bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              {planKey === "free"
                ? "Start for free"
                : `Choose ${plan.name}`}
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>

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

          <div className="flex gap-6">

            <Link href="/about" className="hover:text-black">
              About
            </Link>

            <Link href="/pricing" className="hover:text-black">
              Pricing
            </Link>

            <Link href="/privacy" className="hover:text-black">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-black">
              Terms
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}