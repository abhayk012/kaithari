import Link from "next/link";

interface OccasionCardProps {
  title: string;
  subtitle: string;
  image: string;
  href?: string;
}

const GRADIENTS: Record<string, string> = {
  Wedding: "from-[#7A2036]/30 to-[#7A2036]/60",
  Onam: "from-[#1E4D2B]/30 to-[#1E4D2B]/60",
  Temple: "from-[#5C3D1E]/30 to-[#5C3D1E]/60",
  Gifting: "from-[#C9A84C]/20 to-[#C9A84C]/50",
};

const BG_COLORS: Record<string, string> = {
  Wedding: "#EDD5D9",
  Onam: "#D5E8DA",
  Temple: "#E8D5C0",
  Gifting: "#F5EBC5",
};

export default function OccasionCard({
  title,
  subtitle,
  href = "#",
}: OccasionCardProps) {
  const gradient = GRADIENTS[title] ?? "from-[#2C2416]/30 to-[#2C2416]/60";
  const bgColor = BG_COLORS[title] ?? "#F5EFE0";

  return (
    <Link href={href} className="group block" aria-label={`Shop for ${title}`}>
      <div
        className="relative flex aspect-square items-end overflow-hidden rounded-md"
        style={{ backgroundColor: bgColor }}
      >
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-60 transition-opacity duration-300 group-hover:opacity-80`}
        />

        {/* Decorative motif */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-heading text-6xl font-light text-white/20 select-none">
            {title.charAt(0)}
          </span>
        </div>

        {/* Label */}
        <div className="relative z-10 w-full p-4">
          <h3 className="font-heading text-xl font-semibold text-white">
            {title}
          </h3>
          <p className="font-body text-sm text-white/80">{subtitle}</p>
          <span className="mt-2 inline-block h-0.5 w-8 bg-[#C9A84C] transition-all duration-300 group-hover:w-12" />
        </div>
      </div>
    </Link>
  );
}
