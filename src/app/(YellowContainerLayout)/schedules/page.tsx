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
  const events = await client.getList({
    endpoint: "events",
  });
  if (!constants || !hasScheduleImages(constants) || !events) {
    return <p>設定が正しく行われていません</p>;
  }
  return (
    <div className="xl:flex gap-32">
      <div className="h-screen hidden xl:flex items-center sticky top-0">
        <p className="text-[6rem] leading-[6rem] font-medium font-display">
          イベント
          <br />
          スケジュール
        </p>
      </div>
      <p className="xl:hidden text-5xl font-medium font-display py-8">
        イベント
        <br />
        スケジュール
      </p>
      <div className="flex flex-col items-start gap-16 py-8 max-w-3xl">
        <section>
          <ImagesCarousel
            images={constants.timeschedule_img}
            zoomable
            variant="white"
          />
        </section>
        <section className="w-full mx-auto max-w-5xl flex flex-col items-center gap-16">
          {events.contents.map(
            (
              event: {
                id: string;
                organization: string;
                name: string;
                description: string;
              },
              index: number,
            ) => (
              <div
                key={event.id + index.toString()}
                className="w-full flex flex-col items-start gap-4 py-4"
              >
                <div className="w-full flex flex-col items-start">
                  <div className="flex justify-center gap-4 relative">
                    <div className="w-4 border-t-2 border-l-2 border-b-2 border-tertiary-foreground" />
                    <p className="absolute top-0 w-full font-bold text-lg tabular-nums rounded-full text-center -translate-y-5">
                      {String(index).padStart(2, "0")}
                    </p>
                    <p className="text-2xl font-semibold font-serif py-2">
                      {event.name}
                    </p>
                    <div className="w-4 border-t-2 border-r-2 border-b-2 border-tertiary-foreground" />
                  </div>
                </div>
                <p
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: using private CMS
                  dangerouslySetInnerHTML={{
                    __html: `${event.description.replace(/\n/g, "<br />")}`,
                  }}
                  className="font-bold text-lg"
                />
              </div>
            ),
          )}
        </section>
      </div>
    </div>
  );
}
