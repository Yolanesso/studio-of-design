import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BulvarImg from "../Images/Projects/Bulvar.png";
import BalanceImg from "../Images/Projects/Balance/balance-project.png";
import BeringImg from "../Images/Projects/Bering/bering-project.png";
import Balance73 from "../Images/Projects/Balance73.png";

import Balance73_01 from "../Projects/BALANCE 73/01. День/010000.png";
import Balance73_02 from "../Projects/BALANCE 73/01. День/020000.png";
import Balance73_03 from "../Projects/BALANCE 73/01. День/030000.png";
import Balance73_04 from "../Projects/BALANCE 73/01. День/040000.png";
import Balance73_05 from "../Projects/BALANCE 73/01. День/050000.png";
import Balance73_06 from "../Projects/BALANCE 73/01. День/060000.png";
import Balance73_07 from "../Projects/BALANCE 73/01. День/070000.png";
import Balance73_08 from "../Projects/BALANCE 73/01. День/080000.png";
import Balance73_09 from "../Projects/BALANCE 73/01. День/090000.png";
import Balance73_10 from "../Projects/BALANCE 73/01. День/100000.png";
import Balance73_11 from "../Projects/BALANCE 73/01. День/110000.png";
import Balance73_12 from "../Projects/BALANCE 73/01. День/120000.png";
import Balance73_13 from "../Projects/BALANCE 73/01. День/130000.png";
import Balance73_14 from "../Projects/BALANCE 73/01. День/140000.png";
import Balance73_15 from "../Projects/BALANCE 73/01. День/150000.png";
import Balance73_16 from "../Projects/BALANCE 73/01. День/160000.png";
import Balance73_17 from "../Projects/BALANCE 73/01. День/170000.png";
import Balance73_18 from "../Projects/BALANCE 73/01. День/180000.png";
import Balance73_19 from "../Projects/BALANCE 73/01. День/190000.png";
import Balance73_20 from "../Projects/BALANCE 73/01. День/200000.png";
import Balance73_21 from "../Projects/BALANCE 73/01. День/210000.png";
import Balance73_22 from "../Projects/BALANCE 73/01. День/220000.png";
import Balance73_23 from "../Projects/BALANCE 73/01. День/230000.png";
import Balance73_24 from "../Projects/BALANCE 73/01. День/240000.png";
import Balance73_25 from "../Projects/BALANCE 73/01. День/250000.png";
import Balance73_26 from "../Projects/BALANCE 73/01. День/260000.png";
import Balance73_27 from "../Projects/BALANCE 73/01. День/270000.png";
import Balance73_28 from "../Projects/BALANCE 73/01. День/280000.png";
import Balance73_29 from "../Projects/BALANCE 73/01. День/290000.png";
import Balance73_30 from "../Projects/BALANCE 73/01. День/300000.png";
import Balance73_31 from "../Projects/BALANCE 73/01. День/310000.png";
import Balance73_32 from "../Projects/BALANCE 73/01. День/320000.png";
import Balance73_33 from "../Projects/BALANCE 73/01. День/330000.png";
import Balance73_34 from "../Projects/BALANCE 73/01. День/340000.png";
import Balance73_35 from "../Projects/BALANCE 73/01. День/350000.png";
import Balance73_36 from "../Projects/BALANCE 73/01. День/360000.png";
import Balance73_37 from "../Projects/BALANCE 73/01. День/370000.png";
import Balance73_38 from "../Projects/BALANCE 73/01. День/380000.png";
import Balance73_39 from "../Projects/BALANCE 73/01. День/390000.png";
import Balance73_40 from "../Projects/BALANCE 73/01. День/400000.png";
import Balance73_41 from "../Projects/BALANCE 73/01. День/410000.png";
import Balance73_42 from "../Projects/BALANCE 73/01. День/420000.png";
import Balance73_43 from "../Projects/BALANCE 73/01. День/430000.png";
import Balance73_44 from "../Projects/BALANCE 73/01. День/440000.png";
import Balance73_45 from "../Projects/BALANCE 73/01. День/450000.png";

