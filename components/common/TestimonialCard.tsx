import type { Testimonial } from "@/lib/data/testimonials";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-[#C9A84C]" : "text-[#E8DFC8]"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="border border-[#E8DFC8] bg-white shadow-none transition-shadow duration-300 hover:shadow-sm">
      <CardContent className="p-6">
        {/* Quote mark */}
        <span
          className="font-heading block text-5xl leading-none text-[#C9A84C]/40 select-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <p className="font-body mt-2 text-sm leading-relaxed text-[#5C3D1E]">
          {testimonial.review}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="font-heading text-base font-semibold text-[#2C2416]">
              {testimonial.name}
            </p>
            <p className="font-body text-xs text-[#7A6A52]">
              {testimonial.location}
            </p>
          </div>
          <StarRating rating={testimonial.rating} />
        </div>
      </CardContent>
    </Card>
  );
}
