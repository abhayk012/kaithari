"use client";

import { useState } from "react";
import { ThumbsUp } from "lucide-react";

interface ReviewLikeButtonProps {
  initialLikes: number;
  initialLiked: boolean;
}

export default function ReviewLikeButton({
  initialLikes,
  initialLiked,
}: ReviewLikeButtonProps) {
  const [liked, setLiked] = useState(initialLiked);
  const [count, setCount] = useState(initialLikes);

  const toggle = () => {
    setLiked((prev) => {
      setCount((c) => (prev ? c - 1 : c + 1));
      return !prev;
    });
  };

  return (
    <button
      onClick={toggle}
      aria-pressed={liked}
      aria-label={liked ? "Unlike this review" : "Like this review"}
      className={`flex items-center gap-1.5 rounded-sm px-2.5 py-1 font-body text-xs transition-colors duration-200 ${
        liked
          ? "bg-[#C9A84C]/10 text-[#C9A84C]"
          : "text-[#7A6A52] hover:text-[#C9A84C] hover:bg-[#C9A84C]/5"
      }`}
    >
      <ThumbsUp className={`h-3 w-3 ${liked ? "fill-[#C9A84C]" : ""}`} />
      <span>{count}</span>
    </button>
  );
}
