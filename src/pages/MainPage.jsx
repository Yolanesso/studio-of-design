import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

import HeroBg from "../Images/HeroBg.png";
import BtnLang from "../Icons/btn-lang.svg";
import Logo from "../Icons/logo-black.svg";
import LogoBlack from "../Icons/logo-white.svg";
import BtnMenu from "../Icons/btn-menu.svg";
import "../css/fonts.css";
import Arrow from "../Icons/Arrow.svg";

import BulvarImg from "../Images/Projects/Bulvar.png";
import BalanceImg from "../Images/Projects/Balance/balance-project.png";
import Aeron from "../Images/Projects/Aeron.png";
import Balance73 from "../Images/Projects/Balance73.png";
import Mission from "../Images/Mission.png";

import BeringImg from "../Images/Projects/Bering/bering-project.png"

import Footer from "../Components/Footer";
import BurgerMenu from "../Components/BurgerMenu";

const AnimatedWordText = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const words = children.split(/(\s+)/);

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => {
        if (word.match(/^\s+$/)) {
          return <span key={index}>{word}</span>;
        }
        return (
          <motion.span
            key={index}
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={
              isInView
                ? {
                    filter: "blur(0px)",
                    opacity: 1,
                  }
                : {
                    filter: "blur(10px)",
                    opacity: 0,
                  }
            }
            transition={{
              duration: 0.4,
              delay: delay + index * 0.02,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};
// sm: (≥377px)
// md: (≥834px)
// lg: (≥1024px)
// xl: (≥1280px)
// 2xl: (≥1920px)

export default function HeroSection() {
  const navigate = useNavigate();
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
                    className="bg-amber-50 text-gray-900 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-[27px] font-inter font-medium text-xs sm:text-sm md:text-base max-[377px]:hidden hover:bg-amber-100 transition-colors duration-200 shadow-md"
                  >
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
          <BurgerMenu 
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            scrollToSection={scrollToSection}
          />

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
        <h1 
          className="studio-title font-inter mb-4 sm:mb-6 md:mb-8 lg:mb-12 2xl:mb-16 text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] xl:text-[96px] 2xl:text-[96px]"
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: '100%',
            letterSpacing: '0%'
          }}
        >
          Студия /
        </h1>
        <AnimatedWordText
          className="font-inter text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[36px]"
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: '140%',
            letterSpacing: '0%'
          }}
        >
          OTHR – формирует пространство через логику архитектуры и выразительность геометрии. Эстетика для нас — это не украшение, а результат точного взаимодействия формы и функции. Мы стремимся к ясности: в линиях, в пропорциях, в структуре. Свет и тень становятся инструментами, подчёркивающими характер и глубину. Каждый проект — это поиски баланса между визуальной чистотой и практическим смыслом. Современный дизайн — про честные конструкции и уместные решения, в которых нет лишнего.
        </AnimatedWordText>
      </section>

      <section id="projects" className=" projects px-4 sm:px-6 md:px-8 lg:px-[50px] xl:px-[150px] 2xl:px-[250px] py-8 sm:py-12 md:py-16 lg:py-20 2xl:py-28">
        <div className="projects__container">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 xl:gap-12 2xl:gap-24">
            <h1 
              className="projects-title font-inter lg:mb-0 lg:w-1/4 mb-4 sm:mb-6 md:mb-8 text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] xl:text-[96px] 2xl:text-[96px]"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              <span className="block lg:inline">Проекты</span>
              <span className="block lg:inline ml-2 lg:ml-3">/</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 lg:w-3/4">
              <div 
                className="project-item group cursor-pointer"
                onClick={() => navigate("/projects/bulvar")}
              >
                <img
                  src={BulvarImg}
                  alt="BUL'VAR"
                  className="w-full aspect-[4/3] object-cover mb-3 sm:mb-4 transition-all duration-300 group-hover:invert"
                />
                <p className="project-name uppercase text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  bul'var
                </p>
                <p className="project-info uppercase text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#000000B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Новосибирск, Россия / 109 м<sup>2</sup> / 2024
                </p>
              </div>

              <div 
                className="project-item group cursor-pointer"
                onClick={() => navigate("/projects/balance")}
              >
                <img
                  src={BalanceImg}
                  alt="Другой проект"
                  className="w-full aspect-[4/3] object-cover mb-3 sm:mb-4 transition-all duration-300 group-hover:invert"
                  style={{ objectPosition: 'center 70%' }}
                />
                <p className="project-name uppercase text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  balance
                </p>
                <p className="project-info uppercase text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#000000B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Новосибирск, Россия / 98 м<sup>2</sup> / 2025
                </p>
              </div>

              <div 
                className="project-item group cursor-pointer"
                onClick={() => navigate("/projects/bering")}
              >
                <img
                  src={BeringImg}
                  alt="BUL'VAR"
                  className="w-full aspect-[4/3] object-cover mb-3 sm:mb-4 transition-all duration-300 group-hover:invert"
                />
                <p className="project-name uppercase text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Bering
                </p>
                <p className="project-info uppercase text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#000000B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Новосибирск / 110 м<sup>2</sup> / 2025
                </p>
              </div>

              <div 
                className="project-item group cursor-pointer"
                onClick={() => navigate("/projects/balance73")}
              >
                <img
                  src={Balance73}
                  alt="BUL'VAR"
                  className="w-full aspect-[4/3] object-cover mb-3 sm:mb-4 transition-all duration-300 group-hover:invert"
                  style={{ objectPosition: 'center 70%' }}
                />
                <p className="project-name uppercase text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Balance
                </p>
                <p className="project-info uppercase text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#000000B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Новосибирск / 73 м<sup>2</sup> / 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mission mt-8 sm:mt-[80px] md:mt-[114px] 2xl:mt-[320px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[170px] 2xl:px-[220px]">
        <div className="mission_text flex flex-col md:flex-row md:items-start md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-16">
          <h1 
            className="mission_title font-inter md:w-1/2 lg:w-2/5 xl:w-2/5 2xl:w-[960px] mb-4 sm:mb-6 md:mb-0 text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] xl:text-[96px] 2xl:text-[96px]"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Миссия /
          </h1>
          <AnimatedWordText
            className="md:w-1/2 lg:w-3/5 xl:w-3/5 text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[36px] font-inter"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              lineHeight: '140%',
              letterSpacing: '0%'
            }}
          >
            Архитектурный подход в дизайне интерьеров: выразительные формы, монохромная палитра, натуральные материалы и эмоциональный акцент. Мы создаём пространства, которые вдохновляют жить.
          </AnimatedWordText>
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