'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function ThemeSection({
  className,
  id,
  themeMessage,
}: {
  className?: string;
  id?: string;
  themeMessage: string;
}) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const scope = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".gsap-pin",
        pin: true,
        start: "center center",
        end: "+=450",
      });
    },
    { scope: scope }
  ); 

  return (
    <div className={`pb-96 ${className}`} id={id} ref={scope}>
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="flex gap-16">
          <div className="gsap-pin flex flex-col items-end gap-2 py-2">
            <h2 className="bg-foreground text-background w-fit font-serif font-bold py-4 text-5xl leading-[0.3]">
              2025年度テーマ
            </h2>
            <h1 className="text-end font-display font-medium text-[16rem] leading-none">
              異世界の
              <br />
              お祭り
            </h1>
          </div>
          <div className="min-h-0 h-0">
            <div className="text-left space-y-8 pt-4 px-4 text-lg font-bold max-w-5xl">
              {themeMessage.split("\n").map((line: string, index: number) => (
                <p
                  className="bg-background w-fit"
                  key={line + index.toString()}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ThemeSection };
