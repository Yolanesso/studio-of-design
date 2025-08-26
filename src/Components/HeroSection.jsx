import React from "react";
import HeroBg from "../Images/HeroBg.png";
import BtnLang from "../Icons/btn-lang.svg";
import Logo from "../Icons/logo.svg";
import BtnMenu from "../Icons/btn-menu.svg";
import "../css/fonts.css";
import Arrow from "../Icons/Arrow.svg";

import BulvarImg from "../Images/Projects/Bulvar.png";

export default function HeroSection() {
  return (
    <>
      <header
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat grayscale"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10">
          <div className="container mx-auto">
            <nav className="py-12 px-[50px]">
              <div className="flex items-center justify-between">
                <button className="transition-opacity hover:opacity-80">
                  <img src={BtnLang} alt="Сменить язык" />
                </button>

                <div className="flex-1 flex justify-center">
                  <img
                    src={Logo}
                    alt="Логотип"
                    className="max-w-[120px] lg:max-w-[160px]"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button className="bg-amber-50 text-gray-900 px-6 py-4 rounded-[27px] font-inter font-medium text-sm lg:text-base hover:bg-amber-100 transition-colors duration-200 shadow-md">
                    Связаться с нами
                  </button>
                  <button className="p-3 transition-opacity hover:opacity-80">
                    <img src={BtnMenu} alt="Открыть меню" />
                  </button>
                </div>
              </div>
            </nav>
          </div>

          <div className="header__info relative z-10 px-4 lg:pl-[250px] mt-8 lg:mt-20">
            <h1 className="text-[96px] font-inter text-amber-50 leading-[1.1]">
              <span className="block">Архитектура.</span>
              <span className="block lg:mt-4">Дизайн интерьера.</span>
            </h1>
            <div className="flex items-start gap-3 mt-[16px]">
              <p className="text-[18px] text-amber-50 size-[230px] font-inter leading-relaxed">
                Пространства, где форма встречает функцию
              </p>
              <img src={Arrow} alt="Contacts" className="mt-2" />
            </div>
          </div>
        </div>
      </header>

      <section className="studio py-16 lg:py-40 px-4 sm:px-6 lg:px-[250px]">
        <h1 className="studio-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-inter font-medium mb-8 lg:mb-16">
          Студия /
        </h1>
        <p
          className="studio__info text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[36px] 
                indent-8 sm:indent-12 md:indent-16 lg:indent-24 xl:indent-[600px] 
                max-w-full lg:max-w-[1320px] leading-relaxed lg:leading-normal"
        >
          AKRVM – формирует пространство через логику архитектуры и
          выразительность геометрии. Эстетика для нас — это не украшение, а
          результат точного взаимодействия формы и функции. Мы стремимся к
          ясности: в линиях, в пропорциях, в структуре. Свет и тень становятся
          инструментами, подчёркивающими характер и глубину. Каждый проект — это
          поиски баланса между визуальной чистотой и практическим смыслом.
          Современный дизайн — про честные конструкции и уместные решения, в
          которых нет лишнего.
        </p>
      </section>

      <section className="projects px-4 md:px-8 lg:px-16 xl:px-[250px] py-12 md:py-20 lg:py-28">
        <div className="projects__container">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
            <h1 className="projects-title text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[96px] font-inter font-medium lg:mb-0 lg:w-1/4 mb">
              <span className="block lg:inline">Проекты</span>
              <span className="block lg:inline ml-3">/</span>
            </h1>

            {/* Сетка проектов */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 lg:w-3/4">
              {/* Проект 1 */}
              <div className="project-item">
                <img
                  src={BulvarImg}
                  alt="BUL'VAR"
                  className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover mb-4"
                />
                <p className="project-name uppercase text-[16px] md:text-[18px] font-medium mb-1">
                  bul'var
                </p>
                <p className="project-info uppercase text-[14px] md:text-[16px] text-[#000000B2]">
                  Новосибирск, Россия / 109 м<sup>2</sup> / 2024
                </p>
              </div>

              {/* Проект 2 */}
              <div className="project-item">
                <img
                  src={BulvarImg}
                  alt="Другой проект"
                  className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover mb-4"
                />
                <p className="project-name uppercase text-[16px] md:text-[18px] font-medium mb-1">
                  другой проект
                </p>
                <p className="project-info uppercase text-[14px] md:text-[16px] text-[#000000B2]">
                  Москва, Россия / 85 м<sup>2</sup> / 2024
                </p>
              </div>

              {/* Проект 3 */}
              <div className="project-item">
                <img
                  src={BulvarImg}
                  alt="BUL'VAR"
                  className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover mb-4"
                />
                <p className="project-name uppercase text-[16px] md:text-[18px] font-medium mb-1">
                  проект 3
                </p>
                <p className="project-info uppercase text-[14px] md:text-[16px] text-[#000000B2]">
                  Санкт-Петербург / 120 м<sup>2</sup> / 2024
                </p>
              </div>

              {/* Проект 4 */}
              <div className="project-item">
                <img
                  src={BulvarImg}
                  alt="BUL'VAR"
                  className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover mb-4"
                />
                <p className="project-name uppercase text-[16px] md:text-[18px] font-medium mb-1">
                  проект 4
                </p>
                <p className="project-info uppercase text-[14px] md:text-[16px] text-[#000000B2]">
                  Екатеринбург / 95 м<sup>2</sup> / 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
