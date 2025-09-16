import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { MicroCMSImage } from "microcms-js-sdk";
import Image from "next/image";
import { ZoomImage } from "./zoom_image";

function ImagesCarousel({
  images,
  zoomable = false,
}: {
  images: MicroCMSImage[];
  zoomable?: boolean;
}) {
  return (
    <Carousel
      opts={{ loop: true }}
      className="flex flex-col items-center border border-foreground"
    >
      <CarouselContent>
        {images.map((image: MicroCMSImage, index: number) => (
          <CarouselItem key={image.url}>
            <div className="flex flex-col items-center">
              {zoomable ? (
                <ZoomImage image={image} />
              ) : (
                <Image
                  src={image.url}
                  alt={image.alt || `Exhibition Image ${index + 1}`}
                  className="w-full h-auto max-h-96 object-contain"
                  width={image.width}
                  height={image.height}
                />
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="w-full flex border-t border-foreground">
        <CarouselPrevious className="static translate-none rounded-none border-none hover:bg-foreground" />
        <div className="col-start-2 row-span-5 row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--foreground)] max-lg:hidden grow" />
        <CarouselNext className="static translate-none rounded-none border-none hover:bg-foreground" />
      </div>
    </Carousel>
  );
}

export { ImagesCarousel };
