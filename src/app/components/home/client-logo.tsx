import Image from "next/image";

// ClientLogo.tsx
export interface ClientLogoProps {
  src: string;
  alt: string;
  id: string;
}

export const ClientLogo: React.FC<ClientLogoProps> = ({ src, alt, id }) => (
  <div
    className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300"
    id={id}
  >
    {/* Wrapper div with fixed width and height */}
    <div className="relative w-[120px] h-[60px]">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
        className="grayscale hover:grayscale-0 transition duration-300"
      />
    </div>
  </div>
);
