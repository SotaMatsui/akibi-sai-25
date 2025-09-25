"use client";
import type { MicroCMSImage } from "microcms-js-sdk";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";

function SponsorCarousel({ images }: { images: MicroCMSImage[] }) {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[AutoScroll({ speed: 1 })]}
      className="flex flex-col items-center"
    >
      <CarouselContent>
        {images.map((image: MicroCMSImage, index: number) => (
          <CarouselItem
            key={image.url + index.toString()}
            className={`basis-1/${images.length - 1}`}
          >
            <div className="flex flex-col items-center">
              <Image
                src={image.url}
                alt={image.alt ?? "スポンサー画像"}
                width={image.width ?? 100}
                height={image.height ?? 100}
                className="h-32 w-auto"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export { SponsorCarousel };
