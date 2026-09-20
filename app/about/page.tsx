"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Brain,
  Check,
  Code2,
  Eye,
  Layers3,
  MessageSquare,
  Sparkles,
  Triangle,
  Zap,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Perception",
    subtitle: "See deeper",
    text: "Understand information beyond the surface. Ask better questions, explore different perspectives and turn complexity into clarity.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Intelligence",
    subtitle: "Think further",
    text: "Reason through problems, learn concepts, analyze information and move from a question toward a meaningful answer.",
    icon: Brain,
  },
  {
    number: "03",
    title: "Creation",
    subtitle: "Build forward",
    text: "Transform ideas into code, writing, plans, research, products and things that can exist beyond the conversation.",
    icon: Sparkles,
  },
];

const capabilities = [
  {
    icon: MessageSquare,
    title: "Conversation",
    text: "A natural space for questions, discussions, explanations and everyday thinking.",
  },
  {
    icon: Brain,
    title: "Reasoning",
    text: "Break difficult subjects into smaller ideas and work through problems step by step.",
  },
  {
    icon: Code2,
    title: "Build",
    text: "Write code, understand technical concepts and turn ideas into working software.",
  },
  {
    icon: Layers3,
    title: "Continuity",
    text: "Keep conversations, projects and your AI workflow organized in one environment.",
  },
];

