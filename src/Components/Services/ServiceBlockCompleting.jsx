import React, { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import archConceptMain from '../../Images/Services/arch-con-main.png';

import balanceMain from "../../Images/Projects/Balance/balance-main.png"
import balanceFirst from "../../Images/Projects/Balance/balance-first.png"
import balanceSecond from "../../Images/Projects/Balance/balance-second.png"
import balanceThird from "../../Images/Projects/Balance/balance-third.png"


export default function ServiceBlockCompleting() {
  const [ref, isVisible] = useScrollAnimation();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [direction, setDirection] = useState(0);
  
  const allImages = [balanceFirst, balanceMain, balanceSecond, balanceThird];
  
  const openImage = (index) => {
    setSelectedImageIndex(index);
    setDirection(0);
  };
  
  const closeImage = useCallback(() => {
    setSelectedImageIndex(null);
    setDirection(0);
  }, []);
  
  const nextImage = useCallback(() => {
    setDirection(1);
    setSelectedImageIndex((prev) => (prev + 1) % allImages.length);
  }, [allImages.length]);
  
  const prevImage = useCallback(() => {
    setDirection(-1);
    setSelectedImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);
  
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex !== null) {
        if (e.key === 'Escape') {
          closeImage();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'ArrowLeft') {
          prevImage();
        }
      }
    };
    
    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImageIndex, closeImage, nextImage, prevImage]);

  const mainImage = (
    <img 
      src={balanceFirst} 
      alt="Комплектация Менеджмент" 
      className="w-full h-auto cursor-pointer transition-opacity hover:opacity-90"
      style={{ 
        aspectRatio: '650/350',
        objectFit: 'cover'
      }}
      onClick={() => openImage(0)}
    />
  );

  const thumbnailImages = [balanceFirst, balanceSecond, balanceThird];
  
  const thumbnails = thumbnailImages.map((img, index) => (
    <div 
      key={index} 
      className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[75px] md:h-[75px] overflow-hidden cursor-pointer transition-opacity hover:opacity-90"
      onClick={() => openImage(index + 1)}
    >
      <img 
        src={img} 
        alt="" 
        className="w-full h-full object-cover"
      />
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

          <div className="flex gap-[20px]">
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
      
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4"
              onClick={closeImage}
              style={{ width: '100vw', height: '100vh' }}
            >
              <div 
                className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  onClick={closeImage}
                  className="absolute top-4 right-4 text-white text-3xl font-bold z-10 hover:opacity-70 transition-opacity w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10"
                  aria-label="Закрыть"
                >
                  ×
                </motion.button>
                
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={prevImage}
                  className="absolute left-4 text-white text-5xl font-light z-10 hover:opacity-70 transition-opacity w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10"
                  aria-label="Предыдущее изображение"
                >
                  ‹
                </motion.button>
                
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.img 
                    key={selectedImageIndex}
                    custom={direction}
                    initial={(dir) => ({ 
                      opacity: 0, 
                      scale: 0.95, 
                      x: dir > 0 ? 100 : -100 
                    })}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      x: 0 
                    }}
                    exit={(dir) => ({ 
                      opacity: 0, 
                      scale: 0.95, 
                      x: dir > 0 ? -100 : 100 
                    })}
                    transition={{ 
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    src={allImages[selectedImageIndex]} 
                    alt={`Изображение ${selectedImageIndex + 1}`}
                    className="max-w-full max-h-[90vh] object-contain"
                  />
                </AnimatePresence>
                
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={nextImage}
                  className="absolute right-4 text-white text-5xl font-light z-10 hover:opacity-70 transition-opacity w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10"
                  aria-label="Следующее изображение"
                >
                  ›
                </motion.button>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full"
                >
                  {selectedImageIndex + 1} / {allImages.length}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

