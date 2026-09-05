export function SectionHeader({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      {kicker ? <p className="kicker mb-2">{kicker}</p> : null}
      <h2 className="font-serif text-3xl text-forest sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-stone leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
