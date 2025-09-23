import { BlueContainer } from "@/components/theme_container/blueContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BlueContainer>
      <div className="p-5">{children}</div>
    </BlueContainer>
  );
}
