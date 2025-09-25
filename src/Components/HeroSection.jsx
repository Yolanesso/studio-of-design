import React from "react";

import HeroBg from "../Images/HeroBg.png";
import BtnLang from "../Icons/btn-lang.svg";
import BtnLangBlack from "../Icons/btn lang-black.svg";
import Logo from "../Icons/logo-black.svg";
import LogoBlack from "../Icons/logo-white.svg";
import BtnClose from "../Icons/btn-close.svg";
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

import Footer from "./Footer";
import Header from "./Services/HeaderServices";
// sm: (≥377px)
// md: (≥834px)
// lg: (≥1024px)
// xl: (≥1280px)
// 2xl: (≥1920px)

export default function HeroSection() {
  return (
    <>
      <Header />

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
          OTHR – формирует пространство через логику архитектуры и
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

      <Footer />
    </>
  );
}
