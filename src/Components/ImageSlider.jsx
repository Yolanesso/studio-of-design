import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function ImageSlider({ lightImage, darkImage, alt, className = "" }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  // Проверка на наличие изображений
  if (!lightImage || !darkImage) {
    console.error("ImageSlider: missing lightImage or darkImage", { lightImage, darkImage });
    return null;
  }

  const updateSliderPosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    updateSliderPosition(e.clientX);
  }, [isDragging, updateSliderPosition]);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  }, [updateSliderPosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    updateSliderPosition(touch.clientX);
  }, [isDragging, updateSliderPosition]);

  const handleTouchStart = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
    const touch = e.touches[0];
    updateSliderPosition(touch.clientX);
  }, [updateSliderPosition]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove, { passive: false });
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleMouseUp);
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleMouseUp);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  useEffect(() => {
    const updateHeight = () => {
      if (imageRef.current && containerRef.current) {
        const imgHeight = imageRef.current.offsetHeight;
        const slider = containerRef.current.querySelector('.slider-line');
        if (slider && imgHeight > 0) {
          slider.style.height = `${imgHeight}px`;
        }
      }
    };

    const handleResize = () => {
      updateHeight();
    };

    if (imageRef.current) {
      imageRef.current.addEventListener('load', updateHeight);
      updateHeight();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener('load', updateHeight);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [darkImage]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{ 
        cursor: isDragging ? 'grabbing' : 'grab', 
        userSelect: 'none',
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <img
        ref={imageRef}
        src={darkImage}
        alt={alt}
        className="w-full h-auto object-contain pointer-events-none block"
        draggable={false}
      />
      
      <div
        className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src={lightImage}
          alt={alt}
          className="w-full h-auto object-contain pointer-events-none block"
          draggable={false}
        />
      </div>
      
      <div
        className="slider-line absolute top-0 w-0.5 bg-white z-20 pointer-events-none"
        style={{
          left: `${sliderPosition}%`,
          transform: 'translateX(-50%)',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-auto"
          style={{
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        >
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-gray-500 rounded-full"></div>
            <div className="w-1 h-4 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-3 left-3 bg-black/60 text-white px-2.5 py-1 rounded text-xs font-medium pointer-events-none backdrop-blur-sm">
        Светлый
      </div>
      <div className="absolute top-3 right-3 bg-black/60 text-white px-2.5 py-1 rounded text-xs font-medium pointer-events-none backdrop-blur-sm">
        Темный
      </div>
    </div>
  );
}

