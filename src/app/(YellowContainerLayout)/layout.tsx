import { YellowContainer } from "@/components/theme_container/yellowContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <YellowContainer>
      <div className="p-5">{children}</div>
    </YellowContainer>
  );
}
