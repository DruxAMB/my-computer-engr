import React from "react";

export default function Card() {
  return (
    <div className="grid gap-5 grid-flow-row md:grid-cols-2 lg:grid-cols-3 my-10">
      <div className="slow hover:bg-orange-50 cursor-pointer hover:mb-5 grid gap-3 border border-orange-200 hover:border-orange-400 rounded-xl p-3 shadow-lg">
        <p className="text-xl">Computer Repair</p>
        <img
          src="/images/selecet-device-1.webp"
          alt="repair"
          height={100}
          width={100}
          className="w-full"
        />
        <p className="font-thin">
          We prioritize your data protection, ensuring all repairs are conducted with the utmost security and privacy
        </p>

        <div className="slow border rounded-xl bg-blue-800 hover:bg-orange-400 text-white p-2 w-fit">
          <a href="https://wa.me/+2349031832073">REPAIR NOW</a>
        </div>
      </div>
      <div className="slow hover:bg-orange-50 cursor-pointer hover:mb-5 grid gap-3 border border-orange-200 hover:border-orange-400 rounded-xl p-3 shadow-lg">
        <p className="text-xl">SmarPhones Repair</p>
        <img
          src="/images/selecet-device-2.webp"
          alt="repair"
          height={100}
          width={100}
          className="w-full"
        />
        <p className="font-thin">
          Our technicians are highly skilled and stay up-to-date with the latest
          technologies to provide you with the best solutions.
        </p>

        <div className="slow border rounded-xl bg-blue-800 hover:bg-orange-400 text-white p-2 w-fit">
          <a href="https://wa.me/+2349031832073">REPAIR NOW</a>
        </div>
      </div>
      <div className="slow hover:bg-orange-50 cursor-pointer hover:mb-5 grid gap-3 border border-orange-200 hover:border-orange-400 rounded-xl p-3 shadow-lg">
        <p className="text-xl">Laptop Repair</p>
        <img
          src="/images/selecet-device-1.webp"
          alt="repair"
          height={100}
          width={100}
          className="w-full"
        />
        <p className="font-thin">
          Fast repair requiring additional attention, a guaranteed 24-hour turnaround ensures devices are returned promptly
        </p>

        <div className="slow border rounded-xl bg-blue-800 hover:bg-orange-400 text-white p-2 w-fit">
          <a href="https://wa.me/+2349031832073">REPAIR NOW</a>
        </div>
      </div>
    </div>
  );
}
