import { Heading } from "@/components/headings/heading";
import { client } from "@/lib/microcms";
import type { MicroCMSImage } from "microcms-js-sdk";
import Image from "next/image";

const hasSponsors = (data: object): data is { sponsors: MicroCMSImage[] } => {
  return (
    "sponsors" in data &&
    Array.isArray(data.sponsors) &&
    data.sponsors.length > 0 &&
    "url" in data.sponsors[0]
  );
};

export default async function SponsorPage() {
  const data = await client.get({
    endpoint: "constants",
  });
  if (!data || !hasSponsors(data)) {
    return <p>設定が正しく行われていません</p>;
  }
  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <Heading>協賛企業</Heading>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {data.sponsors.map((sponsor, index) => (
            <div
              key={sponsor.url + index.toString()}
              className="flex items-center"
            >
              <Image
                src={sponsor.url}
                alt={sponsor.alt ?? "スポンサー画像"}
                width={sponsor.width ?? 100}
                height={sponsor.height ?? 100}
                className="h-64 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
