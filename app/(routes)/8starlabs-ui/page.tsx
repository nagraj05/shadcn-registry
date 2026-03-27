import FlipClock from "@/components/ui/flip-clock";
import StatusIndicator from "@/components/ui/status-indicator";
import { ComponentShowcase } from "@/components/ui/component-showcase";
import Marquee from "@/components/ui/marquee";
import Heatmap from "@/components/8starlabs-ui/heatmap";

export default function ComingSoonPage() {
  const sampleData = [
    { date: "2025-11-20", value: 5 },
    { date: "2025-11-21", value: 10 },
    { date: "2025-11-22", value: 2 },
    { date: "2025-11-23", value: 8 },
    { date: "2025-11-24", value: 0 },
    { date: "2025-11-25", value: 15 },
    { date: "2025-11-26", value: 7 }
    // ...more data points
  ];
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
          yarn: "yarn shadcn@latest add https://ui.8starlabs.com/r/marquee.json",
          bun: "bunx --bun shadcn@latest add https://ui.8starlabs.com/r/marquee.json",
        }}
      >
        <Marquee />
      </ComponentShowcase>

      <ComponentShowcase
        name="Heatmap"
        description="A heatmap component that displays data in a grid format with varying colors based on intensity."
        install={{
          npm: "npx shadcn@latest add https://ui.8starlabs.com/r/heatmap.json",
          pnpm: "pnpm dlx shadcn@latest add https://ui.8starlabs.com/r/heatmap.json",
          yarn: "yarn shadcn@latest add https://ui.8starlabs.com/r/heatmap.json",
          bun: "bunx --bun shadcn@latest add https://ui.8starlabs.com/r/heatmap.json",
        }}
      >
        <Heatmap
          data={sampleData}
          startDate={new Date("2025-11-20")}
          endDate={new Date("2026-01-01")}
          colorMode="discrete"
        />
      </ComponentShowcase>

    </div>
  );
}