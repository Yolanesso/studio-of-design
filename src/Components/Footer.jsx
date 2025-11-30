import ArrowBlack from "../Icons/Arrow-black.svg";

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer({ hideTopBlock = false }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer>
      {!hideTopBlock && (
      <div className="footer__text flex flex-col 2xl:flex-row px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[170px] 2xl:px-[170px] justify-between items-start 2xl:items-center mt-12 sm:mt-16 md:mt-20 lg:mt-28 xl:mt-[150px] 2xl:mt-[183px] border-b border-b-[#00000033] pb-6 sm:pb-8 md:pb-10">
        {/* Левая группа */}
        <div className="flex flex-col 2xl:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-[62px] text-[#00000099] text-sm sm:text-base md:text-lg text-left mb-4 2xl:mb-0">
          <p>Современный дизайн интерьера</p>
          <p>Архитектурный дизайн</p>
          <p>По всему миру</p>
        </div>
        <div 
          className="flex items-center gap-3 sm:gap-4 md:gap-5 mt-4 2xl:mt-0 cursor-pointer"
          onClick={() => handleNavigation("/contact")}
        >
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
      )}

      {/* Нижняя часть футера с навигацией */}
      <div className="footer-navigation flex flex-col md:flex-row px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[170px] 2xl:px-[170px] py-6 sm:py-8 md:py-10 lg:py-12 gap-6 sm:gap-8 md:gap-10 lg:gap-16">
        {/* Колонка 1 - Навигация */}
        <div className="flex flex-col w-full md:w-auto">
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font- mb-3 sm:mb-4 text-[#000000]">
            Навигация
          </p>
          <div className="flex flex-col gap-2 sm:gap-3">
            <button
              onClick={() => handleNavigation("/projects")}
              className="font-inter text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#00000099] hover:text-[#000000] transition-colors text-left"
            >
              Проекты
            </button>
            <button
              onClick={() => handleNavigation("/about")}
              className="text-[14px] xl:text-[22px] sm:text-[16px] md:text-[18px] text-[#00000099] hover:text-[#000000] transition-colors text-left"
            >
              О нас
            </button>
            <button
              onClick={() => handleNavigation("/services")}
              className="text-[14px] xl:text-[22px] sm:text-[16px] md:text-[18px] text-[#00000099] hover:text-[#000000] transition-colors text-left"
            >
              Услуги
            </button>
            <button
              onClick={() => handleNavigation("/contact")}
              className="text-[14px] xl:text-[22px] sm:text-[16px] md:text-[18px] text-[#00000099] hover:text-[#000000] transition-colors text-left"
            >
              Взаимодействие
            </button>
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
              ©2025 OTHR
            </div>

            {/* Центральный элемент с правым */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-[111px] items-center">
              <a
                href="/Documents/OTHR_Политика_обработки_персональных_данных.docx"
                download
                className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#00000099] hover:text-[#000000] transition-colors text-center sm:text-left"
              >
                Политика конфиденциальности
              </a>

              {/* Правый элемент */}
              <button
                onClick={scrollToTop}
                className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#00000099] hover:text-[#000000] transition-colors cursor-pointer"
              >
                В начало ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
