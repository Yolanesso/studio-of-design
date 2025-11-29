import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BeringImg from "../../Images/Projects/Bering/bering-project.png";

// BERING_109 - Прихожая
import Bering_Prihozhaya_01 from "../../Projects/BERING_109/Day/01. Прихожая/010000.png";
import Bering_Prihozhaya_02 from "../../Projects/BERING_109/Day/01. Прихожая/020000.png";
import Bering_Prihozhaya_03 from "../../Projects/BERING_109/Day/01. Прихожая/030000.png";

// BERING_109 - Кухонная зона
import Bering_Kuhnya_01 from "../../Projects/BERING_109/Day/02. Кухонная зона/040000.png";
import Bering_Kuhnya_02 from "../../Projects/BERING_109/Day/02. Кухонная зона/050000.png";
import Bering_Kuhnya_03 from "../../Projects/BERING_109/Day/02. Кухонная зона/060000.png";
import Bering_Kuhnya_04 from "../../Projects/BERING_109/Day/02. Кухонная зона/070000.png";
import Bering_Kuhnya_05 from "../../Projects/BERING_109/Day/02. Кухонная зона/080000.png";
import Bering_Kuhnya_06 from "../../Projects/BERING_109/Day/02. Кухонная зона/090000.png";
import Bering_Kuhnya_07 from "../../Projects/BERING_109/Day/02. Кухонная зона/100000.png";
import Bering_Kuhnya_08 from "../../Projects/BERING_109/Day/02. Кухонная зона/110000.png";
import Bering_Kuhnya_09 from "../../Projects/BERING_109/Day/02. Кухонная зона/120001.png";
import Bering_Kuhnya_10 from "../../Projects/BERING_109/Day/02. Кухонная зона/130001.png";
import Bering_Kuhnya_11 from "../../Projects/BERING_109/Day/02. Кухонная зона/140000.png";

// Night версии для слайдера - Кухонная зона
import Bering_Kuhnya_Night_02 from "../../Projects/BERING_109/Night/040001.png";
import Bering_Kuhnya_Night_03 from "../../Projects/BERING_109/Night/050001.png";
import Bering_Kuhnya_Night_04 from "../../Projects/BERING_109/Night/070001.png";
import Bering_Kuhnya_Night_11 from "../../Projects/BERING_109/Night/140001.png";

// BERING_109 - Гостиная зона
import Bering_Gostinaya_01 from "../../Projects/BERING_109/Day/03. Гостиная зона/150000.png";
import Bering_Gostinaya_02 from "../../Projects/BERING_109/Day/03. Гостиная зона/160000.png";
import Bering_Gostinaya_03 from "../../Projects/BERING_109/Day/03. Гостиная зона/170000.png";
import Bering_Gostinaya_04 from "../../Projects/BERING_109/Day/03. Гостиная зона/180000.png";
import Bering_Gostinaya_05 from "../../Projects/BERING_109/Day/03. Гостиная зона/190000.png";
import Bering_Gostinaya_06 from "../../Projects/BERING_109/Day/03. Гостиная зона/200000.png";

// Night версии для слайдера - Гостиная зона
import Bering_Gostinaya_Night_01 from "../../Projects/BERING_109/Night/150001.png";
import Bering_Gostinaya_Night_02 from "../../Projects/BERING_109/Night/160001.png";

// BERING_109 - Коридор
import Bering_Koridor_01 from "../../Projects/BERING_109/Day/04. Коридор/210000.png";
import Bering_Koridor_02 from "../../Projects/BERING_109/Day/04. Коридор/210001.png";
import Bering_Koridor_03 from "../../Projects/BERING_109/Day/04. Коридор/220000.png";

// BERING_109 - Душевая комната
import Bering_Dushevaya_01 from "../../Projects/BERING_109/Day/05. Душевая комната/230000.png";
import Bering_Dushevaya_02 from "../../Projects/BERING_109/Day/05. Душевая комната/240000.png";
import Bering_Dushevaya_03 from "../../Projects/BERING_109/Day/05. Душевая комната/240001.png";
import Bering_Dushevaya_04 from "../../Projects/BERING_109/Day/05. Душевая комната/250000.png";
import Bering_Dushevaya_05 from "../../Projects/BERING_109/Day/05. Душевая комната/260001.png";
import Bering_Dushevaya_06 from "../../Projects/BERING_109/Day/05. Душевая комната/270000.png";

