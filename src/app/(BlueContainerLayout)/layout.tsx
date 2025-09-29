import { MobileNavigation, Navigation } from "@/components/nav";
import { BlueContainer } from "@/components/theme_container/blueContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="md:hidden p-4 sticky w-full top-0 z-50 bg-gradient-to-b via-80% from-primary via-transparent to-transparent">
        <MobileNavigation />
      </div>
      <BlueContainer>
        <div className="p-5 min-h-screen">{children}</div>
      </BlueContainer>
      <Navigation
        background="var(--primary)"
        className="text-primary-foreground"
      />
    </>
  );
}
