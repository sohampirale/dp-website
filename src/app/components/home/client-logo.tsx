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
    <img
      src={src}
      alt={alt}
      className="max-h-12 grayscale hover:grayscale-0 transition duration-300"
      width="120"
      height="60"
      
    />
  </div>
);
