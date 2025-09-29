"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function YellowContainer({
  children,
  className,
  id,
}: {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}) {
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
        },
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
        },
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
        },
      );
    },
    { scope: scope },
  );
  return (
    <section
      className={`w-full text-tertiary-foreground flex flex-col items-center justify-center mx-auto relative ${className}`}
      id={id}
      ref={scope}
    >
      {children}
      <div className="bg-tertiary fixed top-0 h-full max-h-screen w-full -z-10 overflow-hidden">
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
          className="gsap-sm absolute right-0 top-0 w-[40%] md:w-[10%] -z-10 translate-x-[18%] md:translate-x-[-120%] translate-y-[40%] rotate-180"
        />
        <Image
          src="/assets/sparkles.svg"
          alt="テーマイラスト"
          width={200}
          height={200}
          className="gsap-md absolute right-0 top-[20%] w-[40%] md:w-[10%] -z-10 translate-x-[18%] md:translate-x-[-320%] translate-y-[40%] rotate-180"
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
          className="gsap-lg absolute left-0 bottom-0 w-[25%] md:w-[10%] -z-10 translate-x-[30%] md:translate-x-[140%] -translate-y-[60%]"
        />
      </div>
    </section>
  );
}

export { YellowContainer };
