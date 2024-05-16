import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div id="ABOUT" className="grid lg:grid-cols-2 grid-flow-row gap-5">
      <div className="slow border-4 border-orange-400 rounded-tl-[100px] hover:rounded-r-[300px] m-auto w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
        <img
          src="/images/about-person.png"
          alt="person"
          width={100}
          height={100}
          className="h-full w-full"
        />
      </div>
      
      <div className="grid gap-5">
        <div className="flex">
          <Image src="/icons/star.svg" alt="star" width={20} height={20} />
          <p className="mx-2 text-orange-400 text-sm">ABOUT US</p>
          <Image src="/icons/star.svg" alt="star" width={20} height={20} />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold lg:w-[500px]">
          SAFETY IS HERE
        </h1>
        <p>
          Free checkup <br />
          Genuine, warrantied replacement parts <br />
          Fast, efficient repair <br />
          Ensured data privacy
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-2 items-center">
            <Image
              src="/icons/repair.svg"
              alt="about"
              height={50}
              width={50}
              className="slow p-2 rounded-lg bg-blue-100 hover:bg-blue-800"
            />
            <p>Expert Technicians</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/icons/users-gear.svg"
              alt="about"
              height={50}
              width={50}
              className="slow p-2 rounded-lg bg-orange-100 hover:bg-orange-400"
            />
            <p>Quality Repair</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/icons/gear.svg"
              alt="about"
              height={50}
              width={50}
              className="slow p-2 rounded-lg bg-orange-100 hover:bg-orange-400"
            />
            <p>Quick Turnaround</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/icons/rating.svg"
              alt="about"
              height={50}
              width={50}
              className="slow p-2 rounded-lg bg-blue-100 hover:bg-blue-800"
            />
            <p>Good Ratings</p>
          </div>
        </div>
        <p>
          We perform thorough quality checks before laptops and smartphones are returned.
          Fast, efficient repairs to minimize downtime. Swift mobile service, facilitated with bikes for quick delivery of repair services to your office or home. Please <span className=" font-bold"><a href="https://wa.me/+2349031832073"> GET A SCHEDULE</a></span> today to learn more, thank you :)....
        </p>
      </div>
    </div>
  );
}
