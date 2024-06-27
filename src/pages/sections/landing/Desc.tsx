import React from "react";
import Image from "next/image";
import { MdOutlineLensBlur } from "react-icons/md";
import LogoIDNFTWhite from "@/components/shared/LogoFooter-white";

const Desc = () => {
  return (
    <div className="min-h-[9rem] w-full absolute bottom-0 flex justify-center items-center pr-10 box-border text-slate-100 backdrop-blur">
      <div className="flex items-center w-full">
        {/* place */}
        <div className="basis-1/3 flex items-center justify-center px-4 gap-x-3 xl:basis-1/4">
          <LogoIDNFTWhite />
          <h2 className="xs:text-xl sm:text-2xl lg:text-[1.7rem] font-bold">
            IDNFT
          </h2>
        </div>
        {/* advertisment */}
        <div className="basis-2/3 flex xl:basis-3/4">
          <div className="flex items-center justify-center text-sm px-2 sm:hidden">
            <h3>
            Embrace-
            </h3>
            <h3>
              Educate-
            </h3>
            <h3>
              Empower
            </h3>
          </div>
          <div className="hidden sm:flex sm:w-full sm:items-center">
            <div className=" basis-1/3 flex flex-col justify-center px-2 lg:px-6 xl:px-9">
              <h2 className="text-xl lg:text-[1.375rem] font-bold">EMBRACE</h2>
              <p className="hidden xs:block text-xs lg:text-[0.8125rem] lg:leading-[1.15rem]">
                collaborate in making the NFT, Web3, {" "}
                <span className="hidden lg:inline">
                  and Blockchain ecosystem a good and {" "}
                  <span className="hidden 2xl:inline">
                    supportive place for everyone.
                  </span>
                </span>
              </p>
            </div>
            <div className=" basis-1/3 flex flex-col justify-center px-2 lg:px-6 xl:px-9">
              <h2 className="text-xl lg:text-[1.375rem] font-bold">EDUCATE</h2>
              <p className="hidden xs:block text-xs lg:text-[0.8125rem] lg:leading-[1.15rem]">
                we initiate education for our community, {" "}
                <span className="hidden lg:inline">
                  universities, and the public, bringing experts {" "}
                  <span className="hidden 2xl:inline">
                    and industry players
                  </span>
                </span>
              </p>
            </div>
            <div className=" basis-1/3 flex flex-col justify-center px-2 lg:px-6 xl:px-9">
              <h2 className="text-xl lg:text-[1.375rem] font-bold">EMPOWER</h2>
              <p className="hidden xs:block text-xs lg:text-[0.8125rem] lg:leading-[1.15rem]">
                facilitating connections, providing access,{" "}
                <span className="hidden lg:inline">
                   and bridging the gap between users and industry players{" "}
                  <span className="hidden 2xl:inline">
                    
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desc;
