const Banner = () => {
  return (
    <div className="my-[100px]">
      <div className="text-center">
        <div
          className=" text-[#171717] hover:text-white bg-white hover:bg-[#FD853A] mb-3 w-[105px] mx-auto rounded-[35px]"
          style={{ border: "1px solid #171717", padding: "13px 25px" }}
        >
          <h1 className="text-[20px] font-semibold">Hello</h1>
        </div>
        <div>
          <p className="text-[95px] font-semibold">
            I am <span className="text-[#FD853A]">Sadik</span>,<br />
            <span className="text-[#FD853A]">Front-End</span> Web Developer
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center">
          <img
            className="w-[30px] h-[30px]"
            src="../../public/logo/quote-up.png"
            alt=""
          />
          <p className="my-2 w-[250px] text-[#344054] text-[20px] font-bold">
            I use MongoDB , Express JS , React JS and Node JS for creating
            Full-stack web application.
          </p>
        </div>
        <div className="w-[900px]">
          <img src="../../public/image/Untitled design.png" alt="" />
        </div>
        <div className="flex flex-col justify-center items-end">
          <img src="../../public/logo/Frame 4.png" alt="" />
          <p className="text-[#344054] text-[30px] font-bold my-2">6+ Months</p>
          <p className="text-[#344054] text-[20px] font-bold">Experince</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
