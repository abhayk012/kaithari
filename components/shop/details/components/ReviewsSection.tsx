"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import StarRating from "./StarRating";
import ReviewCard from "./ReviewCard";
import AddReviewCollapse from "./AddReviewCollapse";
import type { Review, RatingSummary } from "@/lib/types/review";

interface ReviewsSectionProps {
  initialReviews: Review[];
  summary: RatingSummary;
}

function RatingBar({
  star,
  count,
  total,
}: {
  star: number;
  count: number;
  total: number;
}) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className="flex items-center gap-2.5">
      <span className="w-2 font-body text-xs text-[#7A6A52]">{star}</span>
      <div className="h-1.5 flex-1 rounded-full bg-[#E8DFC8] overflow-hidden">
        <div
          className="h-full rounded-full bg-[#C9A84C] transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-6 font-body text-xs text-right text-[#7A6A52]">
        {count}
      </span>
    </div>
  );
}

export default function ReviewsSection({
  initialReviews,
  summary,
}: ReviewsSectionProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  const addReview = (r: Omit<Review, "id" | "likes" | "likedByUser">) => {
    const newReview: Review = {
      ...r,
      id: `r-${Date.now()}`,
      likes: 0,
      likedByUser: false,
    };
    setReviews((prev) => [newReview, ...prev]);
  };

  const avg =
    reviews.length > 0
      ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
      : summary.average;

  return (
    <section aria-labelledby="reviews-heading">
      {/* Section title */}
      <div className="mb-6 flex items-center gap-4">
        <span className="h-0.5 w-10 bg-[#C9A84C]" aria-hidden="true" />
        <h2
          id="reviews-heading"
          className="font-heading text-2xl font-semibold text-[#2C2416]"
        >
          Customer Reviews
        </h2>
      </div>

      {/* Rating summary */}
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-10">
        {/* Average */}
        <div className="flex flex-col items-center gap-1 sm:w-36">
          <span className="font-heading text-5xl font-semibold text-[#2C2416]">
            {avg.toFixed(1)}
          </span>
          <StarRating value={avg} size="md" />
          <span className="font-body text-xs text-[#7A6A52]">
            {reviews.length} review{reviews.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Breakdown bars */}
        <div className="flex-1 flex flex-col gap-1.5">
          {([5, 4, 3, 2, 1] as const).map((star) => {
            const count = reviews.filter((r) => r.rating === star).length;
            return (
              <RatingBar
                key={star}
                star={star}
                count={count}
                total={reviews.length}
              />
            );
          })}
        </div>
      </div>

      <Separator className="mb-6 bg-[#E8DFC8]" />

      {/* Review list */}
      {reviews.length > 0 ? (
        <div className="mb-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <p className="mb-8 font-body text-sm text-[#7A6A52]">
          No reviews yet — be the first to share your experience!
        </p>
      )}

      {/* Add review */}
      <AddReviewCollapse onSubmit={addReview} />
    </section>
  );
}
