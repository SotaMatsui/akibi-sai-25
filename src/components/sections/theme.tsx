import { client } from "@/lib/microcms";
import { Heading } from "../headings/heading";
import Image from "next/image";

export default async function ThemeSection({
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
      className={`w-full min-h-screen flex flex-col items-center justify-center mx-auto py-32 overflow-hidden relative ${className}`}
      id={id}
    >
      <Heading>「異世界のお祭り」</Heading>
      <h2 className="text-center font-black py-4">2025年度テーマ</h2>
      <p
        className="text-left pt-4 px-4 text-sm/8 font-bold max-w-5xl md:*:hidden"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: using private CMS
        dangerouslySetInnerHTML={{
          __html: `${data.theme.replace(/\n/g, "<br />")}`,
        }}
      />
      <Image
        src="/assets/dot-pattern-blue.svg"
        alt="テーマイラスト"
        width={300}
        height={300}
        className="absolute right-0 top-0 w-[50%] md:w-auto md:h-[50%] -z-10 translate-x-[4%] -translate-y-[6%]"
      />
      <Image
        src="/assets/dot-pattern-blue.svg"
        alt="テーマイラスト"
        width={300}
        height={300}
        className="hidden md:block rotate-180 absolute left-0 bottom-0 w-[50%] md:w-auto md:h-[50%] -z-10 -translate-x-[4%] translate-y-[6%]"
      />
      <Image
        src="/assets/three-lines.svg"
        alt="テーマイラスト"
        width={300}
        height={300}
        className="absolute right-0 top-0 w-[80%] md:w-auto md:h-[60%] -z-10 translate-x-[18%] -translate-y-[5%] rotate-180"
      />
      <Image
        src="/assets/sun.svg"
        alt="テーマイラスト"
        width={200}
        height={200}
        className="absolute right-0 top-0 w-[40%] md:w-[10%] -z-10 translate-x-[18%] md:translate-x-[-120%] translate-y-[40%] rotate-180"
      />
      <Image
        src="/assets/sparkles.svg"
        alt="テーマイラスト"
        width={200}
        height={200}
        className="absolute right-0 top-0 w-[40%] md:w-[10%] -z-10 translate-x-[18%] md:translate-x-[-320%] translate-y-[40%] rotate-180"
      />
      <Image
        src="/assets/three-lines.svg"
        alt="テーマイラスト"
        width={300}
        height={300}
        className="absolute left-0 bottom-0 w-[80%] md:w-auto md:h-[60%] -z-10 -translate-x-[18%] translate-y-[5%]"
      />
      <Image
        src="/assets/dot-pattern-red.svg"
        alt="テーマイラスト"
        width={300}
        height={300}
        className="hidden md:block absolute left-0 top-0 w-[70%] md:w-auto md:h-[50%] -z-10 rotate-180 -translate-x-[1%]"
      />
      <Image
        src="/assets/dot-pattern-red.svg"
        alt="テーマイラスト"
        width={300}
        height={300}
        className="absolute left-0 md:left-auto md:right-0 bottom-0 w-[70%] md:w-auto md:h-[50%] -z-10 -scale-x-100 md:scale-x-100"
      />
      <Image
        src="/assets/moon.svg"
        alt="テーマイラスト"
        width={200}
        height={200}
        className="absolute left-0 bottom-0 w-[25%] md:w-[10%] -z-10 translate-x-[30%] md:translate-x-[140%] -translate-y-[60%]"
      />
    </section>
  );
}
