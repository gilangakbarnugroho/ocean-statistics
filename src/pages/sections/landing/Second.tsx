import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdOutlineTravelExplore } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { IoMdPhotos } from "react-icons/io";

const Second = () => {
  return (
    <section
      id="about"
      data-testid="about"
      className="flex w-full max-w-6xl mx-auto 2xl:container"
    >
      <div className="min-h-[5rem]"></div>
      <div className="flex flex-col cont-height justify-center gap-y-10 sm:gap-y-16 lmd:px-10 2xl:px-4 box-border">
        <div className="flex flex-wrap justify-center gap-y-6 gap-x-6 ">
          <div className="flex flex-col gap-y-10 lmd:w-[45%] px-6 box-border">
            <div className="flex flex-col gap-y-6">
              <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700 md:text-4xl lg:text-5xl lmd:max-w-lg">
                About Web3 on Campus
              </h2>
              <p className="lg:text-lg">
              WEB3 On Campus is a collaborative program between IDNFT and Universities aimed at supporting The Three Pillars of Higher Education 
              "Tri Dharma Perguruan Tinggi" by providing socialization and education opportunities for students on Blockchain, NFT, Crypto, Web3 
              and Metaverse in Indonesia.
              </p>
              <p className="lg:text-lg">
              This program provides universities with fast and reliable access to education and information updates from NFT and Web3 Industry 
              players and aims to give students an overview of new opportunities and potential career paths in the field.
              </p>
            </div>
            {/* <div className="flex gap-x-4">
              <Link
                href="/gallery/WorldGallery"
                className="px-4 py-[0.6rem] lmd:py-3 lmd:px-6 bg-gray-700 text-gray-100 hover:bg-gray-800 transition-all duration-300"
              >
                Discover more places
              </Link>
              <Link
                href=""
                className="px-4 py-[0.6rem] lmd:py-3 lmd:px-6 border-[1px] border-gray-400 hover:border-gray-800 border-opacity-40 hover:border-opacity-100 transition-all duration-200"
              >
                View our packages
              </Link>
            </div> */}
            {/* <div className="bg-gray-200 p-4">
              <p>
                Interested in Travel to be your travel companion on your special
                moment? Get in touch with our team at{" "}
                <a href="" className="text-emerald-800 underline">
                  tripteam@travel.com
                </a>
              </p>
            </div> */}
          </div>
          {/* image */}
          <div className="w-full lmd:w-[45%] px-6 box-border">
            <div className="bg-[url('/pg2-4.webp')] h-[20rem] w-full bg-cover bg-center shadow-2xl lmd:h-3/4 lg:h-[90%] relative">
              {/* <div className="absolute -bottom-4 -right-4 shadow-2xl border-8 border-gray-200">
                <Image src="/pg2-2.webp" alt="" width={200} height={50} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;
