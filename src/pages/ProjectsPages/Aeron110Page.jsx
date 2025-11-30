import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AeronImg from "../../Images/Projects/Aeron.png";

// Планы квартиры
import AeronPlanDark from "../../Projects/AERON_110/Планировка (на темном фоне).png";

// AERON_110 - Прихожая
import Aeron_Prihozhaya_01 from "../../Projects/AERON_110/01. Прихожая/090000.png";
import Aeron_Prihozhaya_02 from "../../Projects/AERON_110/01. Прихожая/100006.png";
import Aeron_Prihozhaya_03 from "../../Projects/AERON_110/01. Прихожая/110000.png";
import Aeron_Prihozhaya_04 from "../../Projects/AERON_110/01. Прихожая/120000.png";
import Aeron_Prihozhaya_05 from "../../Projects/AERON_110/01. Прихожая/130000.png";

// AERON_110 - Кухонная зона
import Aeron_Kuhnya_01 from "../../Projects/AERON_110/02. Кухонная зона/300000.png";
import Aeron_Kuhnya_02 from "../../Projects/AERON_110/02. Кухонная зона/300001.png";
import Aeron_Kuhnya_03 from "../../Projects/AERON_110/02. Кухонная зона/310000.png";
import Aeron_Kuhnya_04 from "../../Projects/AERON_110/02. Кухонная зона/320001.png";
import Aeron_Kuhnya_05 from "../../Projects/AERON_110/02. Кухонная зона/330005.png";
import Aeron_Kuhnya_06 from "../../Projects/AERON_110/02. Кухонная зона/340005.png";
import Aeron_Kuhnya_07 from "../../Projects/AERON_110/02. Кухонная зона/350000.png";
import Aeron_Kuhnya_08 from "../../Projects/AERON_110/02. Кухонная зона/350001.png";
import Aeron_Kuhnya_09 from "../../Projects/AERON_110/02. Кухонная зона/360000.png";
import Aeron_Kuhnya_10 from "../../Projects/AERON_110/02. Кухонная зона/370000.png";
import Aeron_Kuhnya_11 from "../../Projects/AERON_110/02. Кухонная зона/380000.png";

// AERON_110 - Гостиная зона
import Aeron_Gostinaya_01 from "../../Projects/AERON_110/03. Гостиная зона/160000.png";
import Aeron_Gostinaya_02 from "../../Projects/AERON_110/03. Гостиная зона/170005.png";
import Aeron_Gostinaya_03 from "../../Projects/AERON_110/03. Гостиная зона/190005.png";
import Aeron_Gostinaya_04 from "../../Projects/AERON_110/03. Гостиная зона/200005.png";
import Aeron_Gostinaya_05 from "../../Projects/AERON_110/03. Гостиная зона/210000.png";
import Aeron_Gostinaya_06 from "../../Projects/AERON_110/03. Гостиная зона/220006.png";
import Aeron_Gostinaya_07 from "../../Projects/AERON_110/03. Гостиная зона/230005.png";
import Aeron_Gostinaya_08 from "../../Projects/AERON_110/03. Гостиная зона/240005.png";
import Aeron_Gostinaya_09 from "../../Projects/AERON_110/03. Гостиная зона/250005.png";
import Aeron_Gostinaya_10 from "../../Projects/AERON_110/03. Гостиная зона/260005.png";
import Aeron_Gostinaya_11 from "../../Projects/AERON_110/03. Гостиная зона/280000.png";
import Aeron_Gostinaya_12 from "../../Projects/AERON_110/03. Гостиная зона/290000.png";
import Aeron_Gostinaya_13 from "../../Projects/AERON_110/03. Гостиная зона/480000.png";

// AERON_110 - Гардеробная
import Aeron_Garderob_01 from "../../Projects/AERON_110/04. Гардеробная/140000.png";
import Aeron_Garderob_02 from "../../Projects/AERON_110/04. Гардеробная/150000.png";
import Aeron_Garderob_03 from "../../Projects/AERON_110/04. Гардеробная/150001.png";

