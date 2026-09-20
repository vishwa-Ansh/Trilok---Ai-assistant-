import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7F7F5] px-5 text-[#111111]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.055) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 75%)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.035] blur-[120px]" />

      <div className="relative w-full max-w-2xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-lg font-black text-white shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          TL
        </div>

        <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.25em] text-black/35">
          Error 404
        </p>

        <h1 className="mt-5 text-[64px] font-black leading-none tracking-[-4px] sm:text-[100px]">
          Lost in
          <br />
          the void.
        </h1>

        <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-black/45 sm:text-base">
          The page you are looking for does not exist or may have been moved
          somewhere else.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black/90"
          >
            <Home size={15} />
            Back to home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold transition hover:bg-black/[0.03]"
          >
            <ArrowLeft size={15} />
            Go back
          </button>
        </div>
      </div>
    </main>
  );
}