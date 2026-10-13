import Image from "next/image";
import Link from "next/link";
import { ContactButton } from "@/components/contact/contact-modal";

export function HeroSection() {
  return (
    <section className="relative flex w-full items-center px-5 py-16 lg:h-[600px] lg:px-20 lg:py-20">
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,28,54,0.85)]" />
      </div>

      <div className="relative flex w-full flex-col items-start gap-6 lg:w-[780px]">
        <div className="flex items-center gap-2">
          <span className="h-[2px] w-4 lg:w-6 bg-white opacity-60" />
          <span className="font-heading text-[12px] lg:text-[14px] font-bold text-white whitespace-nowrap">
            NAVIGATING THE DIGITAL FUTURE
          </span>
        </div>

        <h1 className="text-[28px] leading-[1.3] font-bold text-white lg:text-[48px] lg:leading-[1.4]">
          <span className="block">テクノロジーで、</span>
          <span className="block lg:hidden">ビジネスの未来を</span>
          <span className="hidden lg:block">
            ビジネスの未来をナビゲートする。
          </span>
          <span className="block lg:hidden">ナビゲートする。</span>
        </h1>

        <p className="text-[14px] leading-[24px] text-white/80 lg:w-[min-content] lg:min-w-full lg:text-[16px] lg:leading-[1.7]">
          ネクサス株式会社は、最先端のIT技術と確かなコンサルティング力で、企業のデジタルトランスフォーメーション（DX）を強力に牽引するテクノロジーパートナーです。
        </p>

        <div className="flex w-full flex-col items-start gap-3 lg:w-auto lg:flex-row lg:gap-4">
          <Link
            href="/services"
            className="flex w-full items-center justify-center rounded bg-white px-5 py-3.5 lg:w-auto lg:justify-start lg:px-8 lg:py-4"
          >
            <span className="text-[14px] font-bold text-[#0a1c36] lg:text-[15px]">
              サービス概要を見る
            </span>
          </Link>
          <ContactButton className="flex w-full items-center justify-center rounded border border-white px-5 py-3.5 lg:w-auto lg:justify-start lg:px-8 lg:py-4">
            <span className="text-[14px] font-bold text-white lg:text-[15px]">
              お問い合わせはこちら
            </span>
          </ContactButton>
        </div>
      </div>
    </section>
  );
}
