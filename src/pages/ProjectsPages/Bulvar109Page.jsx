import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BulvarImg from "../../Images/Projects/Bulvar.png";

// BESTUZHEVSKIJ BUL'VAR_109 - Прихожая
import Bulvar_Prihozhaya_01 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/01. Прихожая/010000.png";
import Bulvar_Prihozhaya_02 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/01. Прихожая/020000.png";
import Bulvar_Prihozhaya_03 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/01. Прихожая/030000.png";
import Bulvar_Prihozhaya_04 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/01. Прихожая/040000.png";
import Bulvar_Prihozhaya_05 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/01. Прихожая/050000.png";
import Bulvar_Prihozhaya_06 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/01. Прихожая/050001.png";
import Bulvar_Prihozhaya_07 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/01. Прихожая/060000.png";

// BESTUZHEVSKIJ BUL'VAR_109 - Кухонная зона
import Bulvar_Kuhnya_01 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/070000.png";
import Bulvar_Kuhnya_02 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/070001.png";
import Bulvar_Kuhnya_03 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/080000.png";
import Bulvar_Kuhnya_04 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/080001.png";
import Bulvar_Kuhnya_05 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/090000.png";
import Bulvar_Kuhnya_06 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/100000.png";
import Bulvar_Kuhnya_07 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/10001.png";
import Bulvar_Kuhnya_08 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/110000.png";
import Bulvar_Kuhnya_09 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/120000.png";
import Bulvar_Kuhnya_10 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/120001.png";
import Bulvar_Kuhnya_11 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/130000.png";
import Bulvar_Kuhnya_12 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/140000.png";
import Bulvar_Kuhnya_13 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/140001.png";
import Bulvar_Kuhnya_14 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/150000.png";
import Bulvar_Kuhnya_15 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/160000.png";
import Bulvar_Kuhnya_16 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/170000.png";
import Bulvar_Kuhnya_17 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/180000.png";
import Bulvar_Kuhnya_18 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/190000.png";
import Bulvar_Kuhnya_19 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/200000.png";
import Bulvar_Kuhnya_20 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/210000.png";
import Bulvar_Kuhnya_21 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/220000.png";
import Bulvar_Kuhnya_22 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/220001.png";
import Bulvar_Kuhnya_23 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/230000.png";
import Bulvar_Kuhnya_24 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/02. Кухонная зона/230001.png";

// BESTUZHEVSKIJ BUL'VAR_109 - Гостиная
import Bulvar_Gostinaya_01 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/240000.png";
import Bulvar_Gostinaya_02 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/240001.png";
import Bulvar_Gostinaya_03 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/250000.png";
import Bulvar_Gostinaya_04 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/260000.png";
import Bulvar_Gostinaya_05 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/260001.png";
import Bulvar_Gostinaya_06 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/270000.png";
import Bulvar_Gostinaya_07 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/280000.png";
import Bulvar_Gostinaya_08 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/290000.png";
import Bulvar_Gostinaya_09 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/300000.png";
import Bulvar_Gostinaya_10 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/300001.png";
import Bulvar_Gostinaya_11 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/310000.png";
import Bulvar_Gostinaya_12 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/310001.png";
import Bulvar_Gostinaya_13 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/320000.png";
import Bulvar_Gostinaya_14 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/330000.png";
import Bulvar_Gostinaya_15 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/330001.png";
import Bulvar_Gostinaya_16 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/340000.png";
import Bulvar_Gostinaya_17 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/340001.png";
import Bulvar_Gostinaya_18 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/350000.png";
import Bulvar_Gostinaya_19 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/03. Гостиная/350001.png";

// BESTUZHEVSKIJ BUL'VAR_109 - Спальня
import Bulvar_Spalnya_01 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/04. Спальня/360000.png";
import Bulvar_Spalnya_02 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/04. Спальня/360001.png";
import Bulvar_Spalnya_03 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/04. Спальня/370000.png";
import Bulvar_Spalnya_04 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/04. Спальня/370001.png";
import Bulvar_Spalnya_05 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/04. Спальня/380000.png";
import Bulvar_Spalnya_06 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/04. Спальня/380001.png";
import Bulvar_Spalnya_07 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/04. Спальня/390000.png";
import Bulvar_Spalnya_08 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/04. Спальня/400000.png";
import Bulvar_Spalnya_09 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/04. Спальня/400001.png";
import Bulvar_Spalnya_10 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/04. Спальня/410000.png";
import Bulvar_Spalnya_11 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/04. Спальня/420000.png";
import Bulvar_Spalnya_12 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/04. Спальня/430000.png";
import Bulvar_Spalnya_13 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/04. Спальня/440000.png";
import Bulvar_Spalnya_14 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/04. Спальня/440001.png";

