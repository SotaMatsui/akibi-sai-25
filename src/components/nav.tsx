"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function MenuSheetContent() {
  return (
    <SheetContent className="rounded-l-3xl border-0 bg-popover text-popover-foreground">
      <SheetTitle className="font-bold text-lg mb-4 sr-only">
        あきび祭2025
      </SheetTitle>
      <ul className="flex flex-col gap-4 pt-4 pb-8 px-8 font-bold text-sm">
        <div className="w-full flex items-center justify-center py-8 pr-8">
          <Image src="/logo.png" alt="Logo" width={64} height={64} />
          <Image
            src="/text-logo-white.svg"
            alt="Logo"
            width={128}
            height={48}
          />
        </div>
        <li>
          <Link href="/" className="hover:opacity-50">
            トップ (開催概要)
          </Link>
        </li>
        <div className="flex flex-col gap-4 ml-2 pl-4 mb-2 pb-4 border-l-2 border-b-2 border-popover-foreground rounded-bl-lg">
          <li>
            <Link href="/#head-message" className="hover:opacity-50">
              ごあいさつ
            </Link>
          </li>
          <li>
            <Link href="/#theme" className="hover:opacity-50">
              2025年度テーマ「異世界のお祭り」
            </Link>
          </li>
          <li>
            <Link href="/#access" className="hover:opacity-50">
              アクセス
            </Link>
          </li>
        </div>
        <li>
          <Link href="/maps" className="hover:opacity-50">
            マップ
          </Link>
        </li>
        <li>
          <Link href="/schedules" className="hover:opacity-50">
            イベントスケジュール
          </Link>
        </li>
        <li>
          <Link href="/shops" className="hover:opacity-50">
            模擬店
          </Link>
        </li>
        <li>
          <Link href="/exhibitions" className="hover:opacity-50">
            展示
          </Link>
        </li>
        <li>
          <Link href="/sponsors" className="hover:opacity-50">
            協賛
          </Link>
        </li>
      </ul>
    </SheetContent>
  );
}
function Navigation({
  className,
  background,
  initiallyTransparent = false,
}: {
  className?: string;
  background: string;
  initiallyTransparent?: boolean;
}) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-pin",
        {
          background: initiallyTransparent
            ? "rgba(231, 42, 41, 0)"
            : background,
        },
        {
          background: background,
          duration: 0.1,
          scrollTrigger: {
            trigger: ".gsap-pin",
            start: "bottom bottom",
            toggleActions: "play none none reset",
          },
        },
      );
    },
    { scope: scope },
  );
  return (
    <div
      className={`sticky bottom-0 w-full z-50 hidden md:block text-foreground ${className}`}
      ref={scope}
    >
      <div className="gsap-pin flex justify-between w-full gap-8 p-4">
        <div className="flex items-center gap-4"></div>
        <ul className="flex items-center gap-8 px-8 font-display text-lg">
          <li>
            <Link href="/" className="hover:opacity-50">
              トップ
            </Link>
          </li>
          <li>
            <Link href="/maps" className="hover:opacity-50">
              マップ
            </Link>
          </li>
          <li>
            <Link href="/schedules" className="hover:opacity-50">
              イベントスケジュール
            </Link>
          </li>
          <li>
            <Link href="/shops" className="hover:opacity-50">
              模擬店
            </Link>
          </li>
          <li>
            <Link href="/exhibitions" className="hover:opacity-50">
              展示
            </Link>
          </li>
          <li>
            <Link href="/sponsors" className="hover:opacity-50">
              協賛
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function MobileNavigation({ className }: { className?: string }) {
  return (
    <nav
      className={`flex justify-between items-center gap-4 bg-foreground text-background rounded-xl px-4 font-bold text-sm ${className}`}
    >
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={48}
          height={48}
          className="pb-2"
        />
      </Link>
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent className="bg-foreground">
          <SheetTitle className="font-bold text-lg mb-4 sr-only">
            あきび祭2025
          </SheetTitle>
          <MenuSheetContent />
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export { Navigation, MobileNavigation };
