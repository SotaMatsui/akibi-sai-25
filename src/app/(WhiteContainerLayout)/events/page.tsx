import { Heading } from "@/components/headings/heading";
import { client } from "@/lib/microcms";

export default async function EventsPage() {
  const events = await client.getList({
    endpoint: "events",
  });
  if (!events) {
    return <p>設定が正しく行われていません</p>;
  }
  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <Heading>イベント</Heading>
      <section className="w-full mx-auto max-w-5xl flex flex-col items-center *:not-last:border-b *:border-foreground">
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
              className="w-full flex flex-col items-center gap-4 py-4"
            >
              <div className="w-full flex flex-col items-center">
                <p className="font-bold text-lg tabular-nums aspect-square rounded-full text-center translate-y-3">
                  {String(index).padStart(2, "0")}
                </p>
                <div className="flex justify-center gap-4">
                  <div className="w-4 border-t-2 border-l-2 border-b-2 border-tertiary-foreground" />
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
                className="font-medium"
              />
            </div>
          ),
        )}
      </section>
    </div>
  );
}
