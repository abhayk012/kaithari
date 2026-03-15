import Link from "next/link";

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export default function CollectionCard({
  title,
  description,
  href = "#",
}: CollectionCardProps) {
  return (
    <Link href={href} className="group block" aria-label={`Browse ${title}`}>
      <div className="relative overflow-hidden rounded-md border border-[#E8DFC8] bg-[#F5EFE0] transition-all duration-300 hover:shadow-md hover:border-[#C9A84C]">
        {/* Decorative fabric placeholder */}
        <div className="flex aspect-[4/3] items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="h-px w-20 bg-[#C9A84C]" />
            <span
              className="font-heading text-2xl font-semibold text-[#2C2416] transition-colors duration-200 group-hover:text-[#5C3D1E]"
              aria-hidden="true"
            >
              {title.charAt(0)}
            </span>
            <div className="h-px w-20 bg-[#C9A84C]" />
          </div>
        </div>

        {/* Label */}
        <div className="border-t border-[#E8DFC8] p-4 text-center">
          <h3 className="font-heading text-base font-semibold text-[#2C2416]">
            {title}
          </h3>
          <p className="mt-1 font-body text-xs text-[#7A6A52]">{description}</p>
          <span className="mt-2 inline-block text-xs font-medium tracking-widest text-[#C9A84C] uppercase">
            Explore →
          </span>
        </div>
      </div>
    </Link>
  );
}
