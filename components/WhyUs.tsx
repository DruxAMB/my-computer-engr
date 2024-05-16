import Image from "next/image";
import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";

export default function WhyUs() {
  return (
    <div id="WHYUS" className="relative">
      <div className="lg:flex w-full p-3 lg:px-20 lg:py-14 text-white">
        <div className="grid gap-10 lg:w-72 h-fit mx-auto my-5 lg:my-auto lg:mx-0 text-center lg:text-start">
          <div className="grid gap-3">
            <div className="flex m-auto lg:m-0">
              <Image src="/icons/star.svg" alt="star" width={20} height={20} />
              <p className="mx-2 text-sm">EXCEPTIONAL SERVICE</p>
              <Image src="/icons/star.svg" alt="star" width={20} height={20} />
            </div>
            <p className="text-2xl md:text-4xl">We Can Be Your Sure Plug</p>
          </div>

          <div className="slow m-auto lg:m-0 w-fit h-fit shadow-md rounded-xl border text-white p-2 hover:bg-blue-800 hover:border-blue-800">
            <a href="https://wa.me/+2349031832073">GET A SCHEDULE</a>
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
              <p>
                We offer less time as a repair can be done on the spot, or we
                pick your gadget at your office, fix it, and return within 24
                hours
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
              <h1 className="font-bold text-lg text">
                We Ensure Security and Privacy
              </h1>
              <p>
                We prioritize your data protection by ensuring no peeping or
                access to your personal data while we work on your gadget.{" "}
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
              <p>
                We repair all Apple products: Whether software or hardware,
                including iPhone, Macbook, iMac, iWatch, etc.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full rounded-xl h-full absolute -z-50 top-0 bg-gradient-to-br from-orange-500 to-orange-600">
        <BackgroundAnimation />
      </div>
    </div>
  );
}
