import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdFolder } from "react-icons/md";
import { BsBookmarkFill } from "react-icons/bs";

interface cardProps {
  src: string;
  title: string;
  desc: string[];
}

const Picard = ({ src, title, desc }: cardProps) => {
  return (
    <div className="flex flex-col h-full space-y-4 space-x-4 p-6 bg-blue-700 shadow-md rounded-lg" data-aos="fade-up">
      <div>
       <div className="flex place-items-end content-center justify-center bg-white p-4 rounded">
        <Image             
          src={src}
          width={500}
          height={500}
          alt="Logo Layanan" 
          className="max-h-36"
        />
       </div>
      </div>
      <div>
        <blockquote className="text-lg text-center font-semibold text-white">{title}</blockquote>
        <blockquote className="text-md text-white mt-2 space-y-1 list-disc list-inside">{desc.map((line, index) => (
          <li key={index}>{line}</li>
          ))}</blockquote>
        <div className="text-gray-600 font-medium my-6 pt-5 border-t border-gray-300 text-center">
          <Link className="btn rounded-full font-bold p-4 text-blue-700 bg-white hover:bg-blue-300 hover:text-blue-700 w-full sm:w-auto place-items-center justify-center content-center" href="https://wa.me/6285802705250" rel="noopener" target="_blank">Pesan Sekarang</Link>
        </div>
      </div>
    </div>
  );
};

export default Picard;
