'use client'
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ExhibitionsPage() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-sm",
        {
          yPercent: 0,
        },
        {
          yPercent: -64,
          scrollTrigger: {
            trigger: ".gsap-bg-trigger",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        ".gsap-md",
        {
          yPercent: 0,
        },
        {
          yPercent: -128,
          scrollTrigger: {
            trigger: ".gsap-bg-trigger",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        ".gsap-lg",
        {
          yPercent: 0,
        },
        {
          yPercent: -192,
          scrollTrigger: {
            trigger: ".gsap-bg-trigger",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: scope }
  );

  return (
    <div className="xl:flex gap-32 overflow-hidden">
      <div className="fixed top-0 left-0 h-full max-h-screen w-full overflow-hidden">
        <Image
          src="/characters/ghost_approved.png"
          alt="おばけ"
          width={200}
          height={200}
          className="gsap-sm absolute right-[10%] md:right-auto md:left-[40%] top-[15%] md:top-[20%] w-[40%] md:w-[10%]"
        />
        <Image
          src="/characters/soft_octopus.png"
          alt="ソフトタコ"
          width={200}
          height={200}
          className="gsap-sm absolute right-[5%] bottom-[-15%] w-[60%] md:w-[20%]"
        />
        <Image
          src="/characters/spirit_orb_dance.png"
          alt="精霊玉"
          width={200}
          height={200}
          className="gsap-sm absolute left-[10%] bottom-[20%] w-[20%] md:w-[10%]"
        />
      </div>
      <div className="z-10 h-screen hidden xl:flex items-center sticky top-0">
        <p className="text-[10rem] font-medium font-display">展示</p>
      </div>
      <p className="z-10 relative xl:hidden text-7xl font-medium font-display py-8">
        展示
      </p>
      <div className="z-10 relative xl:min-h-screen flex flex-col items-center justify-center gap-16 py-8 max-w-3xl">
        <section>
          <p className="text-lg font-bold">
            展示に関する詳細は、学生の個人情報保護の観点から当日受付で配布します。
          </p>
        </section>
      </div>
    </div>
  );
}
