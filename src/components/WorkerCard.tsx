import { HugeiconsIcon, StarIcon } from "./icons";
import Link from "next/link";
import Image from "next/image";

interface WorkerCardProps {
  name: string;
  location: string;
  rating: number;
  hourlyRate: number;
  imageUrl?: string;
}

export default function WorkerCard({ name, location, rating, hourlyRate, imageUrl }: WorkerCardProps) {
  return (
    <div className="min-w-[228px] bg-white rounded-2xl p-5 shadow-lg shadow-black/5 border border-border/50 transition-all active:scale-[0.98] active:shadow-md">
      <div className="flex items-start gap-4 mb-4">
        {/* Worker avatar */}
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center flex-shrink-0 ring-2 ring-border/50">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          ) : (
            <svg className="w-7 h-7 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="8" r="4" />
              <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
            </svg>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-base text-foreground truncate mb-0.5">{name}</h4>
          <p className="text-xs text-text-secondary truncate">{location}</p>
        </div>
        <div className="flex items-center gap-1 bg-tint-100 px-2 py-1 rounded-lg">
          <HugeiconsIcon icon={StarIcon} size={14} color="var(--star)" fill="var(--star)" />
          <span className="text-xs font-semibold text-foreground">{rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-baseline gap-0.5">
            <span className="text-xl font-bold text-foreground">{hourlyRate}</span>
            <span className="text-xs text-text-secondary font-medium">Rs/hr</span>
          </div>
        </div>
        <Link
          href="/hire"
          className="px-3 py-2 rounded-lg text-white text-xs font-semibold bg-primary shadow-md shadow-primary/25 active:shadow-sm active:scale-95 transition-all"
        >
          Hire for work
        </Link>
      </div>
    </div>
  );
}

