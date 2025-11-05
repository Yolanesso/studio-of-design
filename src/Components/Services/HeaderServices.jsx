import React from "react";
import { useState } from "react";

import ServicesBg from "../../Images/services-bg.png";
import BtnLang from "../../Icons/btn-lang.svg";
import BtnLangBlack from "../../Icons/btn lang-black.svg";
import Logo from "../../Icons/logo-black.svg";
import BtnClose from "../../Icons/btn-close.svg";
import BtnMenu from "../../Icons/btn-menu.svg";
import "../../css/fonts.css";
import ArrowBlack from "../../Icons/Arrow-black.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("menu-open");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className="relative h-[443px] bg-cover bg-center bg-no-repeat grayscale"
        style={{ backgroundImage: `url(${ServicesBg})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10">
          <div className="container mx-auto">
            <nav className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-6 sm:pb-8 md:pb-10 lg:pb-16 xl:pb-20 2xl:pb-25">
              <div className="flex items-center justify-between">
                <button className="transition-opacity hover:opacity-80">
                  <img
                    src={BtnLangBlack}
                    alt="Сменить язык"
                    className="w-8 sm:w-10 md:w-12"
                  />
                </button>

                <div className="flex-1 flex justify-center">
                  <img
                    src={Logo}
                    alt="Логотип"
                    className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[150px] 2xl:max-w-[160px]"
                  />
                </div>

                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <button className="bg-gray-900 text-amber-50 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-[27px] font-inter font-medium text-xs sm:text-sm md:text-base max-[377px]:hidden hover:bg-gray-800 transition-colors duration-200 shadow-md">
                    Связаться с нами
                  </button>
                  <button
                    className="p-2 sm:p-3 md:p-4 transition-opacity hover:opacity-80 relative z-50"
                    onClick={toggleMenu}
                    aria-label="Открыть меню"
                  >
                    <img
                      src={BtnMenu}
                      alt="Открыть меню"
                      className="w-6 sm:w-8 md:w-10 lg:w-12"
                      style={{
                        transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                </div>
              </div>
            </nav>
          </div>

          <div className="header__info relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 lg:pl-[100px] xl:pl-[150px] 2xl:pl-[250px] mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-16">
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] 2xl:text-[84px] font-inter text-amber-50 leading-[1.1]">
              <span className="block">Услуги.</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Бургер-меню - вынесено за пределы header для правильного позиционирования */}
      <div
        className={`burger-menu-overlay fixed top-0 left-0 right-0 bottom-0 z-[9999] transition-transform duration-500 ease-out ${
          isMenuOpen
            ? "translate-y-0"
            : "-translate-y-full pointer-events-none"
        }`}
        style={{
          height: '100dvh',
          width: '100vw',
          backgroundColor: '#ffffff',
          opacity: 1,
        }}
      >
        {/* Контент меню */}
        <div
          className="flex flex-col items-center justify-start pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-10 md:pb-12 lg:pb-16 h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
              {/* Добавляем навигацию в меню */}
              <nav className="w-full max-w-5xl mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                <div className="flex items-center justify-between">
                  <button className="transition-opacity hover:opacity-80">
                    <img
                      src={BtnLangBlack}
                      alt="Сменить язык"
                      className="w-8 sm:w-10 md:w-12 lg:w-14"
                    />
                  </button>

                  <div className="flex-1 flex justify-center">
                    <img
                      src={Logo}
                      alt="Логотип"
                      className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[150px] 2xl:max-w-[160px]"
                    />
                  </div>

                  <button
                    onClick={toggleMenu}
                    aria-label="Закрыть меню"
                    className="p-2 sm:p-3 md:p-4 transition-opacity hover:opacity-80"
                  >
                    <img
                      src={BtnClose}
                      alt="Закрыть меню"
                      className="w-6 sm:w-8 md:w-10 lg:w-12"
                    />
                  </button>
                </div>
              </nav>

              {/* Сетка 2 колонки */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 w-full max-w-5xl">
                {/* Левая колонка — Навигация */}
                <div className="flex flex-col items-start justify-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                  <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                    <button
                      onClick={() => {
                        scrollToSection("projects");
                        toggleMenu();
                      }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter font-medium transition-colors text-left leading-tight"
                      style={{ color: 'rgba(0, 0, 0, 0.6)' }}
                      onMouseEnter={(e) => e.target.style.color = '#000000'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(0, 0, 0, 0.6)'}
                    >
                      Проекты
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection("about");
                        toggleMenu();
                      }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter font-medium transition-colors text-left leading-tight"
                      style={{ color: 'rgba(0, 0, 0, 0.6)' }}
                      onMouseEnter={(e) => e.target.style.color = '#000000'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(0, 0, 0, 0.6)'}
                    >
                      О нас
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection("services");
                        toggleMenu();
                      }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter font-medium transition-colors text-left leading-tight"
                      style={{ color: 'rgba(0, 0, 0, 0.6)' }}
                      onMouseEnter={(e) => e.target.style.color = '#000000'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(0, 0, 0, 0.6)'}
                    >
                      Услуги
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection("interaction");
                        toggleMenu();
                      }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter font-medium transition-colors text-left leading-tight"
                      style={{ color: 'rgba(0, 0, 0, 0.6)' }}
                      onMouseEnter={(e) => e.target.style.color = '#000000'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(0, 0, 0, 0.6)'}
                    >
                      Взаимодействие
                    </button>
                  </div>
                </div>

                {/* Разделитель — только на мобильных */}
                <div className="h-px bg-amber-200 my-4 sm:my-6 md:hidden w-full"></div>

                {/* Правая колонка — Информация */}
                <div className="flex flex-col items-start justify-start">
                  <div className="mb-6 sm:mb-8 md:mb-10">
                    <img
                      src={ArrowBlack}
                      alt="Arrow"
                      className="w-8 sm:w-10 md:w-12 lg:w-14"
                    />
                  </div>

                  <div 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-[280px] sm:max-w-[300px] md:max-w-[320px] leading-relaxed font-inter"
                    style={{ color: 'rgba(0, 0, 0, 0.6)' }}
                  >
                    Пишите нам для воплощения ваших идей
                  </div>
                </div>
              </div>

          {/* Кнопка закрытия */}
          <button
            onClick={toggleMenu}
            className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-lg sm:text-xl md:text-2xl font-inter transition-colors tracking-wide"
            style={{ color: 'rgba(0, 0, 0, 0.6)' }}
            onMouseEnter={(e) => e.target.style.color = '#000000'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(0, 0, 0, 0.6)'}
            aria-label="Закрыть меню"
          >
            Закрыть ×
          </button>
        </div>
      </div>
    </>
  );
}
