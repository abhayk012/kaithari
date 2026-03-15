import Image from "next/image";
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
  image,
  href = "#",
}: CollectionCardProps) {
  return (
    <Link href={href} className="group block" aria-label={`Browse ${title}`}>
      <div className="relative overflow-hidden rounded-sm border border-[#E8DFC8] bg-[#F5EFE0] transition-all duration-300 hover:shadow-md hover:border-[#C9A84C]">
        {/* Image */}
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle dark overlay on hover */}
          <div className="absolute inset-0 bg-[#2C2416]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
