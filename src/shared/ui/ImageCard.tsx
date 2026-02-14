import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  onClick?: () => void;
  sizes?: string;
  onError?: React.ComponentProps<"img">["onError"];
  onLoad?: React.ComponentProps<"img">["onLoad"];
  className?: string;
  containerClassName?: string;
};

export const ImageCard = ({
  src,
  alt,
  onClick,
  sizes,
  onError,
  onLoad,
  className,
  containerClassName,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden ${containerClassName ?? ""} ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        onError={onError}
        onLoad={onLoad}
        className={`object-cover ${className ?? ""}`}
        priority
      />
    </div>
  );
};
