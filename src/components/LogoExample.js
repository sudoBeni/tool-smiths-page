import React from 'react';
import { Logo } from './icons';

const LogoExample = () => {
  const logos = [
    {
      name: 'Humber',
      src: '/images/partners/logo_humber.png',
      width: 100,
      height: 60
    },
    {
      name: 'PXP',
      src: '/images/partners/logo_pxp.png',
      width: 140,
      height: 70
    },
    {
      name: 'HSLU',
      src: '/images/partners/logo_hslu.png',
      width: 120,
      height: 80
    }
    
  ];

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold text-text-primary mb-6">Logo Component Examples</h2>
      
      {/* Different sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-text-primary">Different Sizes:</h3>
        <div className="flex flex-wrap gap-4 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="text-center">
              <Logo
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                fallbackText={logo.name.charAt(0)}
                containerClassName="bg-gray-100 rounded-lg p-2 border border-gray-200"
              />
              <p className="text-sm text-text-secondary mt-2">
                {logo.width}x{logo.height}px
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Same logo, different sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-text-primary">Same Logo, Different Sizes:</h3>
        <div className="flex flex-wrap gap-4 items-center">
          {[50, 80, 120, 160].map((size, index) => (
            <div key={index} className="text-center">
              <Logo
                src="/images/partners/logo_hslu.png"
                alt="HSLU"
                width={size}
                height={size * 0.6}
                fallbackText="H"
                containerClassName="bg-gray-100 rounded-lg p-2 border border-gray-200"
              />
              <p className="text-sm text-text-secondary mt-2">
                {size}x{Math.round(size * 0.6)}px
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Different object-fit options */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-text-primary">Different Object-Fit Options:</h3>
        <div className="flex flex-wrap gap-4 items-center">
          {['contain', 'cover', 'fill', 'scale-down'].map((fit, index) => (
            <div key={index} className="text-center">
              <Logo
                src="/images/partners/logo_pxp.png"
                alt="PXP"
                width={100}
                height={60}
                objectFit={fit}
                fallbackText="P"
                containerClassName="bg-gray-100 rounded-lg p-2 border border-gray-200"
              />
              <p className="text-sm text-text-secondary mt-2">
                object-fit: {fit}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Error handling example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-text-primary">Error Handling (Invalid URL):</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="text-center">
            <Logo
              src="/invalid/path/to/logo.png"
              alt="Invalid Logo"
              width={100}
              height={60}
              fallbackText="?"
              containerClassName="bg-gray-100 rounded-lg p-2 border border-gray-200"
            />
            <p className="text-sm text-text-secondary mt-2">
              Fallback display
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoExample;
