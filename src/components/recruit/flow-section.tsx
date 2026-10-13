import { SectionHeading } from "@/components/common/section-heading";

const STEPS = [
  { title: "エントリー", body: "お問い合わせフォームから、応募職種をお知らせください。" },
  { title: "書類選考", body: "履歴書・職務経歴書をもとに選考します。結果は1週間以内にご連絡します。" },
  { title: "面接(2回)", body: "現場メンバーと役員が、お互いの理解を深める場として面接を行います。" },
  { title: "内定", body: "条件面をご相談のうえ、入社日を決定します。" },
];

export function FlowSection() {
  return (
    <section className="flex w-full flex-col items-start gap-6 bg-[#f9fafb] px-5 py-12 lg:gap-10 lg:p-20">
      <SectionHeading en="SELECTION FLOW" title="選考フロー" />
      <ol className="grid w-full grid-cols-1 gap-6 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className="flex flex-col items-start gap-2 rounded border border-[#e5e7eb] bg-white p-6"
          >
            <span className="font-heading text-[12px] font-bold text-[#0a1c36]">
              STEP {i + 1}
            </span>
            <h3 className="text-[16px] font-bold text-[#111827]">{step.title}</h3>
            <p className="text-[13px] leading-[1.6] text-[#4b5563]">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