// BERING_109 - Детская комната
import Bering_Detskaya_01 from "../../Projects/BERING_109/Day/06. Детская комната/460000.png";
import Bering_Detskaya_02 from "../../Projects/BERING_109/Day/06. Детская комната/470000.png";
import Bering_Detskaya_03 from "../../Projects/BERING_109/Day/06. Детская комната/480000.png";
import Bering_Detskaya_04 from "../../Projects/BERING_109/Day/06. Детская комната/490001.png";
import Bering_Detskaya_05 from "../../Projects/BERING_109/Day/06. Детская комната/500001.png";
import Bering_Detskaya_06 from "../../Projects/BERING_109/Day/06. Детская комната/510000.png";
import Bering_Detskaya_07 from "../../Projects/BERING_109/Day/06. Детская комната/520000.png";

// Night версии для слайдера - Детская комната
import Bering_Detskaya_Night_01 from "../../Projects/BERING_109/Night/460000.png";
import Bering_Detskaya_Night_03 from "../../Projects/BERING_109/Night/480000.png";
import Bering_Detskaya_Night_05 from "../../Projects/BERING_109/Night/500001.png";
import Bering_Detskaya_Night_07 from "../../Projects/BERING_109/Night/520000.png";

// BERING_109 - Гардеробная при спальне
import Bering_Garderob_01 from "../../Projects/BERING_109/Day/07. Гардеробная при спальне/280000.png";
import Bering_Garderob_02 from "../../Projects/BERING_109/Day/07. Гардеробная при спальне/290000.png";

// BERING_109 - Спальня
import Bering_Spalnya_01 from "../../Projects/BERING_109/Day/08. Спальня/390000.png";
import Bering_Spalnya_02 from "../../Projects/BERING_109/Day/08. Спальня/400000.png";
import Bering_Spalnya_03 from "../../Projects/BERING_109/Day/08. Спальня/410000.png";
import Bering_Spalnya_04 from "../../Projects/BERING_109/Day/08. Спальня/420000.png";
import Bering_Spalnya_05 from "../../Projects/BERING_109/Day/08. Спальня/430000.png";
import Bering_Spalnya_06 from "../../Projects/BERING_109/Day/08. Спальня/440000.png";
import Bering_Spalnya_07 from "../../Projects/BERING_109/Day/08. Спальня/450000.png";

// Night версии для слайдера - Спальня
import Bering_Spalnya_Night_02 from "../../Projects/BERING_109/Night/400001.png";
import Bering_Spalnya_Night_03 from "../../Projects/BERING_109/Night/410000.png";
import Bering_Spalnya_Night_06 from "../../Projects/BERING_109/Night/440000.png";

// BERING_109 - Ванная комната
import Bering_Vannaya_01 from "../../Projects/BERING_109/Day/09. Ванная комната/300000.png";
import Bering_Vannaya_02 from "../../Projects/BERING_109/Day/09. Ванная комната/300001.png";
import Bering_Vannaya_03 from "../../Projects/BERING_109/Day/09. Ванная комната/310000.png";
import Bering_Vannaya_04 from "../../Projects/BERING_109/Day/09. Ванная комната/320000.png";
import Bering_Vannaya_05 from "../../Projects/BERING_109/Day/09. Ванная комната/330000.png";
import Bering_Vannaya_06 from "../../Projects/BERING_109/Day/09. Ванная комната/340000.png";
import Bering_Vannaya_08 from "../../Projects/BERING_109/Day/09. Ванная комната/350000.png";
import Bering_Vannaya_09 from "../../Projects/BERING_109/Day/09. Ванная комната/360000.png";
import Bering_Vannaya_10 from "../../Projects/BERING_109/Day/09. Ванная комната/370000.png";
import Bering_Vannaya_11 from "../../Projects/BERING_109/Day/09. Ванная комната/380000.png";

