import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import type { ShopIndex } from "@/types/shopIndex";
import type { Shop } from "@/types/shop";
import { DialogTitle } from "./ui/dialog";

const irohaMap = {
  イ: "i",
  ロ: "ro",
  ハ: "ha",
  ニ: "ni",
  ホ: "ho",
  ヘ: "he",
  ト: "to",
  チ: "chi",
  リ: "ri",
  ヌ: "nu",
};

export default function ShopDrawer({
  shop,
  shopIndexes,
  children,
}: {
  shop: Shop;
  shopIndexes: ShopIndex[];
  children: React.ReactNode;
}) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent className="xl:hidden">
        <div className="flex flex-col gap-4 p-8">
          <div className="flex justify-between w-full items-start gap-4">
            <Image
              src={shop.icon_img?.url ?? "/logo.png"}
              alt={shop.shop_name}
              width={256}
              height={256}
              className="size-16 object-cover rounded-lg border-2 border-primary-foreground flex-shrink-0"
            />
            <div className="w-full flex flex-col items-start">
              <DialogTitle className="text-2xl font-semibold font-serif">
                {shop.shop_name}
              </DialogTitle>
              <div className="flex items-center text-sm gap-2">
                <div className="bg-red-500 text-white font-serif size-7 py-1 text-center">
                  {shop.iroha}
                </div>
                <p className="font-semibold">
                  {
                    shopIndexes.find((index) => index.iroha === shop.iroha)
                      ?.place
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start gap-4">
            <p
              className="font-medium text-sm"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: using private CMS
              dangerouslySetInnerHTML={{
                __html: `${shop.long_description.replace(/\n/g, "<br />")}`,
              }}
            />
            {shop.menu && (
              <p
                className="font-medium text-sm"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: using private CMS
                dangerouslySetInnerHTML={{
                  __html: `${shop.menu.replace(/\n/g, "<br />")}`,
                }}
              />
            )}
          </div>
          <Image
            src={`/assets/shop_map_${
              irohaMap[shop.iroha as keyof typeof irohaMap]
            }.svg`}
            alt="マップ"
            width={1280}
            height={1024}
            className="w-full h-auto xl:w-[40vw] xl:h-auto"
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
