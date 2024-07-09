import React from "react";
import Image from "next/image";


interface testiProps {
  src: string;
}

const PicTesti = ({ src }: testiProps) => {
  return (
    <div>
      <div className="flex flex-col h-full gap-4 shadow-xl rounded-3xl" data-aos="fade-up">
      <div>
       <div className="flex place-items-end content-center justify-center bg-white p-4 rounded-2xl">
        <Image             
          src={src}
          width={450}
          height={720}
          alt="Logo Layanan" 
          className="max-h-[1080px] rounded-xl"
        />
       </div>
      </div>
    </div>
    </div>
    
  );
};

export default PicTesti;
