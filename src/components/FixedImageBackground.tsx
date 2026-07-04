import Image from "next/image";

type FixedImageBackgroundProps = {
  src: string;
  alt: string;
  objectPosition?: string;
  overlayClassName?: string;
  priority?: boolean;
};

export default function FixedImageBackground({
  src,
  alt,
  objectPosition = "object-left",
  overlayClassName = "bg-black/55",
  priority = false,
}: FixedImageBackgroundProps) {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover ${objectPosition}`}
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