// Night версии для слайдера - Ванная комната
import Bering_Vannaya_Night_03 from "../../Projects/BERING_109/Night/310000.png";
import Bering_Vannaya_Night_05 from "../../Projects/BERING_109/Night/330000.png";
import Bering_Vannaya_Night_08 from "../../Projects/BERING_109/Night/350000.png";
import Bering_Vannaya_Night_09 from "../../Projects/BERING_109/Night/360000.png";
import Bering_Vannaya_Night_10 from "../../Projects/BERING_109/Night/370000.png";

// Массивы изображений по блокам - BERING_109
const beringPrihozhayaImages = [
  Bering_Prihozhaya_01, Bering_Prihozhaya_02, Bering_Prihozhaya_03
];
const beringKuhnyaImages = [
  Bering_Kuhnya_01, Bering_Kuhnya_02, Bering_Kuhnya_03, Bering_Kuhnya_04,
  Bering_Kuhnya_05, Bering_Kuhnya_06, Bering_Kuhnya_07, Bering_Kuhnya_08,
  Bering_Kuhnya_09, Bering_Kuhnya_10, Bering_Kuhnya_11
];
const beringGostinayaImages = [
  Bering_Gostinaya_01, Bering_Gostinaya_02, Bering_Gostinaya_03, Bering_Gostinaya_04,
  Bering_Gostinaya_05, Bering_Gostinaya_06
];
const beringKoridorImages = [
  Bering_Koridor_01, Bering_Koridor_02, Bering_Koridor_03
];
const beringDushevayaImages = [
  Bering_Dushevaya_01, Bering_Dushevaya_02, Bering_Dushevaya_03, Bering_Dushevaya_04,
  Bering_Dushevaya_05, Bering_Dushevaya_06
];
const beringDetskayaImages = [
  Bering_Detskaya_01, Bering_Detskaya_02, Bering_Detskaya_03, Bering_Detskaya_04,
  Bering_Detskaya_05, Bering_Detskaya_06, Bering_Detskaya_07
];
const beringGarderobImages = [
  Bering_Garderob_01, Bering_Garderob_02
];
const beringSpalnyaImages = [
  Bering_Spalnya_01, Bering_Spalnya_02, Bering_Spalnya_03, Bering_Spalnya_04,
  Bering_Spalnya_05, Bering_Spalnya_06, Bering_Spalnya_07
];
const beringVannayaImages = [
  Bering_Vannaya_01, Bering_Vannaya_02, Bering_Vannaya_03, Bering_Vannaya_04,
  Bering_Vannaya_05, Bering_Vannaya_06, Bering_Vannaya_08,
  Bering_Vannaya_09, Bering_Vannaya_10, Bering_Vannaya_11
];

import BtnLangBlack from "../../Icons/btn lang-black.svg";
import BtnLangWhite from "../../Icons/btn-lang.svg";
import Logo from "../../Icons/logo-black.svg";
import BtnMenu from "../../Icons/btn-menu.svg";
import BtnClose from "../../Icons/btn-close.svg";
import ArrowBlack from "../../Icons/Arrow-black.svg";

import Footer from "../../Components/Footer";
import ImageSlider from "../../Components/ImageSlider";

