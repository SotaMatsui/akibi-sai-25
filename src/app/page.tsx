import { MobileNavigation, Navigation } from "@/components/nav";
import { AccessSection } from "@/components/sections/access";
import { HeadMessageSection } from "@/components/sections/headMessage";
import { ThemeSection } from "@/components/sections/theme";
import { YellowContainer } from "@/components/theme_container/yellowContainer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="md:h-screen w-full md:bg-[url('/characters/background.png')] bg-cover bg-center">
        <div className="relative flex justify-center h-full w-full mt-16 md:mt-0">
          <Image
            src="/main_visual.png"
            alt="餃子ダンス人間"
            width={1543}
            height={2183}
            className="w-full md:h-full md:w-auto"
          />
          <Image
            src="/logotype.svg"
            alt="あきび祭2025ロゴ"
            width={1030 / 2}
            height={1677 / 2}
            className="absolute top-0 right-0 mt-12 mr-4 md:m-16 h-auto max-w-[60vw] drop-shadow-[0_0_8px_white] [--tw-drop-shadow:var(--tw-drop-shadow-size)_var(--tw-drop-shadow-size)]"
          />
        </div>
      </section>
      <div className="">
        <div>
          <div className="fixed top-0 pt-8 pl-8 hidden md:block">
            <Navigation className="w-64" />
          </div>
        </div>
        <div className="md:hidden p-4 fixed w-full top-0 z-10 bg-gradient-to-b via-80% from-background via-transparent to-transparent">
          <MobileNavigation />
        </div>
        <div>
          <YellowContainer className="[&>div]:min-h-screen">
            <ThemeSection id="theme" />
            <HeadMessageSection id="headMessage" />
            <AccessSection id="access" />
          </YellowContainer>
        </div>
      </div>
    </div>
  );
}
