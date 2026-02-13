import { HugeiconsIcon, Location01Icon } from "@/components/icons";
import SearchBar from "@/components/SearchBar";
import CategoryGrid from "@/components/CategoryGrid";
import WorkerSection from "@/components/WorkerSection";
import RecruitmentBanner from "@/components/RecruitmentBanner";
import BottomNav from "@/components/BottomNav";

// Mock data - Replace with API calls later
const electricians = [
  { id: "1", name: "Elliot Park", location: "Panadura", rating: 4.0, hourlyRate: 3000, imageUrl: "/images/Profile.jpg" },
  { id: "2", name: "Elliot Park", location: "Panadura", rating: 4.0, hourlyRate: 3000, imageUrl: "/images/Profile.jpg" },
  { id: "3", name: "Elliot Park", location: "Panadura", rating: 4.0, hourlyRate: 3000, imageUrl: "/images/Profile.jpg" },
];

const plumbers = [
  { id: "4", name: "Elliot Park", location: "Panadura", rating: 4.0, hourlyRate: 3000, imageUrl: "/images/Profile.jpg" },
  { id: "5", name: "Elliot Park", location: "Panadura", rating: 4.0, hourlyRate: 3000, imageUrl: "/images/Profile.jpg" },
  { id: "6", name: "Elliot Park", location: "Panadura", rating: 4.0, hourlyRate: 3000, imageUrl: "/images/Profile.jpg" },
];

export default function HomePage() {
  return (
    <div
      className="pb-24 min-h-dvh"
      style={{
        background: "linear-gradient(180deg, #F97316 10%, rgba(249, 115, 22, 0.5) 25%, rgba(249, 115, 22, 0) 40%)",
      }}
    >
      {/* Header */}
      <header className="pt-12 pb-6 px-6">
        {/* Location Selector */}
        <button className="flex items-center gap-2 text-white mb-1 group transition-all active:scale-95">
          <HugeiconsIcon icon={Location01Icon} size={18} color="currentColor" strokeWidth={2.5} />
          <span className="font-semibold text-base tracking-tight">Sri Lanka</span>
        </button>
        <p className="text-white/90 text-xs mb-6 ml-7 leading-relaxed">
          You are set to island wide service. Tap to change.
        </p>

        {/* Search Bar */}
        <SearchBar />

        {/* Categories */}
        <CategoryGrid />
      </header>

      {/* Main Content */}
      <main className="space-y-8 pb-6">
        {/* Workers sections */}
        <WorkerSection
          title="Electricians near to you"
          moreLabel="More electricians"
          moreHref="/category/electrician"
          workers={electricians}
        />

        <WorkerSection
          title="Plumbers near to you"
          moreLabel="More plumbers"
          moreHref="/category/plumber"
          workers={plumbers}
        />

        {/* Recruitment Banner */}
        <RecruitmentBanner />
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
