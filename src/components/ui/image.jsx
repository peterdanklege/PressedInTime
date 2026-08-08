import React, { useState } from 'react';

const FALLBACK = 'https://via.placeholder.com/800x600?text=Image+unavailable';

export const Image = React.forwardRef(({ src, alt = '', className, style, focalPointX, focalPointY, fittingType, originWidth, originHeight, quality, ...props }, ref) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      ref={ref}
      src={imgSrc || FALLBACK}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setImgSrc(FALLBACK)}
      {...props}
    />
  );
});

Image.displayName = 'Image';
