import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

import HeroBg from "../Images/AboutUs/bg.png";
import BtnLang from "../Icons/btn-lang.svg";
import LogoWhite from "../Icons/logo-white.svg";
import BtnMenu from "../Icons/btn-menu.svg";
import BtnClose from "../Icons/btn-close.svg";
import BtnLangBlack from "../Icons/btn lang-black.svg";
import Logo from "../Icons/logo-black.svg";
import ArrowBlack from "../Icons/Arrow-black.svg";
import "../css/fonts.css";

import ArtemImg from "../Images/Comand/Artem.png";
import AngelinaImg from "../Images/Comand/Angelina.png";
import GlebImg from "../Images/Comand/Gleb.png";
import KrisImg from "../Images/Comand/Kris.png";
import NikitaImg from "../Images/Comand/Nikita.png";
import OlesyaImg from "../Images/Comand/Olesya.png";
import UstimImg from "../Images/Comand/Ustim.png";
import YlyanaImg from "../Images/Comand/Ylyana.png";

import Footer from "../Components/Footer";

// Компонент для анимации текста с размытием
const AnimatedText = ({ children, className = "", delay = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{
        filter: isInView ? "blur(0px)" : "blur(10px)",
        opacity: isInView ? 1 : 0,
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Компонент для анимации текста по словам с эффектом размытия
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

export default function AboutUsPage() {
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
    window.scrollTo(0, 0);
  };

  return (
    <>
      <header
        className="relative w-full bg-cover bg-center bg-no-repeat grayscale"
        style={{ 
          backgroundImage: `url(${HeroBg})`,
          aspectRatio: '1920/443',
          minHeight: '443px',
          height: 'auto'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 flex flex-col h-full w-full">
          <div className="container mx-auto">
            <nav className="py-4 sm:py-6 md:py-8 lg:py-10">
              <div className="flex items-center justify-between">
                <button className="transition-opacity hover:opacity-80">
                  <img
                    src={BtnLang}
                    alt="Сменить язык"
                    className="w-8 sm:w-10 md:w-12"
                  />
                </button>

                <div className="flex-1 flex flex-col items-center justify-center">
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

          <div className="flex-1 flex flex-col justify-center relative py-12 sm:py-16 md:py-20 lg:py-[100px] px-4 sm:px-6 md:px-8 lg:px-[220px] xl:px-[320px] 2xl:px-[420px]">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="order-1 lg:order-1 w-full lg:w-auto text-left">
                <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px] font-inter font-medium text-white leading-[1.1]">
                  О нас.
                </h1>
              </div>

              <div className="order-2 lg:order-2 flex justify-start lg:justify-end w-full lg:w-auto">
                <p 
                  className="font-inter max-w-[400px] sm:max-w-[500px] md:max-w-[600px] text-left lg:text-right"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#FFFFFFB2'
                  }}
                >
                  Мы — команда архитекторов и дизайнеров интерьеров, вдохновлённая созданием пространства, где стиль встречается с комфортом
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[140px]">
          <div className="max-w-4xl space-y-8 md:space-y-12 lg:space-y-16">
            <div>
              <AnimatedText>
                <h2 className="text-[64px] sm:text-[80px] md:text-[96px] lg:text-[120px] xl:text-[144px] 2xl:text-[180px] font-inter font-medium text-black leading-[1.1] mb-6 md:mb-8 lg:mb-12">
                  OTHR
                </h2>
              </AnimatedText>
              
              <AnimatedWordText
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-black leading-relaxed"
                delay={0.2}
              >
                OTHR создает не просто дизайн — мы формируем пространство, которое работает на ваш стиль жизни. Наше бюро — это команда профессионалов, влюбленных в архитектуру, эстетику и продуманные решения. Мы верим, что настоящий дизайн начинается с понимания личности клиента, а заканчивается проектом, в котором всё — от пропорций до света — работает в гармонии.
              </AnimatedWordText>
            </div>

            <div>
              <AnimatedWordText
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-black leading-relaxed"
              >
                Каждый проект — это результат глубокого анализа, творческого поиска и точной архитектурной логики.
              </AnimatedWordText>
            </div>

            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              <AnimatedWordText
                className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px] font-inter font-medium text-black leading-[1.1]"
              >
                Мы подбираем решения, которые отвечают именно вашему образу жизни — без шаблонов и компромиссов.
              </AnimatedWordText>
              
              <AnimatedWordText
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-black leading-relaxed"
                delay={0.2}
              >
                Мы не следуем моде — мы создаем актуальные пространства, в которых красота и функция неразделимы. Лаконичные формы, грамотная геометрия, чувственная простота — всё это позволяет нам разрабатывать проекты, которые не устаревают, а со временем раскрываются еще глубже.
              </AnimatedWordText>
            </div>

            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              <AnimatedWordText
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-black leading-relaxed"
              >
                Когда вы выбираете нас, вы выбираете не просто студию дизайна.
              </AnimatedWordText>
              
              <AnimatedWordText
                className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px] font-inter font-medium text-black leading-[1.1]"
                delay={0.2}
              >
                Вы выбираете партнёров, которые слышат, чувствуют и умеют воплощать.
              </AnimatedWordText>
              
              <AnimatedWordText
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-black leading-relaxed"
                delay={0.4}
              >
                С нами вы проходите путь от первых идей до пространства, в котором хочется жить, творить и быть собой. Пространства, в котором каждая деталь говорит о вас — и работает на вас.
              </AnimatedWordText>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[140px]">
          <div className="max-w-4xl space-y-8 md:space-y-12 lg:space-y-16 mb-12 md:mb-16 lg:mb-20">
            <AnimatedWordText
              className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px] font-inter font-medium text-black leading-[1.1] mb-6 md:mb-8"
            >
              Вы выбираете партнёров, которые слышат, чувствуют и умеют воплощать.
            </AnimatedWordText>
            
            <AnimatedWordText
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-black leading-relaxed"
              delay={0.2}
            >
              С нами вы проходите путь от первых идей до пространства, в котором хочется жить, творить и быть собой. Пространства, в котором каждая деталь говорит о вас — и работает на вас.
            </AnimatedWordText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Артем Копылов */}
            <AnimatedText>
              <div className="relative group">
                <div className="relative w-full aspect-[3/4] bg-gray-200 mb-4 overflow-hidden">
                  <img 
                    src={ArtemImg} 
                    alt="Артем Копылов"
                    className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="mb-3 sm:mb-4">
                      <p className="text-white text-sm sm:text-base md:text-lg font-inter font-medium flex items-center gap-2">
                        <span className="text-lg sm:text-xl md:text-2xl">«</span>
                        Руководитель
                      </p>
                    </div>
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-inter leading-relaxed">
                      Я пришел в дизайн через архитектуру — с самого начала меня увлекала идея пространства как продолжения человека. Студия для меня — это команда, в которой каждый силён, и проект, где нет случайных решений. Мне важно, чтобы в каждом проекте было ощущение свободы, простоты и уважения к человеку. Минимализм — моя форма честности.
                    </p>
                  </div>
                </div>
                <p className="text-black text-base sm:text-lg md:text-xl font-inter font-medium">
                  АРТЁМ КОПЫЛОВ
                </p>
              </div>
            </AnimatedText>

            {/* Ангелина Магильная */}
            <AnimatedText delay={0.2}>
              <div className="relative md:mt-16 lg:mt-24 group">
                <div className="relative w-full aspect-[3/4] bg-gray-200 mb-4 overflow-hidden">
                  <img 
                    src={AngelinaImg} 
                    alt="Ангелина Магильная"
                    className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="mb-3 sm:mb-4">
                      <p className="text-white text-sm sm:text-base md:text-lg font-inter font-medium">
                        Архитектор
                      </p>
                    </div>
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-inter leading-relaxed">
                      Меня вдохновляют сложные задачи. Я люблю, когда планировка продумывается как шахматная партия — каждый ход имеет значение. Я не боюсь предлагать то, что сначала кажется нестандартным — потому что именно в таких решениях рождается настоящая архитектура.
                    </p>
                  </div>
                </div>
                <p className="text-black text-base sm:text-lg md:text-xl font-inter font-medium">
                  АНГЕЛИНА МАГИЛЬНАЯ
                </p>
              </div>
            </AnimatedText>

            {/* Глеб Вершушин */}
            <AnimatedText delay={0.4}>
              <div className="relative group">
                <div className="relative w-full aspect-[3/4] bg-gray-200 mb-4 overflow-hidden">
                  <img 
                    src={GlebImg} 
                    alt="Глеб Вершушин"
                    className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="mb-3 sm:mb-4">
                      <p className="text-white text-sm sm:text-base md:text-lg font-inter font-medium">
                        Архитектор
                      </p>
                    </div>
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-inter leading-relaxed">
                      Архитектура — это моя точка опоры. Я умею видеть объем, работать с масштабом и структурой. Когда клиент говорит: "Я бы и не подумал, что так можно", — значит, я всё сделал правильно.
                    </p>
                  </div>
                </div>
                <p className="text-black text-base sm:text-lg md:text-xl font-inter font-medium">
                  ГЛЕБ ВЕРХУШИН
                </p>
              </div>
            </AnimatedText>

            {/* Кристина Гордиенко */}
            <AnimatedText delay={0.6}>
              <div className="relative md:mt-16 lg:mt-24 group">
                <div className="relative w-full aspect-[3/4] bg-gray-200 mb-4 overflow-hidden">
                  <img 
                    src={KrisImg} 
                    alt="Кристина Гордиенко"
                    className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="mb-3 sm:mb-4">
                      <p className="text-white text-sm sm:text-base md:text-lg font-inter font-medium">
                        Менеджер проектов
                      </p>
                    </div>
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-inter leading-relaxed">
                      Если честно, я обожаю быть в эпицентре всего. Следить за тем, как движется проект, как срастаются детали, как клиенты начинают доверять — в этом для меня есть драйв. У нас в студии много творческих людей, и моя задача — быть их навигатором. Я тут, чтобы всё случилось в срок, по делу и красиво.
                    </p>
                  </div>
                </div>
                <p className="text-black text-base sm:text-lg md:text-xl font-inter font-medium">
                  КРИСТИНА ГОРДИЕНКО
                </p>
              </div>
            </AnimatedText>

            {/* Никита */}
            <AnimatedText delay={0.8}>
              <div className="relative group">
                <div className="relative w-full aspect-[3/4] bg-gray-200 mb-4 overflow-hidden">
                  <img 
                    src={NikitaImg} 
                    alt="Никита"
                    className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="mb-3 sm:mb-4">
                      <p className="text-white text-sm sm:text-base md:text-lg font-inter font-medium">
                        Дизайнер
                      </p>
                    </div>
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-inter leading-relaxed">
                      Мне важно не просто красиво оформить пространство, а почувствовать человека, для которого я это делаю. Я слушаю, наблюдаю, вникаю в привычки и желания — и постепенно выстраиваю интерьер, в котором ему будет по-настоящему хорошо. Я верю, что стиль — это не тренд, а честное отражение личности.
                    </p>
                  </div>
                </div>
                <p className="text-black text-base sm:text-lg md:text-xl font-inter font-medium">
                  НИКИТА ВОЛЬХИН
                </p>
              </div>
            </AnimatedText>

            {/* Олеся */}
            <AnimatedText delay={1.0}>
              <div className="relative md:mt-16 lg:mt-24 group">
                <div className="relative w-full aspect-[3/4] bg-gray-200 mb-4 overflow-hidden">
                  <img 
                    src={OlesyaImg} 
                    alt="Олеся"
                    className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="mb-3 sm:mb-4">
                      <p className="text-white text-sm sm:text-base md:text-lg font-inter font-medium">
                        Графический дизайнер
                      </p>
                    </div>
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-inter leading-relaxed">
                      Я пришла в интерьерную студию через визуальную коммуникацию. Мне важно, чтобы идеи не только рождались — но и были красиво оформлены, поняты, переданы. Мне нравится быть тем, кто связывает творческое и понятное. А ещё — я просто кайфую от шрифтов, чистоты и хорошей верстки.
                    </p>
                  </div>
                </div>
                <p className="text-black text-base sm:text-lg md:text-xl font-inter font-medium">
                  ОЛЕСЯ АНТОНОВА
                </p>
              </div>
            </AnimatedText>

            {/* Устим */}
            <AnimatedText delay={1.2}>
              <div className="relative group">
                <div className="relative w-full aspect-[3/4] bg-gray-200 mb-4 overflow-hidden">
                  <img 
                    src={UstimImg} 
                    alt="Устим"
                    className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="mb-3 sm:mb-4">
                      <p className="text-white text-sm sm:text-base md:text-lg font-inter font-medium">
                        Руководитель строительного направления
                      </p>
                    </div>
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-inter leading-relaxed">
                      Я умею находить язык с подрядчиками и всегда держу в фокусе качество. Когда проект сдан, и клиент говорит "это даже лучше, чем я представлял" — это лучший момент. Моя задача — чтобы всё, что придумала команда, работало на объекте.
                    </p>
                  </div>
                </div>
                <p className="text-black text-base sm:text-lg md:text-xl font-inter font-medium">
                  УСТИМ ШОСТАЦКИЙ
                </p>
              </div>
            </AnimatedText>

            {/* Юлиана */}
            <AnimatedText delay={1.4}>
              <div className="relative md:mt-16 lg:mt-24 group">
                <div className="relative w-full aspect-[3/4] bg-gray-200 mb-4 overflow-hidden">
                  <img 
                    src={YlyanaImg} 
                    alt="Юлиана"
                    className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="mb-3 sm:mb-4">
                      <p className="text-white text-sm sm:text-base md:text-lg font-inter font-medium">
                        Менеджер комплектации
                      </p>
                    </div>
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-inter leading-relaxed">
                      Моя работа — это про внимание. Я знаю, где найти "тот самый" предмет, и умею вести переговоры, когда что-то идёт не по плану. Иногда кажется, что я играю в квест: найти лучшее, привезти вовремя, не выходя из бюджета. И мне это правда нравится — потому что именно из деталей строится ощущение целостности.
                    </p>
                  </div>
                </div>
                <p className="text-black text-base sm:text-lg md:text-xl font-inter font-medium">
                  УЛЬЯНА ПАРФЕНОВА
                </p>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      <Footer />

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

