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
        {/* Left - Worker photo filling the box */}
        <div className="relative flex-shrink-0" style={{ width: 120, height: 106 }}>
          <Image
            src="/images/baner.jpeg"
            alt="Skilled worker"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Text content */}
        <div
          className="flex flex-col justify-between"
          style={{
            flex: 1,
            padding: "12px 16px",
          }}
        >
          {/* Title */}
          <h3
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: 16,
              lineHeight: "100%",
              letterSpacing: "0%",
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
              fontSize: 10,
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#1F2937",
              textAlign: "left",
            }}
          >
            Turn your skills into income.
          </p>

          {/* CTA Button */}
          <Link
            href="/join"
            className="self-start active:scale-95 transition-transform"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 31,
              borderRadius: 8,
              padding: "8px 12px",
              background: "#F97316",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: 12,
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
