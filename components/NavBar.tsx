"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollAniamtion from "./ScrollAniamtion";

export default function NavBar() {
  const [show, setShow] = useState(false);

  return (
    <div className="fixed top-0 z-50 w-full">
      <div
        className={`slow bg-white flex items-center justify-between px-4 md:px-20 lg:px-32 py-2 border-b-2 w-full`}
      >
        <a href="#">
          <div
            className={`${
              show
                ? "absolute lg:relative z-50 w-full text-center lg:m-0 text-white lg:text-blue-800"
                : " text-blue-800"
            }`}
          >
            <h1 className="text-2xl font-extrabold">myComputerENGR</h1>
            <p
              className={`${
                show ? "text-center" : "text-end"
              } text-xs`}
            >
              Your trusted IT partner
            </p>
          </div>
        </a>
        <motion.button
          onClick={() => {
            setShow(!show);
          }}
          className="slow lg:hidden text-white w-20"
          layout
        >
          <Image
            src="/icons/menu.svg"
            alt="menu"
            height={40}
            width={40}
            className={`${show ? "hidden" : "block"}`}
          />
          <Image
            src="/icons/cancle.svg"
            alt="menu"
            height={40}
            width={40}
            className={`absolute z-50 ${show ? "block" : "hidden"}`}
          />
        </motion.button>
        <motion.ul className="hidden lg:flex w-3/6 justify-around">
          <a href="#"></a>
          <li className="slow hover:text-blue-800">
            <a className="slow hover:underline" href="#">
              HOME
            </a>
          </li>
          <li className="slow hover:text-blue-800">
            <a className="slow hover:underline" href="#SERVICES">
              SERVICES
            </a>
          </li>
          <li className="slow hover:text-blue-800">
            <a className="slow hover:underline" href="#ABOUT">
              ABOUT
            </a>
          </li>
          <li className="slow hover:text-blue-800">
            <a className="slow hover:underline" href="#WHYUS">
              WHY US?
            </a>
          </li>
          <li className="slow hover:text-blue-800">
            <a className="slow hover:underline" href="#CONTACTUS">
              CONTACT US
            </a>
          </li>
        </motion.ul>

        <AnimatePresence mode="popLayout">
          {show && (
            <motion.ul
              className={`${
                show
                  ? "slow lg:hidden p-20 absolute grid gap-10 w-full h-[500px] bg-[#0000ffee] text-center text-white"
                  : ""
              } slow justify-around top-0 border-b-2`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <a href="#"></a>
              <li className="slow hover:text-blue-800 text-lg">
                <a className="slow hover:underline" href="#">
                  HOME
                </a>
              </li>
              <li className="slow hover:text-blue-800 text-lg">
                <a className="slow hover:underline" href="#SERVICES">
                  SERVICES
                </a>
              </li>
              <li className="slow hover:text-blue-800 text-lg">
                <a className="slow hover:underline" href="#ABOUT">
                  ABOUT
                </a>
              </li>
              <li className="slow hover:text-blue-800 text-lg">
                <a className="slow hover:underline" href="#WHYUS">
                  WHY US?
                </a>
              </li>
              <li className="slow hover:text-blue-800 text-lg">
                <a className="slow hover:underline" href="#CONTACTUS">
                  CONTACT US
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="slow hidden lg:block shadow-md rounded-xl bg-blue-800 text-white p-2 hover:bg-orange-400">
          <a href="https://wa.me/+2349031832073">GET A SCHEDULE</a>
        </div>
      </div>
      <ScrollAniamtion />
    </div>
  );
}
