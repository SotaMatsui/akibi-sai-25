import { MobileNavigation, Navigation } from "@/components/nav";
import { YellowContainer } from "@/components/theme_container/yellowContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="md:hidden p-4 sticky w-full top-0 z-50 bg-gradient-to-b via-80% from-background via-transparent to-transparent">
        <MobileNavigation />
      </div>
      <YellowContainer>
        <div className="p-5 min-h-screen w-full xl:w-auto">{children}</div>
      </YellowContainer>
      <Navigation
        background="var(--tertiary)"
        className="text-tertiary-foreground"
      />
    </>
  );
}
