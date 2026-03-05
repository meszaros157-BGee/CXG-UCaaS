"use client";

import { useState } from "react";
import type { ReactNode } from "react";

interface PlatformTabsProps {
  labels: string[];
  panels: ReactNode[];
}

export default function PlatformTabs({ labels, panels }: PlatformTabsProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-6 md:grid-cols-[220px_1fr]">
      {/* Channel selector sidebar */}
      <div className="flex flex-row gap-1.5 overflow-x-auto md:flex-col md:overflow-x-visible">
        {labels.map((label, index) => {
          const isActive = index === active;
          return (
            <button
              key={label}
              onClick={() => setActive(index)}
              className={`flex shrink-0 items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#2467e3] text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Active panel */}
      <div>{panels[active]}</div>
    </div>
  );
}
