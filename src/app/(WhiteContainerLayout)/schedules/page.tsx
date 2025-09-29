import { Heading } from "@/components/headings/heading";
import { ImagesCarousel } from "@/components/image_viewers/image_carousel";
import { client } from "@/lib/microcms";
import type { MicroCMSImage } from "microcms-js-sdk";

const hasScheduleImages = (
  data: object,
): data is { timeschedule_img: MicroCMSImage[] } => {
  return (
    "timeschedule_img" in data &&
    Array.isArray(data.timeschedule_img) &&
    data.timeschedule_img.length > 0 &&
    "url" in data.timeschedule_img[0]
  );
};

export default async function SchedulePage() {
  const constants = await client.get({
    endpoint: "constants",
  });
  if (!constants || !hasScheduleImages(constants)) {
    return <p>設定が正しく行われていません</p>;
  }
  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <Heading>タイムスケジュール</Heading>
      <section>
        <ImagesCarousel
          images={constants.timeschedule_img}
          zoomable
          variant="white"
        />
      </section>
    </div>
  );
}
