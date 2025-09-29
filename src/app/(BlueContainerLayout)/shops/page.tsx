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
    <div className="flex gap-32">
      <div className="h-screen flex items-center sticky top-0">
        <p className="text-[10rem] font-medium font-display">模擬店</p>
      </div>
      <div className="flex flex-col items-start gap-16 py-8 max-w-3xl">
        <section>
          <ImagesCarousel
            images={constants.exhitibition_map_img}
            zoomable
            variant="primary"
          />
        </section>
        <section className="w-full flex flex-col items-start">
          <div className="w-full flex flex-col items-start">
            <Heading>物販</Heading>
          </div>
          {goodsShops.map((shop, index) => (
            <div
              key={shop.id + index.toString()}
              className="w-full flex flex-col items-start gap-4 py-4"
            >
              <div className="flex justify-center gap-4">
                <div className="w-4 border-t-2 border-l-2 border-b-2 border-primary-foreground" />
                <p className="text-2xl font-semibold font-serif py-2">
                  {shop.shop_name}
                </p>
                <div className="w-4 border-t-2 border-r-2 border-b-2 border-primary-foreground" />
              </div>
              <p
                className="font-bold text-lg"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: using private CMS
                dangerouslySetInnerHTML={{
                  __html: `${shop.short_description.replace(/\n/g, "<br />")}`,
                }}
              />
            </div>
          ))}
        </section>
        <section className="w-full flex flex-col items-start">
          <div className="w-full flex flex-col items-start">
            <Heading>飲食</Heading>
          </div>
          {foodShops.map((shop, index) => (
            <div
              key={shop.id + index.toString()}
              className="w-full flex flex-col items-start gap-4 py-4"
            >
              <div className="flex justify-center gap-4">
                <div className="w-4 border-t-2 border-l-2 border-b-2 border-primary-foreground" />
                <p className="text-2xl font-semibold font-serif py-2">
                  {shop.shop_name}
                </p>
                <div className="w-4 border-t-2 border-r-2 border-b-2 border-primary-foreground" />
              </div>
              <p
                className="font-bold text-lg"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: using private CMS
                dangerouslySetInnerHTML={{
                  __html: `${shop.short_description.replace(/\n/g, "<br />")}`,
                }}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
