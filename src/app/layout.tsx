import type { Metadata } from "next";
import { Kaisei_Opti, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import TypekitLoader from "@/components/adobeFonts";
import { MobileNavigation, Navigation } from "@/components/nav";

const kaisei = Kaisei_Opti({
  variable: "--font-kaisei",
  weight: ["400", "700"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "あきび祭2025",
  description: "秋田公立美術大学の学園祭、あきび祭2025の公式サイト",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TypekitLoader />
      <body className={`${notoSansJp.variable} ${kaisei.variable} antialiased`}>
        <Navigation className="fixed top-8 right-8 z-50 hidden md:block" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
