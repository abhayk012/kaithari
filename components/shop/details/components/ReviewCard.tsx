import StarRating from "./StarRating";
import ReviewLikeButton from "./ReviewLikeButton";
import type { Review } from "@/lib/types/review";
import { Separator } from "@/components/ui/separator";

interface ReviewCardProps {
  review: Review;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="py-5">
      <div className="flex items-start justify-between gap-4">
        {/* Left: Avatar + meta */}
        <div className="flex items-start gap-3">
          {/* Monogram */}
          <div
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#2C2416] text-sm font-semibold text-[#FAF7F0] font-heading select-none"
            aria-hidden="true"
          >
            {review.userName.charAt(0)}
          </div>
          <div>
            <p className="font-heading text-sm font-semibold text-[#2C2416]">
              {review.userName}
            </p>
            <div className="mt-0.5 flex items-center gap-2">
              <StarRating value={review.rating} size="sm" />
              <span className="font-body text-xs text-[#7A6A52]">
                {formatDate(review.date)}
              </span>
            </div>
          </div>
        </div>

        {/* Like button */}
        <ReviewLikeButton
          initialLikes={review.likes}
          initialLiked={review.likedByUser}
        />
      </div>

      {/* Title */}
      {review.title && (
        <p className="mt-3 font-heading text-base font-semibold text-[#2C2416]">
          {review.title}
        </p>
      )}

      {/* Comment */}
      <p className="mt-2 font-body text-sm leading-relaxed text-[#5C3D1E]">
        {review.comment}
      </p>

      <Separator className="mt-5 bg-[#E8DFC8]" />
    </article>
  );
}
