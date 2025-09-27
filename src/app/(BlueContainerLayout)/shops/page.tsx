import { Heading } from "@/components/headings/heading";
import { ImagesCarousel } from "@/components/image_viewers/image_carousel";
import { client } from "@/lib/microcms";
import type { Shop } from "@/types/shop";

export default async function ShopsPage() {
  const constants = await client.get({
    endpoint: "constants",
  });
  const allShops = await client.getList<Shop>({
    endpoint: "shops",
  });
  const goodsShops = allShops.contents.filter(
    (shop) => shop.category[0] === "goods",
  );
  const foodShops = allShops.contents.filter(
    (shop) => shop.category[0] === "food",
  );
  if (!constants || !allShops) {
    return <p>設定が正しく行われていません</p>;
  }
  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <Heading>模擬店</Heading>
      <section>
        <ImagesCarousel
          images={constants.exhitibition_map_img}
          zoomable
          variant="primary"
        />
      </section>
      <section className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center">
          <div className="flex justify-center gap-4">
            <div className="w-4 border-t-2 border-l-2 border-b-2 border-primary-foreground" />
            <p className="text-2xl font-semibold font-serif py-2">物販</p>
            <div className="w-4 border-t-2 border-r-2 border-b-2 border-primary-foreground" />
          </div>
        </div>
        {goodsShops.map((shop, index) => (
          <div
            key={shop.id + index.toString()}
            className="w-full flex flex-col items-center gap-4 py-4"
          >
            <h2 className="text-xl font-bold font-serif">{shop.shop_name}</h2>
            <p
              // biome-ignore lint/security/noDangerouslySetInnerHtml: using private CMS
              dangerouslySetInnerHTML={{
                __html: `${shop.short_description.replace(/\n/g, "<br />")}`,
              }}
            />
          </div>
        ))}
      </section>
      <section className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center">
          <div className="flex justify-center gap-4">
            <div className="w-4 border-t border-l border-b border-foreground" />
            <p className="text-2xl font-semibold font-serif py-2">飲食</p>
            <div className="w-4 border-t border-r border-b border-foreground" />
          </div>
        </div>
        {foodShops.map((shop, index) => (
          <div
            key={shop.id + index.toString()}
            className="w-full flex flex-col items-center gap-4 py-4"
          >
            <h2 className="text-xl font-bold font-serif">{shop.shop_name}</h2>
            <p
              // biome-ignore lint/security/noDangerouslySetInnerHtml: using private CMS
              dangerouslySetInnerHTML={{
                __html: `${shop.short_description.replace(/\n/g, "<br />")}`,
              }}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
