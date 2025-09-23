import { WhiteContainer } from "@/components/theme_container/whiteContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WhiteContainer>
      <div className="p-5">{children}</div>
    </WhiteContainer>
  );
}
