import React, { useState, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Navdata } from "@/constant/Data";
import NavHor from "./NavHor";
import NavVer from "./NavVer";
import Link from "next/link";
import LogoIDNFT from "./shared/LogoIDNFT";

const Nav = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  const [dark, setDark] = useState(false);
  const navbarDark = () => {
    if (window.scrollY > 10 && window.scrollY < window.innerHeight - 80) {
      setDark(false);
    } else if (window.scrollY >= window.innerHeight - 80) {
      setDark(true);
    } else {
      setDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarDark);
    return () => {
      window.removeEventListener("scroll", navbarDark);
    };
  }, []);
  return (
    <div className="order-3 lg:px-0 lg:order-2 w-1/4 lg:w-fit">
      <div className=" flex justify-end pr-6 lmd:pr-14 w-full">
        <button className="lg:hidden rounded-full hover:underline-2" onClick={handleClick}>
          <HiOutlineMenu color={dark ? "#334155" : "#002FA6"} size={30} />
        </button>
      </div>

      {!toggle ? (
        <nav
          id="nav-menu"
          className={`lg:hidden absolute top-[4.5rem] right-4 py-[0.6rem] px-3 rounded-md backdrop-blur bg-blue-700`}
        >
          <ul className="flex flex-col gap-2 pr-2 text-blue-700">
            {Navdata.map((item) => (
              <div key={item.reference}>
                <NavVer title={item.title} reference={item.reference} />
              </div>
            ))}
          </ul>
        </nav>
      ) : null}

      <nav id="nav-menu" className="hidden lg:block">
        <ul className="flex font-regular text-gray-800">
          {Navdata.map((item) => (
            <div key={item.reference}>
              <NavHor title={item.title} reference={item.reference} />
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
