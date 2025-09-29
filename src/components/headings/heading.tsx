import Image from "next/image";

function Heading({
  children,
  className,
  side = "both",
}: {
  children: React.ReactNode;
  className?: string;
  side?: "left" | "right" | "both";
}) {
  return (
    <div
      className={`flex justify-center items-center gap-2 md:gap-4 text-3xl md:text-5xl xl:text-7xl py-4 font-medium font-handwriting ${className}`}
    >
      {side === "left" ||
        (side === "both" && (
          <Image
            src="/assets/icon_primary.svg"
            height={32}
            width={32}
            alt=""
            className="w-4 md:w-8 xl:w-12"
          />
        ))}
      {children}
      {side === "right" ||
        (side === "both" && (
          <Image
            src="/assets/icon_primary.svg"
            height={32}
            width={32}
            alt=""
            className="w-4 md:w-8 xl:w-12"
          />
        ))}
    </div>
  );
}

export { Heading };
