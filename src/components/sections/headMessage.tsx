import { client } from "@/lib/microcms";
import { Heading } from "../headings/heading";

async function HeadMessageSection({
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
      <Heading className="z-10">委員長あいさつ</Heading>
      <h2 className="text-center font-black py-4 z-10">{data.head_name}</h2>
      <p
        className="text-left pt-4 px-4 text-sm/8 font-bold z-10 max-w-5xl md:*:hidden"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: using private CMS
        dangerouslySetInnerHTML={{
          __html: `${data.head_greetings.replace(/\n/g, "<br />")}`,
        }}
      />
    </div>
  );
}

export { HeadMessageSection };