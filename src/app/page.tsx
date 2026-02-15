"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
    <div className="flex flex-col items-center justify-center min-h-dvh bg-white px-8 relative overflow-hidden">
      {/* Background subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tint-100/10" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        {/* App Icon */}
        <div
          className="w-40 h-40 flex items-center justify-center mb-8 relative"
          style={{
            animation: "fadeInUp 0.6s ease-out, pulse 2s ease-in-out infinite"
          }}
        >
          <Image
            src="/images/mascot.svg"
            alt="FixIt Icon"
            width={160}
            height={160}
            priority
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        {/* Logo Text */}
        <div
          className="flex items-center gap-3 mb-2"
          style={{
            animation: "fadeInUp 0.6s ease-out 0.2s both"
          }}
        >
          <div className="logo-text text-6xl tracking-tight">
            <span className="text-[#1F2937]">Fix</span>
            <span className="text-primary">It</span>
          </div>
        </div>

        {/* Tagline */}
        <p
          className="text-text-secondary text-sm font-medium"
          style={{
            animation: "fadeInUp 0.6s ease-out 0.3s both"
          }}
        >
          Connect. Fix. Earn.
        </p>
      </div>

      {/* Loading indicator */}
      <div
        className="pb-16 flex items-center gap-2 text-sm relative z-10"
        style={{
          animation: "fadeInUp 0.6s ease-out 0.4s both"
        }}
      >
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
