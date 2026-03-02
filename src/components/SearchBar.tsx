"use client";

import { HugeiconsIcon, Search01Icon } from "./icons";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();

  return (
    <div className="mb-6">
      <button
        onClick={() => router.push("/search")}
        className="w-full flex items-center bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3.5 shadow-lg border-2 border-white/50 shadow-black/5 transition-all active:scale-[0.98]"
      >
        <HugeiconsIcon
          icon={Search01Icon}
          size={20}
          color="var(--text-muted)"
          strokeWidth={2.5}
          className="mr-3"
        />
        <span className="flex-1 text-left text-sm text-text-muted">
          Search for services or skilled workers
        </span>
      </button>
    </div>
  );
}
