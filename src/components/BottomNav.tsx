"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { HugeiconsIcon, Home01Icon, Briefcase07Icon, UserCircleIcon } from "./icons";

const navItems = [
  { href: "/home", label: "Home", icon: Home01Icon },
  { href: "/fixit", label: "FixIt", icon: Briefcase07Icon },
  { href: "/join", label: "Join", icon: UserCircleIcon },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/95 backdrop-blur-lg border-t border-border/50 shadow-2xl shadow-black/5 z-50">
      <div className="flex items-center justify-around h-18 px-6 py-2">
        {navItems.map(({ href, label, icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1.5 py-2 px-4 rounded-2xl transition-all active:scale-95 ${
                isActive ? "text-primary bg-tint-100/50" : "text-text-muted"
              }`}
            >
              <div className="relative">
                <HugeiconsIcon
                  icon={icon}
                  size={28}
                  color="currentColor"
                  strokeWidth={isActive ? 2.5 : 2}
                  className="transition-all"
                />
                {isActive && (
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl" />
                )}
              </div>
              <span className={`text-xs transition-all ${isActive ? "font-semibold" : "font-medium"}`}>
                {label === "FixIt" ? (
                  <span className="logo-text text-xs">
                    <span className="text-foreground">Fix</span>
                    <span className={isActive ? "text-primary" : "text-foreground"}>It</span>
                  </span>
                ) : (
                  label
                )}
              </span>
            </Link>
          );
        })}
      </div>
      {/* Safe area padding for devices with home indicator */}
      <div className="h-[env(safe-area-inset-bottom)] bg-white/95" />
    </nav>
  );
}

