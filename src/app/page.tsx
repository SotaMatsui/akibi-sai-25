import { MobileNavigation, Navigation } from "@/components/nav";
import { AccessSection } from "@/components/sections/access";
import { HeadMessageSection } from "@/components/sections/headMessage";
import { ThemeSection } from "@/components/sections/theme";
import { YellowContainer } from "@/components/theme_container/yellowContainer";
import { client } from "@/lib/microcms";
import Image from "next/image";

export default async function Home() {
  const constants = await client.get({
    endpoint: "constants",
  });
  return (
    <>
      <div className="md:hidden p-4 sticky w-full top-0 z-50 bg-gradient-to-b via-80% from-background via-transparent to-transparent">
        <MobileNavigation />
      </div>
      <section className="gsap-bg-trigger md:h-screen w-full">
        <div className="relative flex justify-start h-full w-full">
          <div className="w-full md:w-auto md:h-full p-4">
            <div className="w-full md:w-auto md:h-full rounded-4xl overflow-hidden">
              <Image
                src="/main_visual.png"
                alt="あきび祭2025メインビジュアル"
                width={1543}
                height={2183}
                className="w-full md:h-full md:w-auto md:aspect-square object-cover"
              />
            </div>
          </div>
          <div className="grow hidden md:flex justify-center items-center p-4">
            <Image
              src="/text-logo-colored.svg"
              alt="あきび祭2025ロゴ"
              width={1030 / 2}
              height={1677 / 2}
            />
          </div>
          <div className="md:hidden absolute bottom-0 w-full px-16 translate-y-24">
            <Image
              src="/text-logo-colored.svg"
              alt="あきび祭2025ロゴ"
              width={1030 / 2}
              height={1677 / 2}
            />
          </div>
        </div>
      </section>
      <YellowContainer className="[&>div]:min-h-screen">
        <ThemeSection id="theme" themeMessage={constants.theme} />
        <HeadMessageSection
          id="headMessage"
          name={constants.head_name}
          message={constants.head_greetings}
        />
        <AccessSection id="access" />
      </YellowContainer>
      <Navigation background="var(--background)" initiallyTransparent />
    </>
  );
}
