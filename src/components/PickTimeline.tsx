import React from "react";
import Image from "next/image";
import Link from "next/link";

interface timelineProps {
  src: string;
  title: string;
  date: string;
  city: string;
}

const Timeline = ({ src, title, date, city }: timelineProps) => {
  return (
    <div className="relative">
        <div className="md:flex items-center md:space-x-4 mb-3">
            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
            {/* <!-- Icon --> */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                <Image
                src={src}
                alt="Logo Univ"
                width={50}
                height={50}
                className="p-1"
                />
            </div>
            {/* <!-- Date --> */}
            <time className="font-medium text-xl text-gray-500 md:w-28">{city}</time>
            </div>
            {/* <!-- Title --> */}
            <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">{title}</span>{date}</div>
        </div>
    </div>
  );
};

export default Timeline;
