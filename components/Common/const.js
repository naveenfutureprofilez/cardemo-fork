export const getImages = (imageName) => {
  return `/images/${imageName}`;
};

import Image from 'next/image';

export const LazyImage = ({ src, alt, width, height, sizes, className, priority = false }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes || '100vw'}
      className={className}
      priority={priority}
    />
  );
};
