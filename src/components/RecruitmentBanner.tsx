import Link from "next/link";
import Image from "next/image";

export default function RecruitmentBanner() {
  return (
    <section className="px-4">
      <div
        className="relative overflow-hidden flex"
        style={{
          width: "100%",
          maxWidth: 380,
          height: 106,
          borderRadius: 8,
          background: "#FEEED0",
          margin: "0 auto",
        }}
      >
        {/* Left - Worker photo with gradient fade */}
        <div className="absolute left-0 top-0 bottom-0" style={{ width: "55%" }}>
          <Image
            src="/images/baner.jpeg"
            alt="Skilled worker"
            fill
            className="object-cover"
          />
          {/* Gradient overlay: transparent on left, fades to #FEEED0 on right */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, transparent 20%, #FEEED0 100%)",
            }}
          />
        </div>

        {/* Right - Text content */}
        <div
          className="relative z-10 flex flex-col items-start justify-between ml-auto"
          style={{
            width: "60%",
            padding: "12px 16px",
          }}
        >
          {/* Title */}
          <h3
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: 12,
              lineHeight: "120%",
              color: "#1F2937",
              textAlign: "left",
            }}
          >
            Got a skill? Let it earn.
          </h3>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: 9,
              lineHeight: "100%",
              color: "#1F2937",
              textAlign: "left",
            }}
          >
            Turn your skills into income.
          </p>

          {/* CTA Button */}
          <Link
            href="/join"
            className="active:scale-95 transition-transform"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: 28,
              borderRadius: 8,
              padding: "6px 12px",
              background: "#F97316",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              lineHeight: "100%",
              color: "#F3F4F6",
            }}
          >
            Join the FixIt Workforce
          </Link>
        </div>
      </div>
    </section>
  );
}
