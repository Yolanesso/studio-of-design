import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BulvarImg from "../Images/Projects/Bulvar.png";
import BalanceImg from "../Images/Projects/Balance/balance-project.png";
import BeringImg from "../Images/Projects/Bering/bering-project.png";
import Balance73 from "../Images/Projects/Balance73.png";

import BtnLangBlack from "../Icons/btn lang-black.svg";
import Logo from "../Icons/logo-black.svg";
import BtnMenu from "../Icons/btn-menu.svg";
import BtnClose from "../Icons/btn-close.svg";

import Footer from "../Components/Footer";
import BurgerMenu from "../Components/BurgerMenu";

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

      <BurgerMenu 
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        scrollToSection={scrollToSection}
      />

      <Footer />
    </>
  );
}

