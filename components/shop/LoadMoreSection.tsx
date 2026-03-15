import { Button } from "@/components/ui/button";

interface LoadMoreSectionProps {
  visibleCount: number;
  totalCount: number;
  onLoadMore: () => void;
}

export default function LoadMoreSection({
  visibleCount,
  totalCount,
  onLoadMore,
}: LoadMoreSectionProps) {
  if (visibleCount >= totalCount) return null;

  return (
    <div className="mt-12 flex flex-col items-center gap-3">
      <p className="font-body text-sm text-[#7A6A52]">
        Showing {visibleCount} of {totalCount} products
      </p>
      <div className="h-px w-24 bg-[#E8DFC8]" aria-hidden="true" />
      <Button
        onClick={onLoadMore}
        variant="outline"
        className="mt-1 rounded-none border-[#2C2416] bg-transparent px-10 py-5 font-body text-xs tracking-widest text-[#2C2416] uppercase hover:bg-[#2C2416] hover:text-[#FAF7F0] transition-colors duration-200"
      >
        Load More
      </Button>
    </div>
  );
}