// BESTUZHEVSKIJ BUL'VAR_109 - Ванная
import Bulvar_Vannaya_01 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/05. Ванная/450000.png";
import Bulvar_Vannaya_02 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/05. Ванная/450001.png";
import Bulvar_Vannaya_03 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/05. Ванная/460000.png";
import Bulvar_Vannaya_04 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/05. Ванная/460001.png";
import Bulvar_Vannaya_05 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/05. Ванная/470000.png";
import Bulvar_Vannaya_06 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/05. Ванная/470001.png";
import Bulvar_Vannaya_07 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/05. Ванная/480000.png";
import Bulvar_Vannaya_08 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/05. Ванная/480001.png";
import Bulvar_Vannaya_09 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/05. Ванная/490000.png";
import Bulvar_Vannaya_10 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/05. Ванная/500000.png";
import Bulvar_Vannaya_11 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/05. Ванная/500001.png";
import Bulvar_Vannaya_12 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/05. Ванная/510000.png";
import Bulvar_Vannaya_13 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/05. Ванная/510001.png";
import Bulvar_Vannaya_14 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/05. Ванная/520000.png";
import Bulvar_Vannaya_15 from "../../Projects/BESTUZHEVSKIJ BUL'VAR_109/05. Ванная/520001.png";

// Массивы изображений по блокам - BESTUZHEVSKIJ BUL'VAR_109
const bulvarPrihozhayaImages = [
  Bulvar_Prihozhaya_01, Bulvar_Prihozhaya_02, Bulvar_Prihozhaya_03, 
  Bulvar_Prihozhaya_04, Bulvar_Prihozhaya_05, Bulvar_Prihozhaya_06, Bulvar_Prihozhaya_07
];
const bulvarKuhnyaImages = [
  Bulvar_Kuhnya_01, Bulvar_Kuhnya_02, Bulvar_Kuhnya_03, Bulvar_Kuhnya_04,
  Bulvar_Kuhnya_05, Bulvar_Kuhnya_06, Bulvar_Kuhnya_07, Bulvar_Kuhnya_08,
  Bulvar_Kuhnya_09, Bulvar_Kuhnya_10, Bulvar_Kuhnya_11, Bulvar_Kuhnya_12,
  Bulvar_Kuhnya_13, Bulvar_Kuhnya_14, Bulvar_Kuhnya_15, Bulvar_Kuhnya_16,
  Bulvar_Kuhnya_17, Bulvar_Kuhnya_18, Bulvar_Kuhnya_19, Bulvar_Kuhnya_20,
  Bulvar_Kuhnya_21, Bulvar_Kuhnya_22, Bulvar_Kuhnya_23, Bulvar_Kuhnya_24
];
const bulvarGostinayaImages = [
  Bulvar_Gostinaya_01, Bulvar_Gostinaya_02, Bulvar_Gostinaya_03, Bulvar_Gostinaya_04,
  Bulvar_Gostinaya_05, Bulvar_Gostinaya_06, Bulvar_Gostinaya_07, Bulvar_Gostinaya_08,
  Bulvar_Gostinaya_09, Bulvar_Gostinaya_10, Bulvar_Gostinaya_11, Bulvar_Gostinaya_12,
  Bulvar_Gostinaya_13, Bulvar_Gostinaya_14, Bulvar_Gostinaya_15, Bulvar_Gostinaya_16,
  Bulvar_Gostinaya_17, Bulvar_Gostinaya_18, Bulvar_Gostinaya_19
];
const bulvarSpalnyaImages = [
  Bulvar_Spalnya_01, Bulvar_Spalnya_02, Bulvar_Spalnya_03, Bulvar_Spalnya_04,
  Bulvar_Spalnya_05, Bulvar_Spalnya_06, Bulvar_Spalnya_07, Bulvar_Spalnya_08,
  Bulvar_Spalnya_09, Bulvar_Spalnya_10, Bulvar_Spalnya_11, Bulvar_Spalnya_12,
  Bulvar_Spalnya_13, Bulvar_Spalnya_14
];
const bulvarVannayaImages = [
  Bulvar_Vannaya_01, Bulvar_Vannaya_02, Bulvar_Vannaya_03, Bulvar_Vannaya_04,
  Bulvar_Vannaya_05, Bulvar_Vannaya_06, Bulvar_Vannaya_07, Bulvar_Vannaya_08,
  Bulvar_Vannaya_09, Bulvar_Vannaya_10, Bulvar_Vannaya_11, Bulvar_Vannaya_12,
  Bulvar_Vannaya_13, Bulvar_Vannaya_14, Bulvar_Vannaya_15
];

