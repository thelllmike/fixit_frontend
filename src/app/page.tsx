"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();
  const [dots, setDots] = useState("");

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    const timer = setTimeout(() => {
      router.push("/home");
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(dotInterval);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-dvh bg-white px-8">
      {/* Mascot placeholder - Replace with your FixIt mascot image */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-64 h-64 flex items-center justify-center mb-6">
          {/* TODO: Replace with <Image src="/images/fixit-mascot.svg" ... /> */}
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="80" r="30" fill="#FFD5B8" />
            <rect x="70" y="105" width="60" height="50" rx="5" fill="#F97316" />
            <rect x="75" y="95" width="50" height="15" rx="3" fill="#FB9F4F" />
            <circle cx="100" cy="45" r="22" fill="#E5E7EB" />
            <rect x="78" y="35" width="44" height="15" rx="3" fill="white" />
            <rect x="55" y="115" width="25" height="40" rx="3" fill="#FFD5B8" transform="rotate(-20 55 115)" />
            <rect x="120" y="110" width="25" height="40" rx="3" fill="#FFD5B8" transform="rotate(30 120 110)" />
            <rect x="35" y="125" width="18" height="12" rx="3" fill="#D65510" />
            <rect x="80" y="155" width="15" height="35" rx="3" fill="#F97316" />
            <rect x="105" y="155" width="15" height="35" rx="3" fill="#F97316" />
            <circle cx="90" cy="75" r="3" fill="#1F2937" />
            <circle cx="110" cy="75" r="3" fill="#1F2937" />
            <path d="M 93 85 Q 100 92 107 85" stroke="#1F2937" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Logo text - Switzer Black Italic 128px equivalent */}
        <div className="logo-text text-6xl tracking-tight">
          <span className="text-[#1F2937]">Fix</span>
          <span className="text-primary">It</span>
        </div>
      </div>

      {/* Loading text */}
      <div className="pb-16 flex items-center gap-2 text-sm">
        <svg className="w-5 h-5 animate-spin text-primary" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.3" />
          <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span>
          <span className="logo-text text-sm text-primary">Fix</span>
          <span className="logo-text text-sm text-[#1F2937]">It</span>
          <span className="text-text-secondary"> is loading please wait{dots}</span>
        </span>
      </div>
    </div>
  );
}
