'use client'

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Link from "next/link";
import { FaPlaneDeparture } from "react-icons/fa";
import Logo from "./shared/Logo"
import LogoIDNFT from "./shared/LogoIDNFT"
import LogoWeb3CampusWhite from "./shared/Web3Campus-type";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [dark, setDark] = useState(false);
  const navbarVisible = () => {
    if (window.scrollY > 10 && window.scrollY < window.innerHeight - 80) {
      setVisible(true);
      setDark(false);
    } else if (window.scrollY >= window.innerHeight - 80) {
      setDark(true);
      setVisible(false);
    } else {
      setVisible(false);
      setDark(false);
    }
  };

  // console.log(visible);

  useEffect(() => {
    window.addEventListener("scroll", navbarVisible);
    return () => {
      window.removeEventListener("scroll", navbarVisible);
    };
  }, []);

  return (
    <header
      className={`bg-gray-100 bg-opacity-25 fixed top-0 left-0 w-full flex items-center z-50 ${
        visible ? "fixed backdrop-blur-sm" : "backdrop-blur-sm"
      } ${dark ? "fixed nav-color backdrop-blur shadow-md" : ""}`}
    >
      <div id="navbar" className="w-screen 2xl:container relative">
        <div
          className={`flex items-center justify-between relative ${
            dark ? "min-h-[4.5rem]" : " min-h-[5rem] md:min-h-[7rem]"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-x-1 order-1 w-[25%] box-border pl-6 lmd:pl-14 lg:pl-24 2xl:pl-16">
          <Link
              href="/"
              className={`uppercase font-regular hidden xs:inline xs:text-sm sm:text-base tracking-widest ${
                dark ? "text-blue-700" : "text-blue-700"
              }`}
            >
              <Logo />
            </Link>
            <Link
              href="/"
              className={`hidden lg:inline  text-sm sm:text-lg lg:text-[0.75rem] font-regular tracking-wide ${
                dark ? "text-blue-700" : "text-blue-700"
              }`}
            >
              
            </Link>
          </div>
          {/* navigation */}
          <Nav />
          {/* contact us */}
          <div className="invisible lg:visible order-2 lg:order-3 lg:w-[25%] box-border flex justify-center items-center lg:pr-24 2xl:pr-16 gap-x-2 lg:justify-end">
            <Link
              href="https://wa.link/an2t6u"
              className={`btn rounded-full text-white bg-blue-700 p-4 hover:bg-blue-300 hover:text-blue-700 w-full mb-4 sm:w-auto hidden xs:inline xs:text-sm ${
                dark ? "text-gray-700 border-gray-700" : "text-gray-100 "
              }`}
            >
              Konsultasi Sekarang
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
