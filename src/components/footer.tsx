import { client } from "@/lib/microcms";
import type { MicroCMSImage } from "microcms-js-sdk";
import Image from "next/image";
import Link from "next/link";
import { SponsorCarousel } from "./image_viewers/sponsor_carousel";

const hasSponsors = (
  data: object,
): data is { sponsors_higher: MicroCMSImage[] } => {
  return (
    "sponsors_higher" in data &&
    Array.isArray(data.sponsors_higher) &&
    data.sponsors_higher.length > 0 &&
    "url" in data.sponsors_higher[0]
  );
};

async function Footer() {
  const data = await client.get({
    endpoint: "constants",
  });
  if (!hasSponsors(data)) {
    return null;
  }
  return (
    <footer className="z-10 relative w-full text-center text-popover-foreground bg-slate-950">
      <section className="bg-slate-900 py-8 space-y-4">
        <h2 className="text-md font-bold font-serif">協賛</h2>
        <SponsorCarousel images={data.sponsors_higher} />
      </section>
      <section className="grid gap-16 py-16">
        <div className="mx-auto w-full max-w-5xl flex flex-col md:flex-row gap-8 justify-between items-start text-start font-bold text-sm [&_a]:pb-1 [&_a]:transition-all [&_a:hover]:opacity-50 px-8">
          <Image src="/logo.png" alt="Logo" width={64} height={64} />
          <ul className="space-y-4">
            <li>
              <Link href="/">トップ (開催概要)</Link>
            </li>
            <div className="flex flex-col gap-4 ml-2 pl-4 mb-2 pb-4 border-l-2 border-b-2 border-popover-foreground rounded-bl-lg">
              <li>
                <Link href="/#head-message">ごあいさつ</Link>
              </li>
              <li>
                <Link href="/#theme">2025年度テーマ「異世界のお祭り」</Link>
              </li>
              <li>
                <Link href="/#access">アクセス</Link>
              </li>
            </div>
          </ul>
          <ul className="space-y-4">
            <li>
              <Link href="/exhibitions">展示</Link>
            </li>
            <li>
              <Link href="/shops">模擬店</Link>
            </li>
            <li>
              <Link href="/schedules">イベントスケジュール</Link>
            </li>
          </ul>
          <ul className="space-y-4">
            <li>
              <Link href="/maps">マップ</Link>
            </li>
            <li>
              <Link href="/sponsors">協賛</Link>
            </li>
          </ul>
        </div>
        <p className="font-serif">&copy; 2025年度あきび祭実行委員会</p>
      </section>
      <div className="w-full bg-[oklch(0.96_0.02_80.58)]">
        <section className="flex flex-col items-start md:flex-row md:items-center gap-4 justify-between w-full max-w-7xl mx-auto text-end py-6 px-3">
          <Image src="/winc/logo.svg" alt="Logo" width={160} height={64} />
          <p className="text-end text-sm text-gray-400">
            このウェブサイトは、早稲田大学コンピューター研究会(WINC)との共同プロジェクトとして制作されました。
            <br />
            WINCではサークルや学生団体に対して無償でWebサイトを制作・提供をしています。
            <br />
            詳しくは
            <a href="https://winc.ne.jp" className="underline">
              https://winc.ne.jp
            </a>
            をご覧ください。
          </p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
