import React from "react";

import BtnLangBlack from "../Icons/btn lang-black.svg";
import Logo from "../Icons/logo-black.svg";
import BtnClose from "../Icons/btn-close.svg";
import BtnMenu from "../Icons/btn-menu.svg";
import ArrowBlack from "../Icons/Arrow-black.svg";

export default function BurgerMenu({ isMenuOpen, toggleMenu, scrollToSection }) {
  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-500 ease-out transform ${
        isMenuOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-full invisible pointer-events-none"
      }`}
    >
      {/* Белый фон */}
      <div className="w-full h-full bg-white">
        {/* Контент меню */}
        <div
          className="flex flex-col items-center justify-start pt-16 pb-12 h-full px-6 sm:px-8 md:px-12 lg:px-20 overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Добавляем навигацию в меню */}
          <nav className="w-full max-w-5xl mb-12">
            <div className="flex items-center justify-between">
              <button className="transition-opacity hover:opacity-80">
                <img
                  src={BtnLangBlack}
                  alt="Сменить язык"
                  width={38}
                  height={38}
                />
              </button>

              <div className="flex-1 flex justify-center">
                <img
                  src={Logo}
                  alt="Логотип"
                  className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] 2xl:max-w-[160px]"
                />
              </div>

              <button onClick={toggleMenu} aria-label="Закрыть меню">
                <img
                  width={38}
                  height={38}
                  src={BtnClose}
                  alt="Закрыть меню"
                />
              </button>

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  className="p-2 sm:p-3 transition-opacity hover:opacity-80 relative z-50"
                  onClick={toggleMenu}
                  aria-label="Открыть меню"
                >
                  <img
                    src={BtnMenu}
                    alt="Открыть меню"
                    className="w-6 sm:w-8 md:w-10 transition-transform duration-300"
                    style={{
                      transform: isMenuOpen
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                    }}
                  />
                </button>
              </div>
            </div>
          </nav>

          {/* Сетка 2 колонки */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-32 xl:gap-40 2xl:gap-48 w-full max-w-5xl">
            {/* Левая колонка — Навигация */}
            <div className="flex flex-col items-start justify-start gap-8 md:gap-10">
              <div className="flex flex-col gap-6 md:gap-8">
                <button
                  onClick={() => {
                    scrollToSection("projects");
                    toggleMenu();
                  }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium transition-colors text-left leading-tight"
                  style={{ color: '#f59e0b' }}
                  onMouseEnter={(e) => e.target.style.color = '#d97706'}
                  onMouseLeave={(e) => e.target.style.color = '#f59e0b'}
                >
                  Проекты
                </button>
                <button
                  onClick={() => {
                    scrollToSection("about");
                    toggleMenu();
                  }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium transition-colors text-left leading-tight"
                  style={{ color: '#f59e0b' }}
                  onMouseEnter={(e) => e.target.style.color = '#d97706'}
                  onMouseLeave={(e) => e.target.style.color = '#f59e0b'}
                >
                  О нас
                </button>
                <button
                  onClick={() => {
                    scrollToSection("services");
                    toggleMenu();
                  }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium transition-colors text-left leading-tight"
                  style={{ color: '#f59e0b' }}
                  onMouseEnter={(e) => e.target.style.color = '#d97706'}
                  onMouseLeave={(e) => e.target.style.color = '#f59e0b'}
                >
                  Услуги
                </button>
                <button
                  onClick={() => {
                    scrollToSection("interaction");
                    toggleMenu();
                  }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium transition-colors text-left leading-tight"
                  style={{ color: '#f59e0b' }}
                  onMouseEnter={(e) => e.target.style.color = '#d97706'}
                  onMouseLeave={(e) => e.target.style.color = '#f59e0b'}
                >
                  Взаимодействие
                </button>
              </div>
            </div>

            {/* Разделитель — только на мобильных */}
            <div className="h-px my-6 md:hidden w-full" style={{ backgroundColor: '#fde68a' }}></div>

            {/* Правая колонка — Информация */}
            <div className="flex flex-col items-start justify-start">
              <div className="mb-8 md:mb-1">
                <img src={ArrowBlack} alt="Arrow" />
              </div>

              <div 
                className="text-lg sm:text-xl md:text-2xl lg:text-[22px] max-w-[320px] leading-relaxed font-inter"
                style={{ color: '#d97706' }}
              >
                Пишите нам для воплощения ваших идей
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
