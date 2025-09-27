'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function AccessSection({ className, id }: { className?: string; id?: string }) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.to(".gsap-horizontal", {
        xPercent: -50,
        scrollTrigger: {
          trigger: ".gsap-horizontal-trigger",
          start: "top top",
          end: "+=1000", //TODO: calculate width
          scrub: true,
          pin: true,
        },
      });
    },
    { scope: scope }
  ); 

  return (
    <div className="w-full" ref={scope}>
      <div
        className={`gsap-horizontal-trigger min-h-screen flex justify-center min-w-0 overflow-x-hidden w-full ${className}`}
        id={id}
      >
        <div className="gsap-horizontal flex items-center justify-center gap-16 pl-16">
          <div className="flex flex-col items-start justify-center">
            <h2 className="text-center font-serif py-4 md:text-2xl xl:text-5xl">
              秋田公立美術大学
            </h2>
            <div className="text-left font-semibold text-lg space-y-2">
              <p>〒010-1632 秋田県秋田市新屋大川町12-3</p>
              <div>
                <p>
                  JR「秋田駅」から羽越本線「新屋駅」下車　新屋駅から徒歩15分
                </p>
                <p>
                  JR「秋田駅」から秋田中央交通バス
                  新屋線「美術大学前」下車　徒歩1分
                </p>
              </div>
              <div className="flex items-center -space-x-3">
                <div className="w-96 h-0.5 bg-foreground" />
                <div className="size-4 bg-foreground [clip-path:polygon(0_0,100%_50%,0_100%,30%_50%)]" />
              </div>
            </div>
          </div>
          <div
            className={`text-end gap-2 md:gap-4 text-3xl md:text-5xl xl:text-[16rem] font-medium font-display ${className}`}
          >
            アク
            <br />
            セス
          </div>
          <div className="w-0 min-w-0 ">
            <iframe
              title="秋田公立美術大学へのアクセス"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98252.72287360409!2d140.00848009334052!3d39.68576368169728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8fc39c48cfd6bb%3A0x5fe0cc54f10a8f6a!2sAkita%20University%20of%20Art!5e0!3m2!1sen!2sjp!4v1757680924449!5m2!1sen!2sjp"
              loading="lazy"
              className="w-xl max-w-2xl aspect-[4/3] border-0 rounded-3xl mt-8 z-10"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AccessSection };
