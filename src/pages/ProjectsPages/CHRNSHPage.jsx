import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// CHRNSH_45.15 - используем первое изображение как главное
import CHRNSH_Main from "../../Projects/CHRNSH_45.15/010000.png";

// Планировка
import CHRNSH_Plan from "../../Projects/CHRNSH_45.15/CHRNSH_45.15 ПЛАНИРОВКА.png";

// CHRNSH_45.15 - Все изображения
import CHRNSH_01 from "../../Projects/CHRNSH_45.15/010000.png";
import CHRNSH_02 from "../../Projects/CHRNSH_45.15/020000.png";
import CHRNSH_03 from "../../Projects/CHRNSH_45.15/030000.png";
import CHRNSH_04 from "../../Projects/CHRNSH_45.15/040000.png";
import CHRNSH_05 from "../../Projects/CHRNSH_45.15/050000.png";
import CHRNSH_06 from "../../Projects/CHRNSH_45.15/060000.png";
import CHRNSH_07 from "../../Projects/CHRNSH_45.15/070000.png";
import CHRNSH_08 from "../../Projects/CHRNSH_45.15/080000.png";
import CHRNSH_09 from "../../Projects/CHRNSH_45.15/090000.png";
import CHRNSH_10 from "../../Projects/CHRNSH_45.15/100000.png";
import CHRNSH_11 from "../../Projects/CHRNSH_45.15/110000.png";
import CHRNSH_12 from "../../Projects/CHRNSH_45.15/120000.png";
import CHRNSH_13 from "../../Projects/CHRNSH_45.15/130000.png";
import CHRNSH_14 from "../../Projects/CHRNSH_45.15/140000.png";
import CHRNSH_15 from "../../Projects/CHRNSH_45.15/150000.png";
import CHRNSH_16 from "../../Projects/CHRNSH_45.15/160000.png";
import CHRNSH_17 from "../../Projects/CHRNSH_45.15/170000.png";
import CHRNSH_18 from "../../Projects/CHRNSH_45.15/180000.png";
import CHRNSH_19 from "../../Projects/CHRNSH_45.15/190000.png";
import CHRNSH_20 from "../../Projects/CHRNSH_45.15/200000.png";
import CHRNSH_21 from "../../Projects/CHRNSH_45.15/210000.png";
import CHRNSH_22 from "../../Projects/CHRNSH_45.15/220000.png";
import CHRNSH_23 from "../../Projects/CHRNSH_45.15/230000.png";
import CHRNSH_24 from "../../Projects/CHRNSH_45.15/240000.png";

// Массив изображений - CHRNSH_45.15
const chrnshImages = [
  CHRNSH_01, CHRNSH_02, CHRNSH_03, CHRNSH_04, CHRNSH_05, CHRNSH_06,
  CHRNSH_07, CHRNSH_08, CHRNSH_09, CHRNSH_10, CHRNSH_11, CHRNSH_12,
  CHRNSH_13, CHRNSH_14, CHRNSH_15, CHRNSH_16, CHRNSH_17, CHRNSH_18,
  CHRNSH_19, CHRNSH_20, CHRNSH_21, CHRNSH_22, CHRNSH_23, CHRNSH_24
];

import BtnLangBlack from "../../Icons/btn lang-black.svg";
import BtnLangWhite from "../../Icons/btn-lang.svg";
import Logo from "../../Icons/logo-black.svg";
import BtnMenu from "../../Icons/btn-menu.svg";
import BtnClose from "../../Icons/btn-close.svg";
import ArrowBlack from "../../Icons/Arrow-black.svg";

import Footer from "../../Components/Footer";

