'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function EmblaSlider({
  children,
  options = { loop: true, align: 'start' },
  delay = 2500,
  className = '',
}) {
  const autoplay = Autoplay({ delay, stopOnInteraction: false });
  const [emblaRef] = useEmblaCarousel(options, [autoplay]);

  return (
    <div className={`embla ${className}`} ref={emblaRef} style={{ overflow: 'hidden', width: '100%' }}>
      <div className="embla__container" style={{ display: 'flex', touchAction: 'pan-y' }}>
        {React.Children.map(children, (child) => (
          <div className="embla__slide" style={{ flex: '0 0 auto', minWidth: 0 }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
