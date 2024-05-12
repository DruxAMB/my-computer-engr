import Image from "next/image";
import React from "react";

export default function ContactUs() {
  return (
    <div id="CONTACTUS" className="grid lg:grid-cols-2 grid-flow-row gap-5 my-5">
      <div className="slow border-4 border-orange-400 rounded-br-[100px] hover:rounded-t-[300px] m-auto w-full h-[450px] overflow-hidden">
        <img
          src="/images/about-person.png"
          alt="person"
          width={100}
          height={100}
          className="h-full w-full"
        />
      </div>

      <div className="grid gap-4 md:gap-8 h-fit">
        <div className="flex h-fit">
          <Image src="/icons/star.svg" alt="star" width={20} height={20} />
          <p className="mx-2 text-orange-400 text-sm">BOOK A SCHEDULE</p>
          <Image src="/icons/star.svg" alt="star" width={20} height={20} />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold lg:w-[500px]">
          Schedule Expert Repairs Instantly
        </h1>
        <div className="grid grid-cols-4 gap-2 w-full md:w-fit">
          <div className="items-center">
            <Image
              src="/icons/repair.svg"
              alt="about"
              height={50}
              width={50}
              className="slow p-2 rounded-lg bg-blue-800"
            />
          </div>
          <div className="items-center">
            <Image
              src="/icons/users-gear.svg"
              alt="about"
              height={50}
              width={50}
              className="slow p-2 rounded-lg bg-orange-400"
            />
          </div>
          <div className="items-center">
            <Image
              src="/icons/gear.svg"
              alt="about"
              height={50}
              width={50}
              className="slow p-2 rounded-lg bg-orange-400"
            />
          </div>
          <div className="items-center">
            <Image
              src="/icons/rating.svg"
              alt="about"
              height={50}
              width={50}
              className="slow p-2 rounded-lg bg-blue-800"
            />
          </div>
        </div>
        <div className="flex gap-2 w-full md:w-fit items-center rounded-full bg-blue-200 p-5">
          <div className="bg-orange-400 rounded-full p-3">
            <Image src="/icons/phone.svg" alt="phone" height={20} width={20} />
          </div>
          <div>
            <p className="text-orange-400">Urgent Support?</p>
            <p><a href="tel:+2348160122610">081-6012-2610</a></p>
          </div>
        </div>

        <div className="slow w-fit shadow-md rounded-xl bg-blue-800 text-white p-2 md:p-5 hover:bg-orange-400">
          <a href="#">BOOK NOW</a>
        </div>
      </div>
    </div>
  );
}
