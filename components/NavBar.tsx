"use client";

import React, { useEffect, useState } from "react";

export default function NavBar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setScroll(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`slow bg-white flex items-center justify-around lg:px-12 py-2 border-b-2 fixed top-0 w-full ${
        scroll ? "bg-gradient-to-r from-[#ffa60041] to-[#0000ff3e]" : ""
      }`}
    >
      <a href="#">
        <div>
          <h1 className="text-2xl font-extrabold text-blue-800">myComputerENGR</h1>
          <p className="text-xs font-thin text-blue-800 text-end">Your trusted IT partner</p>
        </div>
      </a>
      <ul className="slow hidden lg:flex w-3/6 justify-around">
        <li className="slow hover:text-blue-800">
          <a className="slow font-thin hover:underline" href="#">
            HOME
          </a>
        </li>
        <li className="slow hover:text-blue-800">
          <a className="slow font-thin hover:underline" href="#SERVICES">
            SERVICES
          </a>
        </li>
        <li className="slow hover:text-blue-800">
          <a className="slow font-thin hover:underline" href="#ABOUT">
            ABOUT
          </a>
        </li>
        <li className="slow hover:text-blue-800">
          <a className="slow font-thin hover:underline" href="#WHYUS">
            WHY US?
          </a>
        </li>
        <li className="slow hover:text-blue-800">
          <a className="slow font-thin hover:underline" href="#CONTACTUS">
            CONTACT US
          </a>
        </li>
      </ul>

      <div className="slow hidden lg:block shadow-md rounded-xl bg-blue-800 text-white p-2 hover:bg-orange-400">
        <a href="#">GET A SCHEDULE</a>
      </div>
    </div>
  );
}
