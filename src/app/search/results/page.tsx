"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { HugeiconsIcon, Search01Icon, StarIcon, Location01Icon } from "@/components/icons";

const workers = [
  {
    id: "1",
    name: "Elliot Park",
    location: "Panadura",
    rating: 4.0,
    reviews: 200,
    level: "Gold Level",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus turpis a lorem accumsan luctus. Phasellus aliquam magna in nulla rhoncus semper.",
    hourlyRate: 3000,
    imageUrl: "/images/Profile.jpg",
  },
];

function WorkerResultCard({ worker }: { worker: (typeof workers)[0] }) {
  return (
    <div
      style={{
        borderRadius: 8,
        border: "1px solid #E5E7EB",
        backgroundColor: "#fff",
        paddingTop: 12,
        paddingRight: 20,
        paddingBottom: 12,
        paddingLeft: 20,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        {/* Avatar + name/location */}
        <div className="flex items-center gap-3">
          <div
            className="flex-shrink-0 overflow-hidden"
            style={{
              width: 48,
              height: 48,
              borderRadius: 40,
              border: "1px solid #E5E7EB",
            }}
          >
            <Image
              src={worker.imageUrl}
              alt={worker.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/icons/default.svg";
              }}
            />
          </div>
          <div>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: 16,
                lineHeight: "100%",
                color: "#1F2937",
              }}
            >
              {worker.name}
            </p>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                color: "#6B7280",
                marginTop: 4,
              }}
            >
              {worker.location}
            </p>
          </div>
        </div>

        {/* Rating + level */}
        <div className="flex flex-col items-end gap-1.5">
          <div className="flex items-center gap-0.5">
            <HugeiconsIcon icon={StarIcon} size={14} color="#F59E0B" fill="#F59E0B" strokeWidth={0} />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: 12,
                color: "#1F2937",
              }}
            >
              {worker.rating.toFixed(1)}
            </span>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                color: "#6B7280",
              }}
            >
              ({worker.reviews})
            </span>
          </div>
          <div className="flex items-center gap-1">
            {/* Shield icon */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#D97706">
              <path d="M12 2L4 6v6c0 5.5 3.6 10.7 8 12 4.4-1.3 8-6.5 8-12V6l-8-4z" />
            </svg>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                color: "#D97706",
              }}
            >
              {worker.level}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "160%",
          color: "#1F2937",
        }}
      >
        {worker.description}
      </p>

      {/* Price */}
      <div className="flex items-baseline gap-0.5">
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: 16,
            color: "#1F2937",
          }}
        >
          {worker.hourlyRate}
        </span>
        <sup
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            color: "#1F2937",
            verticalAlign: "super",
          }}
        >
          Rs/hr
        </sup>
      </div>
    </div>
  );
}

function SearchResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  return (
    <div className="min-h-dvh bg-[#F3F4F6]">
      {/* Header */}
      <div className="pt-12 pb-3 px-4">
        <div className="flex items-center gap-3">
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center w-9 h-9 text-[#1F2937] active:opacity-60 transition-opacity flex-shrink-0"
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
          <div className="flex-1 flex items-center bg-white rounded-xl px-4 py-3 border border-gray-200">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for services or skilled workers"
              className="flex-1 bg-transparent text-sm text-[#1F2937] placeholder:text-gray-400 outline-none"
            />
            <HugeiconsIcon
              icon={Search01Icon}
              size={18}
              color="#9CA3AF"
              strokeWidth={2.5}
            />
          </div>
        </div>
      </div>

      {/* Filter row */}
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Left: sort + location */}
        <div className="flex items-center gap-4">
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              color: "#4B5563",
            }}
          >
            Highest rated
          </span>
          <div className="flex items-center gap-1">
            <HugeiconsIcon icon={Location01Icon} size={16} color="#4B5563" strokeWidth={2} />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                color: "#4B5563",
              }}
            >
              Sri Lanka
            </span>
          </div>
        </div>

        {/* Right: view toggle buttons */}
        <div className="flex items-center">
          {/* List view */}
          <button
            onClick={() => setViewMode("list")}
            style={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderTopLeftRadius: 4,
              borderBottomLeftRadius: 4,
              borderTop: "1px solid",
              borderBottom: "1px solid",
              borderLeft: "1px solid",
              borderRight: "none",
              borderColor: viewMode === "list" ? "#F97316" : "#D1D5DB",
              backgroundColor: viewMode === "list" ? "#FFF7ED" : "#fff",
              padding: 4,
            }}
            aria-label="List view"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={viewMode === "list" ? "#F97316" : "#6B7280"} strokeWidth="2" strokeLinecap="round">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <circle cx="3" cy="6" r="1" fill={viewMode === "list" ? "#F97316" : "#6B7280"} stroke="none" />
              <circle cx="3" cy="12" r="1" fill={viewMode === "list" ? "#F97316" : "#6B7280"} stroke="none" />
              <circle cx="3" cy="18" r="1" fill={viewMode === "list" ? "#F97316" : "#6B7280"} stroke="none" />
            </svg>
          </button>

          {/* Grid view */}
          <button
            onClick={() => setViewMode("grid")}
            style={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid",
              borderColor: viewMode === "grid" ? "#F97316" : "#D1D5DB",
              backgroundColor: viewMode === "grid" ? "#FFF7ED" : "#fff",
              padding: 4,
            }}
            aria-label="Grid view"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={viewMode === "grid" ? "#F97316" : "#6B7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </button>

          {/* Filter */}
          <button
            style={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4,
              borderTop: "1px solid #D1D5DB",
              borderBottom: "1px solid #D1D5DB",
              borderRight: "1px solid #D1D5DB",
              borderLeft: "none",
              backgroundColor: "#fff",
              padding: 4,
            }}
            aria-label="Filter"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round">
              <line x1="21" y1="4" x2="14" y2="4" />
              <line x1="10" y1="4" x2="3" y2="4" />
              <line x1="21" y1="12" x2="12" y2="12" />
              <line x1="8" y1="12" x2="3" y2="12" />
              <line x1="21" y1="20" x2="16" y2="20" />
              <line x1="12" y1="20" x2="3" y2="20" />
              <circle cx="12" cy="4" r="2" />
              <circle cx="10" cy="12" r="2" />
              <circle cx="14" cy="20" r="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Worker cards */}
      <div className={`px-4 ${viewMode === "grid" ? "grid grid-cols-2 gap-3" : "flex flex-col gap-3"}`}>
        {workers.map((worker) => (
          <WorkerResultCard key={worker.id} worker={worker} />
        ))}
      </div>
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-[#F3F4F6]" />}>
      <SearchResultsContent />
    </Suspense>
  );
}
