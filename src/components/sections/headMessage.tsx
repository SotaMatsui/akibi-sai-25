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
      <Heading>委員長あいさつ</Heading>
      <h2 className="text-center font-serif py-4 md:text-2xl xl:text-4xl">
        {data.head_name}
      </h2>
      <p
        className="text-left pt-4 px-4 text-sm/8 font-bold max-w-5xl md:*:hidden"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: using private CMS
        dangerouslySetInnerHTML={{
          __html: `${data.head_greetings.replace(/\n/g, "<br />")}`,
        }}
      />
    </div>
  );
}

export { HeadMessageSection };