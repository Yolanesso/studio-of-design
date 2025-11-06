import React, { useState } from "react";

import HeroBg from "../Images/Contact/bg.png";
import BtnLang from "../Icons/btn-lang.svg";
import BtnLangBlack from "../Icons/btn lang-black.svg";
import Logo from "../Icons/logo-black.svg";
import BtnMenu from "../Icons/btn-menu.svg";
import BtnClose from "../Icons/btn-close.svg";
import Arrow from "../Icons/Arrow.svg";
import ArrowBlack from "../Icons/Arrow-black.svg";
import "../css/fonts.css";

import Footer from "../Components/Footer";

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });

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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <header
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat grayscale"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 flex flex-col min-h-screen">
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

                

                <div className="flex items-center gap-2 sm:gap-3">
                  <button className="bg-white text-gray-900 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-[27px] font-inter font-medium text-xs sm:text-sm md:text-base max-[377px]:hidden hover:bg-gray-100 transition-colors duration-200 border border-white">
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

          <div className="flex-1 flex flex-col justify-center items-center relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <h1 className="text-[48px] sm:text-[64px] md:text-[72px] lg:text-[84px] xl:text-[96px] 2xl:text-[120px] font-inter font-medium text-white leading-[1.1] mb-8 md:mb-12">
              Связаться с нами.
            </h1>

            <button
              onClick={() => scrollToSection("contact-form")}
              className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 group transition-all duration-300 hover:translate-y-2"
              aria-label="Перейти к форме"
            >
              <img
                src={Arrow}
                alt="Стрелка вниз"
                className="w-6 sm:w-8 md:w-10 lg:w-12 transition-transform duration-300 group-hover:translate-y-1"
              />
            </button>

            <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 2xl:right-20 max-w-[400px] sm:max-w-[500px] md:max-w-[600px]">
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-inter">
                Нам не терпится воплощать ваши идеи в реальность
              </p>
            </div>
          </div>
        </div>
      </header>

      <section id="contact-form" className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[140px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-inter font-medium text-black mb-8 md:mb-12">
                Основная информация
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-inter text-gray-700">
                      Имя<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Имя"
                      required
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg font-inter text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block mb-2 text-sm font-inter text-gray-700">
                      Локация<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Локация"
                      required
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg font-inter text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-inter text-gray-700">
                      Телефон<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Телефон"
                      required
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg font-inter text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-inter text-gray-700">
                      Электронная почта<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Электронная почта"
                      required
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg font-inter text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Расскажите о проекте
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Расскажите о проекте"
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg font-inter text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-4 h-4 text-black border-gray-300 rounded focus:ring-2 focus:ring-gray-400"
                  />
                  <label
                    htmlFor="consent"
                    className="text-xs sm:text-sm font-inter text-gray-700 leading-relaxed"
                  >
                    Отправляя эту форму, я даю согласие на обработку моих
                    персональных данных в соответствии с условиями{" "}
                    <a
                      href="#"
                      className="text-black underline hover:text-gray-700"
                    >
                      Политика конфиденциальности
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-lg font-inter font-medium text-sm sm:text-base hover:bg-gray-800 transition-colors duration-200"
                >
                  Отправить
                </button>
              </form>
            </div>

            <div className="flex flex-col justify-center space-y-8 md:space-y-12">
              <div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-black leading-relaxed">
                  Современные интерьеры — это не тренд, это уникальность и
                  естественность дизайна
                </p>
              </div>

              <div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-black leading-relaxed">
                  Студия создает архитектуру пространства, которая способна
                  поднять вашу жизнь на новый уровень.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer hideTopBlock={true} />

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

                <div className="flex items-center gap-2 sm:gap-3">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-32 xl:gap-40 2xl:gap-48 w-full max-w-5xl">
              <div className="flex flex-col items-start justify-start gap-8 md:gap-10">
                <div className="flex flex-col gap-6 md:gap-8">
                  <button
                    onClick={() => {
                      scrollToSection("projects");
                      toggleMenu();
                    }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium transition-colors text-left leading-tight"
                    style={{ color: '#00000099' }}
                    onMouseEnter={(e) => e.target.style.color = '#000000'}
                    onMouseLeave={(e) => e.target.style.color = '#00000099'}
                  >
                    Проекты
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection("about");
                      toggleMenu();
                    }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium transition-colors text-left leading-tight"
                    style={{ color: '#00000099' }}
                    onMouseEnter={(e) => e.target.style.color = '#000000'}
                    onMouseLeave={(e) => e.target.style.color = '#00000099'}
                  >
                    О нас
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection("services");
                      toggleMenu();
                    }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[36px] font-inter font-medium transition-colors text-left leading-tight"
                    style={{ color: '#00000099' }}
                    onMouseEnter={(e) => e.target.style.color = '#000000'}
                    onMouseLeave={(e) => e.target.style.color = '#00000099'}
                  >
                    Услуги
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection("interaction");
                      toggleMenu();
                    }}
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
    </>
  );
}

