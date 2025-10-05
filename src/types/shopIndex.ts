import type { MicroCMSImage } from "microcms-js-sdk";

export type ShopIndex = {
  id: string;
  iroha: string;
  place: string;
  map_img?: MicroCMSImage;
}