
export default function Banner() {
  return (
    <div className="lg:flex bg-gradient-to-br">
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
      <div className="slow border-4 border-orange-400 rounded-br-[100px] hover:rounded-l-[300px] my-3 w-full h-[400px] overflow-hidden">
        <img src="/images/man-repairing.png" alt="person" className="h-full w-full" />
      </div>
    </div>
  );
}
