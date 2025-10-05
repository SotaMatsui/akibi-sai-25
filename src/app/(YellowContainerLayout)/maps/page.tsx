import { client } from "@/lib/microcms";
import Image from "next/image";

export default async function MapPage() {
  const constants = await client.get({
    endpoint: "constants",
  });
  if (!constants) {
    return <p>設定が正しく行われていません</p>;
  }
  return (
    <div className="xl:flex gap-32">
      <div className="h-screen hidden xl:flex items-center sticky top-0">
        <p className="text-[5rem] 2xl:text-[7rem] font-medium font-display">マップ</p>
      </div>
      <p className="xl:hidden text-7xl font-medium font-display py-8">マップ</p>
      <div className="xl:min-h-screen flex flex-col items-center justify-center gap-16 py-8 max-w-5xl">
        <Image
          src="/assets/map.svg"
          alt="マップ"
          width={1280}
          height={1024}
          className="w-full h-auto xl:w-auto xl:min-h-[90vh]"
        />
      </div>
    </div>
  );
}
