import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// MO68_94 - используем первое изображение как главное
import MO68_Main from "../../Projects/MO68_94/01. Прихожая/010000.png";

// Планировка
import MO68_Plan from "../../Projects/MO68_94/МО_68_ПЛАНИРОВКА.png";

// MO68_94 - Прихожая
import MO68_Prihozhaya_01 from "../../Projects/MO68_94/01. Прихожая/010000.png";
import MO68_Prihozhaya_02 from "../../Projects/MO68_94/01. Прихожая/020000.png";
import MO68_Prihozhaya_03 from "../../Projects/MO68_94/01. Прихожая/030000.png";
import MO68_Prihozhaya_04 from "../../Projects/MO68_94/01. Прихожая/040000.png";
import MO68_Prihozhaya_05 from "../../Projects/MO68_94/01. Прихожая/050000.png";

// Night версия для слайдера - Прихожая
import MO68_Prihozhaya_Night_04 from "../../Projects/MO68_94/01. Прихожая/040001.png";

// MO68_94 - Ванная комната
import MO68_Vannaya_01 from "../../Projects/MO68_94/02. Ванная комната/060000.png";
import MO68_Vannaya_02 from "../../Projects/MO68_94/02. Ванная комната/070001.png";
import MO68_Vannaya_03 from "../../Projects/MO68_94/02. Ванная комната/070002.png";
import MO68_Vannaya_04 from "../../Projects/MO68_94/02. Ванная комната/080000.png";
import MO68_Vannaya_05 from "../../Projects/MO68_94/02. Ванная комната/090000.png";
import MO68_Vannaya_06 from "../../Projects/MO68_94/02. Ванная комната/100000.png";
import MO68_Vannaya_07 from "../../Projects/MO68_94/02. Ванная комната/110000.png";

// MO68_94 - Кухонная зона
import MO68_Kuhnya_01 from "../../Projects/MO68_94/03. Кухонная зона/120000.png";
import MO68_Kuhnya_02 from "../../Projects/MO68_94/03. Кухонная зона/130000.png";
import MO68_Kuhnya_03 from "../../Projects/MO68_94/03. Кухонная зона/140000.png";
import MO68_Kuhnya_04 from "../../Projects/MO68_94/03. Кухонная зона/150000.png";
import MO68_Kuhnya_05 from "../../Projects/MO68_94/03. Кухонная зона/160000.png";
import MO68_Kuhnya_06 from "../../Projects/MO68_94/03. Кухонная зона/170000.png";
import MO68_Kuhnya_07 from "../../Projects/MO68_94/03. Кухонная зона/180000.png";
import MO68_Kuhnya_08 from "../../Projects/MO68_94/03. Кухонная зона/260000.png";
import MO68_Kuhnya_09 from "../../Projects/MO68_94/03. Кухонная зона/520000.png";

// MO68_94 - Гостиная зона
import MO68_Gostinaya_01 from "../../Projects/MO68_94/04. Гостиная зона/190000.png";
import MO68_Gostinaya_02 from "../../Projects/MO68_94/04. Гостиная зона/200000.png";
import MO68_Gostinaya_03 from "../../Projects/MO68_94/04. Гостиная зона/210000.png";
import MO68_Gostinaya_04 from "../../Projects/MO68_94/04. Гостиная зона/220000.png";
import MO68_Gostinaya_05 from "../../Projects/MO68_94/04. Гостиная зона/230000.png";
import MO68_Gostinaya_06 from "../../Projects/MO68_94/04. Гостиная зона/240000.png";
import MO68_Gostinaya_07 from "../../Projects/MO68_94/04. Гостиная зона/250000.png";
import MO68_Gostinaya_08 from "../../Projects/MO68_94/04. Гостиная зона/530000.png";

// MO68_94 - Гостевая спальня
import MO68_Gostevaya_01 from "../../Projects/MO68_94/05. Гостевая спальня/270000.png";
import MO68_Gostevaya_02 from "../../Projects/MO68_94/05. Гостевая спальня/280000.png";
import MO68_Gostevaya_03 from "../../Projects/MO68_94/05. Гостевая спальня/290000.png";
import MO68_Gostevaya_04 from "../../Projects/MO68_94/05. Гостевая спальня/300000.png";
import MO68_Gostevaya_05 from "../../Projects/MO68_94/05. Гостевая спальня/310000.png";
import MO68_Gostevaya_06 from "../../Projects/MO68_94/05. Гостевая спальня/320000.png";