export default function CHRNSHPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const project = {
    id: "chrnsh",
    name: "CHRNSH 45.15",
    image: CHRNSH_Main,
    location: "Новосибирск, Россия",
    area: "45.15",
    year: "2025",
    objectPosition: "center"
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("menu-open");
  };

  const handleNavigation = (path) => {
    navigate(path);
    toggleMenu();
    if (path === "/") {
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  // Проверка на наличие изображений
  if (!chrnshImages || chrnshImages.length === 0) {
    console.error("Images not loaded");
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <div className="min-h-screen bg-black">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[140px]">
              <nav className="py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="flex items-center justify-between">
                  <button className="transition-opacity hover:opacity-80">
                    <img
                      src={BtnLangWhite}
                      alt="Сменить язык"
                      className="w-8 sm:w-10 md:w-12"
                    />
                  </button>

                  <div className="flex-1 flex justify-center">
                    <button
                      onClick={() => navigate("/")}
                      className="transition-opacity hover:opacity-80"
                    >
                      <img
                        src={Logo}
                        alt="Логотип"
                        className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] 2xl:max-w-[160px]"
                    style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      onClick={() => navigate("/contact")}
                      className="bg-white text-black px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-[27px] font-inter font-medium text-xs sm:text-sm md:text-base max-[377px]:hidden hover:bg-gray-100 transition-colors duration-200 shadow-md"
                    >
                      Связаться с нами
                    </button>
                    <button
                      className={`p-2 sm:p-3 md:p-4 transition-opacity hover:opacity-80 relative z-50 ${
                    isMenuOpen ? "opacity-0 invisible pointer-events-none" : "opacity-100 visible"
                      }`}
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

            {/* Бургер-меню */}
            <div
              className={`fixed inset-0 z-40 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${
                isMenuOpen
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-full invisible pointer-events-none"
              }`}
            >
              <div className="w-full h-full bg-white">
                <div
                  className="flex flex-col items-center justify-start pt-16 pb-12 h-full px-6 sm:px-8 md:px-12 lg:px-20 overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
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
                    </div>
                  </nav>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-32 xl:gap-40 2xl:gap-48 w-full max-w-5xl">
                    <div className="flex flex-col items-start justify-start gap-8 md:gap-10">
                      <div className="flex flex-col gap-6 md:gap-8">
                        <button
                          onClick={() => handleNavigation("/")}
                          className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium transition-colors text-left leading-tight"
                      style={{ color: '#00000099' }}
                      onMouseEnter={(e) => e.target.style.color = '#000000'}
                      onMouseLeave={(e) => e.target.style.color = '#00000099'}
                        >
                          Проекты
                        </button>
                        <button
                          onClick={() => handleNavigation("/about")}
                          className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium transition-colors text-left leading-tight"
                      style={{ color: '#00000099' }}
                      onMouseEnter={(e) => e.target.style.color = '#000000'}
                      onMouseLeave={(e) => e.target.style.color = '#00000099'}
                        >
                          О нас
                        </button>
                        <button
                          onClick={() => handleNavigation("/services")}
                          className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium transition-colors text-left leading-tight"
                      style={{ color: '#00000099' }}
                      onMouseEnter={(e) => e.target.style.color = '#000000'}
                      onMouseLeave={(e) => e.target.style.color = '#00000099'}
                        >
                          Услуги
                        </button>
                        <button
                          onClick={() => handleNavigation("/contact")}
                          className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium transition-colors text-left leading-tight"
                          style={{ color: "#00000099" }}
                          onMouseEnter={(e) => (e.target.style.color = "#000000")}
                          onMouseLeave={(e) => (e.target.style.color = "#00000099")}
                        >
                          Взаимодействие
                        </button>
                      </div>
                    </div>

                    <div className="h-px my-6 md:hidden w-full" style={{ backgroundColor: '#e5e7eb' }}></div>

                    <div className="flex flex-col items-start justify-start">
                      <div className="mb-8 md:mb-1">
                        <img src={ArrowBlack} alt="Arrow" />
                      </div>

                      <div 
                        className="text-lg sm:text-xl md:text-2xl lg:text-[22px] max-w-[320px] leading-relaxed font-inter"
                        style={{ color: '#00000099', marginTop: '20px' }}
                      >
                        Пишите нам для воплощения ваших идей
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Информация о проекте */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[140px] pb-8 sm:pb-12 md:pb-16 lg:pb-20 2xl:pb-28">
              <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-12">
                <div className="flex-1">
                  <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[120px] font-inter font-light mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 min-[1920px]:mb-16">
                CHRNSH 45</h1>
                </div>

                <div className="flex flex-col gap-6 md:gap-8 pt-8 lg:pt-0">
                  <div>
                <p className="text-white text-sm sm:text-base md:text-lg font-inter mb-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      Объект
                    </p>
                    <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium">
                      {project.area} м²
                    </p>
                  </div>

                  <div>
                <p className="text-white text-sm sm:text-base md:text-lg font-inter mb-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      Местоположение
                    </p>
                    <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium">
                      {project.location}
                    </p>
                  </div>

                  <div>
                <p className="text-white text-sm sm:text-base md:text-lg font-inter mb-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      Год проектирования
                    </p>
                    <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium">
                      {project.year}
                    </p>
              </div>
            </div>
          </div>
        </div>

        {/* Планировка на темном фоне */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 bg-black -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 2xl:-mx-[140px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[140px] py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
          <div className="container mx-auto max-w-xl">
            <img
              src={CHRNSH_Plan}
              alt="CHRNSH 45.15 - Планировка"
              className="w-full h-auto object-contain"
              style={{ display: 'block', margin: '-2px', clipPath: 'inset(2px)', transform: 'rotate(90deg)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Галерея фотографий на светлой стороне */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[140px] py-8 sm:py-12 md:py-16 lg:py-20 2xl:py-28">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-7xl space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-8">
              

              {/* Галерея изображений */}
              {/* Первое изображение - полноширинное */}
              <div className="w-full">
                <img
                  src={chrnshImages[0]}
                  alt="CHRNSH 45.15 - 1"
                  className="w-full h-auto object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Второе и третье - в две колонки */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={chrnshImages[1]}
                  alt="CHRNSH 45.15 - 2"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={chrnshImages[2]}
                  alt="CHRNSH 45.15 - 3"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Четвертое - полноширинное */}
              <div className="w-full">
                <img
                  src={chrnshImages[3]}
                  alt="CHRNSH 45.15 - 4"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Пятое, шестое, седьмое - в три колонки */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={chrnshImages[4]}
                  alt="CHRNSH 45.15 - 5"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={chrnshImages[5]}
                  alt="CHRNSH 45.15 - 6"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={chrnshImages[6]}
                  alt="CHRNSH 45.15 - 7"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Восьмое - полноширинное */}
              <div className="w-full">
                <img
                  src={chrnshImages[7]}
                  alt="CHRNSH 45.15 - 8"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Девятое и десятое - в две колонки */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={chrnshImages[8]}
                  alt="CHRNSH 45.15 - 9"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={chrnshImages[9]}
                  alt="CHRNSH 45.15 - 10"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Одиннадцатое - полноширинное */}
              <div className="w-full">
                <img
                  src={chrnshImages[10]}
                  alt="CHRNSH 45.15 - 11"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Двенадцатое и тринадцатое - в две колонки */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={chrnshImages[11]}
                  alt="CHRNSH 45.15 - 12"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={chrnshImages[12]}
                  alt="CHRNSH 45.15 - 13"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Четырнадцатое и пятнадцатое - в две колонки */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={chrnshImages[13]}
                  alt="CHRNSH 45.15 - 14"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={chrnshImages[14]}
                  alt="CHRNSH 45.15 - 15"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Шестнадцатое и семнадцатое - в две колонки */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={chrnshImages[15]}
                  alt="CHRNSH 45.15 - 16"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={chrnshImages[16]}
                  alt="CHRNSH 45.15 - 17"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Восемнадцатое и девятнадцатое - в две колонки */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={chrnshImages[17]}
                  alt="CHRNSH 45.15 - 18"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={chrnshImages[18]}
                  alt="CHRNSH 45.15 - 19"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Двадцатое и двадцать первое - в две колонки */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={chrnshImages[19]}
                  alt="CHRNSH 45.15 - 20"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={chrnshImages[20]}
                  alt="CHRNSH 45.15 - 21"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Двадцать второе - полноширинное */}
              <div className="w-full">
                <img
                  src={chrnshImages[21]}
                  alt="CHRNSH 45.15 - 22"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Двадцать третье и двадцать четвертое - в две колонки */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={chrnshImages[22]}
                  alt="CHRNSH 45.15 - 23"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={chrnshImages[23]}
                  alt="CHRNSH 45.15 - 24"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

