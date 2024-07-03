import Picard from "@/components/Picard";
import React, { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { picardData } from "@/constant/Data";

const Pic = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="gallery"
      data-testid="gallery"
      className="flex flex-col mb-8 max-w-6xl mx-auto w-full"
    >
      <div className="min-h-[2.5rem]"></div>
      <div className="relative">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 text-lg sm:text-[2.5rem] leading-tight font-extrabold" data-aos="zoom-y-out" data-aos-delay="150">Layanan Olah Data Ocean Statistics</h1>
          <p className="text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="200"><span className="font-bold">MULAI 28RIBU aja</span> kamu sudah bisa menggunakan jasa <span className="font-bold">Ocean Statistic</span> untuk mempermudah dan memperlancar tugas akhir kamu!</p>
        </div>

        <div
          className="px-8 grid grid-flow-col gap-4 auto-cols-[100%] md:auto-cols-[50%] lg:auto-cols-[30%] overflow-x-auto overscroll-y-contain snap-x snap-mandatory scroll-pl-2 scrollbar-hide"
          ref={scrollContainer}
        >
          {picardData.map((card) => (
            <Picard
              key={card.id}
              src={card.src}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
        <button
          className="p-3 backdrop-blur btn-color rounded-full absolute top-1/2 -translate-y-1/2 left-6"
          onClick={scrollLeft}
        >
          <BsChevronLeft size={20} />
        </button>
        <button
          className="p-3 backdrop-blur btn-color rounded-full absolute top-1/2 -translate-y-1/2 right-6"
          onClick={scrollRight}
        >
          <BsChevronRight size={20} />
        </button>
      </div>
      <div className="flex">
      </div>

    </section>
  );
};

export default Pic;
