import { Heading } from "@/components/headings/heading";
import { ImagesCarousel } from "@/components/image_viewers/image_carousel";
import { client } from "@/lib/microcms";

export default async function MapPage() {
  const constants = await client.get({
    endpoint: "constants",
  });
  if (!constants) {
    return <p>設定が正しく行われていません</p>;
  }
  return (
    <div className="flex gap-32">
      <div className="h-screen flex items-center sticky top-0">
        <p className="text-[10rem] font-medium font-display">マップ</p>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center gap-16 py-8 max-w-3xl">
        <section>
          <ImagesCarousel
            images={constants.map_img}
            zoomable
            variant="tertiary"
          />
        </section>
      </div>
    </div>
  );
}
