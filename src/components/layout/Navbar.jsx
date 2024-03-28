"use client";
import React, { useEffect } from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RxCross1 } from 'react-icons/rx'
import { LuMenu } from "react-icons/lu"

import Link from "next/link";
const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const handleNavbar = () => {
    setNav(!nav);
  };
  const closeMenu = () => {
    setNav(false);
  };
  return (
    <div
      className={`py-5 fixed md:sticky z-[999] w-full top-0 transition-all duration-100 ease-in backdrop-blur-lg`}
    >
      <Wrapper>
        <div className="flex justify-between items-center bg-transparent  w-full">
          {/* left  */}

          {/* logo  */}
          <Link href={"/"}>
            <Image
              src={"/images/power_logo.svg"}
              alt=""
              width={1080}
              height={1080}
              className="w-40"
            />
          </Link>

          <div>
            <ul className="cont hidden md:flex space-x-12 text-base text-white  ">
              <button
                onClick={() => router.push("/earn")}
                className={` li  z-20`}
              >
                <p className="a">Earn</p>
              </button>
              <button
                onClick={() => router.push("/exchange")}
                className="li  z-20"
              >
                <p className="a">Exchange</p>
              </button>
            </ul>
          </div>

          {/* right */}
          <div className="hidden md:flex items-center gap-10">
            {/* sign in */}
            <div className="flex  items-center space-x-2 pl-2  rounded-md">
              <button
                onClick={() => router.push("/login")}
                className="font-[500]  w-[122px] h-[47px] text-white hover:text-black z-20 transition-all ease-linear duration-300 border border-white hover:bg-white bg-transparent rounded-lg"
              >
                Log in
              </button>
            </div>
            {/* start a project  */}
            <button
              onClick={() => router.push("/")}
              className="font-[500]  z-20  w-[144px] h-[47px] text-white rounded-lg  border border-transparent hover:border-primary-blue hover:bg-transparent transition-all ease-linear duration-300  bg-primary-blue"
            >
              Sign Up
            </button>
          </div>

          {/* mobile menu  */}
          <div
            onClick={handleNavbar}
            className=" sm:block md:hidden flex items-center z-50"
          >
            {nav ? (

              <RxCross1 size={35} className="text-white z-50 right-5" />
            ) : (
              <LuMenu
                size={35}
                className=" text-white "
              />
            )}
          </div>
          <div
            className={
              nav
                ? "md:hidden z-40 fixed top-0 right-0 shadow-md overflow-hidden bottom-0 flex justify-start items-start py-20 px-5 w-80 min-h-screen  bg-black text-white h-full  text-right ease-linear duration-200 transform translate-x-0"
                : "md:hidden z-40 fixed top-0 right-0 shadow-md overflow-hidden bottom-0 flex justify-start items-start py-20 px-5 w-80 min-h-screen bg-black  text-white h-full text-right ease-linear duration-200  transform translate-x-full"
            }
          >
            <div className="absolute mt-[-3.5rem]">
              <h3 className="font-black text-lg  text-primary-green-text">
                Menu
              </h3>
            </div>
            <div className="flex flex-col justify-between ">
              <div className="flex flex-col basis-[50%]">
                <ul className="flex flex-col justify-start items-start gap-5  font-bold">
                  <Link href={"/earn"}>
                    <li onClick={closeMenu} className=" ">
                      Earn
                    </li>
                  </Link>
                  <Link href={"/exchange"}>
                    <li onClick={closeMenu} className=" ">
                      Exchange
                    </li>
                  </Link>

                </ul>
                <div className="flex flex-col justify-start items-start gap-y-6 mt-5">
                  <Link href={"/login"}>
                    <button
                      onClick={closeMenu}
                      className="font-[500]  w-[122px] h-[47px] text-white hover:text-black z-20 transition-all ease-linear duration-300 border border-white hover:bg-white bg-transparent rounded-lg"
                    >
                      Log in
                    </button>
                  </Link>

                  {/* start a project  */}
                  <Link href={""}>
                    <button
                      onClick={closeMenu}
                      className="font-[500]  z-20  w-[144px] h-[47px] text-white rounded-lg  border border-transparent hover:border-primary-blue hover:bg-transparent transition-all ease-linear duration-300  bg-primary-blue"
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </Wrapper>
    </div>
  );
};

export default Navbar;
