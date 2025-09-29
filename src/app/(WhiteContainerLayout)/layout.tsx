import { MobileNavigation, Navigation } from "@/components/nav";
import { WhiteContainer } from "@/components/theme_container/whiteContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="md:hidden p-4 sticky w-full top-0 z-50 bg-gradient-to-b via-80% from-white via-transparent to-transparent">
        <MobileNavigation />
      </div>
      <WhiteContainer>
        <div className="p-5 min-h-screen">{children}</div>
      </WhiteContainer>
      <Navigation background="white" className="text-primary-foreground" />
    </>
  );
}
