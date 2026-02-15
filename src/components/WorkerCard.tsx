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
    <div
      className="bg-white active:scale-[0.98] transition-all"
      style={{
        width: 228,
        minWidth: 228,
        height: 119,
        borderRadius: 8,
        padding: "12px 20px",
        border: "1px solid #1F2937",
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        {/* Worker avatar */}
        <div
          className="flex-shrink-0 overflow-hidden flex items-center justify-center"
          style={{
            width: 48,
            height: 48,
            borderRadius: 40,
            border: "1px solid #1F2937",
          }}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src="/icons/default.svg"
              alt="Default avatar"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm text-[#1F2937] truncate">{name}</h4>
          <p className="text-xs text-[#6B7280] truncate">{location}</p>
        </div>
        <div className="flex items-center gap-1">
          <HugeiconsIcon icon={StarIcon} size={13} color="#1F2937" fill="#1F2937" />
          <span className="text-xs font-semibold text-[#1F2937]">{rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-0.5">
          <span className="text-lg font-bold text-[#1F2937]">{hourlyRate}</span>
          <span className="text-[10px] text-[#6B7280] font-medium">Rs/hr</span>
        </div>
        <Link
          href="/hire"
          className="active:scale-95 transition-all"
          style={{
            borderRadius: 8,
            padding: "6px 12px",
            background: "#F97316",
            color: "#F3F4F6",
            fontSize: 12,
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
          }}
        >
          Hire for work
        </Link>
      </div>
    </div>
  );
}
