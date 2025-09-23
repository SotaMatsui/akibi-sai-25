import { client } from "@/lib/microcms";
import { Heading } from "../headings/heading";

async function ThemeSection({
  className,
  id,
}: {
  className?: string;
  id?: string;
}) {
  const data = await client.get({
    endpoint: "constants",
  });
  return (
    <div
      className={`flex flex-col items-center justify-center w-full ${className}`}
      id={id}
    >
      <Heading>「異世界のお祭り」</Heading>
      <h2 className="text-center font-serif py-4 md:text-2xl xl:text-4xl">2025年度テーマ</h2>
      <p
        className="text-left pt-4 px-4 text-sm/8 font-bold max-w-5xl md:*:hidden"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: using private CMS
        dangerouslySetInnerHTML={{
          __html: `${data.theme.replace(/\n/g, "<br />")}`,
        }}
      />
    </div>
  );
}

export { ThemeSection };