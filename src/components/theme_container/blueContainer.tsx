import Image from "next/image";

async function BlueContainer({
  children,
  className,
  id,
}: {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      className={`w-full text-tertiary-foreground flex flex-col items-center justify-center mx-auto relative ${className}`}
      id={id}
    >
      {children}
      <div className="fixed top-0 h-full max-h-screen w-full bg-primary -z-10 overflow-hidden">
        <div className="absolute top-0 w-full h-32 clip-wave-b bg-[#e7f5f8]" />
        <div className="absolute bottom-0 w-full h-32 clip-wave-t bg-[#e7f5f8]" />
        <Image
          src="/assets/dot-pattern-yellow.svg"
          alt="テーマイラスト"
          width={300}
          height={300}
          className="absolute right-0 top-0 w-[100%] md:w-auto md:h-[120%] translate-x-[5%] -translate-y-[8%]"
        />
        <Image
          src="/assets/dot-pattern-yellow.svg"
          alt="テーマイラスト"
          width={300}
          height={300}
          className="hidden md:block rotate-180 absolute left-0 bottom-0 w-[50%] md:w-auto md:h-[120%] -translate-x-[5%] translate-y-[8%]"
        />
        <Image
          src="/assets/dot-pattern-red.svg"
          alt="テーマイラスト"
          width={300}
          height={300}
          className="hidden md:block absolute left-0 top-0 w-[70%] md:w-auto md:h-[50%] rotate-180 -translate-x-[1%]"
        />
        <Image
          src="/assets/dot-pattern-red.svg"
          alt="テーマイラスト"
          width={300}
          height={300}
          className="absolute left-0 md:left-auto md:right-0 bottom-0 w-[70%] md:w-auto md:h-[50%] -scale-x-100 md:scale-x-100"
        />
      </div>
    </section>
  );
}

export { BlueContainer };
