import type { MicroCMSImage } from "microcms-js-sdk";

export type Shop = {
  category: ["food" | "goods"];
  shop_name: string;
  short_description?: string;
  long_description: string;
  icon_img?: MicroCMSImage;
  menu?: string;
};
