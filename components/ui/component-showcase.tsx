"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

type PackageManager = "npm" | "pnpm" | "bun" | "yarn";

interface InstallCommands {
  npm?: string;
  pnpm?: string;
  bun?: string;
  yarn?: string;
}

interface ComponentShowcaseProps {
  name: string;
  description?: string;
  install?: InstallCommands | string;
  children: React.ReactNode;
  className?: string;
}

const PM_ORDER: PackageManager[] = ["npm", "pnpm", "bun", "yarn"];

export function ComponentShowcase({
  name,
  description,
  install,
  children,
  className,
}: ComponentShowcaseProps) {
  const [copied, setCopied] = useState(false);

  const isSingle = typeof install === "string";
  const singleCommand = isSingle ? install : undefined;

  const commands: Partial<Record<PackageManager, string>> =
    !isSingle ? (install ?? {}) : {};

  const availablePMs = PM_ORDER.filter((pm) => commands[pm]);
  const [activeTab, setActiveTab] = useState<PackageManager>(availablePMs[0] ?? "npm");

  const currentTab = availablePMs.includes(activeTab) ? activeTab : availablePMs[0];
  const currentCommand = isSingle ? singleCommand : commands[currentTab];
  const hasInstall = isSingle ? !!singleCommand : availablePMs.length > 0;

  const handleCopy = () => {
    if (!currentCommand) return;
    navigator.clipboard.writeText(currentCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden", className)}>

      {/* ── Header ── */}
      <div className="px-5 pt-5 pb-4 border-b border-zinc-800/60">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 tracking-tight">{name}</h3>
            {description && (
              <p className="mt-1 text-xs text-zinc-500 leading-relaxed max-w-prose">{description}</p>
            )}
          </div>
          <span className="shrink-0 mt-0.5 px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-500">
            component
          </span>
        </div>
      </div>

      {/* ── Install ── */}
      {hasInstall && (
        <div className="border-b border-zinc-800/60 bg-zinc-900/40">

          {/* Tab bar — only for multi-PM */}
          {!isSingle && (
            <div className="flex items-center gap-0.5 px-5 pt-3 border-b border-zinc-800/60">
              <Terminal className="size-3.5 text-zinc-600 mr-2 shrink-0" />
              {availablePMs.map((pm) => (
                <button
                  key={pm}
                  onClick={() => { setActiveTab(pm); setCopied(false); }}
                  className={cn(
                    "px-3 py-1.5 text-[11px] font-semibold font-mono rounded-t-md transition-all duration-150 -mb-px",
                    currentTab === pm
                      ? "bg-zinc-950 border border-b-zinc-950 border-zinc-800 text-zinc-200"
                      : "text-zinc-600 hover:text-zinc-400"
                  )}
                >
                  {pm}
                </button>
              ))}
            </div>
          )}

          {/* Command row */}
          <div className="px-5 py-3">
            {isSingle && (
              <div className="flex items-center gap-1.5 mb-2">
                <Terminal className="size-3.5 text-zinc-600 shrink-0" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
                  Install
                </span>
              </div>
            )}
            <div className="flex items-center gap-2 rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2.5">
              <span className="text-violet-400 text-xs font-mono select-none">$</span>
              <code className="flex-1 text-xs font-mono text-zinc-300 truncate">
                {currentCommand}
              </code>
              {/* Always render both icons, toggle with opacity to avoid reconciler error */}
              <button
                onClick={handleCopy}
                className="relative shrink-0 size-6 flex items-center justify-center rounded-md text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800 transition-colors duration-150"
                aria-label="Copy"
              >
                <Copy className={cn("size-3.5 absolute transition-all duration-200", copied ? "opacity-0 scale-50" : "opacity-100 scale-100")} />
                <Check className={cn("size-3.5 absolute text-emerald-400 transition-all duration-200", copied ? "opacity-100 scale-100" : "opacity-0 scale-50")} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Preview ── */}
      <div className="px-5 py-6">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-700 mb-4">
          Preview
        </p>
        <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-6 flex items-center justify-center min-h-[120px]">
          {children}
        </div>
      </div>
    </div>
  );
}