import React from "react";
import Image from "next/image";
import Link from "next/link";


interface cardProps {
  src: string;
  title: string;
  desc: string[];
}

const Picard = ({ src, title, desc }: cardProps) => {
  return (
    <div className="pb-8">
      <div className="flex flex-col h-full gap-4 p-6 bg-blue-800 shadow-xl rounded-3xl" data-aos="fade-up">
      <div>
       <div className="flex place-items-end content-center justify-center bg-white p-4 rounded-2xl">
        <Image             
          src={src}
          width={450}
          height={300}
          alt="Logo Layanan" 
          className="max-h-[300px]"
        />
       </div>
      </div>
      <div className="h-[24rem] w-full">
        <blockquote className="text-lg text-center font-semibold text-white">{title}</blockquote>
        <blockquote className="text-sm text-white h-[15rem] my-2 space-y-1 list-disc list-inside">{desc.map((line, index) => (
          <li key={index}>{line}</li>
          ))}</blockquote>
        <div className="text-gray-600 font-medium my-2 pt-5 border-t border-gray-300 text-center"></div>
        <div className="flex items-center text-center w-full">
        <Link className="btn flex rounded-full font-bold p-4 text-blue-800 bg-white hover:bg-blue-300 hover:text-blue-800 w-full justify-center" href="https://api.whatsapp.com/send?phone=6285802705250&text=Halo%20kak%2C%20saya%20tertarik%20untuk%20olah%20data%20di%20Ocean%20Statistic!" rel="noopener" target="_blank">Pesan Sekarang</Link>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Picard;
