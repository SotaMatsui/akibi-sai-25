import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function MenuSheetContent() {
  return (
    <SheetContent className="rounded-l-3xl border-0 bg-foreground text-primary">
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
        <div className="flex flex-col gap-4 ml-2 pl-4 mb-2 pb-4 border-l-2 border-b-2 border-primary rounded-bl-lg">
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
          <Link href="/schedules" className="hover:opacity-50">
            タイムスケジュール
          </Link>
        </li>
        <li>
          <Link href="/maps" className="hover:opacity-50">
            マップ
          </Link>
        </li>
        <li>
          <Link href="/events" className="hover:opacity-50">
            イベント
          </Link>
        </li>
        <li>
          <Link href="/exhibitions" className="hover:opacity-50">
            展示
          </Link>
        </li>
        <li>
          <Link href="/shops" className="hover:opacity-50">
            模擬店
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
function Navigation({ className }: { className?: string }) {
  return (
    <div
      className={`flex flex-col gap-8 bg-foreground text-background p-4 rounded-lg ${className}`}
    >
      <Image src="/logo.png" alt="Logo" width={64} height={64} />
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="size-16 p-4 stroke-2" />
        </SheetTrigger>
        <MenuSheetContent />
      </Sheet>
    </div>
  );
}

function MobileNavigation({ className }: { className?: string }) {
  return (
    <nav
      className={`flex justify-between items-center gap-4 bg-foreground text-primary rounded-xl px-4 font-bold text-sm ${className}`}
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
