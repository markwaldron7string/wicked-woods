export default function Section({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative py-20 px-6 md:px-20 text-white overflow-hidden">
  
  {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/hero/banner.jpg"
          alt="background"
          className="w-full h-full object-cover object-top scale-110 scale-y-[-1] blur-sm brightness-50"
        />
      </div>

      {children}
    </section>
  );
}