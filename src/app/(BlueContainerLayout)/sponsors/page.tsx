import { Heading } from "@/components/headings/heading";
import { client } from "@/lib/microcms";
import type { MicroCMSImage } from "microcms-js-sdk";
import Image from "next/image";

const hasSponsors = (
  data: object,
): data is {
  sponsors_higher: MicroCMSImage[];
  sponsors_normal: MicroCMSImage[];
} => {
  return (
    "sponsors_higher" in data &&
    "sponsors_normal" in data &&
    Array.isArray(data.sponsors_higher) &&
    Array.isArray(data.sponsors_normal) &&
    data.sponsors_higher.length > 0 &&
    data.sponsors_normal.length > 0 &&
    "url" in data.sponsors_higher[0] &&
    "url" in data.sponsors_normal[0]
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
    <div className="xl:flex gap-32">
      <div className="grow h-screen hidden xl:flex items-center sticky top-0">
        <p className="text-[10rem] text-nowrap font-medium font-display">
          協賛
        </p>
      </div>
      <p className="xl:hidden text-7xl font-medium font-display py-8">協賛</p>
      <section>
        <div className="flex flex-wrap gap-4 max-w-[67rem]">
          {[...data.sponsors_higher, ...data.sponsors_normal].map(
            (sponsor, index) => (
              <div
                key={sponsor.url + index.toString()}
                className="flex items-center"
              >
                <Image
                  src={sponsor.url}
                  alt={sponsor.alt ?? "スポンサー画像"}
                  width={sponsor.width ?? 100}
                  height={sponsor.height ?? 100}
                  className="h-32 xl:h-64 w-auto"
                />
              </div>
            ),
          )}
        </div>
      </section>
    </div>
  );
}
