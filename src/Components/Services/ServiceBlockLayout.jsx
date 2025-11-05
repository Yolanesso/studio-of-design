import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function ServiceBlockLayout({ 
  title, 
  subtitle, 
  mainImage, 
  thumbnails, 
  services, 
  note, 
  duration, 
  price 
}) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`serviceblock px-6 md:px-12 xl:px-[140px] mt-12 md:mt-24 2xl:mt-[160px] transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24">
        {/* Левая колонка - Заголовок и изображения */}
        <div className="flex flex-col">
          <div className="serviceblock-title flex flex-col mb-8 md:mb-12 lg:mb-16">
            <span className="text-[32px] md:text-[64px] 2xl:text-[96px] leading-tight font-inter font-medium">
              {title}
            </span>
            <span className="text-[32px] md:text-[64px] 2xl:text-[96px] leading-tight font-inter font-medium">
              {subtitle}
            </span>
          </div>

          {/* Основное изображение */}
          <div className="mb-4 md:mb-6">
            <div className="w-full max-w-[650px]">
              {mainImage}
            </div>
          </div>

          {/* Thumbnail изображения */}
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {thumbnails}
          </div>
        </div>

        {/* Правая колонка - Список услуг и информация */}
        <div className="flex flex-col justify-start pt-16 md:pt-24 lg:pt-32 xl:pt-40 2xl:pt-48">
          {/* Список услуг */}
          <div className="mb-8 md:mb-10">
            <ol className="space-y-6 md:space-y-8 font-inter">
              {services}
            </ol>
          </div>

          {/* Примечание */}
          {note && (
            <div className="mb-6 md:mb-8">
              <p className="text-sm sm:text-base md:text-lg text-gray-600 font-inter">
                {note}
              </p>
            </div>
          )}

          {/* Разделитель */}
          {(duration || price) && (
            <div className="h-[0.5px] bg-gray-300 mb-6 md:mb-8"></div>
          )}

          {/* Срок */}
          {duration && (
            <div className="mb-6 md:mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-sm sm:text-base md:text-lg text-gray-600 font-inter">Срок</span>
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium">{duration}</span>
              </div>
            </div>
          )}

          {/* Разделитель перед ценой */}
          {price && duration && (
            <div className="h-[0.5px] bg-gray-300 mb-6 md:mb-8"></div>
          )}

          {/* Цена */}
          {price && (
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm sm:text-base md:text-lg text-gray-600 font-inter">Цена</span>
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium">{price}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

