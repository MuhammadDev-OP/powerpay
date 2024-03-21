"use client"

import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <header className="flex justify-between pt-6 pb-4 items-center sticky top-0">
          <div className="cursor-pointer">
            <Image src="/images/logo.png" width={267} height={52} className="sm:px-0 sm:w-[267px] w-40" />
          </div>
          <ul className="lg:flex lg:text-lg lg:space-x-10 hidden">
            <li className="cursor-pointer" onClick={() => { }}>Earn</li>
            <li className="cursor-pointer" onClick={() => { }}>Exchange</li>
          </ul>
          <div className="lg:flex lg:text-lg lg:space-x-10 hidden">
            <button className="px-7 py-1 border-2 border-white text-white hover:bg-white hover:text-blue-500 transition-colors duration-300 rounded-md">Login</button>
            <button className="px-7 py-1 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 rounded-md">Sign up</button>
          </div>
        </header>
      </Wrapper>
    </>
  );
};

export default Navbar;
