import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
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
import MontblancImg from "../Images/Projects/Montblanc/Montblanc-main.png";
import BeringImg from "../Images/Projects/Bering/bering-project.png";
import CHRNSHImg from "../Projects/CHRNSH_45.15/010000.png";
import MO68Img from "../Projects/MO68_94/01. Прихожая/010000.png";

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
  const heroRef = useRef(null);
  const studioRef = useRef(null);

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: studioScrollProgress } = useScroll({
    target: studioRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(heroScrollProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(heroScrollProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(heroScrollProgress, [0, 0.5, 1], [1, 1, 0]);
  const studioY = useTransform(studioScrollProgress, [0, 1], ["0%", "20%"]);

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
        ref={heroRef}
        className="relative min-h-screen w-full overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
          style={{ 
            backgroundImage: `url(${HeroBg})`,
            y: backgroundY,
            scale: 1.1
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-black/20"
          style={{ y: backgroundY }}
        />

        <motion.div 
          className="relative z-10"
          style={{ y: textY, opacity }}
        >
          <div className="container mx-auto">
            <nav className="py-6 sm:py-8 md:py-10 lg:py-12 min-[1920px]:py-14">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:justify-between">
                <button className="transition-opacity hover:opacity-80 flex-shrink-0">
                  <img
                    src={BtnLang}
                    alt="Сменить язык"
                    className="w-8 sm:w-10 md:w-12 min-[1920px]:w-14"
                  />
                </button>

                <div className="flex-1 flex justify-center md:flex-1 lg:flex-1">
                  <button 
                    onClick={() => navigate("/")}
                    className="transition-opacity hover:opacity-80"
                  >
                    <img
                      src={Logo}
                      alt="Логотип"
                      className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] 2xl:max-w-[160px] min-[1920px]:max-w-[180px]"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </button>
                </div>

                <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0">
                  <button 
                    onClick={() => navigate("/contact")}
                    className="bg-white text-black px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 min-[1920px]:px-8 min-[1920px]:py-5 rounded-[27px] font-inter font-medium text-xs sm:text-sm md:text-base min-[1920px]:text-lg max-[377px]:hidden hover:bg-gray-100 transition-colors duration-200 shadow-md"
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
                      className="w-6 sm:w-8 md:w-10 min-[1920px]:w-12 transition-transform duration-300"
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

          <div className="header__info relative z-10 px-4 sm:px-6 md:px-8 lg:pl-[100px] xl:pl-[310px] 2xl:pl-[250px] min-[1920px]:pl-[350px] mt-4 sm:mt-6 md:mt-8 lg:mt-12 2xl:mt-20 min-[1920px]:mt-24">
            <h1 className="text-[48px] sm:text-[64px] md:text-[72px] lg:text-[84px] xl:text-[90px] 2xl:text-[96px] min-[1920px]:text-[120px] font-inter text-white leading-[1.1]">
              <span className="block">Архитектура.</span>
              <span className="block lg:mt-2 2xl:mt-4 min-[1920px]:mt-6">Дизайн интерьера.</span>
            </h1>
            <div 
              className="flex items-start gap-2 sm:gap-3 min-[1920px]:gap-4 mt-[12px] sm:mt-[14px] md:mt-[16px] min-[1920px]:mt-[20px] cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              <p className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] min-[1920px]:text-[20px] text-white max-w-[180px] sm:max-w-[200px] md:max-w-[230px] min-[1920px]:max-w-[280px] font-inter leading-relaxed">
                Пространства, где форма встречает функцию
              </p>
              <img
                src={Arrow}
                alt="Contacts"
                className="w-4 sm:w-10 md:w-12 min-[1920px]:w-14 mt-1 sm:mt-4 min-[1920px]:mt-6"
              />
            </div>
          </div>
        </motion.div>
      </header>

      <section 
        ref={studioRef}
        className=" font-[400] studio py-8 sm:py-12 md:py-16 lg:py-24 2xl:py-40 min-[1920px]:py-48 px-4 sm:px-6 md:px-8 lg:px-[100px] xl:px-[150px] 2xl:px-[250px] min-[1920px]:px-[300px]"
      >
        <motion.h1 
          className="studio-title font-inter mb-4 sm:mb-6 md:mb-8 lg:mb-12 2xl:mb-16 min-[1920px]:mb-20 text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] xl:text-[96px] 2xl:text-[96px] min-[1920px]:text-[120px]"
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: '100%',
            letterSpacing: '0%',
            y: studioY
          }}
        >
          Студия /
        </motion.h1>
        <motion.div
          style={{ y: studioY }}
        >
          <AnimatedWordText
            className="font-inter text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[36px] min-[1920px]:text-[42px]"
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
        </motion.div>
      </section>

      <section id="projects" className=" projects px-4 sm:px-6 md:px-8 lg:px-[50px] xl:px-[150px] 2xl:px-[250px] min-[1920px]:px-[300px] py-8 sm:py-12 md:py-16 lg:py-20 2xl:py-28 min-[1920px]:py-32">
        <div className="projects__container">
          <div className="flex flex-col">
            <h1 
              className="projects-title font-inter mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14 min-[1920px]:mb-16 flex-shrink-0 text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] xl:text-[96px] 2xl:text-[96px] min-[1920px]:text-[120px] cursor-pointer relative inline-block"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
              onClick={() => navigate("/projects")}
              onMouseEnter={(e) => {
                const underline = e.currentTarget.querySelector('.projects-underline');
                if (underline) {
                  underline.style.width = '100%';
                }
              }}
              onMouseLeave={(e) => {
                const underline = e.currentTarget.querySelector('.projects-underline');
                if (underline) {
                  underline.style.width = '0%';
                }
              }}
            >
              <span className="inline-block relative">
                Проекты
                <span 
                  className="projects-underline absolute bottom-0 left-2 sm:left-3 md:left-4 h-[1px] sm:h-[1.5px] md:h-[2px] bg-black transition-all duration-500 ease-out"
                  style={{ width: '0%' }}
                ></span>
              </span>
              <span className="inline-block ml-2">/</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 min-[1920px]:gap-14 w-full">
              <motion.div 
                className="project-item group cursor-pointer"
                onClick={() => navigate("/projects/balance")}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.img
                  src={BalanceImg}
                  alt="Balance 98"
                  className="w-full aspect-[4/3] object-cover mb-3 sm:mb-4 min-[1920px]:mb-5 transition-all duration-700 group-hover:invert"
                  style={{ objectPosition: 'center 70%' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="project-name uppercase text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] min-[1920px]:text-[20px] font-medium mb-1">
                  balance
                </p>
                <p className="project-info uppercase text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] min-[1920px]:text-[18px] text-[#000000B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Новосибирск, Россия / 98 м<sup>2</sup> / 2025
                </p>
              </motion.div>

              <motion.div 
                className="project-item group cursor-pointer"
                onClick={() => navigate("/projects/bulvar")}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.img
                  src={BulvarImg}
                  alt="BUL'VAR"
                  className="w-full aspect-[4/3] object-cover mb-3 sm:mb-4 min-[1920px]:mb-5 transition-all duration-700 group-hover:invert"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="project-name uppercase text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] min-[1920px]:text-[20px] font-medium mb-1">
                  bul'var
                </p>
                <p className="project-info uppercase text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] min-[1920px]:text-[18px] text-[#000000B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Новосибирск, Россия / 109 м<sup>2</sup> / 2024
                </p>
              </motion.div>

              <motion.div 
                className="project-item group cursor-pointer"
                onClick={() => navigate("/projects/bering")}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.img
                  src={BeringImg}
                  alt="Bering 109"
                  className="w-full aspect-[4/3] object-cover mb-3 sm:mb-4 min-[1920px]:mb-5 transition-all duration-700 group-hover:invert"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="project-name uppercase text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] min-[1920px]:text-[20px] font-medium mb-1">
                  Bering
                </p>
                <p className="project-info uppercase text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] min-[1920px]:text-[18px] text-[#000000B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Новосибирск, Россия / 109 м<sup>2</sup> / 2025
                </p>
              </motion.div>

              <motion.div 
                className="project-item group cursor-pointer"
                onClick={() => navigate("/projects/montblanc")}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.img
                  src={MontblancImg}
                  alt="MONTBLANC 88"
                  className="w-full aspect-[4/3] object-cover mb-3 sm:mb-4 min-[1920px]:mb-5 transition-all duration-700 group-hover:invert"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="project-name uppercase text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] min-[1920px]:text-[20px] font-medium mb-1">
                  montblanc
                </p>
                <p className="project-info uppercase text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] min-[1920px]:text-[18px] text-[#000000B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Новосибирск, Россия / 88 м<sup>2</sup> / 2024
                </p>
              </motion.div>
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