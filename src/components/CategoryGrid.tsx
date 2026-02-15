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
            className="group"
            style={{
              animation: `fadeInUp 0.4s ease-out ${index * 0.05}s both`,
            }}
          >
            <div
              className="flex flex-col items-center justify-center transition-all group-active:scale-95"
              style={{
                width: 62,
                minWidth: 62,
                gap: 4,
                borderRadius: 8,
                padding: "8px 12px",
                background: "#F3F4F6",
              }}
            >
              <Image
                src={icon}
                alt={label}
                width={32}
                height={32}
                className="object-contain"
              />
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: 8,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#1F2937",
                }}
              >
                {label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