import BtnLangBlack from "../../Icons/btn lang-black.svg";
import BtnLangWhite from "../../Icons/btn-lang.svg";
import Logo from "../../Icons/logo-black.svg";
import BtnMenu from "../../Icons/btn-menu.svg";
import BtnClose from "../../Icons/btn-close.svg";
import ArrowBlack from "../../Icons/Arrow-black.svg";

import Footer from "../../Components/Footer";
import ImageSlider from "../../Components/ImageSlider";

export default function Bulvar109Page() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const project = {
    id: "bulvar",
    name: "bul'var",
    image: BulvarImg,
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
      const sections = ["prihozhaya", "kuhnya", "gostinaya", "spalnya", "vannaya"];
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
  if (!bulvarPrihozhayaImages || !bulvarKuhnyaImages) {
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
                      style={{ color: '#00000099' }}
                      onMouseEnter={(e) => e.target.style.color = '#000000'}
                      onMouseLeave={(e) => e.target.style.color = '#00000099'}
                    >
                      Контакты
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-start gap-8 md:gap-10">
                  <div className="flex flex-col gap-6 md:gap-8">
                    <p className="text-base sm:text-lg md:text-xl font-inter text-[#000000B2] leading-relaxed">
                      Пишите нам для воплощения ваших идей
                    </p>
                    <button
                      onClick={() => handleNavigation("/contact")}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium transition-colors text-left leading-tight"
                      style={{ color: '#00000099', marginTop: '20px' }}
                      onMouseEnter={(e) => e.target.style.color = '#000000'}
                      onMouseLeave={(e) => e.target.style.color = '#00000099'}
                    >
                      Связаться с нами
                    </button>
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
                BESTUZHEVSKIJ<br />BUL'VAR 109</h1>
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
      </div>

      {/* Галерея фотографий на светлой стороне */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[140px] py-8 sm:py-12 md:py-16 lg:py-20 2xl:py-28">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-7xl space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-8">
              {/* Текстовый блок - Прихожая */}
              <div id="prihozhaya" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Прихожая
                </h2>
                
              </div>

              {/* Полноширинное изображение - Прихожая */}
              <div className="w-full">
                <img
                  src={bulvarPrihozhayaImages[0]}
                  alt="Bestuzhevskij Bulvar 109 - Прихожая"
                  className="w-full h-auto object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Две фотографии - Прихожая */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={bulvarPrihozhayaImages[1]}
                  alt="Bestuzhevskij Bulvar 109 - Прихожая"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={bulvarPrihozhayaImages[2]}
                  alt="Bestuzhevskij Bulvar 109 - Прихожая"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Изображение и слайдер - Прихожая */}
              <div className="w-full">
                <img
                  src={bulvarPrihozhayaImages[3]}
                  alt="Bestuzhevskij Bulvar 109 - Прихожая"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
                {/* Слайдер для пары 050000 и 050001 */}
                <div className="w-full">
                  <ImageSlider
                    lightImage={bulvarPrihozhayaImages[4]}
                    darkImage={bulvarPrihozhayaImages[5]}
                    alt="Bestuzhevskij Bulvar 109 - Прихожая"
                    className="w-full h-auto"
                  />
              </div>

              {/* Последнее изображение - Прихожая */}
              <div className="w-full">
                <img
                  src={bulvarPrihozhayaImages[6]}
                  alt="Bestuzhevskij Bulvar 109 - Прихожая"
                  className="w-full h-auto object-cover"
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
              {/* Слайдер для пары 070000 и 070001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarKuhnyaImages[0]}
                  darkImage={bulvarKuhnyaImages[1]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto"
                />
              </div>

              {/* Слайдер 080000/080001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarKuhnyaImages[2]}
                  darkImage={bulvarKuhnyaImages[3]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto"
                />
              </div>
              {/* Обычное изображение */}
              <div className="w-full">
                <img
                  src={bulvarKuhnyaImages[15]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={bulvarKuhnyaImages[5]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Две фотографии */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={bulvarKuhnyaImages[6]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={bulvarKuhnyaImages[7]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдер для пары 120000 и 120001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarKuhnyaImages[8]}
                  darkImage={bulvarKuhnyaImages[9]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={bulvarKuhnyaImages[10]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдер для пары 140000 и 140001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarKuhnyaImages[11]}
                  darkImage={bulvarKuhnyaImages[12]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto"
                />
              </div>

              {/* Две фотографии */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={bulvarKuhnyaImages[13]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={bulvarKuhnyaImages[14]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={bulvarKuhnyaImages[4]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Две фотографии */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={bulvarKuhnyaImages[16]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={bulvarKuhnyaImages[17]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Две фотографии */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={bulvarKuhnyaImages[18]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={bulvarKuhnyaImages[19]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдер для пары 220000 и 220001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarKuhnyaImages[20]}
                  darkImage={bulvarKuhnyaImages[21]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto"
                />
              </div>

              {/* Слайдер для пары 230000 и 230001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarKuhnyaImages[22]}
                  darkImage={bulvarKuhnyaImages[23]}
                  alt="Bestuzhevskij Bulvar 109 - Кухонная зона"
                  className="w-full h-auto"
                />
              </div>

              {/* Текстовый блок - Гостиная */}
              <div id="gostinaya" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Гостиная
                </h2>
             
              </div>

              {/* Фотографии гостиной */}
              {/* Слайдер для пары 240000 и 240001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarGostinayaImages[0]}
                  darkImage={bulvarGostinayaImages[1]}
                  alt="Bestuzhevskij Bulvar 109 - Гостиная"
                  className="w-full h-auto"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={bulvarGostinayaImages[2]}
                  alt="Bestuzhevskij Bulvar 109 - Гостиная"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдер для пары 260000 и 260001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarGostinayaImages[3]}
                  darkImage={bulvarGostinayaImages[4]}
                  alt="Bestuzhevskij Bulvar 109 - Гостиная"
                  className="w-full h-auto"
                />
              </div>

              {/* Две фотографии */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={bulvarGostinayaImages[5]}
                  alt="Bestuzhevskij Bulvar 109 - Гостиная"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={bulvarGostinayaImages[6]}
                  alt="Bestuzhevskij Bulvar 109 - Гостиная"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={bulvarGostinayaImages[7]}
                  alt="Bestuzhevskij Bulvar 109 - Гостиная"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайды отображаются последовательно */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarGostinayaImages[8]}
                  darkImage={bulvarGostinayaImages[9]}
                  alt="Bestuzhevskij Bulvar 109 - Гостиная"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarGostinayaImages[10]}
                  darkImage={bulvarGostinayaImages[11]}
                  alt="Bestuzhevskij Bulvar 109 - Гостиная"
                  className="w-full h-auto"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={bulvarGostinayaImages[12]}
                  alt="Bestuzhevskij Bulvar 109 - Гостиная"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдер для пары 330000 и 330001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarGostinayaImages[13]}
                  darkImage={bulvarGostinayaImages[14]}
                  alt="Bestuzhevskij Bulvar 109 - Гостиная"
                  className="w-full h-auto"
                />
              </div>

              {/* Слайдер для пары 340000 и 340001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarGostinayaImages[15]}
                  darkImage={bulvarGostinayaImages[16]}
                  alt="Bestuzhevskij Bulvar 109 - Гостиная"
                  className="w-full h-auto"
                />
              </div>

              {/* Слайдер для пары 350000 и 350001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarGostinayaImages[17]}
                  darkImage={bulvarGostinayaImages[18]}
                  alt="Bestuzhevskij Bulvar 109 - Гостиная"
                  className="w-full h-auto"
                />
              </div>

              {/* Текстовый блок - Спальня */}
              <div id="spalnya" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Спальня
                </h2>
           
              </div>

              {/* Фотографии спальни */}
              {/* Слайдер для пары 360000 и 360001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarSpalnyaImages[0]}
                  darkImage={bulvarSpalnyaImages[1]}
                  alt="Bestuzhevskij Bulvar 109 - Спальня"
                  className="w-full h-auto"
                />
              </div>

              {/* Эти изображения показываем в одной строке */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={bulvarSpalnyaImages[2]}
                  alt="Bestuzhevskij Bulvar 109 - Спальня"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={bulvarSpalnyaImages[3]}
                  alt="Bestузhevskij Bulvar 109 - Спальня"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* Следующие изображения показываем в одной строке */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={bulvarSpalnyaImages[4]}
                  alt="Bestuzhevskij Bulvar 109 - Спальня"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={bulvarSpalnyaImages[5]}
                  alt="Bestuzhevskij Bulvar 109 - Спальня"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={bulvarSpalnyaImages[6]}
                  alt="Bestuzhevskij Bulvar 109 - Спальня"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдер для пары 400000 и 400001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarSpalnyaImages[7]}
                  darkImage={bulvarSpalnyaImages[8]}
                  alt="Bestuzhevskij Bulvar 109 - Спальня"
                  className="w-full h-auto"
                />
              </div>

              {/* Две фотографии */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={bulvarSpalnyaImages[9]}
                  alt="Bestuzhevskij Bulvar 109 - Спальня"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={bulvarSpalnyaImages[10]}
                  alt="Bestuzhevskij Bulvar 109 - Спальня"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Полноширинное изображение */}
              <div className="w-full">
                <img
                  src={bulvarSpalnyaImages[11]}
                  alt="Bestuzhevskij Bulvar 109 - Спальня"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдер для пары 440000 и 440001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarSpalnyaImages[12]}
                  darkImage={bulvarSpalnyaImages[13]}
                  alt="Bestuzhevskij Bulvar 109 - Спальня"
                  className="w-full h-auto"
                />
              </div>


              {/* Текстовый блок - Ванная */}
              <div id="vannaya" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Ванная
                </h2>
               
              </div>

              {/* Фотографии ванной */}
              {/* Слайдеры отображаются по одному */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarVannayaImages[0]}
                  darkImage={bulvarVannayaImages[1]}
                  alt="Bestuzhevskij Bulvar 109 - Ванная"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarVannayaImages[2]}
                  darkImage={bulvarVannayaImages[4]}
                  alt="Bestuzhevskij Bulvar 109 - Ванная"
                  className="w-full h-auto"
                />
              </div>

              {/* Слайдер для пары 460001 и 470001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarVannayaImages[3]}
                  darkImage={bulvarVannayaImages[5]}
                  alt="Bestuzhevskij Bulvar 109 - Ванная"
                  className="w-full h-auto"
                />
              </div>

              {/* Слайдер 480000/480001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarVannayaImages[6]}
                  darkImage={bulvarVannayaImages[7]}
                  alt="Bestuzhevskij Bulvar 109 - Ванная"
                  className="w-full h-auto"
                />
              </div>
              {/* Обычное изображение */}
              <div className="w-full">
                <img
                  src={bulvarVannayaImages[8]}
                  alt="Bestuzhevskij Bulvar 109 - Ванная"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдеры отображаются последовательно */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarVannayaImages[9]}
                  darkImage={bulvarVannayaImages[10]}
                  alt="Bestuzhevskij Bulvar 109 - Ванная"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarVannayaImages[11]}
                  darkImage={bulvarVannayaImages[12]}
                  alt="Bestuzhevskij Bulvar 109 - Ванная"
                  className="w-full h-auto"
                />
              </div>

              {/* Слайдер для пары 520000 и 520001 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={bulvarVannayaImages[13]}
                  darkImage={bulvarVannayaImages[14]}
                  alt="Bestuzhevskij Bulvar 109 - Ванная"
                  className="w-full h-auto"
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
              BUL'VAR 109
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
              Гостиная
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
              Ванная
            </button>
          </nav>
        </div>
      </div>

      <Footer />
    </>
  );
}

