import { Heading } from "@/components/headings/heading";
import { ImagesCarousel } from "@/components/image_viewers/image_carousel";
import { client } from "@/lib/microcms";
import type { Shop } from "@/types/shop";
import Image from "next/image";

export default async function ShopsPage() {
  const constants = await client.get({
    endpoint: "constants",
  });
  const allShops = await client.getAllContents<Shop>({
    endpoint: "shops",
  });
  const goodsShops = allShops.filter(
    (shop) => shop.category[0] === "goods",
  );
  const foodShops = allShops.filter(
    (shop) => shop.category[0] === "food",
  );
  if (!constants || !allShops) {
    return <p>設定が正しく行われていません</p>;
  }
  return (
    <div className="xl:flex gap-32">
      <div className="h-screen hidden xl:flex items-center sticky top-0">
        <p className="text-[10rem] font-medium font-display">模擬店</p>
      </div>
      <p className="xl:hidden text-7xl font-medium font-display py-8">模擬店</p>
      <div className="flex flex-col items-start gap-16 py-8 max-w-3xl">
        <section>
          <ImagesCarousel
            images={constants.shop_map_img}
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
              className="flex flex-col xl:flex-row gap-4 py-4"
              key={shop.id + index.toString()}
            >
              <Image
                src={shop.icon_img?.url ?? "/logo.png"}
                alt={shop.shop_name}
                width={256}
                height={256}
                className="size-32 object-cover rounded-lg border-2 border-primary-foreground flex-shrink-0"
              />
              <div className="w-full flex flex-col items-start gap-4">
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
                    __html: `${shop.long_description.replace(/\n/g, "<br />")}`,
                  }}
                />
              </div>
            </div>
          ))}
        </section>
        <section className="w-full flex flex-col items-start">
          <div className="w-full flex flex-col items-start">
            <Heading>飲食</Heading>
          </div>
          {foodShops.map((shop, index) => (
            <div
              className="flex flex-col xl:flex-row gap-4 py-4"
              key={shop.id + index.toString()}
            >
              <Image
                src={shop.icon_img?.url ?? "/logo.png"}
                alt={shop.shop_name}
                width={64}
                height={64}
                className="size-32 object-cover rounded-lg border-2 border-primary-foreground flex-shrink-0"
              />
              <div className="w-full flex flex-col items-start gap-4">
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
                    __html: `${shop.long_description.replace(/\n/g, "<br />")}`,
                  }}
                />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
