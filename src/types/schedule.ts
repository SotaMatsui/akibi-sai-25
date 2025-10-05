export type Schedule = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  organization: string;
  name: string;
  place: string;
  description: string;
  days: Array<"1" | "2">;
  timing_start: number;
  timing_end: number;
}
