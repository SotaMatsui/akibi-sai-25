import { Heading } from "@/components/headings/heading";
import { ImagesCarousel } from "@/components/image_viewers/image_carousel";
import { client } from "@/lib/microcms";
import type { MicroCMSImage } from "microcms-js-sdk";

export default async function ExhibitionsPage() {
  const constants = await client.get({
    endpoint: "constants",
  });
  const exhibitions = await client.getList({
    endpoint: "exhibitions",
  });
  if (!constants || !exhibitions) {
    return <p>設定が正しく行われていません</p>;
  }
  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <Heading>展示</Heading>
      <section>
        <ImagesCarousel images={constants.exhitibition_map_img} zoomable />
      </section>
      <section className="w-full flex flex-col items-center *:not-last:border-b *:border-foreground">
        {exhibitions.contents.map(
          (
            exhibition: {
              display_id: number;
              title: string;
              images: MicroCMSImage[];
              description: string;
            },
            index: number,
          ) => (
            <div
              key={exhibition.display_id + index.toString()}
              className="w-full flex flex-col items-center gap-4 py-4"
            >
              <div className="w-full flex flex-col items-center">
                <p className="font-bold text-lg tabular-nums aspect-square rounded-full text-center translate-y-3">
                  {String(exhibition.display_id).padStart(2, "0")}
                </p>
                <div className="flex justify-center gap-4">
                  <div className="w-4 border-t border-l border-b border-foreground" />
                  <p className="text-2xl font-semibold font-serif py-2">
                    {exhibition.title}
                  </p>
                  <div className="w-4 border-t border-r border-b border-foreground" />
                </div>
              </div>
              <ImagesCarousel images={exhibition.images} />
              <p>{exhibition.description}</p>
            </div>
          ),
        )}
      </section>
    </div>
  );
}
