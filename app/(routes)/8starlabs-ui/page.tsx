import FlipClock from "@/components/ui/flip-clock";
import StatusIndicator from "@/components/ui/status-indicator";
import { ComponentShowcase } from "@/components/ui/component-showcase";
import Marquee from "@/components/ui/marquee";

export default function ComingSoonPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-10 space-y-6">

      <ComponentShowcase
        name="StatusIndicator"
        description="Displays the current operational state of a service or system with animated visual feedback."
        install={{
          npm: "npx shadcn@latest add https://ui.8starlabs.com/r/status-indicator.json",
          pnpm: "pnpm dlx shadcn@latest add https://ui.8starlabs.com/r/status-indicator.json",
          yarn: "yarn shadcn@latest add https://ui.8starlabs.com/r/status-indicator.json",
          bun: "bunx --bun shadcn@latest add https://ui.8starlabs.com/r/status-indicator.json"
        }}
      >
        <div className="flex items-center gap-4">
          <StatusIndicator state="active" />
          <StatusIndicator state="down" />
          <StatusIndicator state="fixing" />
          <StatusIndicator state="idle" />
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        name="FlipClock"
        description="An animated flip-style clock that displays the current time with smooth card-flip transitions."
        install={{
          npm: "npx shadcn@latest add flip-clock",
          pnpm: "pnpm dlx shadcn@latest add flip-clock",
          bun: "bunx shadcn@latest add flip-clock",
        }}
      >
        <FlipClock />
      </ComponentShowcase>

      <ComponentShowcase
        name="Marquee"
        description="A customizable marquee component with smooth animations and various configuration options."
        install={{
          npm: "npx shadcn@latest add https://ui.8starlabs.com/r/marquee.json",
          pnpm: "pnpm dlx shadcn@latest add https://ui.8starlabs.com/r/marquee.json",
          yarn:"yarn shadcn@latest add https://ui.8starlabs.com/r/marquee.json",
          bun: "bunx --bun shadcn@latest add https://ui.8starlabs.com/r/marquee.json",
        }}
      >
        <Marquee />
      </ComponentShowcase>

    </div>
  );
}