import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import BulvarImg from "../Images/Projects/Bulvar.png";
import BalanceImg from "../Images/Projects/Balance/balance-project.png";
import BeringImg from "../Images/Projects/Bering/bering-project.png";
import Balance73 from "../Images/Projects/Balance73.png";

import BtnLangBlack from "../Icons/btn lang-black.svg";
import Logo from "../Icons/logo-black.svg";
import BtnMenu from "../Icons/btn menu-black.svg";
import BtnClose from "../Icons/btn-close.svg";
import ArrowBlack from "../Icons/Arrow-black.svg";

import Footer from "../Components/Footer";

// База данных проектов
const projects = [
  {
    id: "bulvar",
    name: "bul'var",
    image: BulvarImg,
    location: "Новосибирск",
    area: "109",
    year: "2024",
    objectPosition: "center"
  },
  {
    id: "balance",
    name: "balance",
    image: BalanceImg,
    location: "Новосибирск",
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

export default function ProjectPage() {
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

  const handleNavigation = (path) => {
    navigate(path);
    toggleMenu();
    if (path === "/") {
      // Если переходим на главную, скроллим к секции проектов
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

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

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
          <h1 
            className="font-inter mb-8 sm:mb-12 md:mb-16 text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] xl:text-[96px] 2xl:text-[96px]"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Проекты /
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-item group cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full aspect-[4/3] object-cover mb-3 sm:mb-4 transition-all duration-700 group-hover:invert"
                  style={{ objectPosition: project.objectPosition }}
                />
                <p className="project-name uppercase text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium mb-1">
                  {project.name}
                </p>
                <p className="project-info uppercase text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#000000B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.location} / {project.area} м<sup>2</sup> / {project.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

