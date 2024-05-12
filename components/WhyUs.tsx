import Image from "next/image";
import React from "react";

export default function WhyUs() {
  return (
    <div id="WHYUS">
      <div className="lg:flex bg-gradient-to-br from-orange-500 to-orange-600 w-full rounded-xl p-3 lg:px-20 lg:py-14 text-white">
        <div className="grid gap-10 lg:w-72 h-fit mx-auto my-5 lg:my-auto lg:mx-0 text-center lg:text-start">
          <div className="grid gap-3">
            <div className="flex m-auto lg:m-0">
              <Image src="/icons/star.svg" alt="star" width={20} height={20} />
              <p className="mx-2 text-sm">EXCEPTIONAL SERVICE</p>
              <Image src="/icons/star.svg" alt="star" width={20} height={20} />
            </div>
            <p className="text-2xl md:text-4xl">Why We Are Best From Others</p>
          </div>

          <div className="slow m-auto lg:m-0 w-fit h-fit shadow-md rounded-xl border text-white p-2 hover:bg-blue-800 hover:border-blue-800">
            <a href="#">GET A SCHEDULE</a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-5">
          <div className="border lg:border-none rounded-lg p-2 grid lg:flex gap-3">
            <Image
              src="/icons/truck-fast.svg"
              alt="whyUs"
              height={100}
              width={80}
              className="p-3 bg-blue-800 rounded-lg h-14"
            />
            <div className="lg:w-72">
              <h1 className="font-bold text-lg text">Fast Delivery</h1>
              <p className=" font-thin">
                I cant thank Stada enough for saving my computer! Their team
                worked tirelessly to recover my files and fix the software.
              </p>
            </div>
          </div>
          <div className="border lg:border-none rounded-lg p-2 grid lg:flex gap-3 lg:ms-28">
            <Image
              src="/icons/computer.svg"
              alt="whyUs"
              height={100}
              width={80}
              className="p-3 bg-blue-800 rounded-lg h-14"
            />
            <div className="lg:w-72">
              <h1 className="font-bold text-lg text">Free Diagnotics</h1>
              <p className=" font-thin">
                I cant thank Stada enough for saving my computer! Their team
                worked tirelessly to recover my files and fix the software.
              </p>
            </div>
          </div>
          <div className="border lg:border-none rounded-lg p-2 grid lg:flex gap-3">
            <Image
              src="/icons/gear.svg"
              alt="whyUs"
              height={100}
              width={80}
              className="p-3 bg-blue-800 rounded-lg h-14"
            />
            <div className="lg:w-72">
              <h1 className="font-bold text-lg text">Quick Repair Process</h1>
              <p className=" font-thin">
                I cant thank Stada enough for saving my computer! Their team
                worked tirelessly to recover my files and fix the software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
