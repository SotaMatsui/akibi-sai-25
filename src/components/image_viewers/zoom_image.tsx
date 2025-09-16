"use client";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import type { MicroCMSImage } from "microcms-js-sdk";
import Image from "next/image";

function ZoomImage({ image }: { image: MicroCMSImage }) {
  return (
    <Zoom>
      <Image
        src={image.url}
        alt={image.alt || "Zoomable Image"}
        className="w-full h-auto max-h-[50vh] object-contain"
        width={image.width}
        height={image.height}
      />
    </Zoom>
  );
}

export { ZoomImage };
