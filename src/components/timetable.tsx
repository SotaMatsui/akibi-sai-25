import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Schedule } from "@/types/schedule";
import { MapPinIcon } from "lucide-react";

const tableColors = [
  "bg-rose-400",
  "bg-orange-400",
  "bg-green-600",
  "bg-cyan-600",
  "bg-violet-400",
  "bg-pink-400",
];

const timeLabels = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

export default async function TimeTable({ events }: { events: Schedule[] }) {
  const eventPlaces = Array.from(new Set(events.map((event) => event.place)));
  return (
    <div className="flex flex-col items-start gap-2">
      <section
        style={{
          gridTemplateColumns: `3rem repeat(${eventPlaces.length}, minmax(0, 1fr))`,
        }}
        className="max-h-[80vh] w-full mx-auto max-w-5xl grid gap-x-0.5"
      >
        {eventPlaces.map((place, index) => {
          return (
            <div
              key={place + index.toString()}
              style={{
                gridColumnStart: index + 2,
                gridColumnEnd: index + 3,
              }}
              className={`text-center text-xs font-bold rounded text-white flex items-center justify-center p-2 ${
                tableColors[index % tableColors.length]
              }`}
            >
              {place}
            </div>
          );
        })}
      </section>
      <section
        style={{
          gridTemplateColumns: `3rem repeat(${eventPlaces.length}, minmax(0, 1fr))`,
        }}
        className="max-h-[80vh] w-full mx-auto max-w-5xl grid gap-x-0.5 grid-rows-14"
      >
        {timeLabels.map((timeLabel, index) => {
          return (
            <div
              key={timeLabel + index.toString()}
              style={{
                gridRowStart: index + 1,
                gridRowEnd: index + 2,
                gridColumnStart: 1,
                gridColumnEnd: 2,
              }}
              className="odd:*:font-bold -translate-y-1/2 flex items-center justify-end"
            >
              <p className="text-xs text-end px-2">{timeLabel}</p>
            </div>
          );
        })}
        {timeLabels.map((timeLabel, index) => {
          return (
            <div
              key={timeLabel + index.toString()}
              style={{
                gridRowStart: index + 1,
                gridRowEnd: index + 2,
                gridColumnStart: 2,
                gridColumnEnd: eventPlaces.length + 2,
              }}
              className="border-t-[1px] even:border-t-[2px] border-primary-foreground"
            />
          );
        })}
        {events.map((event, index) => {
          const placeIndex = eventPlaces.indexOf(event.place);
          return (
            <Dialog key={event.id + index.toString()}>
              <DialogTrigger asChild>
                <div
                  style={{
                    gridRowStart: event.timing_start + 1,
                    gridRowEnd: event.timing_end + 1,
                    gridColumnStart: placeIndex + 2,
                    gridColumnEnd: placeIndex + 3,
                  }}
                  className={`text-center text-xs font-bold my-0.5 rounded text-white flex items-center justify-center p-2 cursor-pointer hover:brightness-90 ${
                    tableColors[placeIndex % tableColors.length]
                  }`}
                >
                  {event.name}
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-serif text-3xl flex items-center gap-4">
                    <p>{event.name}</p>
                  </DialogTitle>
                  <DialogDescription>{event.organization}</DialogDescription>
                </DialogHeader>
                <p
                  className="text-sm font-bold"
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: using private CMS
                  dangerouslySetInnerHTML={{
                    __html: `${event.description.replace(/\n/g, "<br />")}`,
                  }}
                />
                {event.place && (
                  <div className="flex items-center gap-2">
                    <MapPinIcon />
                    <p>{event.place}</p>
                  </div>
                )}
                <ul className="space-y-2">
                  {event.days.map((day, dayIndex) => (
                    <li
                      key={day + dayIndex.toString()}
                      className="flex items-center gap-2"
                    >
                      <Badge>{day}日目</Badge>
                      <p className="text-sm font-bold">{`${
                        timeLabels[event.timing_start]
                      } 〜 ${timeLabels[event.timing_end]}`}</p>
                    </li>
                  ))}
                </ul>
              </DialogContent>
            </Dialog>
          );
        })}
      </section>
    </div>
  );
}
