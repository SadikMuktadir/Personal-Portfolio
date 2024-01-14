const MyExperience = () => {
  return (
    <div className="mb-[150px]">
      <div className="mb-[130px]">
        <h1 className="text-[40px] lg:text-[64px] font-semibold text-center">
          My <span className="text-[#FD853A]">Work Experience</span>
        </h1>
      </div>
      <div className="w-[280px] lg:w-[500px] p-[20px] lg:p-[50px] bg-[#F2F4F7] rounded-[30px] mr-5">
        <p className="text-[20px] lg:text-[30px] font-bold">Lead Heroes Bangladesh</p>
        <p className="text-[#FD853A] text-[15px] font-semibold lg:text-[20px]">
          Web Developer
        </p>
        <p className="text-[15px] lg:text-[20px] text-[#98A2B3] ">
          December 2023- Present
        </p>
        <div className="mt-2">
          <p className="font-bold">Main Responsibility :</p>
          <p>
            <ul style={{ listStyleType: "circle" }}>
              <li>Website design and development</li>
              <li>Fix website bug</li>
              <li>Development team management</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
