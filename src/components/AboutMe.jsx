import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <div>
      <div data-aos="zoom-in" className="mb-[80px]">
        <h1 className="text-[40px] lg:text-[64px] font-semibold text-center">
          About <span className="text-[#FD853A]">Me</span>
        </h1>
      </div>
      <div data-aos="zoom-in" className="mx-auto w-[280px] lg:w-[500px]">
        <p className="text-[15px] lg:text-[20px]">
          I Use MongoDB, Express JS, React JS And Node JS for creating full
          stack web applications. I have been involved in the IT sector since
          2022. I work for crafting seamless, dynamic web applications and
          pushing the boundaries of innovation. I am passionate and always ready
          for learning new technology and creating exciting projects
        </p>
      </div>
      <div data-aos="zoom-in" className="my-[80px]">
        <h1 className="text-[40px] lg:text-[64px] font-semibold text-center">
          My <span className="text-[#FD853A]">Education</span>
        </h1>
      </div>
      <div data-aos="zoom-in" className="pl-5 lg:pl-0 flex flex-col lg:flex-row justify-between">
        <div className="w-[280px] lg:w-[500px] p-[20px] lg:p-[50px] bg-[#F2F4F7] rounded-[30px] mr-5">
          <p className="text-[20px] lg:text-[30px] font-bold">
            Rajshahi University Of Engineering And Technology{" "}
            <span className="text-[#FD853A]">(RUET)</span>
          </p>
          <p className="my-4 text-[15px] lg:text-[20px] text-[#98A2B3]">
            {" "}
            March 2022 - Present
          </p>
          <p className="text-[15px] lg:text-[20px] text-[#98A2B3] font-semibold">
            {" "}
            B.Sc. in Civil Engineering (L2-T2)
          </p>
        </div>
        <div className="my-5 lg:my-0 w-[280px] lg:w-[500px] rounded-[30px] p-[20px] lg:p-[50px] bg-[#F2F4F7] mr-5">
          <p className="text-[20px] lg:text-[30px] font-bold">
            <span className="text-[#FD853A]">Naogaon</span> Govt. College
          </p>
          <p className="my-4 text-[15px] lg:text-[20px] text-[#98A2B3]"> HSC 2020</p>
          <p className="text-[15px] lg:text-[20px] text-[#98A2B3] font-semibold">
            {" "}
            GPA 5.0 out of 5.0
          </p>
        </div>
        <div className="w-[280px] lg:w-[500px] rounded-[30px] p-[20px] lg:p-[50px] bg-[#F2F4F7]">
          <p className="text-[20px] lg:text-[30px] font-bold">
            <span className="text-[#FD853A]">Naogaon</span> KD Govt. High School
          </p>
          <p className="my-4 text-[15px] lg:text-[20px] text-[#98A2B3]"> SSC 2018</p>
          <p className="text-[15px] lg:text-[20px] text-[#98A2B3] font-semibold">
            {" "}
            GPA 5.0 out of 5.0
          </p>
        </div>
      </div>
      <div data-aos="zoom-in" className="my-[80px]">
        <h1 className="text-[40px] lg:text-[64px] font-semibold text-center">
          <span className="text-[#FD853A]">Course</span>
        </h1>
      </div>
      <div className="pl-5 lg:pl-0">
      <div className="w-[280px] lg:w-[500px] rounded-[30px] p-[20px] lg:p-[50px] bg-[#F2F4F7] mr-5">
        <p className="text-[20px] lg:text-[30px] font-bold">
          Complete <span className="text-[#FD853A]">Web Development</span>
        </p>
        <p className="my-4 text-[15px] lg:text-[20px] text-[#98A2B3]">
          June 2023 - December 2023
        </p>
        <p className="text-[15px] lg:text-[20px] text-[#98A2B3] font-semibold">
          {" "}
          @ Programming Hero
        </p>
        <div className="flex">
        <div className="mt-4">
          <p>Acquired training on building multiple websites like</p>
          <ul>
            <li>1. Blog website</li>
            <li>2. Movie website</li>
            <li>3. Donation campaign website</li>
            <li>3. Donation campaign website</li>
            <li>4. Course registration website</li>
            <li>5. Gym website</li>
            <li>6. Restaurant website and many more.....</li>
          </ul>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutMe;
