"use client";

import { HugeiconsIcon, Search01Icon } from "./icons";
import { useState } from "react";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-6">
      <div
        className={`flex items-center bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3.5 shadow-lg border-2 transition-all ${
          isFocused ? "border-primary shadow-primary/20" : "border-white/50 shadow-black/5"
        }`}
      >
        <HugeiconsIcon
          icon={Search01Icon}
          size={20}
          color={isFocused ? "var(--primary)" : "var(--text-muted)"}
          strokeWidth={2.5}
          className="transition-colors mr-3"
        />
        <input
          type="text"
          placeholder="Search for services or skilled workers"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-text-muted outline-none"
        />
      </div>
    </div>
  );
}

