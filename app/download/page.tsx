"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Apple,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Code2,
  Download,
  FileText,
  Lightbulb,
  MessageSquare,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

const androidScreens = [
  "/images/android-1.png",
  "/images/android-2.png",
  "/images/android-3.png",
  "/images/android-4.png",
  "/images/android-5.png",
  "/images/android-6.png",
  "/images/android-7.png",
  "/images/android-8.png",
];

const iosScreens = [
  "/images/ios-1.png",
  "/images/ios-2.png",
  "/images/ios-3.png",
  "/images/ios-4.png",
  "/images/ios-5.png",
  "/images/ios-6.png",
  "/images/ios-7.png",
  "/images/ios-8.png",
  "/images/ios-9.png",
  "/images/ios-10.png",
  "/images/ios-11.png",
  "/images/ios-12.png",
];

const useCases = [
  {
    icon: MessageSquare,
    title: "Ask anything",
    description:
      "Get clear answers, explanations and ideas through natural conversations.",
  },
  {
    icon: BookOpen,
    title: "Learn faster",
    description:
      "Understand difficult concepts with step-by-step explanations and examples.",
  },
  {
    icon: Code2,
    title: "Build with AI",
    description:
      "Write, understand and improve code while working from your phone.",
  },
  {
    icon: FileText,
    title: "Work with text",
    description:
      "Draft, rewrite, summarize and organize information whenever you need it.",
  },
  {
    icon: Lightbulb,
    title: "Explore ideas",
    description:
      "Turn rough thoughts into structured plans, concepts and possibilities.",
  },
  {
    icon: Search,
    title: "Research & think",
    description:
      "Break down complex questions and explore different ways to solve them.",
  },
];

