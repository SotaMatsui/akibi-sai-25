import { client } from "@/lib/microcms";
import type { MicroCMSImage } from "microcms-js-sdk";
import Image from "next/image";
import Link from "next/link";

const hasSponsors = (data: object): data is { sponsors: MicroCMSImage[] } => {
  return (
    "sponsors" in data &&
    Array.isArray(data.sponsors) &&
    data.sponsors.length > 0 &&
    "url" in data.sponsors[0]
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
    <footer className="w-full text-center text-foreground bg-gray-800">
      <section className="bg-gray-700 py-8 space-y-4">
        <h2 className="text-md font-bold font-serif">協賛</h2>
        <div className="mx-auto max-w-5xl w-full flex flex-wrap justify-center items-center gap-8">
          {data.sponsors.map((sponsor, index) => (
            <Image
              key={sponsor.url + index.toString()}
              src={sponsor.url}
              alt={sponsor.alt ?? "スポンサー画像"}
              width={sponsor.width ?? 100}
              height={sponsor.height ?? 100}
              className="h-32 w-auto"
            />
          ))}
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row gap-8 justify-between items-start text-start font-bold text-sm [&_a]:pb-1 [&_a]:border-foreground [&_a:hover]:border-b-2 px-8">
          <Image src="/logo.png" alt="Logo" width={64} height={64} />
          <ul className="space-y-4">
            <li>
              <Link href="/">トップ (開催概要)</Link>
            </li>
            <div className="flex flex-col gap-4 pl-4 border-l-2 border-foreground">
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
              <Link href="/events">イベント</Link>
            </li>
          </ul>
          <ul className="space-y-4">
            <li>
              <Link href="/schedules">タイムスケジュール</Link>
            </li>
            <li>
              <Link href="/maps">マップ</Link>
            </li>
            <li>
              <Link href="/sponsors">協賛</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-8">
        <p className="font-serif">&copy; 2025年度あきび祭実行委員会</p>
      </section>
    </footer>
  );
}

export default Footer;
