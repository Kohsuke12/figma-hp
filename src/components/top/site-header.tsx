"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ContactButton } from "@/components/contact/contact-modal";

const NAV_ITEMS: { label: string; href?: string }[] = [
  { label: "ホーム", href: "/" },
  { label: "会社概要", href: "/company" },
  { label: "サービス", href: "/services" },
  { label: "ニュース", href: "/news" },
  { label: "採用情報", href: "/recruit" },
  { label: "お問い合わせ" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <span className="flex size-7 lg:size-8 items-center justify-center rounded bg-[#0a1c36]">
        <span className="font-heading text-[16px] lg:text-[18px] font-bold text-white">
          N
        </span>
      </span>
      <span className="flex flex-col gap-px leading-none">
        <span className="font-heading text-[15px] lg:text-[18px] font-bold text-[#0a1c36]">
          NEXUS
        </span>
        <span className="text-[9px] font-medium text-[#4b5563]">
          ネクサス株式会社
        </span>
      </span>
    </Link>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 5L19 19M5 19L19 5"
          stroke="#7F1D1D"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.0008 4.9992H19.9992M4.0008 12H19.9992M4.0008 19.0008H19.9992"
        stroke="#7F1D1D"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function isActive(pathname: string, href?: string) {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navItems = NAV_ITEMS.map((item) => ({
    ...item,
    active: isActive(pathname, item.href),
  }));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e7eb] bg-white">
      <div className="flex w-full items-center justify-between px-5 py-4 lg:px-20 lg:py-0 lg:h-20">
        <Logo />

        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const content = (
              <>
                <span
                  className={
                    item.active
                      ? "text-[14px] font-bold text-[#0a1c36]"
                      : "text-[14px] font-medium text-[#111827]"
                  }
                >
                  {item.label}
                </span>
                {item.active && (
                  <span className="h-[2px] w-4 rounded-full bg-[#0a1c36]" />
                )}
              </>
            );
            const className = "flex flex-col items-start justify-center gap-1";
            return item.href ? (
              <Link key={item.label} href={item.href} className={className}>
                {content}
              </Link>
            ) : (
              <ContactButton key={item.label} className={className}>
                {content}
              </ContactButton>
            );
          })}
        </nav>

        <ContactButton className="hidden lg:flex items-center rounded bg-[#0a1c36] px-5 py-2.5">
          <span className="text-[13px] font-semibold text-white whitespace-nowrap">
            資料請求・お問い合わせ
          </span>
        </ContactButton>

        <button
          type="button"
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center p-2 lg:hidden"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-[#e5e7eb] px-5 py-4 lg:hidden">
          {navItems.map((item) => {
            const className = item.active
              ? "py-3 text-[15px] font-bold text-[#0a1c36]"
              : "py-3 text-[15px] font-medium text-[#111827]";
            return item.href ? (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={className}
              >
                {item.label}
              </Link>
            ) : (
              <ContactButton
                key={item.label}
                onClick={() => setOpen(false)}
                className={`${className} text-left`}
              >
                {item.label}
              </ContactButton>
            );
          })}
          <ContactButton
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center rounded bg-[#0a1c36] px-5 py-3"
          >
            <span className="text-[14px] font-semibold text-white">
              資料請求・お問い合わせ
            </span>
          </ContactButton>
        </nav>
      )}
    </header>
  );
}