const values = [
  "Clarity over complexity",
  "Useful intelligence over noise",
  "Human interaction at the center",
  "Power without unnecessary friction",
  "Continuous improvement",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F4F0] text-[#101010]">

      {/* =========================================================
          GLOBAL BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,transparent_0%,#F5F4F0_72%)]" />
      </div>

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

        <Link href="/" className="flex items-center gap-3">

          <div className="relative h-9 w-9 overflow-hidden rounded-xl">
            <Image
              src="/images/logo.png"
              alt="Trilok-On"
              fill
              className="object-contain"
              sizes="36px"
            />
          </div>

          <div>
            <div className="text-[19px] font-semibold tracking-[-0.055em]">
              Trilok-On
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

          <Link href="/pricing" className="transition hover:text-black">
            Pricing
          </Link>

          <Link href="/download" className="transition hover:text-black">
            Download
          </Link>

          <Link
            href="/login"
            className="flex items-center gap-2 rounded-xl bg-[#111] px-4 py-2.5 font-medium text-white transition hover:bg-black/80"
          >
            Get started
            <ArrowRight size={14} />
          </Link>

        </div>

      </nav>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative z-10 px-6 pb-24 pt-24 lg:px-10 lg:pb-32 lg:pt-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">

            {/* LEFT */}

            <div>

              <div className="mb-8 inline-flex items-center gap-2 border border-black/10 bg-white/50 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.24em] text-black/45">
                <span className="h-1.5 w-1.5 rounded-full bg-black" />
                The philosophy of Trilok-On
              </div>

              <h1 className="max-w-5xl text-[58px] font-semibold leading-[0.88] tracking-[-0.075em] sm:text-7xl lg:text-[104px]">

                Three dimensions.

                <br />

                <span className="text-black/20">
                  One intelligence.
                </span>

              </h1>

            </div>

            {/* RIGHT */}

            <div className="max-w-md pb-2 lg:ml-auto">

              <p className="text-lg leading-8 tracking-[-0.015em] text-black/60">
                Trilok-On is an AI platform built around a simple idea:
                intelligence becomes more useful when you can
                <span className="font-medium text-black">
                  {" "}see, think and create
                </span>
                {" "}within the same experience.
              </p>

              <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-black/35">
                <span className="h-px w-10 bg-black/20" />
                Explore the idea
                <ArrowDown size={13} />
              </div>

            </div>

          </div>

         

          <div className="relative mt-20">

            <div className="pointer-events-none absolute -inset-12 rounded-[70px] bg-black/[0.035] blur-[100px]" />

            <div className="relative overflow-hidden rounded-[34px] border border-black/10 bg-black shadow-[0_45px_130px_rgba(0,0,0,0.16)]">

              <div className="relative aspect-16/8 min-h-[420px] w-full sm:min-h-[540px]">

                <Image
                  src="/images/trilok_on_.png"
                  alt="Trilok — a cosmic representation of three realms"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1280px"
                />

                {/* Cinematic overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/20" />

                <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.55)]" />

                {/* Top metadata */}

                <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-9 sm:top-9">

                  <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_14px_white]" />

                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                    Trilok-On / Philosophy
                  </span>

                </div>

                {/* Bottom text */}

                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">

                  <div className="max-w-2xl">

                    <p className="text-[9px] uppercase tracking-[0.35em] text-white/40">
                      Three realms · One perspective
                    </p>

                    <h2 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
                      TRILOK
                    </h2>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
                      A visual interpretation of depth, perspective and
                      the idea that understanding can exist across
                      multiple dimensions.
                    </p>

                  </div>

                </div>

                {/* Inner frame */}

                <div className="pointer-events-none absolute inset-5 rounded-[25px] border border-white/[0.12] sm:inset-7 sm:rounded-[28px]" />

              </div>

            </div>

            <div className="mt-5 flex flex-col gap-2 px-1 text-[11px] text-black/35 sm:flex-row sm:items-center sm:justify-between">

              <span>
                A visual expression of the Trilok-On philosophy.
              </span>

              <span className="uppercase tracking-[0.18em]">
                Perception · Intelligence · Creation
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          ORIGIN / MEANING
      ========================================================= */}

      <section className="relative z-10 border-y border-black/10 bg-white/70">

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">

          <div className="grid gap-20 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/35">
                01 / The origin
              </p>

              <h2 className="mt-6 max-w-sm text-4xl font-semibold leading-[1] tracking-[-0.06em] sm:text-5xl">
                A name built around depth.
              </h2>

            </div>

            <div className="max-w-3xl">

              <p className="text-2xl leading-[1.45] tracking-[-0.03em] text-black/75 sm:text-3xl">
                Trilok-On takes inspiration from the idea of
                <span className="text-black">
                  {" "}three dimensions of existence, perception and awareness.
                </span>
              </p>

              <div className="mt-10 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-2">

                <div>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/30">
                    Trilok
                  </p>

                  <p className="mt-3 text-sm leading-7 text-black/50">
                    The concept of three realms becomes a metaphor for
                    looking at a problem from more than one level —
                    surface, depth and what lies beyond.
                  </p>

                </div>

                <div>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/30">
                    Inspiration
                  </p>

                  <p className="mt-3 text-sm leading-7 text-black/50">
                    The philosophy draws inspiration from Shiva as a
                    symbol of transformation, awareness and balance,
                    without turning the product into a religious theme.
                  </p>

                </div>

              </div>

              <p className="mt-10 max-w-2xl text-base leading-8 text-black/45">
                Technology changes quickly. The ideas behind meaningful
                technology can be much older. Trilok-On takes that contrast
                seriously: ancient philosophical inspiration translated
                into a modern interface for learning, reasoning and creation.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          THREE PRINCIPLES
      ========================================================= */}

      <section className="relative z-10 px-6 py-32 lg:px-10 lg:py-40">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/35">
                02 / The three
              </p>

              <h2 className="mt-6 text-5xl font-semibold tracking-[-0.065em] sm:text-6xl">
                The philosophy
                <br />
                becomes a product.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-black/45">
              Trilok-On translates the idea of three dimensions into
              three practical stages of working with intelligence.
            </p>

          </div>

          <div className="mt-20 divide-y divide-black/10 border-y border-black/10">

            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group grid gap-8 py-10 transition hover:bg-black/[0.015] md:grid-cols-[100px_260px_1fr_auto] md:items-center"
                >

                  <div className="text-[11px] font-medium tracking-[0.2em] text-black/25">
                    {item.number}
                  </div>

                  <div>

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                        <Icon size={16} />
                      </div>

                      <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                        {item.title}
                      </h3>

                    </div>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-black/30">
                      {item.subtitle}
                    </p>

                  </div>

                  <p className="max-w-xl text-sm leading-7 text-black/45">
                    {item.text}
                  </p>

                  <ArrowRight
                    size={18}
                    className="hidden text-black/20 transition group-hover:translate-x-1 group-hover:text-black md:block"
                  />

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          PRODUCT SECTION
      ========================================================= */}

      <section className="relative z-10 bg-[#090909] text-white">

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.075]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">

          <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr]">

            <div>

              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/30">
                03 / The product
              </p>

              <h2 className="mt-7 text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-6xl">
                Intelligence
                <br />
                should feel
                <br />
                natural.
              </h2>

              <p className="mt-8 max-w-md text-base leading-8 text-white/40">
                Trilok-On brings conversation, reasoning, learning,
                coding and creation into one focused AI environment.
              </p>

              <Link
                href="/download"
                className="mt-9 inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
              >
                Explore the product
                <ArrowRight size={15} />
              </Link>

            </div>

            <div className="border-t border-white/10">

              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[45px_150px_1fr]"
                  >

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10">

                      <Icon size={16} className="text-white/70" />

                    </div>

                    <div className="flex items-start gap-3">

                      <span className="text-[9px] tracking-[0.2em] text-white/20">
                        0{index + 1}
                      </span>

                      <h3 className="font-medium">
                        {item.title}
                      </h3>

                    </div>

                    <p className="text-sm leading-7 text-white/35">
                      {item.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          WHY Trilok-On
      ========================================================= */}

      <section className="relative z-10 border-b border-black/10 bg-[#F5F4F0]">

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">

          <div className="grid gap-20 lg:grid-cols-2">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/35">
                04 / Why Trilok-On
              </p>

              <h2 className="mt-6 max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl">
                Not just another
                <br />
                AI interface.
              </h2>

            </div>

            <div>

              <p className="max-w-xl text-lg leading-8 text-black/55">
                The goal is not to add more buttons, more features or
                more complexity. The goal is to make intelligence easier
                to access and easier to work with.
              </p>

              <div className="mt-12 divide-y divide-black/10 border-y border-black/10">

                {values.map((value, index) => (

                  <div
                    key={value}
                    className="flex items-center gap-4 py-5"
                  >

                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                      <Check size={12} />
                    </div>

                    <span className="text-sm font-medium text-black/65">
                      {value}
                    </span>

                    <span className="ml-auto text-[9px] tracking-[0.2em] text-black/20">
                      0{index + 1}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          DESIGN PHILOSOPHY
      ========================================================= */}

      <section className="relative z-10 overflow-hidden bg-white">

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">

          <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/30">
                05 / Design philosophy
              </p>

              <h2 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl">
                Ancient ideas.
                <br />
                Modern technology.
              </h2>

            </div>

            <div className="max-w-xl lg:ml-auto">

              <p className="text-xl leading-9 tracking-[-0.02em] text-black/65">
                Trilok-On is designed around a balance between
                <span className="font-medium text-black">
                  {" "}depth and simplicity.
                </span>
              </p>

              <p className="mt-7 text-base leading-8 text-black/45">
                The interface stays quiet so the intelligence can remain
                the focus. Typography, spacing, motion and visual hierarchy
                are deliberately restrained.
              </p>

              <p className="mt-6 text-base leading-8 text-black/45">
                The result is a product that feels technical without
                becoming cold, and expressive without becoming distracting.
              </p>

            </div>

          </div>

          {/* Visual line */}

          <div className="mt-24 grid grid-cols-3 border-y border-black/10">

            <div className="border-r border-black/10 px-5 py-8 sm:px-10">

              <p className="text-3xl font-semibold tracking-[-0.05em]">
                01
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-black/35">
                Clear
              </p>

            </div>

            <div className="border-r border-black/10 px-5 py-8 sm:px-10">

              <p className="text-3xl font-semibold tracking-[-0.05em]">
                02
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-black/35">
                Focused
              </p>

            </div>

            <div className="px-5 py-8 sm:px-10">

              <p className="text-3xl font-semibold tracking-[-0.05em]">
                03
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-black/35">
                Human
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FUTURE
      ========================================================= */}

      <section className="relative z-10 px-6 py-32 lg:px-10 lg:py-40">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/30">
                06 / What comes next
              </p>

              <h2 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl">
                Built for the
                <br />
                next dimension.
              </h2>

            </div>

            <div className="max-w-3xl">

              <p className="text-2xl leading-[1.45] tracking-[-0.03em] text-black/70 sm:text-3xl">
                Trilok-On is not being built around a single moment in
                AI. It is being built as an evolving environment for
                how people interact with intelligence.
              </p>

              <div className="mt-12 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-3">

                <div>

                  <Zap size={18} />

                  <h3 className="mt-5 font-semibold">
                    Faster
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-black/40">
                    Reduce the distance between a question and useful
                    understanding.
                  </p>

                </div>

                <div>

                  <Brain size={18} />

                  <h3 className="mt-5 font-semibold">
                    Smarter
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-black/40">
                    Make increasingly capable intelligence easier to use.
                  </p>

                </div>

                <div>

                  <Sparkles size={18} />

                  <h3 className="mt-5 font-semibold">
                    More human
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-black/40">
                    Keep the person, not the technology, at the center.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative z-10 px-6 pb-28 lg:px-10">

        <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#080808] px-7 py-24 text-white sm:px-12 sm:py-32">

          {/* Grid */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
              `,
              backgroundSize: "52px 52px",
            }}
          />

          <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[100px]" />

          <div className="relative mx-auto max-w-4xl text-center">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white text-black">
              <Triangle size={17} />
            </div>

            <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-white/30">
              Enter the experience
            </p>

            <h2 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-7xl">
              See deeper.
              <br />
              Think further.
              <br />
              Create forward.
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
              Discover Trilok-On — an AI experience built around
              perception, intelligence and creation.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">

              <Link
                href="/download"
                className="flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Explore Trilok-On
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/signup"
                className="flex items-center gap-2 border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Create account
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

            <div className="relative h-7 w-7 overflow-hidden rounded-lg">

              <Image
                src="/images/tl-on-logo-v2.png"
                alt="Trilok-On"
                fill
                className="object-contain"
                sizes="28px"
              />

            </div>

            <span>
              © 2026 Trilok-On
            </span>

          </div>

          <div className="flex flex-wrap gap-6">

            <Link href="/about" className="text-black">
              About
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