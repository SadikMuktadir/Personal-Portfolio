import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <div data-aos="zoom-in" className="mb-[100px]">
      <div className="mb-[80px]">
        <h1 className="text-[40px] lg:text-[64px] font-semibold text-center">
          My <span className="text-[#FD853A]">Skills</span>
        </h1>
      </div>
      <div className="ml-10 lg:ml-0 my-[50px]">
        <h1 className="text-[25px] lg:text-[40px] font-sm">
          <span className="text-[#FD853A]">Tools & Design</span> Skills
          Development Skills
        </h1>
      </div>
      <div className="ml-10 lg:ml-0 flex w-[30%]">
        <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
          <img
            className=" h-[100px] w-[50px]"
            src="vs-removebg-preview.png"
            alt=""
          />
          <p className="text-[12px] md:text-[15px]">VS Code</p>
        </div>
        <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
          <img
            className="h-[100px] w-[50px]"
            src="git-removebg-preview.png"
            alt=""
          />
          <p className="text-[12px] md:text-[15px]">GitHub</p>
        </div>
        <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
          <img
            className="h-[100px] w-[100px] lg:w-[200px]"
            src="figma-removebg-preview.png"
            alt=""
          />
          <p className="text-[12px] md:text-[15px] mt-4">Figma</p>
        </div>
        <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
          <img
            className="h-[100px] w-[100px] lg:w-[200px]"
            src="canva-removebg-preview.png"
            alt=""
          />
          <p className="text-[12px] md:text-[15px] mt-4">Canva</p>
        </div>
      </div>
      <div className="ml-10 lg:ml-0 my-[50px]">
        <h1 className="text-[25px] lg:text-[40px] font-sm">
          <span className="text-[#FD853A]">Development</span> Skills
        </h1>
      </div>
      <div className="ml-10 lg:ml-0 mt-[80px] flex">
        <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
          <img
            className="h-[100px] w-[100px] lg:w-[200px]"
            src="react-removebg-preview.png"
            alt=""
          />
          <p className="text-[12px] md:text-[15px] mt-4">React JS</p>
        </div>
        <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
          <img
            className="h-[100px] w-[100px] lg:w-[200px]"
            src="node-removebg-preview.png"
            alt=""
          />
          <p className="text-[12px] md:text-[15px] mt-4">Node JS</p>
        </div>
        <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
          <img
            className="h-[100px] w-[100px] lg:w-[200px]"
            src="png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-removebg-preview.png"
            alt=""
          />
          <p className="text-[12px] md:text-[15px] mt-4">Express JS</p>
        </div>
        <div className="h-[50px] w-[50px] lg:w-[100px] mr-3 lg:mr-8 flex flex-col justify-center items-center">
          <img
            className="h-[100px] w-[100px] lg:w-[200px]"
            src="mongo-removebg-preview.png"
            alt=""
          />
          <p className="text-[12px] md:text-[15px] mt-4">MongoDB JS</p>
        </div>
        <div className="h-[50px] w-[50px] lg:w-[100px] lg:mr-8 flex flex-col justify-center items-center">
          <img
            className="h-[100px] w-[100px] lg:w-[200px]"
            src="fire-removebg-preview.png"
            alt=""
          />
          <p className="text-[12px] md:text-[15px] mt-4">Firebase</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
