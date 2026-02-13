import { HugeiconsIcon, ArrowRight02Icon } from "./icons";
import WorkerCard from "./WorkerCard";
import Link from "next/link";

interface Worker {
  id: string;
  name: string;
  location: string;
  rating: number;
  hourlyRate: number;
  imageUrl?: string;
}

interface WorkerSectionProps {
  title: string;
  moreLabel: string;
  moreHref: string;
  workers: Worker[];
}

export default function WorkerSection({ title, moreLabel, moreHref, workers }: WorkerSectionProps) {
  return (
    <section>
      <div className="flex items-center justify-between px-6 mb-4">
        <h3 className="font-semibold text-xs text-foreground tracking-tight">{title}</h3>
        <Link
          href={moreHref}
          className="flex items-center gap-1 text-xs text-text-secondary group transition-colors active:text-foreground"
        >
          {moreLabel}
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            size={14}
            color="currentColor"
            strokeWidth={2.5}
            className="transition-transform group-active:translate-x-0.5"
          />
        </Link>
      </div>
      <div className="flex gap-4 overflow-x-auto px-6 pb-3 hide-scrollbar snap-x snap-mandatory">
        {workers.map((worker, index) => (
          <div
            key={worker.id}
            className="snap-start"
            style={{
              animation: `slideInRight 0.4s ease-out ${index * 0.1}s both`,
            }}
          >
            <WorkerCard {...worker} />
          </div>
        ))}
      </div>
    </section>
  );
}

