export function SectionHeading({ en, title }: { en: string; title: string }) {
  return (
    <div className="flex flex-col items-start gap-1 font-bold lg:gap-2">
      <p className="font-heading text-[12px] text-[#0a1c36] lg:text-[14px]">
        {en}
      </p>
      <h2 className="text-[20px] text-[#111827] lg:text-[24px]">{title}</h2>
    </div>
  );
}