export default function DownloadPage() {
  const [platform, setPlatform] = useState<"android" | "ios">("android");
  const [current, setCurrent] = useState(0);

  const screens = platform === "android" ? androidScreens : iosScreens;

  useEffect(() => {
    setCurrent(0);
  }, [platform]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screens.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [screens.length, platform]);

  const previous = () => {
    setCurrent((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % screens.length);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F7F5] text-[#111111]">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/55 shadow-sm">
            <Sparkles size={15} />
            TL-On Mobile
          </div>
          <h1 className="text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            AI that stays
            <br />
            <span className="text-black/35">
              with you.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-black/50">
            TL-On brings intelligent conversations, powerful AI models and
            useful tools into one focused mobile experience.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/55">
              Fast conversations
            </span>

            <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/55">
              Multiple AI models
            </span>

            <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/55">
              Built for mobile
            </span>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <div className="inline-flex rounded-full border border-black/10 bg-white p-1.5 shadow-sm">
            <button
              onClick={() => setPlatform("android")}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${platform === "android"
                  ? "bg-black text-white"
                  : "text-black/50 hover:text-black"
                }`}
            >
              <Smartphone size={17} />
              Android
            </button>

            <button
              onClick={() => setPlatform("ios")}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${platform === "ios"
                  ? "bg-black text-white"
                  : "text-black/50 hover:text-black"
                }`}
            >
              <Apple size={17} />
              iOS
            </button>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl items-center gap-16 lg:grid-cols-[1fr_420px_1fr]">
          <div className="hidden lg:block">
            <div className="max-w-xs">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                {platform === "android" ? (
                  <Smartphone size={22} />
                ) : (
                  <Apple size={22} />
                )}
              </div>

              <h2 className="text-3xl font-semibold tracking-tight">
                Your AI workspace,
                <br />
                in your pocket.
              </h2>

              <p className="mt-4 text-base leading-7 text-black/50">
                Chat with AI, switch between models, revisit conversations
                and keep your ideas moving without being tied to your desk.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Fast AI conversations",
                  "Multiple model support",
                  "Conversation history",
                  "Clean focused interface",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-black/65"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
                      <Check size={12} />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-black/[0.035] blur-3xl" />

              <div className="relative h-[610px] w-[305px] rounded-[48px] border-[8px] border-black bg-black p-[3px] shadow-[0_35px_90px_rgba(0,0,0,0.18)] sm:h-[680px] sm:w-[340px]">
                <div className="relative h-full w-full overflow-hidden rounded-[39px] bg-white">
                  <Image
                    key={screens[current]}
                    src={screens[current]}
                    alt={`TL-On ${platform} screenshot ${current + 1}`}
                    fill
                    priority
                    className="object-cover object-top transition-opacity duration-500"
                    sizes="340px"
                  />

                  <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={previous}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white transition hover:bg-black hover:text-white"
              >
                <ArrowLeft size={17} />
              </button>

              <div className="min-w-[60px] text-center text-sm font-medium text-black/45">
                {String(current + 1).padStart(2, "0")}
                <span className="mx-1 text-black/20">/</span>
                {String(screens.length).padStart(2, "0")}
              </div>

              <button
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white transition hover:bg-black hover:text-white"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="rounded-[28px] border border-black/10 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold">
                  Explore the app
                </span>

                <span className="text-xs text-black/35">
                  {platform === "android" ? "Android" : "iOS"}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {screens.map((screen, index) => (
                  <button
                    key={screen}
                    onClick={() => setCurrent(index)}
                    className={`relative aspect-[9/16] overflow-hidden rounded-xl border-2 bg-black transition ${current === index
                        ? "border-black"
                        : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                  >
                    <Image
                      src={screen}
                      alt={`Screenshot ${index + 1}`}
                      fill
                      className="object-cover object-top"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-black/40">
                Browse the different parts of the TL-On experience and see
                how the app fits into your everyday workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/35">
              What you can do
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              More than just
              <br />
              a chatbot.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-black/50">
              TL-On is designed to be useful across learning, coding,
              research, writing, brainstorming and everyday questions.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-black/10 bg-[#F7F7F5] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/50">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/35">
              Designed differently
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Powerful when you need it.
              <br />
              Simple when you don't.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-black/50">
              The mobile experience is intentionally focused. Instead of
              filling the screen with unnecessary controls, TL-On keeps the
              conversation and the tools you need within easy reach.
            </p>

            <div className="mt-8 space-y-5">
              <FeatureRow
                icon={<Zap size={18} />}
                title="Quick and focused"
                description="Get to your conversation without unnecessary steps."
              />

              <FeatureRow
                icon={<ShieldCheck size={18} />}
                title="Built with privacy in mind"
                description="Your account, conversations and app experience are designed with security in mind."
              />

              <FeatureRow
                icon={<Sparkles size={18} />}
                title="Made for AI workflows"
                description="Move between questions, ideas, code and research from one place."
              />
            </div>
          </div>

          <div className="rounded-[36px] border border-black/10 bg-white p-8 shadow-sm sm:p-10">
            <div className="rounded-[28px] bg-[#F7F7F5] p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                  <Sparkles size={18} />
                </div>

                <div>
                  <p className="text-sm font-semibold">TL-On</p>
                  <p className="text-xs text-black/40">
                    Your AI assistant
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-white p-5">
                <p className="text-sm leading-6 text-black/60">
                  Ask a question, explain an idea, write some code or start
                  something completely new.
                </p>
              </div>

              <div className="mt-3 ml-auto max-w-[85%] rounded-2xl bg-black p-5 text-sm leading-6 text-white">
                Help me understand this concept step by step.
              </div>

              <div className="mt-3 rounded-2xl bg-white p-5">
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full bg-black/10" />
                  <div className="h-2 w-[88%] rounded-full bg-black/10" />
                  <div className="h-2 w-[72%] rounded-full bg-black/10" />
                </div>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-black/10 p-4">
                <p className="text-xs text-black/40">Experience</p>
                <p className="mt-1 text-sm font-semibold">
                  Focused
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 p-4">
                <p className="text-xs text-black/40">Interface</p>
                <p className="mt-1 text-sm font-semibold">
                  Minimal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/35">
              Get started
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Take TL-On with you.
            </h2>

            <p className="mt-5 leading-7 text-black/50">
              Download the Android app directly from the TL-On website.
              iOS distribution will be available through its supported
              Apple distribution method.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-[32px] border border-black/10 bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.09)] sm:p-8">
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-16 -translate-y-16 rounded-full bg-black/[0.035] blur-2xl" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-lg">
                    <Smartphone size={23} />
                  </div>

                  <span className="rounded-full border border-black/10 bg-[#F7F7F5] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-black/45">
                    Android
                  </span>
                </div>

                <div className="mt-7">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    TL-On for Android
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-black/50">
                    Get the full TL-On experience directly on your Android device.
                    Download the latest APK from our official website.
                  </p>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#F7F7F5] p-4">
                    <p className="text-xs text-black/40">
                      Platform
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      Android
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F7F7F5] p-4">
                    <p className="text-xs text-black/40">
                      Format
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      APK
                    </p>
                  </div>
                </div>

                <a
                  href="https://expo.dev/artifacts/eas/W9uyc01FnpckGsIkyAuxekmbnIeKoZfM_Dg_mHbTNYg.apk"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-black/10 transition duration-200 hover:bg-black/80 active:scale-[0.98]"
                >

                  <Download size={18} />
                  Download APK
                </a>

                <p className="mt-3 text-center text-[11px] text-black/35">
                  Official TL-On Android package
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[32px] border border-black/10 bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.09)] sm:p-8">
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-16 -translate-y-16 rounded-full bg-black/[0.035] blur-2xl" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-lg">
                    <Apple size={23} />
                  </div>

                  <span className="rounded-full border border-black/10 bg-[#F7F7F5] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-black/45">
                    iOS
                  </span>
                </div>

                <div className="mt-7">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    TL-On for iPhone
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-black/50">
                    Experience the same focused AI workspace on iPhone with a native
                    mobile experience designed for iOS.
                  </p>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#F7F7F5] p-4">
                    <p className="text-xs text-black/40">
                      Platform
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      iOS
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F7F7F5] p-4">
                    <p className="text-xs text-black/40">
                      Status
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      Coming soon
                    </p>
                  </div>
                </div>

                <button
                  disabled
                  className="mt-6 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-2xl bg-black/[0.06] px-5 py-4 text-sm font-semibold text-black/35"
                >
                  <Apple size={18} />
                  iOS Coming Soon
                </button>

                <p className="mt-3 text-center text-[11px] text-black/35">
                  iOS distribution will be announced soon
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-28">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/35">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
            Questions about the app?
          </h2>
        </div>

        <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
          <Faq
            question="Where can I download TL-On for Android?"
            answer="The Android version can be downloaded directly from this website as an APK."
          />

          <Faq
            question="Will TL-On be available for iPhone?"
            answer="Yes. The iOS version can be distributed through an Apple-supported distribution method."
          />

          <Faq
            question="Can I use the same account on different devices?"
            answer="Your TL-On account is designed to work across supported devices using the same account."
          />

          <Faq
            question="What can I use TL-On for?"
            answer="You can use TL-On for learning, coding, writing, research, brainstorming, explanations and everyday questions."
          />
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[36px] bg-black px-7 py-16 text-center text-white sm:px-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
            <Sparkles size={21} />
          </div>

          <h2 className="mt-7 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Your ideas deserve
            <br />
            a smarter workspace.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/50">
            Start a conversation with TL-On and turn questions into
            understanding, ideas into plans and problems into solutions.
          </p>

          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Create your account
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function FeatureRow({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-white">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>

        <p className="mt-1 text-sm leading-6 text-black/45">
          {description}
        </p>
      </div>
    </div>
  );
}

function Faq({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group py-6">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium">
        <span>{question}</span>

        <span className="text-xl text-black/35 transition group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-black/50">
        {answer}
      </p>
    </details>
  );
}