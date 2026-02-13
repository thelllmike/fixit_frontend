import BottomNav from "@/components/BottomNav";

const categories = [
  "electrician", "plumber", "carpenter", "driver", "cleaner",
  "painter", "catering", "builder", "security", "welder",
];

export function generateStaticParams() {
  return categories.map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className="pb-24 pt-12 px-4">
      <h1 className="text-xl font-bold mb-2">{title}s near you</h1>
      <p className="text-sm text-text-secondary">Browse all available {slug}s in your area.</p>
      <BottomNav />
    </div>
  );
}
