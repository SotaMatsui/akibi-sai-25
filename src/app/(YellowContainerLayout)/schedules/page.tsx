import TimeTable from "@/components/timetable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { client } from "@/lib/microcms";
import type { Schedule } from "@/types/schedule";

export default async function SchedulePage() {
  const events = await client.getAllContents<Schedule>({
    endpoint: "events",
  });
  return (
    <div className="xl:flex gap-32">
      <div className="h-screen hidden xl:flex items-center sticky top-0">
        <p className="text-[4rem] 2xl:text-[6rem] leading-[4rem] 2xl:leading-[6rem] font-medium font-display text-nowrap">
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
      <div className="flex flex-col items-start justify-center gap-16 py-8 max-w-3xl">
        <Tabs defaultValue="day1">
          <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-2">
            <TabsTrigger value="day1">1日目</TabsTrigger>
            <TabsTrigger value="day2">2日目</TabsTrigger>
          </TabsList>
          <TabsContent value="day1">
            <TimeTable
              events={events.filter((event) => event.days.includes("1"))}
            />
          </TabsContent>
          <TabsContent value="day2">
            <TimeTable
              events={events.filter((event) => event.days.includes("2"))}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