// AERON_110 - Спальня
import Aeron_Spalnya_01 from "../../Projects/AERON_110/05. Спальня/390005.png";
import Aeron_Spalnya_02 from "../../Projects/AERON_110/05. Спальня/400005.png";
import Aeron_Spalnya_03 from "../../Projects/AERON_110/05. Спальня/400006.png";
import Aeron_Spalnya_04 from "../../Projects/AERON_110/05. Спальня/410005.png";
import Aeron_Spalnya_05 from "../../Projects/AERON_110/05. Спальня/410006.png";
import Aeron_Spalnya_06 from "../../Projects/AERON_110/05. Спальня/420005.png";
import Aeron_Spalnya_07 from "../../Projects/AERON_110/05. Спальня/430005.png";
import Aeron_Spalnya_08 from "../../Projects/AERON_110/05. Спальня/430006.png";
import Aeron_Spalnya_09 from "../../Projects/AERON_110/05. Спальня/440006.png";
import Aeron_Spalnya_10 from "../../Projects/AERON_110/05. Спальня/450005.png";
import Aeron_Spalnya_11 from "../../Projects/AERON_110/05. Спальня/450006.png";
import Aeron_Spalnya_12 from "../../Projects/AERON_110/05. Спальня/460000.png";
import Aeron_Spalnya_13 from "../../Projects/AERON_110/05. Спальня/470000.png";

// AERON_110 - Ванная
import Aeron_Vannaya_01 from "../../Projects/AERON_110/06. Ванная/010000.png";
import Aeron_Vannaya_02 from "../../Projects/AERON_110/06. Ванная/020000.png";
import Aeron_Vannaya_03 from "../../Projects/AERON_110/06. Ванная/030000.png";
import Aeron_Vannaya_04 from "../../Projects/AERON_110/06. Ванная/040000.png";
import Aeron_Vannaya_05 from "../../Projects/AERON_110/06. Ванная/050000.png";
import Aeron_Vannaya_06 from "../../Projects/AERON_110/06. Ванная/060000.png";
import Aeron_Vannaya_07 from "../../Projects/AERON_110/06. Ванная/070000.png";
import Aeron_Vannaya_08 from "../../Projects/AERON_110/06. Ванная/080000.png";

const aeronPrihozhayaImages = [
  Aeron_Prihozhaya_01,
  Aeron_Prihozhaya_02,
  Aeron_Prihozhaya_03,
  Aeron_Prihozhaya_04,
  Aeron_Prihozhaya_05,
];

const aeronKuhnyaImages = [
  Aeron_Kuhnya_01,
  Aeron_Kuhnya_02,
  Aeron_Kuhnya_03,
  Aeron_Kuhnya_04,
  Aeron_Kuhnya_05,
  Aeron_Kuhnya_06,
  Aeron_Kuhnya_07, // 350000
  Aeron_Kuhnya_08, // 350001
  Aeron_Kuhnya_09,
  Aeron_Kuhnya_10,
  Aeron_Kuhnya_11,
];

const aeronGostinayaImages = [
  Aeron_Gostinaya_01,
  Aeron_Gostinaya_02,
  Aeron_Gostinaya_03,
  Aeron_Gostinaya_04,
  Aeron_Gostinaya_05,
  Aeron_Gostinaya_06,
  Aeron_Gostinaya_07,
  Aeron_Gostinaya_08,
  Aeron_Gostinaya_09,
  Aeron_Gostinaya_10,
  Aeron_Gostinaya_11,
  Aeron_Gostinaya_12,
  Aeron_Gostinaya_13,
];

const aeronGarderobImages = [
  Aeron_Garderob_01,
  Aeron_Garderob_02,
  Aeron_Garderob_03,
];

const aeronSpalnyaImages = [
  Aeron_Spalnya_01,
  Aeron_Spalnya_02,
  Aeron_Spalnya_03,
  Aeron_Spalnya_04,
  Aeron_Spalnya_05,
  Aeron_Spalnya_06,
  Aeron_Spalnya_07,
  Aeron_Spalnya_08,
  Aeron_Spalnya_09,
  Aeron_Spalnya_10,
  Aeron_Spalnya_11,
  Aeron_Spalnya_12,
  Aeron_Spalnya_13,
];

const aeronVannayaImages = [
  Aeron_Vannaya_01,
  Aeron_Vannaya_02,
  Aeron_Vannaya_03,
  Aeron_Vannaya_04,
  Aeron_Vannaya_05,
  Aeron_Vannaya_06,
  Aeron_Vannaya_07,
  Aeron_Vannaya_08,
];

