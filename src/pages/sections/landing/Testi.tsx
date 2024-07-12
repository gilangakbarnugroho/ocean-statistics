import PicTesti from "@/components/PicTesti";
import React, { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { testiData } from "@/constant/Data";

const Testi = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -750,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 750,
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="testimoni"
      data-testid="testimoni"
      className="flex flex-col mb-8 max-w-6xl mx-auto h-full w-full"
    >
      <div className="min-h-[2.5rem]"></div>
      <div className="relative">

        {/* Section header */}
        <div className="max-w-3xl mx-auto mb-4 text-center transition-w transition-opacity">
          <h1 className="mb-2 text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500 sm:text-[2.5rem] leading-tight font-bold" data-aos="zoom-y-out" data-aos-delay="150">Testimoni</h1>
          <p className="text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="200">Dari mereka yang sudah merasakan kemudahan bekerja sama dengan Ocean Statistic🌊</p>
        </div>

        <div
          className="px-8 grid grid-flow-col gap-4 auto-cols-[100%] md:auto-cols-[75%] lg:auto-cols-[45%] overflow-x-auto overscroll-y-contain snap-x snap-mandatory scroll-pl-2 scrollbar-hide items-start justify-between"
          ref={scrollContainer}
        >
          {/* Right Gradient */}
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          {testiData.map((testi) => (
            // eslint-disable-next-line react/jsx-key
            <PicTesti
              src={testi.src}
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

export default Testi;
