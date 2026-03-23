
"use client"
import Link from "next/link";
import { Sparkles, Layout, Folder, Zap } from "lucide-react";

const NavigationCards = [
  {
    id: 1,
    name: "Animate UI",
    description: "Explore our collection of high-performance animated components.",
    href: "/animate-ui",
    icon: Sparkles,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 2,
    name: "UI Components",
    description: "Standard building blocks for your next big project.",
    href: "/ui",
    icon: Layout,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Background decoration */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 md:py-32">
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/5 dark:bg-zinc-100/5 border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-wider text-zinc-500 animate-in fade-in slide-in-from-bottom-3 duration-1000">
            <Zap className="size-3 text-amber-500 fill-amber-500" />
            Next Gen UI Kit
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Build Faster. <span className="text-primary italic">Animate</span> Better.
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300">
            A curated collection of modern, accessible, and high-performance components for your Next.js applications.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500">
          {NavigationCards.map((card) => (
            <Link key={card.id} href={card.href} className="group no-underline">
              <div className="h-full p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm hover:bg-white dark:hover:bg-zinc-950 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className={`shrink-0 size-16 rounded-2xl ${card.bgColor} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <card.icon className={`size-8 ${card.color}`} />
                </div>
                <div className="text-center md:text-left space-y-2">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-primary transition-colors">
                    {card.name}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                    {card.description}
                  </p>
                  <div className="pt-4 flex items-center justify-center md:justify-start">
                    <span className="text-primary text-xs font-black uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      Explore Section →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-24 text-zinc-400 dark:text-zinc-600 text-xs font-medium flex items-center gap-4 animate-in fade-in duration-1000 delay-700">
            <Folder className="size-4" />
            <span>Project: shadcn-new-animate</span>
            <span className="opacity-20">|</span>
            <span>Version: 2.0.0</span>
        </div>
      </div>
    </div>
  );
}
