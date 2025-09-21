import React, { useState } from "react";

import HeroBg from "../Images/HeroBg.png";
import BtnLang from "../Icons/btn-lang.svg";
import Logo from "../Icons/logo.svg";
import BtnMenu from "../Icons/btn-menu.svg";
import "../css/fonts.css";
import Arrow from "../Icons/Arrow.svg";
import ArrowBlack from "../Icons/Arrow-black.svg";

import BulvarImg from "../Images/Projects/Bulvar.png";
import BalanceImg from "../Images/Projects/Balance.png";
import Aeron from "../Images/Projects/Aeron.png";
import Balance73 from "../Images/Projects/Balance73.png";
import Mission from "../Images/Mission.png";

import ScrollReveal from "./ScrollReveal ";

// sm: (≥377px)
// md: (≥834px)
// lg: (≥1024px)
// xl: (≥1280px)
// 2xl: (≥1920px)

export default function HeroSection() {
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
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat grayscale"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10">
          <div className="container mx-auto">
            <nav className="py-6 sm:py-8 md:py-10 lg:py-12">
              <div className="flex items-center justify-between">
                <button className="transition-opacity hover:opacity-80">
                  <img
                    src={BtnLang}
                    alt="Сменить язык"
                    className="w-8 sm:w-10 md:w-12"
                  />
                </button>

                <div className="flex-1 flex justify-center">
                  <img
                    src={Logo}
                    alt="Логотип"
                    className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] 2xl:max-w-[160px]"
                  />
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <button className="bg-amber-50 text-gray-900 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-[27px] font-inter font-medium text-xs sm:text-sm md:text-base max-[377px]:hidden hover:bg-amber-100 transition-colors duration-200 shadow-md">
                    Связаться с нами
                  </button>
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
          </div>

          {/* Бургер-меню */}
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
                        src={BtnLang}
                        alt="Сменить язык"
                        className="w-8 sm:w-10 md:w-12"
                      />
                    </button>

                    <div className="flex-1 flex justify-center">
                      <img
                        src={Logo}
                        alt="Логотип"
                        className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] 2xl:max-w-[160px]"
                      />
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                      <button
                        className="p-2 sm:p-3 transition-opacity hover:opacity-80 relative z-50"
                        onClick={toggleMenu}
                        aria-label="Закрыть меню"
                      >
                        <img
                          src={BtnMenu}
                          alt="Закрыть меню"
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
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium text-amber-500 hover:text-amber-600 transition-colors text-left leading-tight"
                      >
                        Проекты
                      </button>
                      <button
                        onClick={() => {
                          scrollToSection("about");
                          toggleMenu();
                        }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium text-amber-500 hover:text-amber-600 transition-colors text-left leading-tight"
                      >
                        О нас
                      </button>
                      <button
                        onClick={() => {
                          scrollToSection("services");
                          toggleMenu();
                        }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium text-amber-500 hover:text-amber-600 transition-colors text-left leading-tight"
                      >
                        Услуги
                      </button>
                      <button
                        onClick={() => {
                          scrollToSection("interaction");
                          toggleMenu();
                        }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium text-amber-500 hover:text-amber-600 transition-colors text-left leading-tight"
                      >
                        Взаимодействие
                      </button>
                    </div>
                  </div>

                  {/* Разделитель — только на мобильных */}
                  <div className="h-px bg-amber-200 my-6 md:hidden w-full"></div>

                  {/* Правая колонка — Информация */}
                  <div className="flex flex-col items-start justify-start">
                    <div className="mb-8 md:mb-1">
                      <img src={ArrowBlack} alt="Arrow" />
                    </div>

                    <div className="text-lg sm:text-xl md:text-2xl lg:text-[22px] text-amber-600 max-w-[320px] leading-relaxed font-inter">
                      Пишите нам для воплощения ваших идей
                    </div>
                  </div>
                </div>

                {/* Кнопка закрытия */}
                <button
                  onClick={toggleMenu}
                  className="mt-12 sm:mt-16 text-xl sm:text-2xl font-inter text-amber-500 hover:text-amber-700 transition-colors tracking-wide"
                  aria-label="Закрыть меню"
                >
                  Закрыть ×
                </button>
              </div>
            </div>
          </div>

          <div className="header__info relative z-10 px-4 sm:px-6 md:px-8 lg:pl-[100px] xl:pl-[310px] 2xl:pl-[250px] mt-4 sm:mt-6 md:mt-8 lg:mt-12 2xl:mt-20">
            <h1 className="text-[48px] sm:text-[64px] md:text-[72px] lg:text-[84px] xl:text-[90px] 2xl:text-[96px] font-inter text-amber-50 leading-[1.1]">
              <span className="block">Архитектура.</span>
              <span className="block lg:mt-2 2xl:mt-4">Дизайн интерьера.</span>
            </h1>
            <div className="flex items-start gap-2 sm:gap-3 mt-[12px] sm:mt-[14px] md:mt-[16px]">
              <p className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-amber-50 max-w-[180px] sm:max-w-[200px] md:max-w-[230px] font-inter leading-relaxed">
                Пространства, где форма встречает функцию
              </p>
              <img
                src={Arrow}
                alt="Contacts"
                className="w-4 sm:w-10 md:w-12 mt-1 sm:mt-4"
              />
            </div>
          </div>
        </div>
      </header>

      <section className=" font-[400] studio py-8 sm:py-12 md:py-16 lg:py-24 2xl:py-40 px-4 sm:px-6 md:px-8 lg:px-[100px] xl:px-[150px] 2xl:px-[250px]">
        <h1 className="studio-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[96px] font-inter font-medium mb-4 sm:mb-6 md:mb-8 lg:mb-12 2xl:mb-16">
          Студия /
        </h1>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={0}
          blurStrength={10}
          containerClassName="font-normal font-[400] text-sm sm:text-[20px] md:text-lg lg:text-[26px] xl:text-xl 2xl:text-[36px]"
          classNamee="studio__text"
        >
          AKRVM – формирует пространство через логику архитектуры и
          выразительность геометрии. Эстетика для нас — это не украшение, а
          результат точного взаимодействия формы и функции. Мы стремимся к
          ясности: в линиях, в пропорциях, в структуре. Свет и тень становятся
          инструментами, подчёркивающими характер и глубину. Каждый проект — это
          поиски баланса между визуальной чистотой и практическим смыслом.
          Современный дизайн — про честные конструкции и уместные решения, в
          которых нет лишнего.
        </ScrollReveal>
      </section>

      <section className=" projects px-4 sm:px-6 md:px-8 lg:px-[50px] xl:px-[150px] 2xl:px-[250px] py-8 sm:py-12 md:py-16 lg:py-20 2xl:py-28">
        <div className="projects__container">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 xl:gap-12 2xl:gap-24">
            <h1 className="projects-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[96px] font-inter font-medium lg:mb-0 lg:w-1/4 mb-4 sm:mb-6 md:mb-8">
              <span className="block lg:inline">Проекты</span>
              <span className="block lg:inline ml-2 lg:ml-3">/</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 lg:w-3/4">
              <div className="project-item">
                <img
                  src={BulvarImg}
                  alt="BUL'VAR"
                  className="w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] object-cover mb-3 sm:mb-4"
                />
                <p className="project-name uppercase text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium mb-1">
                  bul'var
                </p>
                <p className="project-info uppercase text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#000000B2]">
                  Новосибирск, Россия / 109 м<sup>2</sup> / 2024
                </p>
              </div>

              <div className="project-item">
                <img
                  src={BalanceImg}
                  alt="Другой проект"
                  className="w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] object-cover mb-3 sm:mb-4"
                />
                <p className="project-name uppercase text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium mb-1">
                  balance
                </p>
                <p className="project-info uppercase text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#000000B2]">
                  Новосибирск, Россия / 98 м<sup>2</sup> / 2025
                </p>
              </div>

              <div className="project-item">
                <img
                  src={Aeron}
                  alt="BUL'VAR"
                  className="w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] object-cover mb-3 sm:mb-4"
                />
                <p className="project-name uppercase text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium mb-1">
                  Aeron
                </p>
                <p className="project-info uppercase text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#000000B2]">
                  Новосибирск / 110 м<sup>2</sup> / 2025
                </p>
              </div>

              <div className="project-item">
                <img
                  src={Balance73}
                  alt="BUL'VAR"
                  className="w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] object-cover mb-3 sm:mb-4"
                />
                <p className="project-name uppercase text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium mb-1">
                  Balance
                </p>
                <p className="project-info uppercase text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#000000B2]">
                  Новосибирск / 73 м<sup>2</sup> / 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mission mt-8 sm:mt-[80px] md:mt-[114px] 2xl:mt-[320px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[170px] 2xl:px-[220px]">
        <div className="mission_text flex flex-col md:flex-row md:items-start md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-16">
          <h1 className="mission_title text-[32px] sm:text-[32px] md:text-[48px] lg:text-[66px] xl:text-[72px] 2xl:text-[96px] font-inter font-medium md:w-1/2 lg:w-2/5 xl:w-2/5 2xl:w-[960px] mb-4 sm:mb-6 md:mb-0">
            Миссия /
          </h1>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={10}
            containerClassName="md:w-1/2 lg:w-3/5 xl:w-3/5"
            textClassName="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[28px] xl:text-[30px] 2xl:text-[36px] leading-relaxed md:leading-normal lg:leading-loose !font-normal"
          >
            Архитектурный подход в дизайне интерьеров: выразительные формы,
            монохромная палитра, натуральные материалы и эмоциональный акцент.
            Мы создаём пространства, которые вдохновляют жить.
          </ScrollReveal>
        </div>
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 2xl:mt-20">
          <img
            src={Mission}
            alt="mission"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <footer>
        <div className="footer__text flex flex-col 2xl:flex-row px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[170px] 2xl:px-[170px] justify-between items-start 2xl:items-center mt-12 sm:mt-16 md:mt-20 lg:mt-28 xl:mt-[150px] 2xl:mt-[183px] border-b border-b-[#00000033] pb-6 sm:pb-8 md:pb-10">
          {/* Левая группа */}
          <div className="flex flex-col 2xl:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-[62px] text-[#00000099] text-sm sm:text-base md:text-lg text-left mb-4 2xl:mb-0">
            <p>Современный дизайн интерьера</p>
            <p>Архитектурный дизайн</p>
            <p>По всему миру</p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 mt-4 2xl:mt-0">
            <p className="text-left w-[150px] sm:w-[180px] md:w-[200px] lg:w-[250px] text-sm sm:text-base md:text-lg text-[#00000099]">
              Пишите нам для воплощения ваших идей
            </p>
            <img
              src={ArrowBlack}
              alt="arrow"
              className="w-6 sm:w-8 md:w-10 lg:w-12"
            />
          </div>
        </div>

        {/* Нижняя часть футера с навигацией */}
        <div className="footer-navigation flex flex-col md:flex-row px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[170px] 2xl:px-[170px] py-6 sm:py-8 md:py-10 lg:py-12 gap-6 sm:gap-8 md:gap-10 lg:gap-16">
          {/* Колонка 1 - Навигация */}
          <div className="flex flex-col w-full md:w-auto">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font- mb-3 sm:mb-4 text-[#000000]">
              Навигация
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a
                href="#"
                className="font-inter text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#00000099] hover:text-[#000000] transition-colors"
              >
                Проекты
              </a>
              <a
                href="#"
                className="text-[14px] xl:text-[22px] sm:text-[16px] md:text-[18px] text-[#00000099] hover:text-[#000000] transition-colors"
              >
                О нас
              </a>
              <a
                href="#"
                className="text-[14px] xl:text-[22px] sm:text-[16px] md:text-[18px] text-[#00000099] hover:text-[#000000] transition-colors"
              >
                Услуги
              </a>
              <a
                href="#"
                className="text-[14px] xl:text-[22px] sm:text-[16px] md:text-[18px] text-[#00000099] hover:text-[#000000] transition-colors"
              >
                Взаимодействие
              </a>
            </div>
          </div>

          {/* Колонка 2 - Социальные сети */}
          <div className="flex flex-col w-full md:w-auto mt-6 md:mt-0">
            <p className="text-[14px] sm:text-[16px] md:text-[18px]  mb-3 sm:mb-4 text-[#000000]">
              Социальные сети
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a
                href="https://www.behance.net/a_kplv"
                className="text-[14px] xl:text-[22px] sm:text-[16px] md:text-[18px] text-[#00000099] hover:text-[#000000] transition-colors"
              >
                Behance
              </a>
              <a
                href="https://www.instagram.com/a_kplv/"
                className="text-[14px] xl:text-[22px] sm:text-[16px] md:text-[18px] text-[#00000099] hover:text-[#000000] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Колонка 3 - Контакты */}
          <div className="flex flex-col w-full md:w-auto mt-6 md:mt-0">
            <p className="text-[14px] sm:text-[16px] md:text-[18px]  mb-3 sm:mb-4 text-[#000000]">
              Контакты:
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="text-[14px] xl:text-[22px] sm:text-[16px] md:text-[18px] text-[#00000099]">
                Новосибирск, Россия
              </p>
              <p className="text-[14px] xl:text-[22px] sm:text-[16px] md:text-[18px] text-[#00000099]">
                +7 996 382 73-07
              </p>
              <p className="text-[14px] xl:text-[22px] sm:text-[16px] md:text-[18px] text-[#00000099] underline underline-offset-4 ">
                akplv97@yandex.ru
              </p>
            </div>
          </div>
        </div>
        <div>
          {" "}
          {/* ← Убрали border-t отсюда */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 sm:gap-3 md:gap-0 py-4 sm:py-5 md:py-6 lg:py-8 px-4 sm:px-5 md:px-8 lg:px-12 xl:px-[170px] border-t border-t-[#00000033]">
            {/* Правая часть — ссылки */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full mt-2 md:mt-0">
              {/* Левый элемент */}
              <div className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#00000099] mb-2 md:mb-0">
                ©2025 AKRVM
              </div>

              {/* Центральный элемент с правым */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-[111px] items-center">
                <a
                  href="#"
                  className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#00000099] hover:text-[#000000] transition-colors text-center sm:text-left"
                >
                  Политика конфиденциальности
                </a>

                {/* Правый элемент */}
                <a
                  href="#"
                  className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#00000099] hover:text-[#000000] transition-colors"
                >
                  В начало ↑
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
