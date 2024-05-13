import Image from "next/image";
import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";

export default function Schedule() {
  return (
    <div className=" relative">
      <div className="w-full lg:h-[300px] p-3 text-white text-center flex items-center">
        <div>
          <h1 className="text-lg md:text-2xl lg:text-4xl my-4 w-5/6 lg:w-4/6 m-auto">
            We Repair, You Relax. Click Below and Lets Fix Your Devices!
          </h1>
          <div className="grid md:flex gap-2 my-3 w-4/6 lg:w-3/6 m-auto">
            <div className="flex gap-2 w-max items-center">
              <div className="bg-orange-400 rounded-full p-3">
                <Image
                  src="/icons/phone.svg"
                  alt="phone"
                  height={15}
                  width={15}
                />
              </div>
              <span className="text-orange-400 text-2xl">
                081-6012-2610
              </span>
            </div>
            <div className="hidden lg:block m-auto text-sm">OR</div>
            <div className="slow w-fit m-auto shadow-md rounded-xl bg-blue-800 text-white p-2 hover:bg-orange-400">
              <a href="https://wa.me/+2349031832073">GET A SCHEDULE</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full h-full rounded-xl absolute -z-50 top-0 bg-gradient-to-br from-blue-950 to-blue-900">
        <BackgroundAnimation />
      </div>
    </div>
  );
}
