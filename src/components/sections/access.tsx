import Image from "next/image";
import { Heading } from "../headings/heading";

export default function AccessSection({
  className,
  id,
}: {
  className?: string;
  id?: string;
}) {
  return (
    <section
      className={`w-full bg-white min-h-screen flex flex-col items-center justify-center mx-auto py-32 overflow-hidden relative ${className}`}
      id={id}
    >
      <Heading>アクセス</Heading>
      <h2 className="text-center font-black py-4">秋田公立美術大学</h2>
      <iframe
        title="秋田公立美術大学へのアクセス"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98252.72287360409!2d140.00848009334052!3d39.68576368169728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8fc39c48cfd6bb%3A0x5fe0cc54f10a8f6a!2sAkita%20University%20of%20Art!5e0!3m2!1sen!2sjp!4v1757680924449!5m2!1sen!2sjp"
        loading="lazy"
        className="w-full aspect-[4/3] border-0 rounded-3xl mt-8 max-w-5xl z-10"
      ></iframe>
      <Image
        src="/assets/dot-pattern-blue.svg"
        alt="テーマイラスト"
        width={300}
        height={300}
        className="absolute right-0 top-0 w-[50%] md:w-auto md:h-[50%] translate-x-[4%] -translate-y-[6%]"
      />
      <Image
        src="/assets/dot-pattern-blue.svg"
        alt="テーマイラスト"
        width={300}
        height={300}
        className="hidden md:block rotate-180 absolute left-0 bottom-0 w-[50%] md:w-auto md:h-[50%] -translate-x-[4%] translate-y-[6%]"
      />
      <Image
        src="/assets/three-lines.svg"
        alt="テーマイラスト"
        width={300}
        height={300}
        className="absolute right-0 top-0 w-[80%] md:w-auto md:h-[60%] translate-x-[18%] -translate-y-[5%] rotate-180"
      />
      <Image
        src="/assets/sun.svg"
        alt="テーマイラスト"
        width={200}
        height={200}
        className="absolute right-0 top-0 w-[40%] md:w-[10%] translate-x-[18%] md:translate-x-[-120%] translate-y-[40%] rotate-180"
      />
      <Image
        src="/assets/sparkles.svg"
        alt="テーマイラスト"
        width={200}
        height={200}
        className="absolute right-0 top-0 w-[40%] md:w-[10%] translate-x-[18%] md:translate-x-[-320%] translate-y-[40%] rotate-180"
      />
      <Image
        src="/assets/three-lines.svg"
        alt="テーマイラスト"
        width={300}
        height={300}
        className="absolute left-0 bottom-0 w-[80%] md:w-auto md:h-[60%] -translate-x-[18%] translate-y-[5%]"
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
      <Image
        src="/assets/moon.svg"
        alt="テーマイラスト"
        width={200}
        height={200}
        className="absolute left-0 bottom-0 w-[25%] md:w-[10%] translate-x-[30%] md:translate-x-[140%] -translate-y-[60%]"
      />
    </section>
  );
}
