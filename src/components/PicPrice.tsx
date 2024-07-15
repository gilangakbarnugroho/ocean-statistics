import React from "react";
import Image from "next/image";
import Link from "next/link";


interface priceProps {
  src: string;
}

const PicPrice = ({ src }: priceProps) => {
  return (
    <div className="pb-8">
      <div className="flex flex-col max-h-[270px] max-w-[240px] md:max-h-[540px] md:max-w-[450px] gap-4 shadow-xl rounded-3xl" data-aos="fade-up">
      <div>
       <div className="flex place-items-end content-center justify-center rounded">
        <Image             
          src={src}
          width={480}
          height={540}
          alt="Logo Layanan" 
          className="max-h-[270px] max-w-[240px] md:max-h-[540px] md:max-w-[450px]"
        />
       </div>
      </div>
    </div>
    </div>
    
  );
};

export default PicPrice;
