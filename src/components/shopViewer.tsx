"use client";
import { Heading } from "@/components/headings/heading";
import type { Shop } from "@/types/shop";
import Image from "next/image";import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { UtensilsIcon, XCircleIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { ShopIndex } from "@/types/shopIndex";
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

export default function ShopViewer({
  goodsShops,
  foodShops,
  shopIndexes,
}: {
  goodsShops: Shop[];
  foodShops: Shop[];
  shopIndexes: ShopIndex[];
}) {
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  return (
    <div className="xl:flex gap-4">
      <div className="h-screen hidden xl:flex flex-col items-start justify-center sticky top-0">
        <p className="text-[10rem] font-medium font-display">模擬店</p>
        <Image
          src={`/assets/shop_map${
            selectedShop
              ? `_${irohaMap[selectedShop.iroha as keyof typeof irohaMap]}`
              : ""
          }.svg`}
          alt="マップ"
          width={1280}
          height={1024}
          className="w-full h-auto xl:w-[40vw] xl:h-auto"
        />
      </div>
      <p className="xl:hidden text-7xl font-medium font-display py-8">模擬店</p>
      <div className="flex flex-col items-start gap-16 py-8 max-w-xl 2xl:max-w-3xl relative">
        {selectedShop && (
          <div className="hidden xl:block sticky top-0 right-0 z-10 max-w-2xl 2xl:max-w-3xl w-full pt-4">
            <div className="bg-background/50 backdrop-blur-3xl text-foreground rounded-2xl p-8 flex flex-col gap-4 py-4">
              <div className="flex justify-between w-full items-start gap-4">
                <Image
                  src={selectedShop.icon_img?.url ?? "/logo.png"}
                  alt={selectedShop.shop_name}
                  width={256}
                  height={256}
                  className="size-48 object-cover rounded-lg border-2 border-primary-foreground flex-shrink-0"
                />
                <XCircleIcon
                  className="cursor-pointer size-18 stroke-1 opacity-20 hover:opacity-10"
                  onClick={() => setSelectedShop(null)}
                />
              </div>
              <div className="w-full flex flex-col items-start gap-4">
                <p className="text-2xl font-semibold font-serif py-2">
                  {selectedShop.shop_name}
                </p>
                <div className="flex items-center gap-2">
                  <div className="bg-red-500 text-xl font-serif size-8 text-center">
                    {selectedShop.iroha}
                  </div>
                  <p className="font-semibold">
                    {
                      shopIndexes.find(
                        (index) => index.iroha === selectedShop.iroha
                      )?.place
                    }
                  </p>
                </div>
                <p
                  className="font-bold text-md"
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: using private CMS
                  dangerouslySetInnerHTML={{
                    __html: `${selectedShop.long_description.replace(
                      /\n/g,
                      "<br />"
                    )}`,
                  }}
                />
                {selectedShop.menu && (
                  <p
                    className="font-bold text-md"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: using private CMS
                    dangerouslySetInnerHTML={{
                      __html: `${selectedShop.menu.replace(/\n/g, "<br />")}`,
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        )}
        <section className="w-full flex flex-col items-start">
          <div className="w-full flex flex-col items-start">
            <Heading>飲食</Heading>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {foodShops.map((shop, index) => (
              <button
                type="button"
                key={shop.id + index.toString()}
                onClick={() => setSelectedShop(shop)}
                className="transform hover:scale-125 transition duration-75 cursor-pointer"
              >
                <Image
                  src={shop.icon_img?.url ?? "/logo.png"}
                  alt={shop.shop_name}
                  width={256}
                  height={256}
                  className="size-26 xl:size-32 object-cover rounded-lg border-2 border-primary-foreground flex-shrink-0"
                />
              </button>
            ))}
          </div>
        </section>
        <section className="w-full flex flex-col items-start">
          <div className="w-full flex flex-col items-start">
            <Heading>物販</Heading>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {goodsShops.map((shop, index) => (
              <div key={shop.id + index.toString()}>
                <button
                  type="button"
                  onClick={() => setSelectedShop(shop)}
                  className="hidden xl:block transform hover:scale-125 transition duration-75 cursor-pointer"
                >
                  <Image
                    src={shop.icon_img?.url ?? "/logo.png"}
                    alt={shop.shop_name}
                    width={256}
                    height={256}
                    className="size-26 xl:size-32 object-cover rounded-lg border-2 border-primary-foreground flex-shrink-0"
                  />
                </button>
                <Drawer>
                  <DrawerTrigger asChild>
                    <button
                      type="button"
                      onClick={() => setSelectedShop(shop)}
                      className="xl:hidden transform hover:scale-125 transition duration-75 cursor-pointer"
                    >
                      <Image
                        src={shop.icon_img?.url ?? "/logo.png"}
                        alt={shop.shop_name}
                        width={256}
                        height={256}
                        className="size-26 xl:size-32 object-cover rounded-lg border-2 border-primary-foreground flex-shrink-0"
                      />
                    </button>
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
                            <div className="bg-red-500 font-serif size-7 py-1 text-center">
                              {shop.iroha}
                            </div>
                            <p className="font-semibold">
                              {
                                shopIndexes.find(
                                  (index) => index.iroha === shop.iroha
                                )?.place
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-col items-start gap-4">
                        <p
                          className="font-bold text-md"
                          // biome-ignore lint/security/noDangerouslySetInnerHtml: using private CMS
                          dangerouslySetInnerHTML={{
                            __html: `${shop.long_description.replace(
                              /\n/g,
                              "<br />"
                            )}`,
                          }}
                        />
                        {shop.menu && (
                          <p
                            className="font-bold text-md"
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
