import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="slow bg-gradient-to-br from-blue-950 to-blue-900 text-white items-center justify-around p-20 px-3 md:px-5 lg:px-24 border-t-2 mt-5">
        <div className="lg:flex justify-between w-full">
          <div className="grid gap-2">
            <a href="#">
              <div className="w-fit mx-auto mb-5 lg:m-0 text-orange-400">
                <h1 className="text-2xl font-extrabold">myComputerENGR</h1>
                <p className="text-xs font-thin text-end">
                  Your trusted IT partner
                </p>
              </div>
            </a>
            <p className="font-thin w-96 text-sm">
              Our skilled technicians are dedicated to restoring your devices to
              their optimal functionality.
            </p>
          </div>
          <div className="flex gap-2 my-10 lg:m-0">
            <Image
              src="/icons/location.svg"
              alt="location"
              width={40}
              height={40}
              className="p-3 w-14  h-14 bg-[#ffffff34] slow rounded-full hover:bg-white"
            />
            <div>
              <p>Location:</p>
              <p className="text-sm font-normal mt-2">
                rainbow junction, arapaja odo ona kekere, Ibadan Nigeria
              </p>
            </div>
          </div>
          <div className="grid w-fit">
            <p>Follow us on:</p>
            <div className="flex gap-2">
              <a href="">
                <Image
                  src="/icons/instagram.svg"
                  alt="social"
                  height={30}
                  width={30}
                  className="p-2 bg-[#ffffff34] slow rounded-full hover:bg-orange-400"
                />
              </a>
              <a href="">
                <Image
                  src="/icons/instagram.svg"
                  alt="social"
                  height={30}
                  width={30}
                  className="p-2 bg-[#ffffff34] slow rounded-full hover:bg-orange-400"
                />
              </a>
              <a href="">
                <Image
                  src="/icons/instagram.svg"
                  alt="social"
                  height={30}
                  width={30}
                  className="p-2 bg-[#ffffff34] slow rounded-full hover:bg-orange-400"
                />
              </a>
              <a href="">
                <Image
                  src="/icons/instagram.svg"
                  alt="social"
                  height={30}
                  width={30}
                  className="p-2 bg-[#ffffff34] slow rounded-full hover:bg-orange-400"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border border-[#ffffff2e] mt-10"></div>
        <div className="mt-10 lg:flex gap-40">
          <div className="flex gap-2 mb-3 lg:m-0 w-full md:w-fit h-fit items-center rounded-full bg-[#ffffff34] p-5">
            <div className="bg-orange-400 rounded-full p-3">
              <Image
                src="/icons/phone.svg"
                alt="phone"
                height={20}
                width={20}
              />
            </div>
            <div>
              <p className="text-orange-400">Urgent Support?</p>
              <p>
                <a
                  href="tel:+2348160122610"
                  className="slow hover:text-orange-400 slow"
                >
                  081-6012-2610
                </a>
              </p>
            </div>
          </div>
          <div>
            <p className="text-lg">Quick Links</p>
            <ul className="my-4">
              <li>
                <a
                  href="#"
                  className="slow text-slate-200 hover:text-orange-400 font-thin text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#SERVICES"
                  className="slow text-slate-200 hover:text-orange-400 font-thin text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#ABOUTUS"
                  className="slow text-slate-200 hover:text-orange-400 font-thin text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#WHYUS"
                  className="slow text-slate-200 hover:text-orange-400 font-thin text-sm"
                >
                  Why Us
                </a>
              </li>
              <li>
                <a
                  href="#CONTACTUS"
                  className="slow text-slate-200 hover:text-orange-400 font-thin text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://druxamb.github.io/DruxAMB-Portfolio/"
                  className="slow text-slate-200 hover:text-orange-400 font-thin text-sm"
                >
                  Developer
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-lg">Our Services</p>
            <ul className="my-4">
              <li>
                <a
                  href="#SERVICES"
                  className="slow text-slate-200 hover:text-orange-400 font-thin text-sm"
                >
                  Laptop Repair
                </a>
              </li>
              <li>
                <a
                  href="#SERVICES"
                  className="slow text-slate-200 hover:text-orange-400 font-thin text-sm"
                >
                  Computer Repair
                </a>
              </li>
              <li>
                <a
                  href="#SERVICES"
                  className="slow text-slate-200 hover:text-orange-400 font-thin text-sm"
                >
                  Data Recovery
                </a>
              </li>
              <li>
                <a
                  href="#SERVICES"
                  className="slow text-slate-200 hover:text-orange-400 font-thin text-sm"
                >
                  Software Installation
                </a>
              </li>
              <li>
                <a
                  href="#SERVICES"
                  className="slow text-slate-200 hover:text-orange-400 font-thin text-sm"
                >
                  Phone Repair
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" items-center bg-slate-900 p-3 w-full">
        <p className="text-center text-sm text-white">
          &copy; myComputerENGR. All Rights Reserved by{" "}
          <span className="text-orange-400">
            <a
              className="slow hover:underline hover:text-blue-800"
              href="https://druxamb.github.io/DruxAMB-Portfolio/"
            >
              Dev DruxAMB
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
