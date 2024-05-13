
export default function Banner() {
  return (
    <div className="lg:flex">
      <div>
        <h1 className="text-5xl lg:text-7xl font-bold mb-5">
          Trusted <span className=" text-blue-800"> Computer </span> &{" "}
          <span className=" text-blue-800"> Smartphone </span> Repair Expert!
        </h1>
        <p className="my-5">
          We offer on demand repair service. To save you stress, we can come to your office to do the repair or pick your gadget up at your location.
        </p>

        <div className="slow border rounded-xl bg-blue-800 hover:bg-orange-400 text-white p-2 w-fit">
          <a href="https://wa.me/+2349031832073">GET A SCHEDULE</a>
        </div>
      </div>
      <div className="slow border-4 border-orange-400 rounded-br-[100px] hover:rounded-l-[300px] my-3 w-full h-[400px] overflow-hidden">
        <img src="/images/man-repairing.png" alt="person" className="h-full w-full" />
      </div>
    </div>
  );
}