// Текстовые описания для каждой секции
const SECTION_TEXTS = {
  prihozhaya: "Прихожая зона «вкруг» выполнена из шпонированных панелей, что создает монолитность и эффект тоннеля, где арт-объектом служит напольная тумба из металла.",
  kuhnya: "Центральным элементом кухни является остров из нержавеющей стали, который служит как рабочей поверхностью, так и обеденной зоной. Зеркальная поверхность острова отражает свет и визуально расширяет пространство, придавая ему легкость и воздушность.",
  gostinaya: "Гостиная зона представлена мягким и уютным диваном темного цвета с необычайной круговой посадкой, который добавляет общему помещению контраста. Все элементы интерьера друг с другом создают гармонию на основе противопоставления, так, например мягкий светлый ковер с простой текстурой гармонирует с напольной тумбой телевизионной зоны, выполненной из бетона с рваными краями, имитируя скалу. Одной из особенностей планировки и дизайна этого помещения являются монолитные колонны, которые решили оставить в интерьере «открытыми», закрыв их стеклом. Подсветка в нишах позволила добиться дополнительного сценария освещения, который способствует расслаблению и комфортному отдыху. Деревянные панели плавно переходят и в отделку спальни, что помогает стилистически нам связать помещения.",
  garderobnaya: "",
  spalnya: "Деревянные панели плавно переходят и в отделку спальни, что помогает стилистически связать помещения.",
  vannaya: "Санузел при спальне выполнен в темных тонах, чтобы создать камерную атмосферу. В отделке санузла так же применяется нержавеющая сталь, что еще раз подчеркивает связь всех помещений между собой. Для создания особой атмосферы в ванной комнате было предусмотрено светопрозрачное полотно, которое способно менять цвет и яркость освещения.",
};

const AERON_SECTIONS = [
  { id: "prihozhaya", title: "Прихожая", images: aeronPrihozhayaImages, text: SECTION_TEXTS.prihozhaya },
  { id: "kuhnya", title: "Кухонная зона", images: aeronKuhnyaImages, text: SECTION_TEXTS.kuhnya },
  { id: "gostinaya", title: "Гостиная зона", images: aeronGostinayaImages, text: SECTION_TEXTS.gostinaya },
  { id: "garderobnaya", title: "Гардеробная", images: aeronGarderobImages, text: SECTION_TEXTS.garderobnaya },
  { id: "spalnya", title: "Спальня", images: aeronSpalnyaImages, text: SECTION_TEXTS.spalnya },
  { id: "vannaya", title: "Ванная", images: aeronVannayaImages, text: SECTION_TEXTS.vannaya },
];

const SECTION_IDS = AERON_SECTIONS.map((section) => section.id);

import BtnLangBlack from "../../Icons/btn lang-black.svg";
import BtnLangWhite from "../../Icons/btn-lang.svg";
import Logo from "../../Icons/logo-black.svg";
import BtnMenu from "../../Icons/btn-menu.svg";
import BtnClose from "../../Icons/btn-close.svg";
import ArrowBlack from "../../Icons/Arrow-black.svg";

import Footer from "../../Components/Footer";
import ImageSlider from "../../Components/ImageSlider";

// Определяем пары изображений для слайдеров (индексы в массивах)
const SLIDER_PAIRS = {
  kuhnya: [[0, 1], [6, 7]], // 300000/300001, 350000/350001
  garderobnaya: [[1, 2]], // 150000/150001
  spalnya: [[1, 2], [3, 4], [6, 7], [9, 10]], // 400005/400006, 410005/410006, 430005/430006, 450005/450006
};

const isSliderPair = (sectionId, currentIndex, nextIndex) => {
  const pairs = SLIDER_PAIRS[sectionId] || [];
  return pairs.some(([first, second]) => 
    (currentIndex === first && nextIndex === second) ||
    (currentIndex === second && nextIndex === first)
  );
};

