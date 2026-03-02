"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HugeiconsIcon, Search01Icon } from "@/components/icons";
import Link from "next/link";

const popularServices = [
  "Plumbing",
  "Builder",
  "Electrician",
  "Catering",
  "House painter",
];

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/search/results?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="min-h-dvh bg-[#F3F4F6]">
      {/* Header */}
      <div className="pt-12 pb-4 px-4">
        <form onSubmit={handleSearch}>
          <div className="flex items-center gap-3">
            {/* Back button */}
            <button
              type="button"
              onClick={() => router.back()}
              className="flex items-center justify-center w-9 h-9 text-foreground active:opacity-60 transition-opacity"
              aria-label="Go back"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Search input */}
            <div className="flex-1 flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for services or skilled workers"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-gray-400 outline-none"
              />
              <button type="submit" className="flex-shrink-0">
                <HugeiconsIcon
                  icon={Search01Icon}
                  size={18}
                  color="#9CA3AF"
                  strokeWidth={2.5}
                />
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Popular services */}
      <div className="px-4 mt-4">
        <p className="text-sm font-medium text-gray-700 mb-3">
          Popular services and categories
        </p>
        <div className="flex flex-wrap gap-2">
          {popularServices.map((service) => (
            <Link
              key={service}
              href={`/search/results?q=${encodeURIComponent(service)}`}
              className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm text-gray-700 active:bg-gray-100 transition-colors"
            >
              {service}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
