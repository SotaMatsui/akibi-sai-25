import { MobileNavigation, Navigation } from "@/components/nav";
import { WhiteContainer } from "@/components/theme_container/whiteContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WhiteContainer>
      <div className="md:grid grid-cols-[1fr_auto_1fr] gap-4">
        <div>
          <div className="sticky top-0 pt-8 pl-8 hidden md:block">
            <Navigation className="w-64" />
          </div>
        </div>
        <div className="md:hidden p-4 sticky top-0 z-10 bg-gradient-to-b via-80% from-white via-transparent to-transparent">
          <MobileNavigation />
        </div>
        <div className="p-5">{children}</div>
      </div>
    </WhiteContainer>
  );
}
