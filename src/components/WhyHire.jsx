import { Link } from "react-router-dom";

const WhyHire = () => {
  return (
    <div className="bg-[#F2F4F7] px-[30px] py-[100px] flex">
      <div className="mr-[50px] flex items-center">
        <img src="https://i.ibb.co/kgbwq8G/output-onlinegiftools.gif" alt="" />
      </div>
      <div className="w-[700px]">
        <p className="mb-[40px] text-[64px] font-bold">
          Why <span className="text-[#FD853A]">Hire me</span>?
        </p>
        <p className="text-[20px] font-sm mb-[50px]">
          {" "}
          I have been involved in the IT sector since 2022. I work for crafting
          seamless, dynamic web applications and pushing the boundaries of
          innovation. I am passionate and always ready for learning new
          technology and creating exciting projects.I Use MongoDB, Express JS,
          React JS And Node JS for creating full stack web applications.
        </p>
        <div>
          <p className="text-[36px] font-semibold">10+</p>
          <p className="text-[#667085] text-[20px]">Project Completed</p>
          <Link to="/contact">
            <div
              className="mt-[40px] text-[#171717] hover:text-white bg-white hover:bg-[#FD853A] w-[250px] rounded-[35px] px-[60px] py-[30px]"
              style={{ border: "1px solid #171717", padding: "13px 25px" }}
            >
              <h1 className="text-[20px] text-center font-semibold">
                Contact Me
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyHire;
