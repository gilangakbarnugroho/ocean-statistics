import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
import MediaVideo from "src/components/MediaVideo"
import Blank from "public/blank.png"

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
      {/* hero */}
      <div className="flex flex-col items-center px-2 xs:px-0">
        <h1 className="text-6xl xs:text-5xl max-w-6xl drop-shadow-md text-slate-100 font-extrabold text-center lg:text-[3.5rem] lg:leading-tight">
          WEB3 ON CAMPUS
        </h1>
        <h2 className="text-xl xs:text-l max-w-l drop-shadow-md text-slate-100 font-bold text-center md:max-w-lg lg:text-[1.5rem] lg:leading-tight">
          by IDNFT
        </h2>
        <div className="mt-16 mb-4 md:mt-12 sm:mt-16 sm:w-auto sm:mb-0">
        <MediaVideo 
          thumb={Blank}
          thumbWidth={150}
          thumbHeight={100}
          thumbAlt='no thumb'
          video='/videos/web3oncampus.mp4'
          videoWidth={1920}
          videoHeight={1080}
          />
        </div>
      </div>
      {/* scroll */}
      <div className="hidden xs:flex flex-col items-center px-5 group lg:px-8">
        <div className="w-[22px] h-[22px] rounded-full bg-slate-100 mb-3 group-hover:animate-bounce"></div>
        <a
          href="#about"
          className="flex justify-center items-center px-1 py-2 border-2 w-5 md:w-6 rounded-full backdrop-blur"
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
