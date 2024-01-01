const MyExperience = () => {
  return (
    <div className="mb-[150px]">
      <div className="mb-[130px]">
        <h1 className="text-[40px] lg:text-[64px] font-semibold text-center">
          My <span className="text-[#FD853A]">Work Experience</span>
        </h1>
      </div>
      <div className="flex justify-between">
        <div>
        <p className="text-[30px] lg:text-[40px] font-bold mb-2">Fiverr</p>
        <p className="text-[15px] lg:text-[20px] text-[#98A2B3] font-sm">November 2023- Present</p>
        </div>
        <div>
            <p className="w-[20px] h-[20px] my-5 lg:my-[0] lg:w-[30px] lg:h-[30px] rounded-[48px] bg-[#FD853A]"></p>
        </div>
        <div className="flex flex-col">
        <p className="text-[30px] lg:text-[40px] font-bold mb-2">Web Developer</p>
        <div className="w-[200px] lg:w-[440px]">
        <p className="text-[15px] lg:text-[20px] text-[#98A2B3] w-[200px] lg:w-[440px]">Dedicated and detail-oriented designer with so many works and experience. I have a clear, logical mind with a practical approach to problem-solving and a drive to see things through to completion.</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
