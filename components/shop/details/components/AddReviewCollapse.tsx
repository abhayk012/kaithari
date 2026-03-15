"use client";

import { useState } from "react";
import type { Review } from "@/lib/types/review";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import StarRating from "./StarRating";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AddReviewCollapseProps {
  onSubmit: (review: Omit<Review, "id" | "likes" | "likedByUser">) => void;
}

export default function AddReviewCollapse({
  onSubmit,
}: AddReviewCollapseProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Name is required.";
    if (rating === 0) e.rating = "Please select a rating.";
    if (!comment.trim()) e.comment = "Review text is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({
      userName: name.trim(),
      title: title.trim() || undefined,
      rating,
      date: new Date().toISOString().split("T")[0],
      comment: comment.trim(),
    });
    setName("");
    setTitle("");
    setComment("");
    setRating(0);
    setErrors({});
    setSubmitted(true);
    setOpen(false);
  };

  return (
    <div className="rounded-sm border border-[#E8DFC8] bg-[#FAF7F0]">
      {/* Toggle button */}
      <button
        type="button"
        onClick={() => {
          setOpen((v) => !v);
          setSubmitted(false);
        }}
        className="flex w-full items-center justify-between px-5 py-4 font-heading text-base font-semibold text-[#2C2416] hover:text-[#5C3D1E] transition-colors"
        aria-expanded={open}
      >
        <span>Write a Review</span>
        {open ? (
          <ChevronUp className="h-4 w-4 text-[#C9A84C]" />
        ) : (
          <ChevronDown className="h-4 w-4 text-[#C9A84C]" />
        )}
      </button>

      {submitted && !open && (
        <div className="px-5 pb-4 font-body text-sm text-[#1E4D2B]">
          ✓ Thank you! Your review has been added.
        </div>
      )}

      {open && (
        <>
          <Separator className="bg-[#E8DFC8]" />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 px-5 py-5"
            noValidate
          >
            {/* Star picker */}
            <div>
              <label className="font-body mb-2 block text-xs uppercase tracking-widest text-[#7A6A52]">
                Your Rating <span className="text-[#7A2036]">*</span>
              </label>
              <StarRating
                value={rating}
                interactive
                onChange={setRating}
                size="lg"
              />
              {errors.rating && (
                <p className="mt-1 font-body text-xs text-[#7A2036]">
                  {errors.rating}
                </p>
              )}
            </div>

            {/* Name */}
            <div>
              <label
                htmlFor="review-name"
                className="font-body mb-1.5 block text-xs uppercase tracking-widest text-[#7A6A52]"
              >
                Your Name <span className="text-[#7A2036]">*</span>
              </label>
              <Input
                id="review-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Rajesh Nair"
                className="rounded-none border-[#E8DFC8] bg-white font-body text-sm text-[#2C2416] placeholder:text-[#B8A88A] focus:border-[#C9A84C] focus:ring-[#C9A84C]"
              />
              {errors.name && (
                <p className="mt-1 font-body text-xs text-[#7A2036]">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Title */}
            <div>
              <label
                htmlFor="review-title"
                className="font-body mb-1.5 block text-xs uppercase tracking-widest text-[#7A6A52]"
              >
                Review Title <span className="text-[#B8A88A]">(optional)</span>
              </label>
              <Input
                id="review-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Great quality, fast delivery…"
                className="rounded-none border-[#E8DFC8] bg-white font-body text-sm text-[#2C2416] placeholder:text-[#B8A88A] focus:border-[#C9A84C] focus:ring-[#C9A84C]"
              />
            </div>

            {/* Comment */}
            <div>
              <label
                htmlFor="review-comment"
                className="font-body mb-1.5 block text-xs uppercase tracking-widest text-[#7A6A52]"
              >
                Your Review <span className="text-[#7A2036]">*</span>
              </label>
              <Textarea
                id="review-comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your experience with this product…"
                rows={4}
                className="rounded-none border-[#E8DFC8] bg-white font-body text-sm text-[#2C2416] placeholder:text-[#B8A88A] focus:border-[#C9A84C] focus:ring-[#C9A84C] resize-none"
              />
              {errors.comment && (
                <p className="mt-1 font-body text-xs text-[#7A2036]">
                  {errors.comment}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="self-start rounded-none bg-[#2C2416] px-8 py-2.5 font-body text-xs tracking-widest text-[#FAF7F0] uppercase hover:bg-[#5C3D1E] transition-colors duration-200"
            >
              Submit Review
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