// MO68_94 - Кабинет
import MO68_Kabinet_01 from "../../Projects/MO68_94/06. Кабинет/330000.png";
import MO68_Kabinet_02 from "../../Projects/MO68_94/06. Кабинет/340000.png";
import MO68_Kabinet_03 from "../../Projects/MO68_94/06. Кабинет/350000.png";
import MO68_Kabinet_04 from "../../Projects/MO68_94/06. Кабинет/360000.png";
import MO68_Kabinet_05 from "../../Projects/MO68_94/06. Кабинет/370000.png";

// MO68_94 - Спальня
import MO68_Spalnya_01 from "../../Projects/MO68_94/07. Спальня/380000.png";
import MO68_Spalnya_02 from "../../Projects/MO68_94/07. Спальня/390000.png";
import MO68_Spalnya_03 from "../../Projects/MO68_94/07. Спальня/400000.png";
import MO68_Spalnya_04 from "../../Projects/MO68_94/07. Спальня/410000.png";
import MO68_Spalnya_05 from "../../Projects/MO68_94/07. Спальня/420000.png";
import MO68_Spalnya_06 from "../../Projects/MO68_94/07. Спальня/430000.png";

// MO68_94 - Гардеробная
import MO68_Garderob_01 from "../../Projects/MO68_94/08. Гардеробная/440000.png";
import MO68_Garderob_02 from "../../Projects/MO68_94/08. Гардеробная/450000.png";
import MO68_Garderob_03 from "../../Projects/MO68_94/08. Гардеробная/460000.png";

// MO68_94 - Санузел при спальне
import MO68_Sanuzel_01 from "../../Projects/MO68_94/09. Санузел при спальне/470000.png";
import MO68_Sanuzel_02 from "../../Projects/MO68_94/09. Санузел при спальне/480000.png";
import MO68_Sanuzel_03 from "../../Projects/MO68_94/09. Санузел при спальне/490000.png";
import MO68_Sanuzel_04 from "../../Projects/MO68_94/09. Санузел при спальне/500000.png";
import MO68_Sanuzel_05 from "../../Projects/MO68_94/09. Санузел при спальне/510000.png";

// Массивы изображений по блокам - MO68_94
const mo68PrihozhayaImages = [
  MO68_Prihozhaya_01, MO68_Prihozhaya_02, MO68_Prihozhaya_03,
  MO68_Prihozhaya_05
];
const mo68VannayaImages = [
  MO68_Vannaya_01, MO68_Vannaya_02, MO68_Vannaya_03, MO68_Vannaya_04,
  MO68_Vannaya_05, MO68_Vannaya_06, MO68_Vannaya_07
];
const mo68KuhnyaImages = [
  MO68_Kuhnya_01, MO68_Kuhnya_02, MO68_Kuhnya_03, MO68_Kuhnya_04,
  MO68_Kuhnya_05, MO68_Kuhnya_06, MO68_Kuhnya_07, MO68_Kuhnya_08, MO68_Kuhnya_09
];
const mo68GostinayaImages = [
  MO68_Gostinaya_01, MO68_Gostinaya_02, MO68_Gostinaya_03, MO68_Gostinaya_04,
  MO68_Gostinaya_05, MO68_Gostinaya_06, MO68_Gostinaya_07, MO68_Gostinaya_08
];
const mo68GostevayaImages = [
  MO68_Gostevaya_01, MO68_Gostevaya_02, MO68_Gostevaya_03, MO68_Gostevaya_04,
  MO68_Gostevaya_05, MO68_Gostevaya_06
];
const mo68KabinetImages = [
  MO68_Kabinet_01, MO68_Kabinet_02, MO68_Kabinet_03, MO68_Kabinet_04, MO68_Kabinet_05
];
const mo68SpalnyaImages = [
  MO68_Spalnya_01, MO68_Spalnya_02, MO68_Spalnya_03, MO68_Spalnya_04,
  MO68_Spalnya_05, MO68_Spalnya_06
];
const mo68GarderobImages = [
  MO68_Garderob_01, MO68_Garderob_02, MO68_Garderob_03
];
const mo68SanuzelImages = [
  MO68_Sanuzel_01, MO68_Sanuzel_02, MO68_Sanuzel_03, MO68_Sanuzel_04, MO68_Sanuzel_05
];

import BtnLangBlack from "../../Icons/btn lang-black.svg";
import BtnLangWhite from "../../Icons/btn-lang.svg";
import Logo from "../../Icons/logo-black.svg";
import BtnMenu from "../../Icons/btn-menu.svg";
import BtnClose from "../../Icons/btn-close.svg";
import ArrowBlack from "../../Icons/Arrow-black.svg";

import Footer from "../../Components/Footer";
import ImageSlider from "../../Components/ImageSlider";

