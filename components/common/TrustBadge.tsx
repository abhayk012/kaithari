import type { TrustBadgeItem } from "@/lib/data/trustBadges";

interface TrustBadgeProps {
  badge: TrustBadgeItem;
}

export default function TrustBadge({ badge }: TrustBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-3 p-6 text-center">
      <span className="text-4xl" role="img" aria-label={badge.title}>
        {badge.icon}
      </span>
      <h3 className="font-heading text-lg font-semibold text-[#2C2416]">
        {badge.title}
      </h3>
      <p className="font-body text-sm leading-relaxed text-[#7A6A52]">
        {badge.description}
      </p>
    </div>
  );
}
