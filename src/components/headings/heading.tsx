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
      className={`flex justify-center items-end gap-2 md:gap-4 text-3xl md:text-4xl font-medium font-display ${className}`}
    >
      {side === "left" ||
        (side === "both" && (
          <Image src="/assets/icon_primary.svg" height={32} width={32} alt="" className="w-4 md:w-8" />
        ))}
      {children}
      {side === "right" ||
        (side === "both" && (
          <Image src="/assets/icon_primary.svg" height={32} width={32} alt="" className="w-4 md:w-8" />
        ))}
    </div>
  );
}

export { Heading };
