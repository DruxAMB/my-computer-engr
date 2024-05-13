import Image from "next/image";
import React from "react";
import Card from "./Card";

export default function SelectDevice() {
  return (
    <div id="SERVICES">
      <div className="flex justify-center">
        <Image src="/icons/star.svg" alt="star" width={20} height={20} />
        <p className="mx-2 text-orange-400 text-sm">OUR SERVICES</p>
        <Image src="/icons/star.svg" alt="star" width={20} height={20} />
      </div>
      <h1 className="text-center my-3 mx-auto text-2xl md:text-4xl font-bold lg:w-[500px]">
        Top-Quality Repair for Computer & Smartphones
      </h1>
      <Card />
    </div>
  );
}
