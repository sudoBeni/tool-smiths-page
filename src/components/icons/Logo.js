import React from 'react';

const Logo = ({ 
  src, 
  alt, 
  width = 100, 
  height = 60, 
  className = '', 
  fallbackText = '',
  containerClassName = '',
  objectFit = 'contain',
  responsive = true,
  onError,
  ...props 
}) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = (e) => {
    setImageError(true);
    if (onError) {
      onError(e);
    }
  };

  const containerStyle = responsive ? {} : {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div 
      className={`flex items-center justify-center ${containerClassName} ${responsive ? 'w-full h-full' : ''}`}
      style={containerStyle}
    >
      {!imageError ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-${objectFit} ${className}`}
          onError={handleImageError}
          {...props}
        />
      ) : (
        <div className={`w-full h-full bg-forge-bg rounded-lg flex items-center justify-center border border-forge-border ${className}`}>
          <div className="text-xl font-bold text-accent-color">
            {fallbackText || alt?.charAt(0) || '?'}
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
