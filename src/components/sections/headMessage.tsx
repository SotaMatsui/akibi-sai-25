'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function HeadMessageSection({
  className,
  id,
  name,
  message,
}: {
  className?: string;
  id?: string;
  name: string;
  message: string;
}) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-zoom",
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".gsap-trigger",
            start: "top bottom",
            end: "center center",
            scrub: true
          },
        }
      );
    },
    { scope: scope }
  ); 

  return (
    <div className="min-h-screen flex items-center justify-center w-full" ref={scope}>
      <div
        className={`gsap-trigger flex flex-col items-center justify-center w-full ${className}`}
        id={id}
      >
        <div className="gsap-zoom flex flex-col items-center -space-y-28">
          <div className="text-center pr-18 text-3xl md:text-5xl xl:text-[16rem] font-medium font-display bg-gradient-to-b from-foreground to-transparent bg-clip-text text-transparent">
            ごあいさつ
          </div>
          <h2 className="bg-foreground text-background w-fit font-serif font-bold py-4 md:text-2xl xl:text-4xl/[0.5rem]">
            実行委員長 {name}
          </h2>
        </div>
        <p
          className="text-left pt-4 px-4 text-lg/16 font-bold max-w-5xl"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: using private CMS
          dangerouslySetInnerHTML={{
            __html: `${message.replace(/\n/g, "<br />")}`,
          }}
        />
      </div>
    </div>
  );
}

export { HeadMessageSection };
