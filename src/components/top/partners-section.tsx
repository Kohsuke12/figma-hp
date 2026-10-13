const PARTNERS = [
  "MITSUBISHI GROUP",
  "YAMATO DEV",
  "TOYOTA PARTNERS",
  "SOMPO INC",
  "NIPPON SYSTEM",
];

export function PartnersSection() {
  return (
    <section className="flex w-full flex-col items-center gap-4 border-b border-[#e5e7eb] px-5 py-6 lg:flex-row lg:justify-between lg:px-20 lg:py-8">
      <p className="font-heading text-[11px] font-bold text-[#4b5563] lg:text-[12px] lg:whitespace-nowrap">
        TRUSTED BY LEADERS
      </p>
      <div className="flex w-full flex-wrap items-center justify-center gap-4 lg:w-auto lg:flex-nowrap lg:justify-end lg:gap-10">
        {PARTNERS.map((name) => (
          <span
            key={name}
            className="font-heading rounded bg-[#f3f4f6] px-3 py-3 text-[11px] font-extrabold text-[#4b5563] opacity-60 lg:bg-transparent lg:p-0 lg:text-[14px] lg:opacity-50 lg:whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
