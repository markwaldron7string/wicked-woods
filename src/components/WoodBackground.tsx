type WoodBackgroundProps = {
  opacity?: "subtle" | "medium" | "strong";
};

const opacityClasses = {
  subtle: "opacity-25",
  medium: "opacity-50",
  strong: "opacity-60",
};

export default function WoodBackground({
  opacity = "medium",
}: WoodBackgroundProps) {
  return (
    <div
      className={`fixed inset-0 -z-10 bg-cover bg-center ${opacityClasses[opacity]}`}
      style={{ backgroundImage: "url('/images/hero/woodsiding.jpg')" }}
      aria-hidden="true"
    />
  );
}