const balance73Images = [
  Balance73_01, Balance73_02, Balance73_03, Balance73_04, Balance73_05,
  Balance73_06, Balance73_07, Balance73_08, Balance73_09, Balance73_10,
  Balance73_11, Balance73_12, Balance73_13, Balance73_14, Balance73_15,
  Balance73_16, Balance73_17, Balance73_18, Balance73_19, Balance73_20,
  Balance73_21, Balance73_22, Balance73_23, Balance73_24, Balance73_25,
  Balance73_26, Balance73_27, Balance73_28, Balance73_29, Balance73_30,
  Balance73_31, Balance73_32, Balance73_33, Balance73_34, Balance73_35,
  Balance73_36, Balance73_37, Balance73_38, Balance73_39, Balance73_40,
  Balance73_41, Balance73_42, Balance73_43, Balance73_44, Balance73_45
];

import BtnLangBlack from "../Icons/btn lang-black.svg";
import BtnLangWhite from "../Icons/btn-lang.svg";
import Logo from "../Icons/logo-black.svg";
import LogoWhite from "../Icons/logo-white.svg";
import BtnMenu from "../Icons/btn-menu.svg";
import BtnMenuBlack from "../Icons/btn menu-black.svg";
import BtnClose from "../Icons/btn-close.svg";
import ArrowBlack from "../Icons/Arrow-black.svg";

import Footer from "../Components/Footer";

