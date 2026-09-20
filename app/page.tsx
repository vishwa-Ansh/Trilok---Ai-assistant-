"use client";

import {
  ArrowRight,
  Brain,
  Check,
  ChevronDown,
  Clock3,
  FolderKanban,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Brain,
    number: "01",
    title: "Intelligent conversations",
    description:
      "Ask questions, explore ideas, understand complex topics, and get useful answers in seconds.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Multiple AI models",
    description:
      "Choose the model that fits your task and switch between different intelligence modes.",
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "Natural conversations",
    description:
      "Continue conversations with context instead of starting from zero every time.",
  },
  {
    icon: FolderKanban,
    number: "04",
    title: "Projects",
    description:
      "Keep related conversations, ideas, and work organized in one focused workspace.",
  },
  {
    icon: Clock3,
    number: "05",
    title: "Chat history",
    description:
      "Return to previous conversations and continue exactly where you left off.",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Privacy focused",
    description:
      "Manage your account, conversations, memory, and security from one place.",
  },
];

const models = [
  {
    name: "TL-On Fast",
    label: "Everyday",
    description:
      "Fast responses for everyday questions, conversations, ideas, and quick tasks.",
  },
  {
    name: "TL-On Reason",
    label: "Reasoning",
    description:
      "Designed for deeper analysis, complex questions, research, and structured thinking.",
  },
  {
    name: "TL-On Code",
    label: "Coding",
    description:
      "Focused on programming, debugging, architecture, and technical workflows.",
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F7F5] text-[#111111]">
      <section className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 opacity-[0.42]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.055) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 85%)",
            }}
          />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-20 h-1508w-200anslate-x-1/2 rounded-full bg-bbg-black/5.5r-[120px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-xs font-semibold text-black/55 shadow-sm backdrop-blur">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
                <Sparkles size={10} />
              </span>
              Intelligent AI, built around you
            </div>

            <h1 className="mx-auto max-w-5xl text-[52px] font-black leading-[0.91] tracking-[-4px] sm:text-[78px] lg:text-[104px]">
              Intelligence
              <span className="text-black/25">,</span>
              <br />
              built around you.
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-[16px] leading-7 text-black/50 sm:text-[18px]">
              Ask questions. Explore ideas. Learn faster.
              <br className="hidden sm:block" />
              Build better with one intelligent workspace.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/signup"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-7 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:bg-black/90 sm:w-auto"
              >
                Get started
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#models"
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/80 px-7 py-4 text-sm font-semibold backdrop-blur transition hover:-translate-y-1 hover:bg-white sm:w-auto"
              >
                Explore models
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-24 max-w-5xl">
            <div className="absolute -inset-10 rounded-[50px] bg-black/[0.04] blur-3xl" />

            <div className="relative rounded-4xl border border-black/10 bg-white/85 p-2 shadow-[0_40px_120px_rgba(0,0,0,0.13)] backdrop-blur">
              <div className="overflow-hidden rounded-[26px] border border-black/[0.07] bg-[#FAFAF9]">
                <div className="flex h-16 items-center justify-between border-b border-black/6 px-5 sm:px-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-black text-[9px] font-black text-white">
                      TL
                    </div>

                    <div>
                      <p className="text-sm font-bold">TL-On</p>
                      <p className="text-[10px] text-black/35">
                        Intelligent workspace
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-black/10" />
                    <span className="h-2 w-2 rounded-full bg-black/10" />
                    <span className="h-2 w-2 rounded-full bg-black/10" />
                  </div>
                </div>

                <div className="mx-auto max-w-3xl px-5 py-14 sm:px-12 sm:py-20">
                  <div className="ml-auto max-w-md rounded-[22px] bg-black px-5 py-4 text-sm leading-6 text-white shadow-xl shadow-black/10">
                    Explain neural networks in a simple way.
                  </div>

                  <div className="mt-10 flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-black text-[9px] font-black text-white">
                      TL
                    </div>

                    <div className="max-w-2xl">
                      <p className="text-sm leading-7 text-black/75 sm:text-[15px]">
                        A neural network is a computing system inspired by how
                        biological brains process information.
                      </p>

                      <p className="mt-5 text-sm leading-7 text-black/75 sm:text-[15px]">
                        Think of it as layers of connected mathematical units.
                        Each layer transforms information and passes it forward
                        until the network produces an answer.
                      </p>

                      <div className="mt-6 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black/70" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black/30 [animation-delay:150ms]" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black/15 [animation-delay:300ms]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-black/6 p-4 sm:p-5">
                  <div className="mx-auto flex max-w-3xl items-center rounded-2xl border border-black/8 bg-white px-4 py-3.5 text-sm text-black/30 shadow-sm">
                    Ask TL-On anything...
                    <div className="ml-auto flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-black/10 bg-white/80 px-5 py-2.5 text-xs font-medium text-black/45 shadow-xl backdrop-blur sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              AI workspace
              <span className="text-black/20">•</span>
              Conversations
              <span className="text-black/20">•</span>
              Models
              <span className="text-black/20">•</span>
              Projects
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative border-y border-black/[0.07] bg-white px-5 py-28 sm:px-8"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-14 md:grid-cols-[0.9fr_1.4fr] md:items-end">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-black/35">
                One intelligent workspace
              </span>

              <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-2px] sm:text-6xl">
                Less switching.
                <br />
                More thinking.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 text-black/50 sm:text-lg">
                TL-On brings conversations, models, projects, history, and
                personalization together so you can focus on the work instead
                of managing your AI tools.
              </p>

              <div className="mt-8 h-px w-full bg-black/10" />

              <div className="mt-5 flex items-center justify-between text-xs font-semibold text-black/35">
                <span>CONVERSATION</span>
                <span>REASONING</span>
                <span>CREATION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="relative overflow-hidden px-5 py-28 sm:px-8"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.3]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(circle at center, black 0%, transparent 75%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-black/35">
                Features
              </span>

              <h2 className="mt-5 text-4xl font-black leading-[1] tracking-[-2px] sm:text-6xl">
                Designed for
                <br />
                the way you think.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-black/45">
              Every part of TL-On is designed to reduce friction between an
              idea and the result.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[30px] border border-black/[0.08] bg-black/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group relative bg-[#F7F7F5] p-7 transition duration-300 hover:bg-white sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white transition duration-300 group-hover:scale-105">
                      <Icon size={19} />
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.18em] text-black/20">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="mt-9 text-lg font-bold tracking-[-0.4px]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/45">
                    {feature.description}
                  </p>

                  <div className="mt-8 h-px w-0 bg-black transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="models"
        className="relative overflow-hidden bg-[#090909] px-5 py-28 text-white sm:px-8"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[120px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/35">
                AI Models
              </span>

              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1] tracking-[-2px] sm:text-6xl">
                Different tasks.
                <br />
                Different intelligence.
              </h2>
            </div>

            <a
              href="/models"
              className="group flex w-fit items-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 text-sm font-semibold transition hover:border-white/30 hover:bg-white/[0.06]"
            >
              View all models
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="mt-16 grid gap-3 md:grid-cols-3">
            {models.map((model, index) => (
              <div
                key={model.name}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="absolute right-6 top-6 text-[10px] font-bold tracking-[0.2em] text-white/20">
                  0{index + 1}
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-black">
                  <Zap size={18} />
                </div>

                <div className="mt-12">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                    {model.label}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.8px]">
                    {model.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/40">
                    {model.description}
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-2 text-xs font-semibold text-white/35">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                  Available in TL-On
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="relative overflow-hidden px-5 py-28 sm:px-8"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.28]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-black/35">
              Pricing
            </span>

            <h2 className="mt-5 text-4xl font-black leading-[1] tracking-[-2px] sm:text-6xl">
              Start free.
              <br />
              Upgrade when you need more.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-black/45 sm:text-base">
              Simple plans for exploring AI, building with it, and making it
              part of your everyday workflow.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
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

          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-xs text-black/35 sm:flex-row">
            <span>Cancel anytime</span>
            <span className="hidden h-1 w-1 rounded-full bg-black/20 sm:block" />
            <span>Secure account management</span>
            <span className="hidden h-1 w-1 rounded-full bg-black/20 sm:block" />
            <span>Built for flexible usage</span>
          </div>
        </div>
      </section>

      <section className="relative px-5 pb-28 sm:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-black/10 bg-[#EAEAE6] px-7 py-16 sm:px-12 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
              maskImage:
                "linear-gradient(to right, black, transparent 80%)",
            }}
          />

          <div className="relative grid gap-14 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div className="max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-black/35">
                TL-On everywhere
              </span>

              <h2 className="mt-5 text-4xl font-black leading-[1] tracking-[-2px] sm:text-6xl">
                Your AI.
                <br />
                Wherever you go.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-black/45 sm:text-base">
                Continue conversations across your devices and keep your
                intelligent workspace close wherever your work takes you.
              </p>

              <a
                href="/download"
                className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Get TL-On
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="relative mx-auto hidden h-[360px] w-[210px] rotate-3 rounded-[38px] border-[8px] border-black bg-[#111] p-2 shadow-[0_35px_80px_rgba(0,0,0,0.2)] lg:block">
              <div className="flex h-full flex-col rounded-[28px] bg-[#F7F7F5] p-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-black text-[8px] font-black text-white">
                    TL
                  </div>

                  <div>
                    <p className="text-[10px] font-bold">TL-On</p>
                    <p className="text-[8px] text-black/30">
                      AI assistant
                    </p>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="mb-3 rounded-2xl bg-white p-3 text-[9px] leading-4 text-black/45 shadow-sm">
                    Explain this concept simply.
                  </div>

                  <div className="rounded-2xl bg-black p-3 text-[9px] leading-4 text-white">
                    Here is a simple way to understand it...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-black/[0.07] bg-white px-5 py-28 sm:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          }}
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-black/35">
              FAQ
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-[-2px] sm:text-5xl">
              Questions, answered.
            </h2>
          </div>

          <div className="mt-14 overflow-hidden rounded-[26px] border border-black/[0.08]">
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-black/[0.08] last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition hover:bg-black/[0.02] sm:px-7"
                  >
                    <span className="text-sm font-semibold sm:text-[15px]">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 transition ${
                        open ? "rotate-180 bg-black text-white" : "bg-white"
                      }`}
                    >
                      <ChevronDown size={15} />
                    </span>
                  </button>

                  {open && (
                    <div className="px-6 pb-6 pr-14 sm:px-7 sm:pr-16">
                      <p className="text-sm leading-7 text-black/45">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-28 sm:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[36px] bg-black px-7 py-20 text-center text-white sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "46px 46px",
            }}
          />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.05] blur-[100px]" />

          <div className="relative">
            <div className="mx-auto flex h-13 w-13 items-center justify-center rounded-2xl bg-white text-black">
              <Sparkles size={21} />
            </div>

            <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-black leading-[1] tracking-[-2px] sm:text-6xl">
              Ready to experience
              <br />
              TL-On?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
              Start a conversation and discover a simpler way to work,
              learn, create, and think with AI.
            </p>

            <a
              href="/signup"
              className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Get started
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

     
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
      className={`group relative overflow-hidden rounded-[30px] border p-7 transition duration-300 hover:-translate-y-1 ${
        featured
          ? "border-black bg-black text-white shadow-[0_30px_80px_rgba(0,0,0,0.2)]"
          : "border-black/[0.08] bg-white shadow-sm hover:shadow-xl hover:shadow-black/[0.05]"
      }`}
    >
      {featured && (
        <div className="absolute right-5 top-5 rounded-full bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-black">
          Popular
        </div>
      )}

      <div className="flex items-center justify-between">
        <p
          className={`text-xs font-bold uppercase tracking-[0.15em] ${
            featured ? "text-white/45" : "text-black/40"
          }`}
        >
          {name}
        </p>

        <div
          className={`h-2 w-2 rounded-full ${
            featured ? "bg-white" : "bg-black"
          }`}
        />
      </div>

      <div className="mt-8 flex items-end gap-1">
        <span className="text-5xl font-black tracking-[-2px]">{price}</span>

        {price !== "₹0" && (
          <span
            className={`mb-2 text-xs ${
              featured ? "text-white/35" : "text-black/35"
            }`}
          >
            / month
          </span>
        )}
      </div>

      <p
        className={`mt-4 text-sm ${
          featured ? "text-white/40" : "text-black/45"
        }`}
      >
        {description}
      </p>

      <div
        className={`my-8 h-px ${
          featured ? "bg-white/10" : "bg-black/[0.08]"
        }`}
      />

      <div className="space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <div
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                featured ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              <Check size={11} strokeWidth={3} />
            </div>

            <span
              className={`text-sm ${
                featured ? "text-white/65" : "text-black/55"
              }`}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      <a
        href={`/pricing/${name.toLowerCase()}`}
        className={`mt-9 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold transition ${
          featured
            ? "bg-white text-black hover:bg-white/90"
            : "bg-black text-white hover:bg-black/85"
        }`}
      >
        Explore {name}
        <ArrowRight size={14} />
      </a>
    </div>
  );
}