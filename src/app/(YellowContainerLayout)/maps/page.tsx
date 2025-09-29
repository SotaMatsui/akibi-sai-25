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
    <div className="flex flex-col items-center gap-8 py-8">
      <Heading>マップ</Heading>
      <section>
        <ImagesCarousel
          images={constants.map_img}
          zoomable
          variant="tertiary"
        />
      </section>
    </div>
  );
}
