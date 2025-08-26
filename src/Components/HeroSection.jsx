import React from "react";
import HeroBg from "../Images/HeroBg.png";
import BtnLang from "../Icons/btn-lang.svg";
import Logo from "../Icons/logo.svg";
import BtnMenu from "../Icons/btn-menu.svg";

export default function HeroSection() {
  return (
    <header
      className="header min-h-screen w-full bg-cover bg-center bg-no-repeat grayscale"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="header__container ">
        <nav className="">
          <div className="nav__container py-[50px] px-[250px] flex justify-between">
            <img src={BtnLang} alt="ru" />
            <img src={Logo} alt="ru" />
            <div className="nav__buttons flex">
              <button className="nav-contacts bg-amber-50 p-[16px] rounded-[27px] font-[400] mr-[14px]">
                Связаться с нами
              </button>
              <a href="#">
                <img src={BtnMenu} alt="" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
