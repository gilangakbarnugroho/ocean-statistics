import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Media from "src/components/Media"
import Thumb from "public/assets/Hero.png"

const Hero = () => {
  return (
    <div className="flex flex-row justify-between items-center h-[90%]">
      {/* social */}
      <div className="hidden xs:flex xs:flex-col xs:px-5 lg:px-8">
        <a href="https://www.youtube.com/@idnft" target="_blank" rel="noopener noreferrer" className="w-5 py-2">
          <FaYoutube color="#f1f5f9" size={22} />
        </a>
        <a href="https://www.instagram.com/id.nft" target="_blank" rel="noopener noreferrer" className="w-5 py-2">
          <FaInstagram color="#f1f5f9" size={22} />
        </a>
        <a href="https://twitter.com/idnft_" target="_blank" rel="noopener noreferrer" className="w-5 py-2">
          <FaTwitter color="#f1f5f9" size={22} />
        </a>
      </div>

      {/* Items */}
      <div className="max-w-6xl mx-auto grid gap-12 px-4 sm:px-8 items-center justify-center">

        <div className="max-x-3xl mx-auto md:grid md:grid-cols-12 md:gap-6 items-center justify-center">
          {/* Image */}
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
            <Media thumb={Thumb} thumbWidth={540} thumbHeight={405} thumbAlt="Embrace" media='Embrace.svg' mediaHeight={540} mediaWidth={405} />
          </div>
        {/* Content */}
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
            <div className="md:pr-4 lg:pr-12 xl:pr-16">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">Bingung saat ngerjain skripsi?</span></h1>
              <p className="text-lg text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Konsultasiin aja masalah data kamu di Ocean Statistic</p>
              <a className="btn rounded-full text-white bg-blue-700 hover:bg-blue-300 hover:text-blue-700 w-full p-4 sm:w-auto sm:mb-0" href="#">Konsultasikan Sekarang</a>
            </div>
          </div>
        </div>
      </div>

      {/* scroll */}
      <div className="hidden xs:flex flex-col items-center px-5 group lg:px-8">
        <div className="w-[22px] h-[22px] rounded-full bg-blue-700 bg-opacity-50 border-2 backdrop-blur
        
        
        mb-3 group-hover:animate-bounce"></div>
        <a
          href="#about"
          className="flex justify-center items-center px-1 py-2 border-2 w-5 md:w-6 rounded-full backdrop-blur bg-opacity-50 bg-blue-700"
        >
          <Image
            src="/arrow.png"
            alt="scroll"
            width={10}
            height={10}
            className="group-hover:w-full transition-all duration-500 w-1"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
