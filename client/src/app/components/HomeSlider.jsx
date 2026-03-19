"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function homeSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const items = [
    { title: "War Machine", image: "/war-machine.jpg" },
    { title: "Interceptor", image: "/intreceptor.jpg" },
    { title: "Exterritorial", image: "/exterritorial.jpg" },
    { title: "The Bourne Legacy", image: "/THE-BOURNE-LEGACY.jpg" },
    { title: "Outside The Wire", image: "/OUTSIDE-THE-WIRE.jpg" },
    { title: "Sisu", image: "/sisu.jpg" },
    { title: "13 Hours", image: "/hours.jpg" },
    { title: "The Gray Man", image: "/the-gray-man.jpg" },
    { title: "Sniper", image: "/sniper.jpg" },
    { title: "Extraction 2", image: "/extraction.jpg" },
  ].slice(0, 10);

  return (
    <div className="relative">
      {!isBeginning && (
        <div className="absolute top-0 left-0 w-[10%] h-full bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
      )}
      {!isEnd && (
        <div className="absolute top-0 right-0 w-[10%] h-full bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />
      )}
      <div className="absolute top-[40%] -left-10 w-z-20 ">
        <button ref={prevRef} className="h-20 w-fit rounded-full bg-[#434243] ">
          <svg viewBox="0 0 24 24" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="absolute top-[40%] -right-10 w-z-20 ">
        <button ref={nextRef} className="h-20 w-fit rounded-full bg-[#434243] ">
          <svg viewBox="0 0 24 24" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5.8}
        slidesPerGroup={5}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setTimeout(() => {
            if (!swiper.params.navigation) return;
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="group relative">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <span
                style={{
                  position: "absolute",
                  bottom: "28px",
                  left: "2px",
                  fontSize: "6rem",
                  fontWeight: "900",
                  color: "black",
                  lineHeight: 1,
                  userSelect: "none",
                  WebkitTextStroke: "2px #ffffff",
                }}
              >
                {index + 1}
              </span>
              <h3 className="text-lg text-white text-center mt-2">{item.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}