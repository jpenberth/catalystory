import Image from "next/image";

export default function Logo({ className = "h-7", priority = false }: { className?: string; priority?: boolean }) {
  // The black background of the logo file fuses with the page via screen blending.
  return (
    <Image
      src="/logo.webp"
      alt="Catalystory"
      width={1880}
      height={580}
      priority={priority}
      sizes="(min-width: 768px) 220px, 160px"
      className={`w-auto mix-blend-screen ${className}`}
    />
  );
}
