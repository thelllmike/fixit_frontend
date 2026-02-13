import { HugeiconsIcon, ArrowRight02Icon } from "./icons";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { label: "Electrician", icon: "/icons/electrition.svg" },
  { label: "Plumber", icon: "/icons/plumber.svg" },
  { label: "Carpenter", icon: "/icons/carpentor.svg" },
  { label: "Driver", icon: "/icons/driver.svg" },
  { label: "Cleaner", icon: "/icons/cleaner.svg" },
  { label: "Painter", icon: "/icons/oainter.svg" },
  { label: "Catering", icon: "/icons/catering.svg" },
  { label: "Builder", icon: "/icons/bilder.svg" },
  { label: "Security", icon: "/icons/security.svg" },
  { label: "Welder", icon: "/icons/welder.svg" },
];

export default function CategoryGrid() {
  return (
    <section className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-white tracking-tight">Quick Categories</h2>
        <Link
          href="/categories"
          className="flex items-center gap-1 text-xs font-semibold text-white/90 group transition-colors active:text-white"
        >
          View all
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            size={14}
            color="currentColor"
            strokeWidth={2.5}
            className="transition-transform group-active:translate-x-0.5"
          />
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {categories.map(({ label, icon }, index) => (
          <Link
            key={label}
            href={`/category/${label.toLowerCase()}`}
            className="flex flex-col items-center gap-2 group"
            style={{
              animation: `fadeInUp 0.4s ease-out ${index * 0.05}s both`,
            }}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-black/10 transition-all group-active:scale-95 group-active:shadow-md">
              <Image
                src={icon}
                alt={label}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-[10px] font-medium text-white text-center leading-tight drop-shadow-sm">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

