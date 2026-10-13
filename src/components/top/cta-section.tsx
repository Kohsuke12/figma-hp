import { ContactButton } from "@/components/contact/contact-modal";

export function CtaSection() {
  return (
    <section className="flex w-full flex-col items-center gap-5 bg-[#0a1c36] px-5 py-14 lg:gap-6 lg:px-20 lg:py-20">
      <p className="text-center text-[20px] font-bold text-white lg:text-[28px]">
        ビジネス変革の旅を、ともに。
      </p>
      <p className="max-w-full text-center text-[14px] leading-[1.6] text-white/80 lg:w-[600px] lg:text-[16px] lg:leading-normal">
        御社の課題に合わせた最適なアプローチをご提案します。初期のご相談や事例紹介など、まずはお気軽にお問い合わせください。
      </p>
      <ContactButton className="flex w-full items-center justify-center rounded bg-white px-6 py-3.5 lg:h-12 lg:w-auto lg:px-10 lg:py-4">
        <span className="text-[14px] font-bold text-[#0a1c36] lg:text-[15px]">
          無料相談・お問い合わせはこちら
        </span>
      </ContactButton>
    </section>
  );
}
