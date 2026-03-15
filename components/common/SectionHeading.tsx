interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  kaviLine?: boolean;
  className?: string;
}

export default function SectionHeading({
  id,
  title,
  subtitle,
  center = true,
  kaviLine = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${center ? "text-center" : "text-left"} ${className}`}>
      {kaviLine && (
        <span
          className={`mb-4 inline-block h-0.5 w-12 bg-[#C9A84C] ${
            center ? "mx-auto" : ""
          }`}
          aria-hidden="true"
        />
      )}
      <h2
        id={id}
        className="font-heading text-3xl font-semibold leading-tight text-[#2C2416] sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl font-body text-base text-[#7A6A52] sm:text-lg leading-relaxed ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
