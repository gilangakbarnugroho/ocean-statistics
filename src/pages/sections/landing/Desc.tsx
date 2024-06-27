import React from "react";
import Image from "next/image";
import { MdOutlineLensBlur } from "react-icons/md";
import LogoWhite from "@/components/shared/LogoFooter-white";

const Desc = () => {
  return (
    <div className="min-h-[9rem] bg-blue-700 bg-opacity-75 w-full absolute bottom-0 flex justify-center items-center pr-10 box-border text-slate-100 backdrop-blur">
      <div className="flex max-w-6xl items-center w-full mx-auto">
        {/* place */}
        <div className="basis-1/3 flex items-center justify-center xl:basis-1/4">
          <LogoWhite />
          <h2 className="hidden sm:flex xs:text-xl sm:text-2xl lg:text-[1.7rem] font-bold">
            tatistics
          </h2>
        </div>
        
        <div className="flex items-center">
          
          <p className="text-center">
          Let the wave solve your problems
          </p>

        </div>
        
      </div>
    </div>
  );
};

export default Desc;
