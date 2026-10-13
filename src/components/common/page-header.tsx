export function PageHeader({ en, title }: { en: string; title: string }) {
  return (
    <section className="flex w-full flex-col items-start gap-2 bg-[#0a1c36] px-5 pt-10 pb-8 font-bold text-white lg:gap-3 lg:px-20 lg:pt-[60px] lg:pb-10">
      <p className="font-heading text-[12px] opacity-70 lg:text-[16px]">{en}</p>
      <h1 className="text-[26px] lg:text-[32px]">{title}</h1>
    </section>
  );
}
