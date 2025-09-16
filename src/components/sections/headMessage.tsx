import { client } from "@/lib/microcms";
import { Heading } from "../headings/heading";
import Image from "next/image";

export default async function HeadMessageSection({
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
    <section
      className={`w-full min-h-screen flex flex-col items-center justify-center mx-auto py-32 overflow-hidden relative bg-primary ${className}`}
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
      <div className="absolute top-0 w-full h-32 clip-wave-b bg-[#e7f5f8]" />
      <div className="absolute bottom-0 w-full h-32 clip-wave-t bg-[#e7f5f8]" />
      <Image
        src="/assets/dot-pattern-yellow.svg"
        alt="テーマイラスト"
        width={300}
        height={300}
        className="absolute right-0 top-0 w-[100%] md:w-auto md:h-[120%] translate-x-[5%] -translate-y-[8%]"
      />
      <Image
        src="/assets/dot-pattern-yellow.svg"
        alt="テーマイラスト"
        width={300}
        height={300}
        className="hidden md:block rotate-180 absolute left-0 bottom-0 w-[50%] md:w-auto md:h-[120%] -translate-x-[5%] translate-y-[8%]"
      />
      <Image
        src="/assets/dot-pattern-red.svg"
        alt="テーマイラスト"
        width={300}
        height={300}
        className="hidden md:block absolute left-0 top-0 w-[70%] md:w-auto md:h-[50%] rotate-180 -translate-x-[1%]"
      />
      <Image
        src="/assets/dot-pattern-red.svg"
        alt="テーマイラスト"
        width={300}
        height={300}
        className="absolute left-0 md:left-auto md:right-0 bottom-0 w-[70%] md:w-auto md:h-[50%] -scale-x-100 md:scale-x-100"
      />
    </section>
  );
}