// База данных проектов
const projects = [
  {
    id: "bulvar",
    name: "bul'var",
    image: BulvarImg,
    location: "Новосибирск, Россия",
    area: "109",
    year: "2024",
    objectPosition: "center"
  },
  {
    id: "balance",
    name: "balance",
    image: BalanceImg,
    location: "Новосибирск, Россия",
    area: "98",
    year: "2025",
    objectPosition: "center 70%"
  },
  {
    id: "bering",
    name: "Bering",
    image: BeringImg,
    location: "Новосибирск",
    area: "110",
    year: "2025",
    objectPosition: "center"
  },
  {
    id: "balance73",
    name: "Balance",
    image: Balance73,
    location: "Новосибирск",
    area: "73",
    year: "2024",
    objectPosition: "center 70%"
  }
];

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const project = projects.find(p => p.id === projectId);

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

  const scrollToProjectSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
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

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-inter mb-4">Проект не найден</h1>
          <button
            onClick={() => navigate("/projects")}
            className="text-amber-600 hover:text-amber-700 font-inter"
          >
            Вернуться к проектам
          </button>
        </div>
      </div>
    );
  }

  // Специальный дизайн для Balance73
  const isBalance73 = projectId === "balance73";

  // Отслеживание активной секции и прогресса прокрутки для Balance73
  useEffect(() => {
    if (!isBalance73) return;

    const handleScroll = () => {
      const sections = ["prihozhaya", "kuhnya", "gostinaya", "vannaya", "master"];
      const scrollPosition = window.scrollY + 200;

      // Определяем активную секцию
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }

      // Вычисляем прогресс прокрутки от первой до последней секции
      const firstSection = document.getElementById("prihozhaya");
      const lastSection = document.getElementById("master");
      
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
  }, [isBalance73]);

  if (isBalance73) {
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

          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[140px] py-8 sm:py-12 md:py-16 lg:py-20 2xl:py-28">
            <div className="h-px bg-white mb-8 sm:mb-12"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24">
              <div>
                <h1 
                  className="font-inter text-white mb-4 sm:mb-6 text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] xl:text-[96px] 2xl:text-[96px]"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '100%',
                    letterSpacing: '0%'
                  }}
                >
                  BALANCE 73.
                </h1>
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
                    {project.location}, Россия
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
              <div className="w-full max-w-7xl space-y-8">
                {/* Крупное полноширинное изображение */}
                <div className="w-full">
                  <img
                    src={balance73Images[0]}
                    alt="Balance73"
                    className="w-full h-auto object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* Просто 2 фотографии */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <img
                    src={balance73Images[1]}
                    alt="Balance73"
                    className="w-full h-auto object-contain"
                    loading="eager"
                    decoding="async"
                  />
                  <img
                    src={balance73Images[2]}
                    alt="Balance73"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Текстовый блок - Прихожая */}
                <div id="prihozhaya" className="text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter font-semibold text-black mb-4 sm:mb-6">
                    В прихожей
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl font-inter text-black leading-relaxed">
                    напротив входа, гостей сразу встречает арт-объект в виде картины и необычный стул от фирмы La Chance Paris в мраморной отделке. По правую сторону от входа расположена зеркальная стена, за которой находится мастер-блок. Такой прием максимально расширяет пространство и маскирует приватную часть квартиры. По левой стороне расположилась система хранения. Зона прихожей отделена от кухни-гостиной архитектурным порталом из травертина и патинированной латуни. В этом проекте концепция архитектурных порталов применяется в каждом комнате, что позволяет концептуально связать все помещения между собой.
                  </p>
                </div>

                {/* Фотографии кухни - до 150000.png */}
                {/* Крупное полноширинное изображение */}
                <div className="w-full">
                  <img
                    src={balance73Images[3]}
                    alt="Balance73"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Пирамидка 1: 3 уровня (1-2-3) */}
                <div className="flex flex-col items-center space-y-8">
                  <div className="w-full">
                    <img
                      src={balance73Images[4]}
                      alt="Balance73"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
                    <img
                      src={balance73Images[5]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src={balance73Images[6]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
                    <img
                      src={balance73Images[7]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src={balance73Images[8]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src={balance73Images[9]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* Крупное полноширинное изображение */}
                <div className="w-full">
                  <img
                    src={balance73Images[10]}
                    alt="Balance73"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Просто 2 фотографии */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <img
                    src={balance73Images[11]}
                    alt="Balance73"
                    className="w-full h-auto object-contain"
                  />
                  <img
                    src={balance73Images[12]}
                    alt="Balance73"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Пирамидка 2: 3 уровня (1-2-3) */}
                <div className="flex flex-col items-center space-y-8">
                  <div className="w-full">
                    <img
                      src={balance73Images[13]}
                      alt="Balance73"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
                    <img
                      src={balance73Images[14]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                    />
                    <img
                      src={balance73Images[15]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
                    <img
                      src={balance73Images[16]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                    />
                    <img
                      src={balance73Images[17]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                    />
                    <img
                      src={balance73Images[18]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Текстовый блок - Кухонная зона */}
                <div id="kuhnya" className="text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter font-semibold text-black mb-4 sm:mb-6">
                    Кухонная зона
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl font-inter text-black leading-relaxed">
                    выполнена так же в травертине и повторяет геометрию портала. Таким образом кухня выглядит монолитно, но в то же время за счет цветового сочетания сохранила в себе изысканность и утонченность. В качестве обеденной зоны и зоны готовки предусмотрен остров с интегрированным столом без опоры в отделке американским орехом. Обеденные стулья Kelly от Cattelan Italia в отделке белой кожи поддерживают концепцию «невесомости» за счет тонких металлических опор.
                  </p>
                </div>

                {/* Фотографии гостиной - после кухни */}
                {/* Крупное полноширинное изображение */}
                <div className="w-full">
                  <img
                    src={balance73Images[19]}
                    alt="Balance73"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Просто 2 фотографии */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <img
                    src={balance73Images[20]}
                    alt="Balance73"
                    className="w-full h-auto object-contain"
                  />
                  <img
                    src={balance73Images[21]}
                    alt="Balance73"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Пирамидка 3: 3 уровня (1-2-3) - последние фотографии гостиной */}
                <div className="w-full">
                  <img
                    src={balance73Images[22]}
                    alt="Balance73"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Текстовый блок - Гостиная зона */}
                <div id="gostinaya" className="text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter font-semibold text-black mb-4 sm:mb-6">
                    Гостиная зона
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl font-inter text-black leading-relaxed">
                    представлена диваном Supermoon и креслом EMMI от Minotti в белом букле. Напротив мягкой зоны расположилась телевизионная зона в глянцевой отделке, которая носит в себе не только декоративную функцию, но функцию хранения. Радиусный угол словно «обтекает» стену и добавляет этой конструкции легкость.
                  </p>
                </div>

                {/* Фотографии ванной комнаты - начиная с 240000.png (balance73Images[23]) */}
                {/* Просто 2 фотографии */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <img
                    src={balance73Images[23]}
                    alt="Balance73"
                    className="w-full h-auto object-contain"
                  />
                  <img
                    src={balance73Images[24]}
                    alt="Balance73"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Пирамидка 4: 3 уровня (1-2-3) */}
                <div className="flex flex-col items-center space-y-8">
                  <div className="w-full">
                    <img
                      src={balance73Images[25]}
                      alt="Balance73"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
                    <img
                      src={balance73Images[26]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                    />
                    <img
                      src={balance73Images[27]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
                    <img
                      src={balance73Images[28]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                    />
                    <img
                      src={balance73Images[29]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                    />
                    <img
                      src={balance73Images[30]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Крупное полноширинное изображение */}
                <div className="w-full">
                  <img
                    src={balance73Images[31]}
                    alt="Balance73"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Просто 2 фотографии */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <img
                    src={balance73Images[32]}
                    alt="Balance73"
                    className="w-full h-auto object-contain"
                  />
                  <img
                    src={balance73Images[33]}
                    alt="Balance73"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Текстовый блок - Ванная комната */}
                <div id="vannaya" className="text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter font-semibold text-black mb-4 sm:mb-6">
                    Ванная комната
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl font-inter text-black leading-relaxed">
                    В отделке ванной комнаты так же можно увидеть портал из травертина, в котором находится напольная раковина с системой хранения и пьедесталы со смесителями от CEA в отделке нержавеющей стали. На стенах керамогранит от Porcelanosa EWOOD, на полу – Viola Rosse от той же фабрики.
                  </p>
                </div>

                {/* Пирамидка 5: 3 уровня (1-2-3) */}
                <div className="flex flex-col items-center space-y-8">
                  <div className="w-full">
                    <img
                      src={balance73Images[34]}
                      alt="Balance73"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
                    <img
                      src={balance73Images[35]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                    />
                    <img
                      src={balance73Images[36]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
                    <img
                      src={balance73Images[37]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src={balance73Images[38]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src={balance73Images[39]}
                      alt="Balance73"
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* Фотографии мастер-блока */}
                {/* Крупное полноширинное изображение */}
                <div className="w-full">
                  <img
                    src={balance73Images[40]}
                    alt="Balance73"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Просто 2 фотографии */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <img
                    src={balance73Images[41]}
                    alt="Balance73"
                    className="w-full h-auto object-contain"
                  />
                  <img
                    src={balance73Images[42]}
                    alt="Balance73"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Текстовый блок - Мастер-блок */}
                <div id="master" className="text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter font-semibold text-black mb-4 sm:mb-6">
                    Мастер-блок
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl font-inter text-black leading-relaxed">
                    состоит из 3-х помещений – гардеробной комнаты, спальни и душевой. Применением такого приема при проектировании пространства позволяет нам отделить приватную зону об общественной для большего комфорта проживающих.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Навигационное меню проекта - постоянно видимое */}
        <div className="fixed top-1/2 right-2 sm:right-4 md:right-6 lg:right-8 xl:right-10 2xl:right-12 transform -translate-y-1/2 z-40">
          <div 
            className="bg-gray-200/85 backdrop-blur-md rounded-xl p-3 sm:p-3.5 md:p-4 shadow-2xl"
            style={{
              backgroundColor: 'rgba(229, 231, 235, 0.85)',
            }}
          >
            {/* Заголовок */}
            <h3 className="text-base sm:text-lg md:text-xl font-inter font-medium text-gray-900 mb-1.5">
              BALANCE 73
            </h3>

            {/* Разделительная линия с прогрессом */}
            <div className="w-2/3 h-px bg-gray-300 mb-3 relative overflow-hidden">
              <div 
                className="h-full bg-gray-800 transition-all duration-300 ease-out"
                style={{ width: `${scrollProgress}%` }}
              ></div>
            </div>

            {/* Список секций */}
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToProjectSection("prihozhaya")}
                className={`text-left font-inter text-xs sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                  activeSection === "prihozhaya" ? "font-bold" : "font-normal"
                }`}
              >
                Визуализация ПРИХОЖАЯ
              </button>
              <button
                onClick={() => scrollToProjectSection("kuhnya")}
                className={`text-left font-inter text-xs sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                  activeSection === "kuhnya" ? "font-bold" : "font-normal"
                }`}
              >
                Визуализация КУХНЯ – ГОСТИНАЯ
              </button>
              <button
                onClick={() => scrollToProjectSection("gostinaya")}
                className={`text-left font-inter text-xs sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                  activeSection === "gostinaya" ? "font-bold" : "font-normal"
                }`}
              >
                Визуализация ГОСТИНАЯ ЗОНА
              </button>
              <button
                onClick={() => scrollToProjectSection("vannaya")}
                className={`text-left font-inter text-xs sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                  activeSection === "vannaya" ? "font-bold" : "font-normal"
                }`}
              >
                Визуализация ВАННАЯ КОМНАТА
              </button>
              <button
                onClick={() => scrollToProjectSection("master")}
                className={`text-left font-inter text-xs sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                  activeSection === "master" ? "font-bold" : "font-normal"
                }`}
              >
                Визуализация МАСТЕР-БЛОК
              </button>
            </nav>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  // Обычный дизайн для остальных проектов
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[140px]">
          <nav className="py-6 sm:py-8 md:py-10 lg:py-12">
            <div className="flex items-center justify-between">
              <button className="transition-opacity hover:opacity-80">
                <img
                  src={BtnLangBlack}
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
                  />
                </button>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <button 
                  onClick={() => navigate("/contact")}
                  className="bg-gray-900 text-amber-50 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-[27px] font-inter font-medium text-xs sm:text-sm md:text-base max-[377px]:hidden hover:bg-gray-800 transition-colors duration-200 shadow-md"
                >
                  Связаться с нами
                </button>
                <button
                  className="p-2 sm:p-3 md:p-4 transition-opacity hover:opacity-80 relative z-50"
                  onClick={toggleMenu}
                  aria-label="Открыть меню"
                >
                  <img
                    src={BtnMenuBlack}
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

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[140px] py-8 sm:py-12 md:py-16 lg:py-20 2xl:py-28">
          <button
            onClick={() => navigate("/projects")}
            className="mb-8 text-[#000000B2] hover:text-black transition-colors font-inter"
          >
            ← Назад к проектам
          </button>

          <div className="mb-8 sm:mb-12 md:mb-16">
            <h1 
              className="font-inter mb-4 sm:mb-6 text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] xl:text-[96px] 2xl:text-[96px]"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              {project.name} /
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#000000B2] font-inter uppercase">
              {project.location} / {project.area} м<sup>2</sup> / {project.year}
            </p>
          </div>

          <div className="mb-8 sm:mb-12">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto object-cover"
              style={{ objectPosition: project.objectPosition }}
            />
          </div>

          {/* Здесь можно добавить дополнительную информацию о проекте */}
          <div className="max-w-4xl">
            <p className="text-base sm:text-lg md:text-xl font-inter text-[#000000B2]">
              Детальная информация о проекте будет добавлена позже.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}


