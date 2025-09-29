import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { MicroCMSImage } from "microcms-js-sdk";
import Image from "next/image";
import { ZoomImage } from "./zoom_image";

function ImagesCarousel({
  images,
  zoomable = false,
  variant = "white",
}: {
  images: MicroCMSImage[];
  zoomable?: boolean;
  variant?: "white" | "primary" | "secondary" | "tertiary";
}) {
  return (
    <Carousel
      opts={{ loop: true }}
      className={`flex flex-col items-center bg-${variant} rounded-2xl overflow-hidden border-2 border-${variant}-foreground`}
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
    </Carousel>
  );
}

export { ImagesCarousel };