export default function BeringPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const project = {
    id: "bering",
    name: "BERING 109",
    image: BeringImg,
    location: "Новосибирск, Россия",
    area: "109",
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

  const scrollToProjectSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // Отслеживание активной секции и прогресса прокрутки
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["prihozhaya", "kuhnya", "gostinaya", "koridor", "dushevaya", "detskaya", "garderob", "spalnya", "vannaya"];
      const scrollPosition = window.scrollY + 200;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollBottom = window.scrollY + windowHeight;

      // Проверяем, доскроллили ли мы до конца страницы (с небольшим запасом)
      const isAtBottom = scrollBottom >= documentHeight - 100;

      // Если доскроллили до конца, устанавливаем последнюю секцию как активную
      if (isAtBottom) {
        setActiveSection("vannaya");
      } else {
        // Определяем активную секцию
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i]);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      // Вычисляем прогресс прокрутки от первой до последней секции
      const firstSection = document.getElementById("prihozhaya");
      const lastSection = document.getElementById("vannaya");

      if (firstSection && lastSection) {
        const startPosition = firstSection.offsetTop;
        const endPosition = lastSection.offsetTop + lastSection.offsetHeight;
        const totalHeight = endPosition - startPosition;
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        const scrolled = scrollPosition - startPosition;
        const progress = Math.min(100, Math.max(0, (scrolled / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Проверяем при загрузке

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Проверка на наличие изображений
  if (!beringPrihozhayaImages || !beringKuhnyaImages) {
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
              className={`fixed inset-0 z-40 transition-all duration-500 ease-out transform ${
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
                BERING 109</h1>
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

          {/* GIF из Behance */}
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[140px] mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <div className="w-full max-w-4xl mx-auto">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/13158f237576915.69034761bc835.gif"
                alt="BERING 109 - Анимация"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Галерея фотографий на светлой стороне */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[140px] py-8 sm:py-12 md:py-16 lg:py-20 2xl:py-28">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-7xl space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-8">
              {/* Описание проекта */}
              <div className="text-left">
                <p className="text-base sm:text-lg md:text-xl font-inter text-black leading-relaxed">
                  Квартира создана для молодой семьи: IT-специалиста и работника beauty-сферы. Они ценят{" "}
                  <span 
                    className="inline-block transition-all duration-500 ease-in-out blur-sm hover:blur-none cursor-pointer"
                    style={{ filter: 'blur(4px)' }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'blur(0px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'blur(4px)';
                    }}
                  >
                    технологичность и эстетику
                  </span>
                  , отказываясь от визуального шума и лишних деталей. Эту идею поддерживает и заданное ими ограничение —{" "}
                  <span 
                    className="inline-block transition-all duration-500 ease-in-out blur-sm hover:blur-none cursor-pointer"
                    style={{ filter: 'blur(4px)' }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'blur(0px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'blur(4px)';
                    }}
                  >
                    минимум древесины
                  </span>
                  {" "}в отделке. Единственный тёплый материал —{" "}
                  <span 
                    className="inline-block transition-all duration-500 ease-in-out blur-sm hover:blur-none cursor-pointer"
                    style={{ filter: 'blur(4px)' }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'blur(0px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'blur(4px)';
                    }}
                  >
                    паркетная доска
                  </span>
                  {" "}— служит фоном, на котором читаются{" "}
                  <span 
                    className="inline-block transition-all duration-500 ease-in-out blur-sm hover:blur-none cursor-pointer"
                    style={{ filter: 'blur(4px)' }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'blur(0px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'blur(4px)';
                    }}
                  >
                    металлические и стеклянные элементы
                  </span>
                  .
                </p>
                <p className="text-base sm:text-lg md:text-xl font-inter text-black leading-relaxed mt-4 sm:mt-6">
                  Планировка от застройщика была рациональной, поэтому{" "}
                  <span 
                    className="inline-block transition-all duration-500 ease-in-out blur-sm hover:blur-none cursor-pointer"
                    style={{ filter: 'blur(4px)' }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'blur(0px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'blur(4px)';
                    }}
                  >
                    архитектурное вмешательство
                  </span>
                  {" "}касалось не перепланировки, а точной настройки логики пространства. Выделен{" "}
                  <span 
                    className="inline-block transition-all duration-500 ease-in-out blur-sm hover:blur-none cursor-pointer"
                    style={{ filter: 'blur(4px)' }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'blur(0px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'blur(4px)';
                    }}
                  >
                    мастер-блок
                  </span>
                  {" "}— спальня, собственная ванная и гардеробная — как{" "}
                  <span 
                    className="inline-block transition-all duration-500 ease-in-out blur-sm hover:blur-none cursor-pointer"
                    style={{ filter: 'blur(4px)' }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'blur(0px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'blur(4px)';
                    }}
                  >
                    автономный и приватный элемент
                  </span>
                  . Детская решена так же функционально, оставляя{" "}
                  <span 
                    className="inline-block transition-all duration-500 ease-in-out blur-sm hover:blur-none cursor-pointer"
                    style={{ filter: 'blur(4px)' }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'blur(0px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'blur(4px)';
                    }}
                  >
                    потенциал трансформации
                  </span>
                  {" "}в будущем. Центральный общественный блок — кухня-гостиная — становится{" "}
                  <span 
                    className="inline-block transition-all duration-500 ease-in-out blur-sm hover:blur-none cursor-pointer"
                    style={{ filter: 'blur(4px)' }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'blur(0px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'blur(4px)';
                    }}
                  >
                    местом взаимодействия семьи
                  </span>
                  .
                </p>
              </div>

              {/* Текстовый блок - Прихожая */}
              <div id="prihozhaya" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Прихожая
                </h2>
              </div>

              {/* Три фотографии - Прихожая */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={beringPrihozhayaImages[0]}
                  alt="BERING 109 - Прихожая"
                  className="w-full h-auto object-contain"
                  loading="eager"
                  decoding="async"
                />
                <img
                  src={beringPrihozhayaImages[1]}
                  alt="BERING 109 - Прихожая"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={beringPrihozhayaImages[2]}
                  alt="BERING 109 - Прихожая"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Текстовый блок - Кухонная зона */}
              <div id="kuhnya" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Кухонная зона
                </h2>
              </div>

              {/* Фотографии кухни */}
              {/* Слайдер для 040000 и 040001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={beringKuhnyaImages[0]}
                  darkImage={Bering_Kuhnya_Night_02}
                  alt="BERING 109 - Кухонная зона"
                  className="w-full h-auto"
                />
              </div>

              {/* Слайдер для 050000 и 050001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={beringKuhnyaImages[1]}
                  darkImage={Bering_Kuhnya_Night_03}
                  alt="BERING 109 - Кухонная зона"
                  className="w-full h-auto"
                />
              </div>

              {/* Три фотографии в одну строку */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={beringKuhnyaImages[2]}
                  alt="BERING 109 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={beringKuhnyaImages[4]}
                  alt="BERING 109 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={beringKuhnyaImages[5]}
                  alt="BERING 109 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдер для 070000 и 070001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={beringKuhnyaImages[3]}
                  darkImage={Bering_Kuhnya_Night_04}
                  alt="BERING 109 - Кухонная зона"
                  className="w-full h-auto"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringKuhnyaImages[6]}
                  alt="BERING 109 - Кухонная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringKuhnyaImages[7]}
                  alt="BERING 109 - Кухонная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Две фотографии */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={beringKuhnyaImages[8]}
                  alt="BERING 109 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={beringKuhnyaImages[9]}
                  alt="BERING 109 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдер для 140000 и 140001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={beringKuhnyaImages[10]}
                  darkImage={Bering_Kuhnya_Night_11}
                  alt="BERING 109 - Кухонная зона"
                  className="w-full h-auto"
                />
              </div>

              {/* Текстовый блок - Гостиная зона */}
              <div id="gostinaya" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Гостиная зона
                </h2>
              </div>

              {/* Фотографии гостиной */}
              {/* Слайдер для 150000 и 150001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={beringGostinayaImages[0]}
                  darkImage={Bering_Gostinaya_Night_01}
                  alt="BERING 109 - Гостиная зона"
                  className="w-full h-auto"
                />
              </div>

              {/* Слайдер для 160000 и 160001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={beringGostinayaImages[1]}
                  darkImage={Bering_Gostinaya_Night_02}
                  alt="BERING 109 - Гостиная зона"
                  className="w-full h-auto"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringGostinayaImages[2]}
                  alt="BERING 109 - Гостиная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringGostinayaImages[3]}
                  alt="BERING 109 - Гостиная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringGostinayaImages[4]}
                  alt="BERING 109 - Гостиная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringGostinayaImages[5]}
                  alt="BERING 109 - Гостиная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Текстовый блок - Коридор */}
              <div id="koridor" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Коридор
                </h2>
              </div>

              {/* Фотографии коридора */}
              {/* Две фотографии */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={beringKoridorImages[0]}
                  alt="BERING 109 - Коридор"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={beringKoridorImages[1]}
                  alt="BERING 109 - Коридор"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringKoridorImages[2]}
                  alt="BERING 109 - Коридор"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Текстовый блок - Душевая комната */}
              <div id="dushevaya" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Душевая комната
                </h2>
              </div>

              {/* Фотографии душевой */}
              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringDushevayaImages[0]}
                  alt="BERING 109 - Душевая комната"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Две фотографии */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={beringDushevayaImages[1]}
                  alt="BERING 109 - Душевая комната"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={beringDushevayaImages[2]}
                  alt="BERING 109 - Душевая комната"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringDushevayaImages[3]}
                  alt="BERING 109 - Душевая комната"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringDushevayaImages[4]}
                  alt="BERING 109 - Душевая комната"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringDushevayaImages[5]}
                  alt="BERING 109 - Душевая комната"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Текстовый блок - Детская комната */}
              <div id="detskaya" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Детская комната
                </h2>
              </div>

              {/* Фотографии детской */}
              {/* Слайдер для 460000 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={beringDetskayaImages[0]}
                  darkImage={Bering_Detskaya_Night_01}
                  alt="BERING 109 - Детская комната"
                  className="w-full h-auto"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringDetskayaImages[1]}
                  alt="BERING 109 - Детская комната"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдер для 480000 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={beringDetskayaImages[2]}
                  darkImage={Bering_Detskaya_Night_03}
                  alt="BERING 109 - Детская комната"
                  className="w-full h-auto"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringDetskayaImages[3]}
                  alt="BERING 109 - Детская комната"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдер для 500001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={beringDetskayaImages[4]}
                  darkImage={Bering_Detskaya_Night_05}
                  alt="BERING 109 - Детская комната"
                  className="w-full h-auto"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringDetskayaImages[5]}
                  alt="BERING 109 - Детская комната"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдер для 520000 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={beringDetskayaImages[6]}
                  darkImage={Bering_Detskaya_Night_07}
                  alt="BERING 109 - Детская комната"
                  className="w-full h-auto"
                />
              </div>

              {/* Текстовый блок - Гардеробная при спальне */}
              <div id="garderob" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Гардеробная при спальне
                </h2>
              </div>

              {/* Фотографии гардеробной */}
              {/* Две фотографии */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={beringGarderobImages[0]}
                  alt="BERING 109 - Гардеробная при спальне"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={beringGarderobImages[1]}
                  alt="BERING 109 - Гардеробная при спальне"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Текстовый блок - Спальня */}
              <div id="spalnya" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Спальня
                </h2>
              </div>

              {/* Фотографии спальни */}
              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringSpalnyaImages[0]}
                  alt="BERING 109 - Спальня"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдер для 400000 и 400001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={beringSpalnyaImages[1]}
                  darkImage={Bering_Spalnya_Night_02}
                  alt="BERING 109 - Спальня"
                  className="w-full h-auto"
                />
              </div>

              {/* Слайдер для 410000 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={beringSpalnyaImages[2]}
                  darkImage={Bering_Spalnya_Night_03}
                  alt="BERING 109 - Спальня"
                  className="w-full h-auto"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringSpalnyaImages[3]}
                  alt="BERING 109 - Спальня"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringSpalnyaImages[4]}
                  alt="BERING 109 - Спальня"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдер для 440000 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={beringSpalnyaImages[5]}
                  darkImage={Bering_Spalnya_Night_06}
                  alt="BERING 109 - Спальня"
                  className="w-full h-auto"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringSpalnyaImages[6]}
                  alt="BERING 109 - Спальня"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Текстовый блок - Ванная комната */}
              <div id="vannaya" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Ванная комната
                </h2>
              </div>

              {/* Фотографии ванной */}
              {/* Две фотографии */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={beringVannayaImages[0]}
                  alt="BERING 109 - Ванная комната"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={beringVannayaImages[1]}
                  alt="BERING 109 - Ванная комната"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Две фотографии - 310000 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={beringVannayaImages[2]}
                  alt="BERING 109 - Ванная комната"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={Bering_Vannaya_Night_03}
                  alt="BERING 109 - Ванная комната"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringVannayaImages[3]}
                  alt="BERING 109 - Ванная комната"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдер для 330000 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={beringVannayaImages[4]}
                  darkImage={Bering_Vannaya_Night_05}
                  alt="BERING 109 - Ванная комната"
                  className="w-full h-auto"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringVannayaImages[5]}
                  alt="BERING 109 - Ванная комната"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдер для 350000 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={beringVannayaImages[6]}
                  darkImage={Bering_Vannaya_Night_08}
                  alt="BERING 109 - Ванная комната"
                  className="w-full h-auto"
                />
              </div>

              {/* Слайдер для 360000 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={beringVannayaImages[7]}
                  darkImage={Bering_Vannaya_Night_09}
                  alt="BERING 109 - Ванная комната"
                  className="w-full h-auto"
                />
              </div>

              {/* Слайдер для 370000 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={beringVannayaImages[8]}
                  darkImage={Bering_Vannaya_Night_10}
                  alt="BERING 109 - Ванная комната"
                  className="w-full h-auto"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={beringVannayaImages[9]}
                  alt="BERING 109 - Ванная комната"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Навигационное меню проекта - с возможностью открытия/закрытия */}
      <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 2xl:bottom-16 right-2 sm:right-4 md:right-6 lg:right-8 xl:right-10 2xl:right-12 z-40">
        <div
          onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
          className="bg-gray-200/50 backdrop-blur-md rounded-xl p-3 sm:p-3.5 md:p-4 shadow-2xl transition-all duration-300 ease-in-out cursor-pointer"
          style={{
            backgroundColor: 'rgba(229, 231, 235, 0.5)',
          }}
        >
          {/* Заголовок с кнопкой */}
          <div className="flex items-center justify-between mb-1 sm:mb-1.5">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-inter font-medium text-gray-900">
              BERING 109
            </h3>
            <div
              className="ml-2 transition-transform duration-300 ease-in-out"
              style={{
                transform: isNavMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'
              }}
            >
              <img
                src={ArrowBlack}
                alt={isNavMenuOpen ? "Закрыть меню" : "Открыть меню"}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </div>
          </div>

          {/* Разделительная линия с прогрессом */}
          <div className={`w-2/3 h-px bg-gray-300 mb-2 sm:mb-3 relative overflow-hidden transition-all duration-300 ease-in-out ${
            isNavMenuOpen ? 'opacity-100' : 'opacity-100'
          }`}>
            <div
              className="h-full bg-gray-800 transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>

          {/* Список секций с анимацией */}
          <nav className={`flex flex-col space-y-1.5 sm:space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
            isNavMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
          }`}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollToProjectSection("prihozhaya");
                setIsNavMenuOpen(false);
              }}
              className={`text-left font-inter text-[10px] sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                activeSection === "prihozhaya" ? "font-bold" : "font-normal"
              }`}
            >
              Прихожая
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollToProjectSection("kuhnya");
                setIsNavMenuOpen(false);
              }}
              className={`text-left font-inter text-[10px] sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                activeSection === "kuhnya" ? "font-bold" : "font-normal"
              }`}
            >
              Кухонная зона
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollToProjectSection("gostinaya");
                setIsNavMenuOpen(false);
              }}
              className={`text-left font-inter text-[10px] sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                activeSection === "gostinaya" ? "font-bold" : "font-normal"
              }`}
            >
              Гостиная зона
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollToProjectSection("koridor");
                setIsNavMenuOpen(false);
              }}
              className={`text-left font-inter text-[10px] sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                activeSection === "koridor" ? "font-bold" : "font-normal"
              }`}
            >
              Коридор
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollToProjectSection("dushevaya");
                setIsNavMenuOpen(false);
              }}
              className={`text-left font-inter text-[10px] sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                activeSection === "dushevaya" ? "font-bold" : "font-normal"
              }`}
            >
              Душевая комната
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollToProjectSection("detskaya");
                setIsNavMenuOpen(false);
              }}
              className={`text-left font-inter text-[10px] sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                activeSection === "detskaya" ? "font-bold" : "font-normal"
              }`}
            >
              Детская комната
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollToProjectSection("garderob");
                setIsNavMenuOpen(false);
              }}
              className={`text-left font-inter text-[10px] sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                activeSection === "garderob" ? "font-bold" : "font-normal"
              }`}
            >
              Гардеробная при спальне
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollToProjectSection("spalnya");
                setIsNavMenuOpen(false);
              }}
              className={`text-left font-inter text-[10px] sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                activeSection === "spalnya" ? "font-bold" : "font-normal"
              }`}
            >
              Спальня
            </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                scrollToProjectSection("vannaya");
                  setIsNavMenuOpen(false);
                }}
                className={`text-left font-inter text-[10px] sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                activeSection === "vannaya" ? "font-bold" : "font-normal"
                }`}
              >
              Ванная комната
              </button>
          </nav>
        </div>
      </div>

      <Footer />
    </>
  );
}

