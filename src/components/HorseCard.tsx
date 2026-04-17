import Image from "next/image";

export default function HorseCard({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) {
  return (
    <div className="text-center max-w-sm">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="object-cover mx-auto"
      />
      <h3 className="mt-4 font-semibold underline">{name}</h3>
      <p className="text-sm mt-2 text-gray-300">{description}</p>
    </div>
  );
}