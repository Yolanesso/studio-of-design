import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import archConceptMain from '../../Images/Services/arch-con-main.png';

export default function ServiceBlockCompleting() {
  const [ref, isVisible] = useScrollAnimation();

  const mainImage = (
    <div className="w-full bg-gray-200 overflow-hidden" style={{ aspectRatio: '650/350' }}>
      <img 
        src={archConceptMain} 
        alt="Комплектация Менеджмент" 
        className="w-full h-auto"
        style={{ 
          aspectRatio: '650/350',
          objectFit: 'cover'
        }}
      />
    </div>
  );

  const thumbnails = [1, 2, 3].map((item) => (
    <div key={item} className="w-full h-[120px] sm:h-[150px] md:h-[180px] bg-gray-200 overflow-hidden">
      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
        <span className="text-gray-600 text-sm">Thumb {item}</span>
      </div>
    </div>
  ));

  const services = (
    <>
      <li className="flex gap-2">
        <span className="font-inter" style={{ color: '#00000099', fontSize: '14px' }}>01.</span>
        <div className="flex-1">
          <span className="font-inter" style={{ fontSize: '16px' }}>Спецификация</span>
        </div>
      </li>
      <li className="flex gap-2">
        <span className="font-inter" style={{ color: '#00000099', fontSize: '14px' }}>02.</span>
        <div className="flex-1">
          <span className="font-inter" style={{ fontSize: '16px' }}>Просчет стоимости, сверка цен, поиск поставщиков</span>
        </div>
      </li>
      <li className="flex gap-2">
        <span className="font-inter" style={{ color: '#00000099', fontSize: '14px' }}>03.</span>
        <div className="flex-1">
          <span className="font-inter" style={{ fontSize: '16px' }}>Сопровождение на всех этапах реализации: закупки, доставки, рекламации, монтажи</span>
        </div>
      </li>
      <li className="flex gap-2">
        <span className="font-inter" style={{ color: '#00000099', fontSize: '14px' }}>04.</span>
        <div className="flex-1">
          <span className="font-inter" style={{ fontSize: '16px' }}>Общение с поставщиками</span>
        </div>
      </li>
      <li className="flex gap-2">
        <span className="font-inter" style={{ color: '#00000099', fontSize: '14px' }}>05.</span>
        <div className="flex-1">
          <span className="font-inter" style={{ fontSize: '16px' }}>Ведение общего графика</span>
        </div>
      </li>
      <li className="flex gap-2">
        <span className="font-inter" style={{ color: '#00000099', fontSize: '14px' }}>06.</span>
        <div className="flex-1">
          <span className="font-inter" style={{ fontSize: '16px' }}>Координация с ведением строительных работ</span>
        </div>
      </li>
      <li className="flex gap-2">
        <span className="font-inter" style={{ color: '#00000099', fontSize: '14px' }}>07.</span>
        <div className="flex-1">
          <span className="font-inter" style={{ fontSize: '16px' }}>Еженедельные и ежемесячные отчеты</span>
        </div>
      </li>
    </>
  );

  return (
    <div 
      ref={ref}
      className={`serviceblock px-6 md:px-12 xl:px-[140px] mt-12 md:mt-24 2xl:mt-[160px] transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24">
        <div className="flex flex-col">
          <div className="serviceblock-title flex flex-col mb-8 md:mb-12 lg:mb-16">
            <span className="text-[32px] md:text-[64px] 2xl:text-[96px] leading-tight font-inter font-medium">
              Комплектация
            </span>
            <span className="text-[32px] md:text-[64px] 2xl:text-[96px] leading-tight font-inter font-medium">
              Менеджмент /
            </span>
          </div>

          <div className="mb-4 md:mb-6">
            <div className="w-full max-w-[650px]">
              {mainImage}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {thumbnails}
          </div>
        </div>

        <div className="flex flex-col justify-start pt-16 md:pt-24 lg:pt-32 xl:pt-40 2xl:pt-48">
          <div className="mb-8 md:mb-10">
            <ol className="space-y-6 md:space-y-8 font-inter">
              {services}
            </ol>
          </div>

          <div className="h-[0.5px] bg-gray-300 mb-6 md:mb-8"></div>

          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm sm:text-base md:text-lg text-gray-600 font-inter">Цена</span>
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium">8 500 Р / м²</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

