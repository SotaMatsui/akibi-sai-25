import { client } from "@/lib/microcms";
import type { Shop } from "@/types/shop";
import ShopViewer from "@/components/shopViewer";
import type { ShopIndex } from "@/types/shopIndex";

export default async function ShopsPage() {
  const shopIndexes = await client.getAllContents<ShopIndex>({
    endpoint: "shop_indexes",
  });
  const allShops = await client.getAllContents<Shop>({
    endpoint: "shops",
  });
  const goodsShops = allShops.filter((shop) => shop.category[0] === "goods");
  const foodShops = allShops.filter((shop) => shop.category[0] === "food");
  if (!shopIndexes || !allShops) {
    return <p>設定が正しく行われていません</p>;
  }
  return (
    <ShopViewer goodsShops={goodsShops} foodShops={foodShops} shopIndexes={shopIndexes} />
  );
}
