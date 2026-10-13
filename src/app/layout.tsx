import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { ContactModalProvider } from "@/components/contact/contact-modal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXUS Corporation | ネクサス株式会社",
  description:
    "ネクサス株式会社は、最先端のIT技術と確かなコンサルティング力で、企業のデジタルトランスフォーメーション（DX）を強力に牽引するテクノロジーパートナーです。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-[#111827]">
        <ContactModalProvider>{children}</ContactModalProvider>
      </body>
    </html>
  );
}