const GallerySection = ({ id, title, images, text }) => {
  if (!images?.length) return null;

  const processedImages = [];
  let i = 0;

  while (i < images.length) {
    // Проверяем, является ли текущее изображение частью пары
    if (i < images.length - 1 && isSliderPair(id, i, i + 1)) {
      // Это пара для слайдера
      processedImages.push({
        type: 'slider',
        lightImage: images[i + 1],
        darkImage: images[i],
        index: i
      });
      i += 2; // Пропускаем оба изображения
    } else {
      // Обычное изображение
      processedImages.push({
        type: 'image',
        src: images[i],
        index: i
      });
      i += 1;
    }
  }

  const [firstItem, ...restItems] = processedImages;

  return (
    <>
      <div id={id} className="text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter font-semibold text-black mb-4 sm:mb-6">
          {title}
        </h2>
        {text && (
          <p className="text-base sm:text-lg md:text-xl font-inter text-black leading-relaxed">
            {text}
          </p>
        )}
      </div>

      {/* Первое изображение/слайдер */}
      {firstItem?.type === 'slider' ? (
        <div className="w-full">
          <ImageSlider
            lightImage={firstItem.lightImage}
            darkImage={firstItem.darkImage}
            alt={`AERON 110 - ${title}`}
            className="w-full h-auto"
          />
        </div>
      ) : (
        <div className="w-full">
          <img
            src={firstItem?.src}
            alt={`AERON 110 - ${title}`}
            className="w-full h-auto object-cover"
            loading={id === "prihozhaya" ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      )}

      {/* Остальные изображения */}
      {(() => {
        const elements = [];
        let i = 0;
        
        while (i < restItems.length) {
          const item = restItems[i];
          
          if (item.type === 'slider') {
            elements.push(
              <div key={`${id}-slider-${item.index}`} className="w-full">
                <ImageSlider
                  lightImage={item.lightImage}
                  darkImage={item.darkImage}
                  alt={`AERON 110 - ${title}`}
                  className="w-full h-auto"
                />
              </div>
            );
            i++;
          } else {
            // Проверяем, можно ли сгруппировать с следующим изображением
            const nextItem = restItems[i + 1];
            const canGroup = nextItem && nextItem.type === 'image';
            
            if (canGroup) {
              // Группируем два изображения в ряд
              elements.push(
                <div
                  key={`${id}-grid-${item.index}`}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center"
                >
                  <img
                    src={item.src}
                    alt={`AERON 110 - ${title}`}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={nextItem.src}
                    alt={`AERON 110 - ${title}`}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              );
              i += 2; // Пропускаем оба изображения
            } else {
              // Одиночное изображение на полную ширину
              elements.push(
                <div key={`${id}-img-${item.index}`} className="w-full">
                  <img
                    src={item.src}
                    alt={`AERON 110 - ${title}`}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              );
              i++;
            }
          }
        }
        
        return elements;
      })()}
    </>
  );
};

export default function Aeron110Page() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const project = {
    id: "aeron",
    name: "AERON 110",
    image: AeronImg,
    location: "Новосибирск, Россия",
    area: "110",
    year: "2024",
    objectPosition: "center",
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

  useEffect(() => {
    const handleScroll = () => {
      const offsetPosition = window.scrollY + 200;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollBottom = window.scrollY + windowHeight;
      const isAtBottom = scrollBottom >= documentHeight - 100;

      if (isAtBottom) {
        setActiveSection("vannaya");
      } else {
        for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
          const element = document.getElementById(SECTION_IDS[i]);
          if (element && element.offsetTop <= offsetPosition) {
            setActiveSection(SECTION_IDS[i]);
            break;
          }
        }
      }

      const firstSection = document.getElementById("prihozhaya");
      const lastSection = document.getElementById("vannaya");

      if (firstSection && lastSection) {
        const startPosition = firstSection.offsetTop;
        const endPosition = lastSection.offsetTop + lastSection.offsetHeight;
        const totalHeight = endPosition - startPosition;
        const current = window.scrollY + windowHeight / 2;
        const progress = Math.min(
          100,
          Math.max(0, ((current - startPosition) / totalHeight) * 100)
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
          <div className="relative z-10">
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
                        style={{ filter: "brightness(0) invert(1)" }}
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
                        isMenuOpen
                          ? "opacity-0 invisible pointer-events-none"
                          : "opacity-100 visible"
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
                          onClick={() => handleNavigation("/projects")}
                          className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium transition-colors text-left leading-tight"
                          style={{ color: "#00000099" }}
                          onMouseEnter={(e) => (e.target.style.color = "#000000")}
                          onMouseLeave={(e) => (e.target.style.color = "#00000099")}
                        >
                          Проекты
                        </button>
                        <button
                          onClick={() => handleNavigation("/about")}
                          className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium transition-colors text-left leading-tight"
                          style={{ color: "#00000099" }}
                          onMouseEnter={(e) => (e.target.style.color = "#000000")}
                          onMouseLeave={(e) => (e.target.style.color = "#00000099")}
                        >
                          О нас
                        </button>
                        <button
                          onClick={() => handleNavigation("/services")}
                          className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium transition-colors text-left leading-tight"
                          style={{ color: "#00000099" }}
                          onMouseEnter={(e) => (e.target.style.color = "#000000")}
                          onMouseLeave={(e) => (e.target.style.color = "#00000099")}
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
                    {project.name}
                  </h1>
                </div>

                <div className="flex flex-col gap-6 md:gap-8 pt-8 lg:pt-0">
                  <div>
                    <p
                      className="text-white text-sm sm:text-base md:text-lg font-inter mb-2"
                      style={{ color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      Объект
                    </p>
                    <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium">
                      {project.area} м²
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-white text-sm sm:text-base md:text-lg font-inter mb-2"
                      style={{ color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      Местоположение
                    </p>
                    <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium">
                      {project.location}
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-white text-sm sm:text-base md:text-lg font-inter mb-2"
                      style={{ color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      Год проектирования
                    </p>
                    <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium">
                      {project.year}
                    </p>
                  </div>
                </div>
              </div>

              {/* Планировка на темном фоне */}
              <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 bg-black -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 2xl:-mx-[140px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[140px] py-8 sm:py-12 md:py-16 lg:py-20">
                <img
                  src={AeronPlanDark}
                  alt="AERON 110 - Планировка"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Галерея */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[140px] py-8 sm:py-12 md:py-16 lg:py-20 2xl:py-28">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-7xl space-y-8">
              {/* Общее введение */}
              <div className="text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter font-semibold text-black mb-4 sm:mb-6">
                  Современная элегантность: Минимализм и роскошь в одном пространстве
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-inter text-black leading-relaxed">
                  Проект интерьера для молодой семьи в ЖК «Аэрон» сочетает минимализм и роскошь, создавая гармоничное пространство, идеальное для современной жизни. Все помещения воплощает идею функциональности и эстетики, где каждая деталь имеет своё значение и место.
                </p>
              </div>

              {AERON_SECTIONS.map((section) => (
                <React.Fragment key={section.id}>
                  <GallerySection {...section} />
                </React.Fragment>
              ))}

              {/* Заключение */}
              <div className="text-left">
                <p className="text-base sm:text-lg md:text-xl font-inter text-black leading-relaxed">
                  Этот интерьер является примером того, как минимализм может быть стильным и уютным. Использование натуральных материалов, чистых линий и функциональной мебели создаёт гармоничное и удобное пространство, идеально подходящее для современной жизни. Такой дизайн вдохновляет на создание интерьеров, которые не только красивы, но и удобны для повседневной жизни.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Навигационное меню проекта */}
      <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 2xl:bottom-16 right-2 sm:right-4 md:right-6 lg:right-8 xl:right-10 2xl:right-12 z-40">
        <div
          onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
          className="bg-gray-200/50 backdrop-blur-md rounded-xl p-3 sm:p-3.5 md:p-4 shadow-2xl transition-all duration-300 ease-in-out cursor-pointer"
          style={{
            backgroundColor: "rgba(229, 231, 235, 0.5)",
          }}
        >
          <div className="flex items-center justify-between mb-1 sm:mb-1.5">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-inter font-medium text-gray-900">
              AERON 110
            </h3>
            <div
              className="ml-2 transition-transform duration-300 ease-in-out"
              style={{
                transform: isNavMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <img
                src={ArrowBlack}
                alt={isNavMenuOpen ? "Закрыть меню" : "Открыть меню"}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </div>
          </div>

          <div className="w-2/3 h-px bg-gray-300 mb-2 sm:mb-3 relative overflow-hidden transition-all duration-300 ease-in-out">
            <div
              className="h-full bg-gray-800 transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>

          <nav
            className={`flex flex-col space-y-1.5 sm:space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
              isNavMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {AERON_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToProjectSection(section.id);
                  setIsNavMenuOpen(false);
                }}
                className={`text-left font-inter text-[10px] sm:text-xs md:text-sm text-gray-800 hover:text-gray-900 transition-colors ${
                  activeSection === section.id ? "font-bold" : "font-normal"
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <Footer />
    </>
  );
}

