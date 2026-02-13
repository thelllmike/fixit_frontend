import Link from "next/link";
import Image from "next/image";

export default function RecruitmentBanner() {
  return (
    <section className="px-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-tint-100 via-tint-200 to-tint-100 shadow-xl shadow-primary/10 border border-primary/10">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/baner.jpeg"
            alt="Skilled worker"
            fill
            className="object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tint-100/95 via-tint-100/80 to-tint-100/60" />
        </div>

        {/* Content */}
        <div className="relative px-6 py-6 flex items-center gap-5">
          {/* Left side - Worker image */}
          <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden ring-4 ring-white/60 shadow-2xl shadow-primary/20">
            <Image
              src="/images/baner.jpeg"
              alt="Join our workforce"
              width={80}
              height={80}
              className="object-cover w-full h-full scale-110"
            />
          </div>

          {/* Right side - Text and CTA */}
          <div className="flex-1">
            <h3 className="text-base font-semibold text-foreground leading-snug mb-1">
              Got a skill? Let it earn.
            </h3>
            <p className="text-[10px] text-text-secondary mb-3 leading-relaxed">
              Turn your skills into income.
            </p>
            <Link
              href="/join"
              className="inline-block px-4 py-2 rounded-lg text-white text-xs font-semibold bg-primary shadow-lg shadow-primary/30 active:shadow-md active:scale-95 transition-all"
            >
              Join the FixIt Workforce
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

