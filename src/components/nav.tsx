"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { Button } from "./ui/button";

function MenuSheetContent({className, onPageTransition, onClose}: {className?: string; onPageTransition?: () => void; onClose?: () => void}) {
  return (
    <div
      className={`fixed w-full h-screen top-0 left-0 border-0 bg-popover/90 text-popover-foreground transition duration-500 ${className}`}
    >
      <XIcon
        className="absolute top-8 right-8 size-8 stroke-1 hover:opacity-50"
        onClick={onClose}
      />
      <ul className="flex flex-col gap-4 pt-16 pb-8 px-8 font-bold text-sm">
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
          <Link
            href="/"
            className="hover:opacity-50"
            onClick={onPageTransition}
          >
            トップ (開催概要)
          </Link>
        </li>
        <div className="flex flex-col gap-4 ml-2 pl-4 mb-2 pb-4 border-l-2 border-b-2 border-popover-foreground rounded-bl-lg">
          <li>
            <Link
              href="/#head-message"
              className="hover:opacity-50"
              onClick={onPageTransition}
            >
              ごあいさつ
            </Link>
          </li>
          <li>
            <Link
              href="/#theme"
              className="hover:opacity-50"
              onClick={onPageTransition}
            >
              2025年度テーマ「異世界のお祭り」
            </Link>
          </li>
          <li>
            <Link
              href="/#access"
              className="hover:opacity-50"
              onClick={onPageTransition}
            >
              アクセス
            </Link>
          </li>
        </div>
        <li>
          <Link
            href="/maps"
            className="hover:opacity-50"
            onClick={onPageTransition}
          >
            マップ
          </Link>
        </li>
        <li>
          <Link
            href="/schedules"
            className="hover:opacity-50"
            onClick={onPageTransition}
          >
            イベントスケジュール
          </Link>
        </li>
        <li>
          <Link
            href="/shops"
            className="hover:opacity-50"
            onClick={onPageTransition}
          >
            模擬店
          </Link>
        </li>
        <li>
          <Link
            href="/exhibitions"
            className="hover:opacity-50"
            onClick={onPageTransition}
          >
            展示
          </Link>
        </li>
        <li>
          <Link
            href="/sponsors"
            className="hover:opacity-50"
            onClick={onPageTransition}
          >
            協賛
          </Link>
        </li>
      </ul>
    </div>
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
  const [isOpen, setIsOpen] = useState(false);
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
      <Button variant="ghost" className="p-2" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </Button>
      <MenuSheetContent
        className={isOpen ? "opacity-100 backdrop-blur-md" : "opacity-0 pointer-events-none"}
        onPageTransition={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
      />
    </nav>
  );
}

export { Navigation, MobileNavigation };
