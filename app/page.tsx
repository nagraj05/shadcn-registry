"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Search, ArrowUpRight, Layers } from "lucide-react";

// ─── Auto-generated from your app/ folder structure ───────────────────────
const SECTIONS = [
  "8bitcn",
  "8starlabs-ui",
  "abstract",
  "abui",
  "aceternity",
  "aevr",
  "agents-ui",
  "ahadcraft",
  "ai-blocks",
  "ai-elements",
  "algolia",
  "aliimam",
  "animate-ui",
  "animbits",
  "arc",
  "asanshay",
  "assistant-ui",
  "auth0",
  "basecn",
  "baselayer",
  "beste-ui",
  "better-upload",
  "billingsdk",
  "blocks-so",
  "boldkit",
  "bundui",
  "cardcn",
  "clerkchamaac",
  "commercn",
  "componentry",
  "creative-tim",
  "cult-ui",
  "darx",
  "diceui",
  "doras-ui",
  "dsikeres1",
  "effered",
  "einui",
  "eldoraui",
  "elements",
  "elevenlabs-ui",
  "emerald-ui",
  "fab-ui",
  "fluid",
  "flx",
  "fonttrio",
  "forge-ui",
  "formcn",
  "gaia",
  "gamifykit",
  "gammaui",
  "gc-solid",
  "glass-ui",
  "gooseui",
  "ha-components",
  "headcodecms",
  "heroicons-animated",
  "hextaui",
  "iconiq",
  "icons-animated",
  "inferencesh",
  "intentui",
  "jalco",
  "jolyui",
  "joyco",
  "kanpeki",
  "kapwa",
  "kibo-ui",
  "kokonutui",
  "launchui",
  "lens-blocks",
  "limeplay",
  "lmscn",
  "lucide-animated",
  "lumiui",
  "lytenyte",
  "magicui",
  "manifest",
  "mapcn",
  "moleculeui",
  "motion-primitives",
  "mui-treasury",
  "ncdai",
  "neobrutalism",
  "nessra-ui",
  "nexus-elements",
  "nexus-ui",
  "nteract",
  "nuqs",
  "odysseyui",
  "openstatus",
  "optics",
  "oui",
  "pacekit",
  "pacekit-gsap",
  "paletteui",
  "pastecn",
  "paykit-sdk",
  "phucbm",
  "pixelact-ui",
  "plate",
  "prompt-kit",
  "prosekit",
  "pulkitxm",
  "pureui",
  "react-aria",
  "react-bits",
  "react-easy-modals",
  "react-slot",
  "rescript-shadcn",
  "retroui",
  "reui",
  "sabraman",
  "satoriui",
  "scrollxui",
  "shadcn-dashboard",
  "shadcn-editor",
  "shadcn-map",
  "shadcn-space",
  "shadcn-studio",
  "shadcnblocks",
  "shadcndesign",
  "shadcnhooks",
  "shadcnmaps",
  "shadcnstore",
  "shadcnui-blocks",
  "shadcnuikit",
  "skiper-ui",
  "slide-cn",
  "smoothui",
  "solaceui",
  "sona-ui",
  "soundcn",
  "spectrumui",
  "spell",
  "square-ui",
  "supabase",
  "svgl",
  "systaliko-ui",
  "tailark",
  "tailwind-admin",
  "tailwind-builder",
  "taki",
  "terrae",
  "thegridcn",
  "tokenui",
  "tool-ui",
  "tour",
  "typedora-ui",
  "ui-layouts",
  "uicapsule",
  "uitripled",
  "unlumen-ui",
  "uselayouts",
  "utilcn",
  "w3-kit",
  "wandry-ui",
  "waves-cn",
  "wds",
  "wiggle-ui",
  "zippystarter",
];

// Assign a stable pastel accent per entry (cycles through palette)
const ACCENTS = [
  "from-sky-500/20 to-sky-500/5 border-sky-500/20 hover:border-sky-400/60",
  "from-violet-500/20 to-violet-500/5 border-violet-500/20 hover:border-violet-400/60",
  "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 hover:border-emerald-400/60",
  "from-amber-500/20 to-amber-500/5 border-amber-500/20 hover:border-amber-400/60",
  "from-rose-500/20 to-rose-500/5 border-rose-500/20 hover:border-rose-400/60",
  "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 hover:border-cyan-400/60",
  "from-fuchsia-500/20 to-fuchsia-500/5 border-fuchsia-500/20 hover:border-fuchsia-400/60",
  "from-orange-500/20 to-orange-500/5 border-orange-500/20 hover:border-orange-400/60",
];

const DOT_COLORS = [
  "bg-sky-400",
  "bg-violet-400",
  "bg-emerald-400",
  "bg-amber-400",
  "bg-rose-400",
  "bg-cyan-400",
  "bg-fuchsia-400",
  "bg-orange-400",
];

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => SECTIONS.filter((s) => s.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-mono selection:bg-zinc-700">
      {/* ── Subtle grid background ── */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Glow blobs ── */}
      <div className="fixed top-[-20%] left-[10%] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[5%] w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* ── Header ── */}
        <header className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-9 rounded-lg bg-gradient-to-br from-violet-500 to-sky-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
              <Layers className="size-4 text-white" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
              shadcn — component registry
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none mb-4">
            Shadcn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-sky-400">
              Registry
            </span>
          </h1>
          <p className="text-zinc-500 text-sm max-w-md leading-relaxed">
            {SECTIONS.length} component libraries, all in one place. Click any
            card to explore — or come back when it&apos;s ready.
          </p>
        </header>

        {/* ── Search ── */}
        <div className="relative mb-10 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-600" />
          <input
            type="text"
            placeholder="Search libraries…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-16 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/60 transition-colors"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-zinc-600 tabular-nums">
            {filtered.length}/{SECTIONS.length}
          </span>
        </div>

        {/* ── Grid ── */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-zinc-600 text-sm">
            No libraries match &ldquo;{query}&rdquo;
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {filtered.map((name, i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              const dot = DOT_COLORS[i % DOT_COLORS.length];
              return (
                <Link
                  key={name}
                  href={`/${name}`}
                  className={`
                    group relative flex flex-col justify-between p-4 rounded-2xl
                    bg-gradient-to-br ${accent}
                    border backdrop-blur-sm
                    transition-all duration-300
                    hover:scale-[1.03] hover:shadow-xl hover:shadow-black/30
                  `}
                >
                  {/* top row */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`size-2 rounded-full ${dot} opacity-70 group-hover:opacity-100 transition-opacity`}
                    />
                    <ArrowUpRight className="size-3.5 text-zinc-600 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </div>

                  {/* name */}
                  <span className="text-[11px] font-semibold text-zinc-300 group-hover:text-white transition-colors leading-snug break-all uppercase">
                    {name}
                  </span>
                </Link>
              );
            })}
          </div>
        )}

        {/* ── Footer ── */}
        <footer className="mt-20 pt-8 border-t border-zinc-900 text-[10px] text-zinc-700 flex items-center justify-between">
          <span>shadcn · {SECTIONS.length} libraries</span>
          <span>Next.js · TypeScript · Tailwind</span>
        </footer>
      </div>
    </div>
  );
}
