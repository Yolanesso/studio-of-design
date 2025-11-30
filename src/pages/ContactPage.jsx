import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
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

  const handleNavigation = (path) => {
    navigate(path);
    toggleMenu();
    window.scrollTo(0, 0);
  };

  // Функции валидации
  const validateName = (name) => {
    if (!name.trim()) {
      return "Имя обязательно для заполнения";
    }
    if (name.trim().length < 2) {
      return "Имя должно содержать минимум 2 символа";
    }
    if (!/^[а-яА-ЯёЁa-zA-Z\s-]+$/.test(name.trim())) {
      return "Имя может содержать только буквы, пробелы и дефисы";
    }
    return "";
  };

  const validateLocation = (location) => {
    if (!location.trim()) {
      return "Локация обязательна для заполнения";
    }
    if (location.trim().length < 2) {
      return "Локация должна содержать минимум 2 символа";
    }
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) {
      return "Телефон обязателен для заполнения";
    }
    // Убираем все символы кроме цифр и + для проверки
    const cleanedPhone = phone.replace(/[\s\-\(\)]/g, "");
    const digitsOnly = cleanedPhone.replace(/\+/g, "");
    
    // Проверяем количество цифр (10-11 для российских номеров)
    if (digitsOnly.length < 10) {
      return "Номер телефона должен содержать минимум 10 цифр";
    }
    if (digitsOnly.length > 11) {
      return "Номер телефона не должен содержать более 11 цифр";
    }
    if (!/^\+?[0-9]+$/.test(cleanedPhone)) {
      return "Введите корректный номер телефона (например: +7 999 123 45 67)";
    }
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      return "Email обязателен для заполнения";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return "Введите корректный email адрес";
    }
    return "";
  };

  const validateMessage = (message) => {
    if (message.trim().length > 1000) {
      return "Сообщение не должно превышать 1000 символов";
    }
    return "";
  };

  const validateForm = () => {
    const newErrors = {};
    
    const nameError = validateName(formData.name);
    if (nameError) newErrors.name = nameError;
    
    const locationError = validateLocation(formData.location);
    if (locationError) newErrors.location = locationError;
    
    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;
    
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;
    
    const messageError = validateMessage(formData.message);
    if (messageError) newErrors.message = messageError;
    
    if (!formData.consent) {
      newErrors.consent = "Необходимо дать согласие на обработку данных";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Специальная обработка для телефона - ограничение количества цифр
    if (name === "phone" && type !== "checkbox") {
      // Убираем все символы кроме цифр, +, пробелов, скобок и дефисов
      const cleaned = value.replace(/[^\d\+\s\-\(\)]/g, "");
      // Подсчитываем количество цифр
      const digitsOnly = cleaned.replace(/[\s\-\(\)\+]/g, "");
      
      let finalValue = cleaned;
      
      // Ограничиваем до 11 цифр (максимум для российского номера)
      if (digitsOnly.length > 11) {
        // Если цифр больше 11, обрезаем до 11
        let limitedValue = "";
        let digitCount = 0;
        for (let i = 0; i < cleaned.length && digitCount < 11; i++) {
          const char = cleaned[i];
          if (/\d/.test(char)) {
            digitCount++;
            limitedValue += char;
          } else if (/[\s\-\(\)\+]/.test(char)) {
            limitedValue += char;
          }
        }
        finalValue = limitedValue;
      }
      
      setFormData((prev) => ({
        ...prev,
        [name]: finalValue,
      }));
      
      // Валидация при изменении (только для заполненных полей)
      if (touched[name]) {
        const error = validatePhone(finalValue);
        setErrors((prev) => ({
          ...prev,
          [name]: error,
        }));
      }
      return;
    }
    
    // Для остальных полей
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Валидация при изменении (только для заполненных полей)
    if (touched[name]) {
      let error = "";
      switch (name) {
        case "name":
          error = validateName(value);
          break;
        case "location":
          error = validateLocation(value);
          break;
        case "email":
          error = validateEmail(value);
          break;
        case "message":
          error = validateMessage(value);
          break;
        case "consent":
          error = !checked ? "Необходимо дать согласие на обработку данных" : "";
          break;
        default:
          break;
      }
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Валидация при потере фокуса
    let error = "";
    switch (name) {
      case "name":
        error = validateName(value);
        break;
      case "location":
        error = validateLocation(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
      case "consent":
        error = !checked ? "Необходимо дать согласие на обработку данных" : "";
        break;
      default:
        break;
    }
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Помечаем все поля как "тронутые" для показа всех ошибок
    setTouched({
      name: true,
      location: true,
      phone: true,
      email: true,
      message: true,
      consent: true,
    });

    // Валидация формы
    if (!validateForm()) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Пожалуйста, исправьте ошибки в форме' 
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // URL для Vercel (использует относительный путь для serverless функции)
      // В production это будет /api/submit-form, в dev можно использовать localhost
      const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:3001' : '');
      const endpoint = API_URL ? `${API_URL}/api/submit-form` : '/api/submit-form';
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.' 
        });
        
        // Очищаем форму
        setFormData({
          name: "",
          location: "",
          phone: "",
          email: "",
          message: "",
          consent: false,
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.message || 'Произошла ошибка при отправке заявки. Попробуйте еще раз.' 
        });
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Не удалось отправить заявку. Проверьте подключение к интернету и попробуйте еще раз.' 
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:justify-between">
                <button className="transition-opacity hover:opacity-80 flex-shrink-0">
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

                <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0">
                  <button 
                    onClick={() => scrollToSection("contact-form")}
                    className="bg-white text-gray-900 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-[27px] font-inter font-medium text-xs sm:text-sm md:text-base max-[377px]:hidden hover:bg-gray-100 transition-colors duration-200 border border-white"
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
                      onBlur={handleBlur}
                      placeholder="Имя"
                      required
                      className={`w-full px-4 py-3 bg-gray-100 border rounded-lg font-inter text-sm sm:text-base focus:outline-none focus:ring-2 focus:border-transparent ${
                        errors.name && touched.name
                          ? "border-red-500 focus:ring-red-400"
                          : "border-gray-200 focus:ring-gray-400"
                      }`}
                    />
                    {errors.name && touched.name && (
                      <p className="mt-1 text-xs text-red-500 font-inter">{errors.name}</p>
                    )}
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
                      onBlur={handleBlur}
                      placeholder="Локация"
                      required
                      className={`w-full px-4 py-3 bg-gray-100 border rounded-lg font-inter text-sm sm:text-base focus:outline-none focus:ring-2 focus:border-transparent ${
                        errors.location && touched.location
                          ? "border-red-500 focus:ring-red-400"
                          : "border-gray-200 focus:ring-gray-400"
                      }`}
                    />
                    {errors.location && touched.location && (
                      <p className="mt-1 text-xs text-red-500 font-inter">{errors.location}</p>
                    )}
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
                      onBlur={handleBlur}
                      placeholder="+7 999 123 45 67"
                      required
                      className={`w-full px-4 py-3 bg-gray-100 border rounded-lg font-inter text-sm sm:text-base focus:outline-none focus:ring-2 focus:border-transparent ${
                        errors.phone && touched.phone
                          ? "border-red-500 focus:ring-red-400"
                          : "border-gray-200 focus:ring-gray-400"
                      }`}
                    />
                    {errors.phone && touched.phone && (
                      <p className="mt-1 text-xs text-red-500 font-inter">{errors.phone}</p>
                    )}
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
                      onBlur={handleBlur}
                      placeholder="email@example.com"
                      required
                      className={`w-full px-4 py-3 bg-gray-100 border rounded-lg font-inter text-sm sm:text-base focus:outline-none focus:ring-2 focus:border-transparent ${
                        errors.email && touched.email
                          ? "border-red-500 focus:ring-red-400"
                          : "border-gray-200 focus:ring-gray-400"
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p className="mt-1 text-xs text-red-500 font-inter">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-inter text-gray-700">
                    Расскажите о проекте
                    {formData.message.length > 0 && (
                      <span className="ml-2 text-gray-500 text-xs">
                        ({formData.message.length}/1000)
                      </span>
                    )}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Расскажите о проекте"
                    rows={6}
                    maxLength={1000}
                    className={`w-full px-4 py-3 bg-gray-100 border rounded-lg font-inter text-sm sm:text-base focus:outline-none focus:ring-2 focus:border-transparent resize-none ${
                        errors.message && touched.message
                          ? "border-red-500 focus:ring-red-400"
                          : "border-gray-200 focus:ring-gray-400"
                      }`}
                  />
                  {errors.message && touched.message && (
                    <p className="mt-1 text-xs text-red-500 font-inter">{errors.message}</p>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                    className={`mt-1 w-4 h-4 text-black border rounded focus:ring-2 focus:ring-gray-400 ${
                      errors.consent && touched.consent
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <div className="flex-1">
                    <label
                      htmlFor="consent"
                      className="text-xs sm:text-sm font-inter text-gray-700 leading-relaxed"
                    >
                      Отправляя эту форму, я даю согласие на обработку моих
                      персональных данных в соответствии с условиями{" "}
                      <a
                        href="/Documents/OTHR_Политика_обработки_персональных_данных.docx"
                        download
                        className="text-black underline hover:text-gray-700"
                      >
                        Политика конфиденциальности
                      </a>
                      <span className="text-red-500">*</span>
                    </label>
                    {errors.consent && touched.consent && (
                      <p className="mt-1 text-xs text-red-500 font-inter">{errors.consent}</p>
                    )}
                  </div>
                </div>

                {/* Сообщение о статусе отправки */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg font-inter text-sm ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto bg-black text-white px-8 py-4 rounded-lg font-inter font-medium text-sm sm:text-base transition-colors duration-200 ${
                    isSubmitting
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить'}
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
        className={`fixed inset-0 z-40 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${
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
                    onClick={() => handleNavigation("/projects")}
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
    </>
  );
}