export default function MO68Page() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const project = {
    id: "mo68",
    name: "MO68 94",
    image: MO68_Main,
    location: "Новосибирск",
    area: "94",
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
      const sections = ["prihozhaya", "vannaya", "kuhnya", "gostinaya", "gostevaya", "kabinet", "spalnya", "garderob", "sanuzel"];
      const scrollPosition = window.scrollY + 200;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollBottom = window.scrollY + windowHeight;

      // Проверяем, доскроллили ли мы до конца страницы (с небольшим запасом)
      const isAtBottom = scrollBottom >= documentHeight - 100;

      // Если доскроллили до конца, устанавливаем последнюю секцию как активную
      if (isAtBottom) {
        setActiveSection("sanuzel");
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
      const lastSection = document.getElementById("sanuzel");

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
  if (!mo68PrihozhayaImages || !mo68KuhnyaImages) {
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
                MO68</h1>
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
          <div className="container mx-auto max-w-[1296px]">
            <img
              src={MO68_Plan}
              alt="MO68 94 - Планировка"
              className="w-full h-auto object-contain"
              style={{ display: 'block', margin: '-2px', clipPath: 'inset(2px)' }}
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
            <div className="w-full max-w-[1600px] space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-8">
              

              {/* Текстовый блок - Прихожая */}
              <div id="prihozhaya" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Прихожая
                </h2>
              </div>

              {/* Фотографии прихожей */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={mo68PrihozhayaImages[0]}
                  alt="MO68 94 - Прихожая"
                  className="w-full h-auto object-contain"
                  loading="eager"
                  decoding="async"
                />
                <img
                  src={mo68PrihozhayaImages[1]}
                  alt="MO68 94 - Прихожая"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full">
                <img
                  src={mo68PrihozhayaImages[2]}
                  alt="MO68 94 - Прихожая"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full">
                <img
                  src={mo68PrihozhayaImages[4]}
                  alt="MO68 94 - Прихожая"
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
              <div className="w-full">
                <img
                  src={mo68VannayaImages[0]}
                  alt="MO68 94 - Ванная комната"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Слайдер для 070001 и 070002 */}
              <div className="w-full">
                <ImageSlider
                  lightImage={mo68VannayaImages[2]}
                  darkImage={mo68VannayaImages[1]}
                  alt="MO68 94 - Ванная комната"
                  className="w-full h-auto"
                />
              </div>

              <div className="w-full">
                <img
                  src={mo68VannayaImages[3]}
                  alt="MO68 94 - Ванная комната"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={mo68VannayaImages[4]}
                  alt="MO68 94 - Ванная комната"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={mo68VannayaImages[5]}
                  alt="MO68 94 - Ванная комната"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full">
                <img
                  src={mo68VannayaImages[6]}
                  alt="MO68 94 - Ванная комната"
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
              <div className="w-full">
                <img
                  src={mo68KuhnyaImages[0]}
                  alt="MO68 94 - Кухонная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={mo68KuhnyaImages[1]}
                  alt="MO68 94 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={mo68KuhnyaImages[2]}
                  alt="MO68 94 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full">
                <img
                  src={mo68KuhnyaImages[3]}
                  alt="MO68 94 - Кухонная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full">
                <img
                  src={mo68KuhnyaImages[4]}
                  alt="MO68 94 - Кухонная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={mo68KuhnyaImages[5]}
                  alt="MO68 94 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={mo68KuhnyaImages[6]}
                  alt="MO68 94 - Кухонная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full">
                <img
                  src={mo68KuhnyaImages[7]}
                  alt="MO68 94 - Кухонная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full">
                <img
                  src={mo68KuhnyaImages[8]}
                  alt="MO68 94 - Кухонная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Текстовый блок - Гостиная зона */}
              <div id="gostinaya" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Гостиная зона
                </h2>
              </div>

              {/* Фотографии гостиной */}
              <div className="w-full">
                <img
                  src={mo68GostinayaImages[0]}
                  alt="MO68 94 - Гостиная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={mo68GostinayaImages[1]}
                  alt="MO68 94 - Гостиная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={mo68GostinayaImages[2]}
                  alt="MO68 94 - Гостиная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full">
                <img
                  src={mo68GostinayaImages[3]}
                  alt="MO68 94 - Гостиная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full">
                <img
                  src={mo68GostinayaImages[4]}
                  alt="MO68 94 - Гостиная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={mo68GostinayaImages[5]}
                  alt="MO68 94 - Гостиная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={mo68GostinayaImages[6]}
                  alt="MO68 94 - Гостиная зона"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full">
                <img
                  src={mo68GostinayaImages[7]}
                  alt="MO68 94 - Гостиная зона"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Текстовый блок - Гостевая спальня */}
              <div id="gostevaya" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Гостевая спальня
                </h2>
              </div>

              {/* Фотографии гостевой спальни */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={mo68GostevayaImages[0]}
                  alt="MO68 94 - Гостевая спальня"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={mo68GostevayaImages[1]}
                  alt="MO68 94 - Гостевая спальня"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full">
                <img
                  src={mo68GostevayaImages[2]}
                  alt="MO68 94 - Гостевая спальня"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={mo68GostevayaImages[3]}
                  alt="MO68 94 - Гостевая спальня"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={mo68GostevayaImages[4]}
                  alt="MO68 94 - Гостевая спальня"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full">
                <img
                  src={mo68GostevayaImages[5]}
                  alt="MO68 94 - Гостевая спальня"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Текстовый блок - Кабинет */}
              <div id="kabinet" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Кабинет
                </h2>
              </div>

              {/* Фотографии кабинета */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={mo68KabinetImages[0]}
                  alt="MO68 94 - Кабинет"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={mo68KabinetImages[1]}
                  alt="MO68 94 - Кабинет"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full">
                <img
                  src={mo68KabinetImages[2]}
                  alt="MO68 94 - Кабинет"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={mo68KabinetImages[3]}
                  alt="MO68 94 - Кабинет"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={mo68KabinetImages[4]}
                  alt="MO68 94 - Кабинет"
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
              <div className="w-full">
                <img
                  src={mo68SpalnyaImages[0]}
                  alt="MO68 94 - Спальня"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={mo68SpalnyaImages[1]}
                  alt="MO68 94 - Спальня"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={mo68SpalnyaImages[2]}
                  alt="MO68 94 - Спальня"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full">
                <img
                  src={mo68SpalnyaImages[3]}
                  alt="MO68 94 - Спальня"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={mo68SpalnyaImages[4]}
                  alt="MO68 94 - Спальня"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={mo68SpalnyaImages[5]}
                  alt="MO68 94 - Спальня"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Текстовый блок - Гардеробная */}
              <div id="garderob" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Гардеробная
                </h2>
              </div>

              {/* Фотографии гардеробной */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={mo68GarderobImages[0]}
                  alt="MO68 94 - Гардеробная"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={mo68GarderobImages[1]}
                  alt="MO68 94 - Гардеробная"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={mo68GarderobImages[2]}
                  alt="MO68 94 - Гардеробная"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Текстовый блок - Санузел при спальне */}
              <div id="sanuzel" className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-semibold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  Санузел при спальне
                </h2>
              </div>

              {/* Фотографии санузла */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={mo68SanuzelImages[0]}
                  alt="MO68 94 - Санузел при спальне"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={mo68SanuzelImages[1]}
                  alt="MO68 94 - Санузел при спальне"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="w-full">
                <img
                  src={mo68SanuzelImages[2]}
                  alt="MO68 94 - Санузел при спальне"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                <img
                  src={mo68SanuzelImages[3]}
                  alt="MO68 94 - Санузел при спальне"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={mo68SanuzelImages[4]}
                  alt="MO68 94 - Санузел при спальне"
                  className="w-full h-auto object-contain"
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
              MO68 94
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
                scrollToProjectSection("vannaya");
                setIsNavMenuOpen(false);
              }}
              className={`text-left font-inter text-[10px] sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                activeSection === "vannaya" ? "font-bold" : "font-normal"
              }`}
            >
              Ванная комната
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
                scrollToProjectSection("gostevaya");
                setIsNavMenuOpen(false);
              }}
              className={`text-left font-inter text-[10px] sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                activeSection === "gostevaya" ? "font-bold" : "font-normal"
              }`}
            >
              Гостевая спальня
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollToProjectSection("kabinet");
                setIsNavMenuOpen(false);
              }}
              className={`text-left font-inter text-[10px] sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                activeSection === "kabinet" ? "font-bold" : "font-normal"
              }`}
            >
              Кабинет
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
                scrollToProjectSection("garderob");
                setIsNavMenuOpen(false);
              }}
              className={`text-left font-inter text-[10px] sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                activeSection === "garderob" ? "font-bold" : "font-normal"
              }`}
            >
              Гардеробная
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollToProjectSection("sanuzel");
                setIsNavMenuOpen(false);
              }}
              className={`text-left font-inter text-[10px] sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                activeSection === "sanuzel" ? "font-bold" : "font-normal"
              }`}
            >
              Санузел при спальне
            </button>
          </nav>
        </div>
      </div>

      <Footer />
    </>
  );
}

