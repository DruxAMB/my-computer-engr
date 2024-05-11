import Image from "next/image";

export default function Banner() {
  return (
    <div className="my-10 lg:flex bg-gradient-to-br">
      <div>
        <h1 className="text-5xl lg:text-7xl font-bold mb-5">
          Trusted <span className=" text-blue-800"> Computer </span> &{" "}
          <span className=" text-blue-800"> Laptop </span> Repair Experts!
        </h1>
        <p className="my-5">
          Our skilled technicians are dedicated to restoring your devices to
          their optimal functionality, ensuring you stay connected in todays
          fast-paced digital world.
        </p>

        <div className="slow border rounded-xl bg-blue-800 hover:bg-orange-400 text-white p-2 w-fit">
          <a href="#">GET A SCHEDULE</a>
        </div>
      </div>
      <div className="border-4 border-orange-400 rounded-br-[100px] bg-blue-800 my-3 w-full h-[400px] overflow-hidden">
        <Image src="/images/man-repairing.jfif" alt="person" width={100} height={100} quality={100} className="h-full w-full" />
      </div>
    </div>
  );
}
