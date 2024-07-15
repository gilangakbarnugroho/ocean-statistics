import PicPrice from "@/components/PicPrice";
import React, { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { priceData } from "@/constant/Data";

const Pricelist = () => {
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
      id="pricelist"
      data-testid="pricelist"
      className="flex flex-col mb-8 max-w-6xl mx-auto w-full"
    >
      <div className="min-h-[2.5rem]"></div>
      <div className="relative max-x-3xl mx-auto md:grid md:grid-cols-12 md:gap-6 items-center justify-center">

        {/* Content */}
        <div className="max-w-xl md:ml-8 md:col-span-7 lg:col-span-6" data-aos="fade-right">
            <div className="md:px-4 lg:pr-12 xl:pr-16 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">Detail Pricelist Uji</span></h1>
              <p className="text-lg text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Hai Ocean Friends! Ini nih solusi buat kalian yang pakai uji korelasi dalam penelitiannya. Bisa uji data asli maupun request hasil, semua beress! Serahkan pada Ocean Statistic🌊</p>
            </div>
          </div>

        <div className="min-w-xl mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">

          {/* Right Gradient */}
          <div className="absolute top-0 right-0 md:-right-5 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

        <div
          className="max-w-lg mx-auto px-8 grid grid-flow-col auto-cols-[75%] md:auto-cols-[90%] lg:auto-cols-[100%] overflow-x-auto overscroll-y-contain snap-x snap-mandatory scroll-pl-2 scrollbar-hide items-center justify-between"
          ref={scrollContainer}
        >
          {priceData.map((price) => (
            // eslint-disable-next-line react/jsx-key
            <PicPrice
              src={price.src}
            />
          ))}
        </div>
        <button
          className="p-3 backdrop-blur shadow-xl btn-color rounded-full absolute top-1/2 -translate-y-1/2 left-100"
          onClick={scrollLeft}
        >
          <BsChevronLeft size={15} />
        </button>
        <button
          className="p-3 backdrop-blur shadow-xl btn-color rounded-full absolute top-1/2 -translate-y-1/2 right-6"
          onClick={scrollRight}
        >
          <BsChevronRight size={15} />
        </button>
      </div>

        </div>
        
      <div className="flex">
      </div>

    </section>
  );
};
export default Pricelist