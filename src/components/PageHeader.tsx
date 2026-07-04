import FadeIn from "@/components/FadeIn";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function PageHeader({
  title,
  subtitle,
  className = "mb-12",
}: PageHeaderProps) {
  return (
    <FadeIn>
      <header className={`text-center ${className}`}>
        <h1 className="text-4xl md:text-5xl font-light tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/70 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-6 mx-auto h-px w-16 bg-white/40" />
      </header>
    </FadeIn>
  );
}
