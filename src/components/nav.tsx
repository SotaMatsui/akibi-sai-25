import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Navigation({ className }: { className?: string }) {
  return (
    <ul
      className={`flex flex-col gap-4 bg-foreground text-primary pt-4 pb-8 px-8 font-bold text-sm ${className}`}
    >
      <Image src="/logo.png" alt="Logo" width={64} height={64} />
      <li>
        <Link href="/" className="hover:underline">
          トップ (開催概要)
        </Link>
      </li>
      <div className="flex flex-col gap-4 pl-4 border-l-2 border-primary">
        <li>
          <Link href="/#head-message" className="hover:underline">
            ごあいさつ
          </Link>
        </li>
        <li>
          <Link href="/#theme" className="hover:underline">
            2025年度テーマ「異世界のお祭り」
          </Link>
        </li>
        <li>
          <Link href="/#access" className="hover:underline">
            アクセス
          </Link>
        </li>
      </div>
      <li>
        <Link href="/schedules" className="hover:underline">
          タイムスケジュール
        </Link>
      </li>
      <li>
        <Link href="/maps" className="hover:underline">
          マップ
        </Link>
      </li>
      <li>
        <Link href="/events" className="hover:underline">
          イベント
        </Link>
      </li>
      <li>
        <Link href="/exhibitions" className="hover:underline">
          展示
        </Link>
      </li>
      <li>
        <Link href="/shops" className="hover:underline">
          模擬店
        </Link>
      </li>
      <li>
        <Link href="/sponsors" className="hover:underline">
          協賛
        </Link>
      </li>
    </ul>
  );
}

function MobileNavigation({ className }: { className?: string }) {
  return (
    <nav
      className={`flex justify-between items-center gap-4 bg-foreground text-sky-950 px-4 font-bold text-sm ${className}`}
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
        <SheetContent className="bg-foreground text-sky-950">
          <SheetTitle className="font-bold text-lg mb-4 sr-only">
            あきび祭2025
          </SheetTitle>
          <Navigation />
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export { Navigation, MobileNavigation };
