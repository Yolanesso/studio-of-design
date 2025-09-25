import React from "react";
import "../../css/fonts.css";

export default function ServiceBlock() {
  return (
    <div className="serviceblock">
      <div className="serviceblock-title flex flex-col px-6 md:px-12 xl:px-[140px] mt-12 md:mt-24 2xl:mt-[160px]">
        <span className="text-[32px] md:text-[64px] 2xl:text-[96px] leading-tight">
          Архитектурная
        </span>
        <span className="text-[32px] md:text-[64px] 2xl:text-[96px] leading-tight">
          концепция /
        </span>
      </div>
    </div>
  );
}
