"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Paper from "@/public/icons/paper";
import { Button } from "../button";
import baner1 from "@/public/images/baner1.jpg";
import baner2 from "@/public/images/baner2.jpg";
import baner3 from "@/public/images/baner3.jpg";
import baner4 from "@/public/images/baner4.jpg";

const imagesData = [baner1, baner2, baner3, baner4];

export default function Carousel() {
  const [current, setCurrent] = useState<number>(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? imagesData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === imagesData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative overflow-hidden w-2/3 h-[300px] my-5 rounded-xl">
      <Paper className="absolute right-0 -top-2 z-20" />
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {imagesData.map((img, index) => (
          <div className="relative min-w-full h-[300px]" key={index}>
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <Button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 backdrop-opacity-40 -translate-y-1/2 bg-slate-100/70 p-2 rounded-full shadow hover:bg-white backdrop backdrop-blur-xl "
      >
        <IoIosArrowBack size={24} />
      </Button>

      <Button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-slate-50 duration-300"
      >
        <IoIosArrowForward size={24} />
      </Button>
    </div>
  );
}
