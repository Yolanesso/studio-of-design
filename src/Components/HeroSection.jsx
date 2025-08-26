import React from "react";
import HeroBg from "../Images/HeroBg.png";
import BtnLang from "../Icons/btn-lang.svg";
import Logo from "../Icons/logo.svg";
import BtnMenu from "../Icons/btn-menu.svg";
import "../css/fonts.css";
import Arrow from "../Icons/Arrow.svg";

export default function HeroSection() {
  return (
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
          <h1 className="text-[96px] font-inter text-amber-50 leading-[1.1] ">
            <span className="block">Архитектура.</span>
            <span className="block lg:mt-4">Дизайн интерьера.</span>
          </h1>
          <div className="flex items-start gap-3 mt-[16px]">
            <p className=" text-[18px] text-amber-50 size-[230px] font-inter leading-relaxed">
              Пространства, где форма встречает функцию
            </p>
            <img src={Arrow} alt="Contacts" className="mt-2" />
          </div>
        </div>
      </div>
    </header>
  );
}
